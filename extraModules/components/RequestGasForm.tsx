


import React, { useState } from 'react';
import { GasRequest, GasType } from '../types';

interface RequestGasFormProps {
    onSubmit: (request: Omit<GasRequest, 'id' | 'requestDate' | 'status'>) => void;
}

const formInputStyle = "mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500";


const RequestGasForm: React.FC<RequestGasFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        department: '',
        gasType: GasType.Oxygen,
        size: 'E' as 'E' | 'H' | 'M',
        quantity: 1,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({ 
            ...prev, 
            [name]: type === 'number' ? parseInt(value, 10) : value 
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-300">Requesting Department</label>
                <input type="text" name="department" id="department" required value={formData.department} onChange={handleChange} className={formInputStyle}/>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label htmlFor="gasType" className="block text-sm font-medium text-gray-300">Gas Type</label>
                    <select name="gasType" id="gasType" required value={formData.gasType} onChange={handleChange} className={formInputStyle}>
                        
                        {/* FIX: Cast enum value to string for key prop */}
                        {Object.values(GasType).map(t => <option key={t as string} value={t}>{t}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="size" className="block text-sm font-medium text-gray-300">Size</label>
                    <select name="size" id="size" required value={formData.size} onChange={handleChange} className={formInputStyle}>
                        <option value="E">E</option>
                        <option value="H">H</option>
                        <option value="M">M</option>
                    </select>
                </div>
                 <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-300">Quantity</label>
                    <input type="number" name="quantity" id="quantity" required min="1" value={formData.quantity} onChange={handleChange} className={formInputStyle}/>
                </div>
            </div>
            <div className="flex justify-end pt-4">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Submit Request
                </button>
            </div>
        </form>
    );
};

export default RequestGasForm;