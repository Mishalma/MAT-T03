

import React, { useState } from 'react';
import { TransportRequest } from '../types';

interface RequestTransportFormProps {
    onSubmit: (request: Omit<TransportRequest, 'id' | 'status' | 'requestTime' | 'assignedPorterId'>) => void;
}

const formInputStyle = "mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500";


const RequestTransportForm: React.FC<RequestTransportFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        patientName: '',
        from: '',
        to: '',
        priority: 'Standard' as 'Urgent' | 'Standard',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="patientName" className="block text-sm font-medium text-gray-300">Patient Name</label>
                <input type="text" name="patientName" id="patientName" required value={formData.patientName} onChange={handleChange} className={formInputStyle}/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div>
                    <label htmlFor="from" className="block text-sm font-medium text-gray-300">From (Location)</label>
                    <input type="text" name="from" id="from" required value={formData.from} onChange={handleChange} className={formInputStyle}/>
                </div>
                <div>
                    <label htmlFor="to" className="block text-sm font-medium text-gray-300">To (Location)</label>
                    <input type="text" name="to" id="to" required value={formData.to} onChange={handleChange} className={formInputStyle}/>
                </div>
            </div>
            <div>
                <label htmlFor="priority" className="block text-sm font-medium text-gray-300">Priority</label>
                <select name="priority" id="priority" value={formData.priority} onChange={(e) => setFormData(prev => ({...prev, priority: e.target.value as 'Urgent' | 'Standard'}))} className={formInputStyle}>
                    <option>Standard</option>
                    <option>Urgent</option>
                </select>
            </div>
            <div className="flex justify-end pt-4">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Submit Request
                </button>
            </div>
        </form>
    );
};

export default RequestTransportForm;