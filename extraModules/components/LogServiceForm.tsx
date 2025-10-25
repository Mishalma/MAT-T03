

import React, { useState } from 'react';
import { Equipment, ServiceLog } from '../types';

interface LogServiceFormProps {
    equipment: Equipment;
    onSubmit: (equipmentId: string, log: Omit<ServiceLog, 'date'>) => void;
}

const formInputStyle = "mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500";


const LogServiceForm: React.FC<LogServiceFormProps> = ({ equipment, onSubmit }) => {
    const [formData, setFormData] = useState({
        type: 'Scheduled' as 'Scheduled' | 'Breakdown',
        notes: '',
        performedBy: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!formData.notes || !formData.performedBy) {
            alert("Please fill out all fields.");
            return;
        }
        onSubmit(equipment.id, formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-300">Service Type</label>
                <select name="type" id="type" value={formData.type} onChange={handleChange} className={formInputStyle}>
                    <option>Scheduled</option>
                    <option>Breakdown</option>
                </select>
            </div>
             <div>
                <label htmlFor="performedBy" className="block text-sm font-medium text-gray-300">Performed By</label>
                <input type="text" name="performedBy" id="performedBy" required value={formData.performedBy} onChange={handleChange} className={formInputStyle}/>
            </div>
            <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-300">Service Notes</label>
                <textarea name="notes" id="notes" rows={4} required value={formData.notes} onChange={handleChange} className={formInputStyle}></textarea>
            </div>
            <div className="flex justify-end pt-4">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Log Service
                </button>
            </div>
        </form>
    );
};

export default LogServiceForm;