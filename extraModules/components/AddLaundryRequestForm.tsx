
import React, { useState } from 'react';
import { LaundryRequest } from '../types';

interface AddLaundryRequestFormProps {
    onSubmit: (request: Omit<LaundryRequest, 'id'>) => void;
}

const formInputStyle = "mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500";


const AddLaundryRequestForm: React.FC<AddLaundryRequestFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<Omit<LaundryRequest, 'id'>>({
        department: '',
        item: 'Bed Linens',
        quantity: 10,
        requestDate: new Date().toISOString().split('T')[0],
        status: 'Pending',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'number' ? parseInt(value) : value as any }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} required className={formInputStyle}/>
            <select name="item" value={formData.item} onChange={handleChange} className={formInputStyle}>
                <option>Bed Linens</option>
                <option>Gowns</option>
                <option>Towels</option>
                <option>Scrubs</option>
            </select>
            <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} required min="1" className={formInputStyle}/>
            <div className="flex justify-end pt-4">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">Submit Request</button>
            </div>
        </form>
    );
};

export default AddLaundryRequestForm;