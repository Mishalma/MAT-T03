


import React from 'react';
import { DischargeProcess, ClearanceStatus } from '../types';
// FIX: Corrected import path for icons.
import { InfoIcon } from './icons';

interface DischargeProcessTableProps {
    processes: DischargeProcess[];
    onViewDetails: (process: DischargeProcess) => void;
}

const clearanceStyles: { [key in ClearanceStatus]: string } = {
    [ClearanceStatus.Approved]: 'bg-green-500/20 text-green-300',
    [ClearanceStatus.Pending]: 'bg-yellow-500/20 text-yellow-300',
    [ClearanceStatus.Flagged]: 'bg-red-500/20 text-red-300',
};

const ClearanceBadge: React.FC<{ status: ClearanceStatus }> = ({ status }) => (
    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${clearanceStyles[status]}`}>
        {status}
    </span>
);

const DischargeProcessTable: React.FC<DischargeProcessTableProps> = ({ processes, onViewDetails }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-700">
            <h2 className="text-lg font-semibold text-gray-100 mb-4 px-2">Discharge Workflow</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-700/50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Patient</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Pharmacy</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Billing</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Nursing</th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                        {processes.map((p) => (
                            <tr key={p.id} className="hover:bg-gray-700/50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-100">{p.patientName}</div>
                                    <div className="text-sm text-gray-400">{p.patientId}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap"><ClearanceBadge status={p.pharmacy.status} /></td>
                                <td className="px-6 py-4 whitespace-nowrap"><ClearanceBadge status={p.billing.status} /></td>
                                <td className="px-6 py-4 whitespace-nowrap"><ClearanceBadge status={p.nursing.status} /></td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <button onClick={() => onViewDetails(p)} className="text-blue-400 hover:text-blue-300" title="Manage Clearances"><InfoIcon /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DischargeProcessTable;