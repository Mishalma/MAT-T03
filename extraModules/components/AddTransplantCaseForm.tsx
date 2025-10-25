

import React, { useState } from 'react';
import { TransplantCase } from '../types';

interface AddTransplantCaseFormProps {
    onSubmit: (transplantCase: Omit<TransplantCase, 'id'>) => void;
}
const formInputStyle = "mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500";


const AddTransplantCaseForm: React.FC<AddTransplantCaseFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<Omit<TransplantCase, 'id'>>({
        patientName: '',
        organ: '',
        status: 'Pending',
        priority: 'Standard',
        matchDate: new Date().toISOString().split('T')[0],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value as any }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="patientName" placeholder="Patient Name" value={formData.patientName} onChange={handleChange} required className={formInputStyle}/>
            <input type="text" name="organ" placeholder="Organ (e.g., Kidney, Liver)" value={formData.organ} onChange={handleChange} required className={formInputStyle}/>
            <select name="priority" value={formData.priority} onChange={handleChange} className={formInputStyle}>
                <option>Standard</option>
                <option>Urgent</option>
            </select>
             <div>
                <label htmlFor="matchDate" className="block text-sm font-medium text-gray-300">Match Date</label>
                <input type="date" id="matchDate" name="matchDate" value={formData.matchDate} onChange={handleChange} required className={formInputStyle}/>
            </div>
            <div className="flex justify-end pt-4">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">Add Case</button>
            </div>
        </form>
    );
};

export default AddTransplantCaseForm;