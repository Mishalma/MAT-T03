

import React, { useState } from 'react';
import { GasCylinder } from '../types';

interface LogConsumptionFormProps {
    cylinder: GasCylinder;
    onSubmit: (cylinderId: string, notes: string) => void;
}

const LogConsumptionForm: React.FC<LogConsumptionFormProps> = ({ cylinder, onSubmit }) => {
    const [notes, setNotes] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(cylinder.id, notes);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <p className="text-sm text-gray-300">You are about to mark cylinder <strong>{cylinder.id}</strong> ({cylinder.type}, Size {cylinder.size}) as empty.</p>
                <p className="text-sm text-gray-400 mt-1">This action cannot be undone. The cylinder will be scheduled for refill.</p>
            </div>
            <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-300">Optional Notes</label>
                <textarea 
                    name="notes" 
                    id="notes" 
                    rows={3} 
                    value={notes} 
                    onChange={(e) => setNotes(e.target.value)} 
                    className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="E.g., Final pressure reading, department use, etc."
                ></textarea>
            </div>
            <div className="flex justify-end pt-4">
                <button type="submit" className="px-4 py-2 bg-yellow-600 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
                    Confirm and Mark as Empty
                </button>
            </div>
        </form>
    );
};

export default LogConsumptionForm;