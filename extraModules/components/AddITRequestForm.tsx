

import React, { useState } from 'react';
import { ITSupportTicket } from '../types';

interface AddITRequestFormProps {
    onSubmit: (ticket: Omit<ITSupportTicket, 'id'>) => void;
}
const formInputStyle = "mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500";


const AddITRequestForm: React.FC<AddITRequestFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<Omit<ITSupportTicket, 'id'>>({
        user: '',
        department: '',
        issue: '',
        priority: 'Medium',
        status: 'Open',
        date: new Date().toLocaleDateString(),
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
            <input type="text" name="user" placeholder="Your Name" value={formData.user} onChange={handleChange} required className={formInputStyle}/>
            <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} required className={formInputStyle}/>
            <textarea name="issue" rows={4} placeholder="Describe the IT issue" value={formData.issue} onChange={handleChange} required className={formInputStyle}/>
            <select name="priority" value={formData.priority} onChange={handleChange} className={formInputStyle}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Critical</option>
            </select>
            <div className="flex justify-end pt-4">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">Submit Ticket</button>
            </div>
        </form>
    );
};

export default AddITRequestForm;