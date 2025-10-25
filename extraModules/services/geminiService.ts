




import { GoogleGenAI, Type } from "@google/genai";
import { FeedbackSentiment, BreakdownAnalysis } from "../types";

// The API key MUST be obtained exclusively from the environment variable process.env.API_KEY.
const apiKey = process.env.API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
    ai = new GoogleGenAI({ apiKey });
} else {
    // In a real app, you might want to show a user-friendly message or disable AI features.
    // For this project, we'll throw an error during development if the key is missing.
    console.error("API_KEY environment variable not set. AI features will be disabled.");
}

export async function analyzeBreakdownDescription(description: string): Promise<BreakdownAnalysis | null> {
    if (!ai) return null;
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Analyze the following equipment breakdown description and determine its priority and a brief summary.
            Description: "${description}"
            
            Respond in JSON format with "priority" ('High', 'Medium', or 'Low') and "summary" (a 1-2 sentence summary).
            - High priority: Critical failure, safety risk, major operational impact.
            - Medium priority: Significant disruption, needs timely repair.
            - Low priority: Minor issue, non-critical function.`,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        priority: { 
                            type: Type.STRING,
                            enum: ['High', 'Medium', 'Low'],
                        },
                        summary: { type: Type.STRING },
                    },
                    required: ['priority', 'summary']
                },
            },
        });
        
        const jsonText = response.text.trim();
        const result = JSON.parse(jsonText);
        
        if (result && result.priority && result.summary) {
            return result as BreakdownAnalysis;
        }
        return null;

    } catch (error) {
        console.error("Error analyzing breakdown:", error);
        return null;
    }
}

export async function analyzeFeedbackSentiment(description: string): Promise<FeedbackSentiment | null> {
    if (!ai) return FeedbackSentiment.Neutral; // Default if AI is not available
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Analyze the sentiment of the following feedback. Respond in JSON format with a single key "sentiment" which can be 'Positive', 'Neutral', or 'Negative'.
            Feedback: "${description}"`,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        sentiment: {
                            type: Type.STRING,
                            enum: ['Positive', 'Neutral', 'Negative'],
                        },
                    },
                    required: ['sentiment']
                },
            },
        });
        
        const jsonText = response.text.trim();
        const result = JSON.parse(jsonText);

        if (result && result.sentiment && Object.values(FeedbackSentiment).includes(result.sentiment)) {
            return result.sentiment as FeedbackSentiment;
        }
        return FeedbackSentiment.Neutral;

    } catch (error) {
        console.error("Error analyzing feedback sentiment:", error);
        return null;
    }
}


export async function generateDischargeSummary(notes: string): Promise<string | null> {
    if (!ai) return "AI service is unavailable.";
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Based on the following doctor's notes, generate a concise and clear patient-facing discharge summary. Use simple language and organize it with clear headings (e.g., "Medications", "Follow-up", "Activity Restrictions").
            
            Notes: "${notes}"
            
            Summary:`,
             config: {
                temperature: 0.7,
             }
        });
        // FIX: Return the text from the response.
        return response.text;
    } catch (error) {
        console.error("Error generating discharge summary:", error);
        return null;
    }
}