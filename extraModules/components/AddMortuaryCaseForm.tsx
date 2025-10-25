

import React, { useState } from 'react';
import { MortuaryCase } from '../types';

interface AddMortuaryCaseFormProps {
    onSubmit: (mortuaryCase: Omit<MortuaryCase, 'id'>) => void;
}
const formInputStyle = "mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500";


const AddMortuaryCaseForm: React.FC<AddMortuaryCaseFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<Omit<MortuaryCase, 'id'>>({
        deceasedName: '',
        dateOfDeath: '',
        dateOfAdmission: new Date().toISOString().split('T')[0],
        status: 'Awaiting Release',
        storageLocation: '',
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
            <input type="text" name="deceasedName" placeholder="Deceased Name" value={formData.deceasedName} onChange={handleChange} required className={formInputStyle}/>
            <div>
                <label className="text-sm font-medium text-gray-300">Date of Death</label>
                <input type="date" name="dateOfDeath" value={formData.dateOfDeath} onChange={handleChange} required className={formInputStyle}/>
            </div>
            <input type="text" name="storageLocation" placeholder="Storage Location" value={formData.storageLocation} onChange={handleChange} required className={formInputStyle}/>
            <div className="flex justify-end pt-4">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">Add Case</button>
            </div>
        </form>
    );
};

export default AddMortuaryCaseForm;