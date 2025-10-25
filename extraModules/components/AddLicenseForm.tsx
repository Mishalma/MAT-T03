

import React, { useState } from 'react';
import { License } from '../types';

interface AddLicenseFormProps {
    onSubmit: (license: Omit<License, 'id' | 'status'>) => void;
}

const formInputStyle = "mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500";


const AddLicenseForm: React.FC<AddLicenseFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        personnel: '',
        issuingAuthority: '',
        issueDate: '',
        expiryDate: '',
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
            <div>
                <label htmlFor="personnel" className="block text-sm font-medium text-gray-300">Personnel Name</label>
                <input type="text" name="personnel" id="personnel" required onChange={handleChange} className={formInputStyle}/>
            </div>
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">License/Certification Name</label>
                <input type="text" name="name" id="name" required onChange={handleChange} className={formInputStyle}/>
            </div>
            <div>
                <label htmlFor="issuingAuthority" className="block text-sm font-medium text-gray-300">Issuing Authority</label>
                <input type="text" name="issuingAuthority" id="issuingAuthority" required onChange={handleChange} className={formInputStyle}/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="issueDate" className="block text-sm font-medium text-gray-300">Issue Date</label>
                    <input type="date" name="issueDate" id="issueDate" required onChange={handleChange} className={formInputStyle}/>
                </div>
                <div>
                    <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-300">Expiry Date</label>
                    <input type="date" name="expiryDate" id="expiryDate" required onChange={handleChange} className={formInputStyle}/>
                </div>
            </div>
            <div className="flex justify-end pt-4">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Add License
                </button>
            </div>
        </form>
    );
};

export default AddLicenseForm;