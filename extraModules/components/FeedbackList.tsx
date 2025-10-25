

import React from 'react';
import { Feedback, FeedbackSentiment, FeedbackStatus } from '../types';

interface FeedbackListProps {
    feedback: Feedback[];
}

const sentimentStyles = {
    [FeedbackSentiment.Positive]: 'bg-green-500/20 text-green-300 border-green-500/30',
    [FeedbackSentiment.Neutral]: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    [FeedbackSentiment.Negative]: 'bg-red-500/20 text-red-300 border-red-500/30',
};

const statusStyles = {
    [FeedbackStatus.Open]: 'bg-yellow-500/20 text-yellow-300',
    [FeedbackStatus.Acknowledged]: 'bg-sky-500/20 text-sky-300',
    [FeedbackStatus.Resolved]: 'bg-gray-500/20 text-gray-300',
};


const FeedbackList: React.FC<FeedbackListProps> = ({ feedback }) => {
    return (
        <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
            {feedback.length > 0 ? feedback.map(item => (
                <div key={item.id} className="p-4 bg-gray-800 rounded-lg border border-gray-700 shadow-sm">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="font-semibold text-gray-100">{item.patientName}</p>
                            <p className="text-sm text-gray-400">{item.type} on {item.date}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                             <span className={`px-2 py-1 text-xs font-medium rounded-md border ${sentimentStyles[item.sentiment]}`}>
                                {item.sentiment}
                            </span>
                        </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-300">{item.description}</p>
                    <div className="mt-3 flex justify-end items-center">
                         <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusStyles[item.status]}`}>
                            {item.status}
                        </span>
                    </div>
                </div>
            )) : (
                <div className="p-4 text-center text-gray-400">No feedback has been submitted yet.</div>
            )}
        </div>
    );
};

export default FeedbackList;