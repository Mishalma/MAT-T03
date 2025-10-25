

import React, { useState } from 'react';
import { TransportRequest, Porter } from '../types';

interface AssignPorterFormProps {
    request: TransportRequest;
    porters: Porter[]; // Should be only available porters
    onSubmit: (requestId: string, porterId: string) => void;
}

const formInputStyle = "mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500";


const AssignPorterForm: React.FC<AssignPorterFormProps> = ({ request, porters, onSubmit }) => {
    const [selectedPorterId, setSelectedPorterId] = useState<string>(porters[0]?.id || '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedPorterId) {
            alert('Please select a porter.');
            return;
        }
        onSubmit(request.id, selectedPorterId);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <p className="text-sm text-gray-300">Assigning a porter to transport <strong>{request.patientName}</strong> from <strong>{request.from}</strong> to <strong>{request.to}</strong>.</p>
            </div>
            <div>
                <label htmlFor="porterId" className="block text-sm font-medium text-gray-300">Available Porters</label>
                <select 
                    name="porterId" 
                    id="porterId" 
                    value={selectedPorterId} 
                    onChange={(e) => setSelectedPorterId(e.target.value)}
                    className={formInputStyle}
                >
                    {porters.length > 0 ? (
                        porters.map(p => <option key={p.id} value={p.id}>{p.name}</option>)
                    ) : (
                        <option disabled>No porters available</option>
                    )}
                </select>
            </div>
            <div className="flex justify-end pt-4">
                <button 
                    type="submit" 
                    disabled={porters.length === 0}
                    className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-500"
                >
                    Assign Porter
                </button>
            </div>
        </form>
    );
};

export default AssignPorterForm;