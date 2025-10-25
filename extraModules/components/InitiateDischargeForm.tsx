import React, { useState } from 'react';

interface InitiateDischargeFormProps {
    onSubmit: (patientName: string, patientId: string) => void;
    onCancel: () => void;
}
const formInputStyle = "mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500";


const InitiateDischargeForm: React.FC<InitiateDischargeFormProps> = ({ onSubmit, onCancel }) => {
    const [patientName, setPatientName] = useState('');
    const [patientId, setPatientId] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(patientName, patientId);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="patientName" className="block text-sm font-medium text-gray-300">Patient Name</label>
                <input type="text" name="patientName" id="patientName" required value={patientName} onChange={(e) => setPatientName(e.target.value)} className={formInputStyle} />
            </div>
            <div>
                <label htmlFor="patientId" className="block text-sm font-medium text-gray-300">Patient ID</label>
                <input type="text" name="patientId" id="patientId" required value={patientId} onChange={(e) => setPatientId(e.target.value)} className={formInputStyle} />
            </div>
            <div className="flex justify-end items-center gap-4 pt-4">
                <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-600 text-gray-100 font-semibold rounded-lg hover:bg-gray-500">
                    Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
                    Initiate
                </button>
            </div>
        </form>
    );
};

export default InitiateDischargeForm;