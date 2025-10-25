


import React, { useState } from 'react';
import { Feedback } from '../types';
import FeedbackList from './FeedbackList';
import Modal from './Modal';
import AddFeedbackForm from './AddFeedbackForm';
// FIX: Corrected import path for icons.
import { PlusIcon } from './icons';

interface FeedbackModalProps {
    feedback: Feedback[];
    onAddFeedback: (feedbackData: Omit<Feedback, 'id' | 'date' | 'sentiment' | 'status'>) => Promise<boolean>;
}

const FeedbackDashboard: React.FC<FeedbackModalProps> = ({ feedback, onAddFeedback }) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleSubmitFeedback = async (feedbackData: Omit<Feedback, 'id' | 'date' | 'sentiment' | 'status'>) => {
        const success = await onAddFeedback(feedbackData);
        if (success) {
            setIsAddModalOpen(false);
        } else {
            alert('Failed to submit feedback. Please try again.');
        }
        return success;
    };
    
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-100">Patient Feedback</h2>
                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                    <PlusIcon className="w-5 h-5" />
                    <span>Add Feedback</span>
                </button>
            </div>
            
            <FeedbackList feedback={feedback} />

            <Modal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                title="Submit Patient Feedback"
            >
                <AddFeedbackForm 
                    onSubmit={handleSubmitFeedback}
                    onCancel={() => setIsAddModalOpen(false)}
                />
            </Modal>
        </div>
    );
};

export default FeedbackDashboard;