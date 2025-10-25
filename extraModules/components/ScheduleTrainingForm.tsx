
import React, { useState } from 'react';
import { TrainingSession } from '../types';

interface ScheduleTrainingFormProps {
    onSubmit: (session: Omit<TrainingSession, 'id'>) => void;
}

const formInputStyle = "mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500";


const ScheduleTrainingForm: React.FC<ScheduleTrainingFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<Omit<TrainingSession, 'id'>>({
        title: '',
        date: new Date().toISOString().split('T')[0],
        attendees: [],
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
            <input type="text" name="title" placeholder="Training Title" value={formData.title} onChange={handleChange} required className={formInputStyle}/>
            <div>
                <label className="text-sm font-medium text-gray-300">Date</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} required className={formInputStyle}/>
            </div>
            {/* A real app would have a multi-select for attendees */}
            <p className="text-sm text-gray-400">Attendee selection would be here in a full application.</p>
            <div className="flex justify-end pt-4">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">Schedule</button>
            </div>
        </form>
    );
};

export default ScheduleTrainingForm;