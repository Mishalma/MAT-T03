
import React, { useState } from 'react';
import { Narcotic } from '../types';

interface AddNewNarcoticFormProps {
    onSubmit: (narcotic: Omit<Narcotic, 'id'>) => void;
}
const formInputStyle = "mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500";


const AddNewNarcoticForm: React.FC<AddNewNarcoticFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<Omit<Narcotic, 'id'>>({
        name: '',
        currentStock: 0,
        unit: 'mg',
        location: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'number' ? parseFloat(value) : value as any }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Narcotic Name" value={formData.name} onChange={handleChange} required className={formInputStyle}/>
            <input type="number" name="currentStock" placeholder="Initial Stock" value={formData.currentStock} onChange={handleChange} required min="0" className={formInputStyle}/>
            <select name="unit" value={formData.unit} onChange={handleChange} className={formInputStyle}>
                <option>mg</option>
                <option>ml</option>
                <option>patches</option>
            </select>
            <input type="text" name="location" placeholder="Storage Location" value={formData.location} onChange={handleChange} required className={formInputStyle}/>
            <div className="flex justify-end pt-4">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">Add Narcotic</button>
            </div>
        </form>
    );
};

export default AddNewNarcoticForm;