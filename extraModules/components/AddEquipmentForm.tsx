
import React, { useState } from 'react';
import { Equipment, EquipmentStatus } from '../types';

interface AddEquipmentFormProps {
    onSubmit: (equipment: Omit<Equipment, 'id' | 'serviceHistory'>) => void;
}

const formInputStyle = "mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500";

const AddEquipmentForm: React.FC<AddEquipmentFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<Omit<Equipment, 'id' | 'serviceHistory'>>({
        name: '',
        type: '',
        location: '',
        status: EquipmentStatus.Online,
        purchaseDate: new Date().toISOString().split('T')[0],
        nextServiceDate: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value as any }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.type || !formData.location || !formData.nextServiceDate) {
            alert("Please fill out all required fields.");
            return;
        }
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">Equipment Name</label>
                    <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className={formInputStyle}/>
                </div>
                 <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-300">Equipment Type</label>
                    <input type="text" name="type" id="type" required value={formData.type} onChange={handleChange} className={formInputStyle}/>
                </div>
            </div>
            <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-300">Location</label>
                <input type="text" name="location" id="location" required value={formData.location} onChange={handleChange} className={formInputStyle}/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="purchaseDate" className="block text-sm font-medium text-gray-300">Purchase Date</label>
                    <input type="date" name="purchaseDate" id="purchaseDate" required value={formData.purchaseDate} onChange={handleChange} className={formInputStyle}/>
                </div>
                <div>
                    <label htmlFor="nextServiceDate" className="block text-sm font-medium text-gray-300">Next Service Date</label>
                    <input type="date" name="nextServiceDate" id="nextServiceDate" required value={formData.nextServiceDate} onChange={handleChange} className={formInputStyle}/>
                </div>
            </div>
            <div className="flex justify-end pt-4">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Add Equipment
                </button>
            </div>
        </form>
    );
};

export default AddEquipmentForm;
