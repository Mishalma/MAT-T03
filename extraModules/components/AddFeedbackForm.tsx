


import React, { useState } from 'react';
import { Feedback, FeedbackType } from '../types';

interface AddFeedbackFormProps {
    onSubmit: (feedbackData: Omit<Feedback, 'id' | 'date' | 'sentiment' | 'status'>) => Promise<boolean>;
    onCancel: () => void;
}

const formInputStyle = "mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500";


const AddFeedbackForm: React.FC<AddFeedbackFormProps> = ({ onSubmit, onCancel }) => {
    const [formData, setFormData] = useState({
        patientName: '',
        type: FeedbackType.General,
        description: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value as any }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await onSubmit(formData);
        setIsSubmitting(false);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="patientName" className="block text-sm font-medium text-gray-300">Patient Name</label>
                <input type="text" name="patientName" id="patientName" required value={formData.patientName} onChange={handleChange} className={formInputStyle} />
            </div>
            <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-300">Feedback Type</label>
                <select name="type" id="type" required value={formData.type} onChange={handleChange} className={formInputStyle}>
                    
                    {/* FIX: Cast enum value to string for key prop */}
                    {Object.values(FeedbackType).map(t => <option key={t as string} value={t}>{t}</option>)}
                </select>
            </div>
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-300">Feedback Details</label>
                <textarea name="description" id="description" rows={5} required value={formData.description} onChange={handleChange} className={formInputStyle}></textarea>
                <p className="mt-1 text-xs text-gray-400">Please be as detailed as possible. This will be analyzed for sentiment.</p>
            </div>
            <div className="flex justify-end items-center gap-4 pt-4">
                <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-600 text-gray-100 font-semibold rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2">
                    Cancel
                </button>
                <button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-500">
                    {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                </button>
            </div>
        </form>
    );
};

export default AddFeedbackForm;