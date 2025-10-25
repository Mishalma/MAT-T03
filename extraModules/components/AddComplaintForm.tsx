

import React, { useState } from 'react';
import { Complaint } from '../types';

interface AddComplaintFormProps {
    onSubmit: (complaint: Omit<Complaint, 'id'>) => void;
}

const formInputStyle = "mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500";


const AddComplaintForm: React.FC<AddComplaintFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<Omit<Complaint, 'id'>>({
        complainant: '',
        department: '',
        description: '',
        date: new Date().toLocaleDateString(),
        status: 'New',
        priority: 'Medium',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value as any }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="complainant" placeholder="Your Name" value={formData.complainant} onChange={handleChange} required className={formInputStyle}/>
            <input type="text" name="department" placeholder="Department (e.g., Billing, ER)" value={formData.department} onChange={handleChange} required className={formInputStyle}/>
            <textarea name="description" rows={4} placeholder="Describe the issue" value={formData.description} onChange={handleChange} required className={formInputStyle}/>
            <select name="priority" value={formData.priority} onChange={handleChange} className={formInputStyle}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            <div className="flex justify-end pt-4">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">Submit Complaint</button>
            </div>
        </form>
    );
};

export default AddComplaintForm;