
import React, { useState } from 'react';
import { Employee } from '../types';

interface AddEmployeeFormProps {
    onSubmit: (employee: Omit<Employee, 'id' | 'status'>) => void;
}

const formInputStyle = "mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500";


const AddEmployeeForm: React.FC<AddEmployeeFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<Omit<Employee, 'id' | 'status'>>({
        name: '',
        department: '',
        role: '',
        hireDate: new Date().toISOString().split('T')[0],
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
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className={formInputStyle}/>
            <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} required className={formInputStyle}/>
            <input type="text" name="role" placeholder="Role" value={formData.role} onChange={handleChange} required className={formInputStyle}/>
            <div>
                <label className="text-sm font-medium text-gray-300">Hire Date</label>
                <input type="date" name="hireDate" value={formData.hireDate} onChange={handleChange} required className={formInputStyle}/>
            </div>
            <div className="flex justify-end pt-4">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">Add Employee</button>
            </div>
        </form>
    );
};

export default AddEmployeeForm;