

import React from 'react';
import { GasRequest } from '../types';

interface GasRequestListProps {
    requests: GasRequest[];
}

const statusStyles: { [key in 'Pending' | 'Approved' | 'Delivered']: string } = {
    Pending: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    Approved: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    Delivered: 'bg-green-500/20 text-green-300 border-green-500/30',
};

const GasRequestList: React.FC<GasRequestListProps> = ({ requests }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-700">
            <h2 className="text-lg font-semibold text-gray-100 mb-4 px-2">Pending Gas Requests</h2>
            <ul className="space-y-4">
                {requests.length > 0 ? requests.map(req => (
                    <li key={req.id} className="p-4 bg-gray-700/50 rounded-lg border border-gray-700">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="font-semibold text-gray-100">{req.department}</p>
                                <p className="text-sm text-gray-400">{req.id}</p>
                            </div>
                            <span className={`px-2 py-1 text-xs font-medium rounded-md border ${statusStyles[req.status]}`}>
                                {req.status}
                            </span>
                        </div>
                        <p className="mt-2 text-sm text-gray-300">Requesting: {req.quantity} x Size '{req.size}' of {req.gasType}</p>
                        <div className="mt-3 flex justify-between items-center text-xs text-gray-400">
                            <span>Requested: {req.requestDate}</span>
                             <button className="px-2 py-1 text-xs text-white bg-green-600 rounded hover:bg-green-700 disabled:bg-gray-500" disabled={req.status !== 'Pending'}>
                                Approve
                            </button>
                        </div>
                    </li>
                )) : (
                    <li className="p-4 text-sm text-gray-400 text-center">No active gas requests.</li>
                )}
            </ul>
        </div>
    );
};

export default GasRequestList;