
import React, { useState } from 'react';
import { PerformanceReview } from '../types';

interface StartReviewFormProps {
    onSubmit: (review: Omit<PerformanceReview, 'id' | 'status' | 'summary'>) => void;
}

const formInputStyle = "mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500";


const StartReviewForm: React.FC<StartReviewFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<Omit<PerformanceReview, 'id' | 'status' | 'summary'>>({
        employeeId: '',
        employeeName: '',
        reviewDate: new Date().toISOString().split('T')[0],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="employeeId" placeholder="Employee ID" value={formData.employeeId} onChange={handleChange} required className={formInputStyle}/>
            <input type="text" name="employeeName" placeholder="Employee Name" value={formData.employeeName} onChange={handleChange} required className={formInputStyle}/>
            <div>
                <label className="text-sm font-medium text-gray-300">Review Date</label>
                <input type="date" name="reviewDate" value={formData.reviewDate} onChange={handleChange} required className={formInputStyle}/>
            </div>
            <div className="flex justify-end pt-4">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">Start Review</button>
            </div>
        </form>
    );
};

export default StartReviewForm;