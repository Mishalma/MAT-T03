

import React, { useState } from 'react';
import { Equipment, WorkOrder, BreakdownAnalysis } from '../types';

interface ReportBreakdownFormProps {
    equipment: Equipment;
    onSubmit: (workOrder: Omit<WorkOrder, 'id' | 'reportedDate' | 'status'>) => void;
    onAnalyze: (description: string) => Promise<BreakdownAnalysis | null>;
}

const formInputStyle = "mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500";


const ReportBreakdownForm: React.FC<ReportBreakdownFormProps> = ({ equipment, onSubmit, onAnalyze }) => {
    const [issue, setIssue] = useState('');
    const [priority, setPriority] = useState<'High' | 'Medium' | 'Low'>('Medium');
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const handleAnalyze = async () => {
        if (!issue) {
            alert('Please describe the issue first.');
            return;
        }
        setIsAnalyzing(true);
        const result = await onAnalyze(issue);
        if (result) {
            setPriority(result.priority);
            setIssue(prev => prev.includes("AI Summary:") ? prev.replace(/AI Summary:.*/, `AI Summary: ${result.summary}`) : `${prev}\n\nAI Summary: ${result.summary}`);
        } else {
            alert('AI analysis failed. Please set priority manually.');
        }
        setIsAnalyzing(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            equipmentId: equipment.id,
            equipmentName: equipment.name,
            issue,
            priority,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="issue" className="block text-sm font-medium text-gray-300">Issue Description</label>
                <textarea 
                    name="issue" 
                    id="issue" 
                    rows={5} 
                    required 
                    value={issue} 
                    onChange={(e) => setIssue(e.target.value)} 
                    className={formInputStyle}
                ></textarea>
            </div>
            <div>
                <label htmlFor="priority" className="block text-sm font-medium text-gray-300">Priority</label>
                <select 
                    name="priority" 
                    id="priority" 
                    value={priority} 
                    onChange={(e) => setPriority(e.target.value as 'High' | 'Medium' | 'Low')} 
                    className={formInputStyle}
                >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
            </div>
            <div className="flex justify-between items-center pt-4">
                <button 
                    type="button" 
                    onClick={handleAnalyze}
                    disabled={isAnalyzing}
                    className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-gray-500"
                >
                    {isAnalyzing ? 'Analyzing...' : 'Analyze with AI'}
                </button>
                <button type="submit" className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                    Create Work Order
                </button>
            </div>
        </form>
    );
};

export default ReportBreakdownForm;