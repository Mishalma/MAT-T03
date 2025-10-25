

import React, { useState } from 'react';
import { WasteCollection } from '../types';

interface AddWasteCollectionFormProps {
    onSubmit: (collection: Omit<WasteCollection, 'id'>) => void;
}

const formInputStyle = "mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500";


const AddWasteCollectionForm: React.FC<AddWasteCollectionFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<Omit<WasteCollection, 'id'>>({
        type: 'General',
        location: '',
        collectionDate: new Date().toISOString().split('T')[0],
        weightKg: 0,
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
             <select name="type" value={formData.type} onChange={handleChange} className={formInputStyle}>
                <option>General</option>
                <option>Biohazard</option>
                <option>Sharps</option>
            </select>
            <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required className={formInputStyle}/>
            <input type="number" step="0.1" name="weightKg" placeholder="Weight (kg)" value={formData.weightKg} onChange={handleChange} required className={formInputStyle}/>
            <input type="date" name="collectionDate" value={formData.collectionDate} onChange={handleChange} required className={formInputStyle}/>
            <div className="flex justify-end pt-4">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">Log Collection</button>
            </div>
        </form>
    );
};

export default AddWasteCollectionForm;