


import React, { useState } from 'react';
import { GasCylinder, GasCylinderStatus, GasType } from '../types';

interface AddCylinderFormProps {
    onSubmit: (cylinder: Omit<GasCylinder, 'id'>) => void;
}

const formInputStyle = "mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500";


const AddCylinderForm: React.FC<AddCylinderFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<Omit<GasCylinder, 'id'>>({
        type: GasType.Oxygen,
        size: 'H',
        location: '',
        status: GasCylinderStatus.Full,
        lastFillDate: new Date().toISOString().split('T')[0],
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
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-300">Gas Type</label>
                    <select name="type" id="type" required value={formData.type} onChange={handleChange} className={formInputStyle}>
                        
                        {/* FIX: Cast enum value to string for key prop */}
                        {Object.values(GasType).map(t => <option key={t as string} value={t}>{t}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="size" className="block text-sm font-medium text-gray-300">Cylinder Size</label>
                    <select name="size" id="size" required value={formData.size} onChange={handleChange} className={formInputStyle}>
                        <option value="E">E</option>
                        <option value="H">H</option>
                        <option value="M">M</option>
                    </select>
                </div>
            </div>
            <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-300">Initial Location</label>
                <input type="text" name="location" id="location" required value={formData.location} onChange={handleChange} className={formInputStyle}/>
            </div>
            <div>
                <label htmlFor="lastFillDate" className="block text-sm font-medium text-gray-300">Last Fill Date</label>
                <input type="date" name="lastFillDate" id="lastFillDate" required value={formData.lastFillDate} onChange={handleChange} className={formInputStyle}/>
            </div>
            <div className="flex justify-end pt-4">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Add Cylinder
                </button>
            </div>
        </form>
    );
};

export default AddCylinderForm;