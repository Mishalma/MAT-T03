

import React, { useState } from 'react';
import { HousekeepingTask } from '../types';

interface AddHousekeepingTaskFormProps {
    onSubmit: (task: Omit<HousekeepingTask, 'id'>) => void;
}

const formInputStyle = "mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500";


const AddHousekeepingTaskForm: React.FC<AddHousekeepingTaskFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<Omit<HousekeepingTask, 'id'>>({
        location: '',
        task: '',
        priority: 'Medium',
        status: 'Pending',
        assignedTo: '',
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
            <input type="text" name="location" placeholder="Location (e.g., Room 301)" value={formData.location} onChange={handleChange} required className={formInputStyle}/>
            <input type="text" name="task" placeholder="Task Description" value={formData.task} onChange={handleChange} required className={formInputStyle}/>
            <input type="text" name="assignedTo" placeholder="Assigned To" value={formData.assignedTo} onChange={handleChange} required className={formInputStyle}/>
            <select name="priority" value={formData.priority} onChange={handleChange} className={formInputStyle}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
            <div className="flex justify-end pt-4">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">Add Task</button>
            </div>
        </form>
    );
};

export default AddHousekeepingTaskForm;