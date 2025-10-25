
import React from 'react';
import { TransportRequest, Porter } from '../types';

interface TransportRequestListProps {
    requests: TransportRequest[];
    porters: Porter[];
    onAssignPorter: (request: TransportRequest) => void;
}

const statusStyles: { [key in 'Pending' | 'In Progress' | 'Completed']: string } = {
    Pending: 'border-yellow-500/30 text-yellow-300',
    'In Progress': 'border-blue-500/30 text-blue-300',
    Completed: 'border-green-500/30 text-green-300',
};

const priorityStyles: { [key in 'Urgent' | 'Standard']: string } = {
    Urgent: 'text-red-400',
    Standard: 'text-gray-300',
};

const TransportRequestList: React.FC<TransportRequestListProps> = ({ requests, porters, onAssignPorter }) => {
    const getPorterName = (porterId?: string) => {
        if (!porterId) return 'Unassigned';
        return porters.find(p => p.id === porterId)?.name || 'Unknown Porter';
    };

    return (
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-700">
            <h2 className="text-lg font-semibold text-gray-100 mb-4 px-2">Transport Requests</h2>
            <ul className="space-y-4">
                {requests.length > 0 ? requests.map(req => (
                    <li key={req.id} className="p-4 bg-gray-700/50 rounded-lg border border-gray-700">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="font-semibold text-gray-100">{req.patientName}</p>
                                <p className={`text-sm font-bold ${priorityStyles[req.priority]}`}>{req.priority}</p>
                            </div>
                            <span className={`px-2 py-1 text-xs font-medium rounded-md border ${statusStyles[req.status]}`}>
                                {req.status}
                            </span>
                        </div>
                        <p className="mt-2 text-sm text-gray-300">From: {req.from} &rarr; To: {req.to}</p>
                        <div className="mt-3 flex justify-between items-center text-xs text-gray-400">
                            <span>Assigned to: {getPorterName(req.assignedPorterId)}</span>
                            {req.status === 'Pending' && (
                                <button onClick={() => onAssignPorter(req)} className="px-2 py-1 text-xs text-white bg-blue-600 rounded hover:bg-blue-700">
                                    Assign
                                </button>
                            )}
                        </div>
                    </li>
                )) : (
                    <li className="p-4 text-sm text-gray-400 text-center">No active transport requests.</li>
                )}
            </ul>
        </div>
    );
};

export default TransportRequestList;
