


import React from 'react';
import { LabResult } from '../types';
// FIX: Corrected import path for icons.
import { InfoIcon } from './icons';

interface LabResultsTableProps {
    results: LabResult[];
    onViewDetails: (result: LabResult) => void;
}

const statusStyles: { [key in 'Completed' | 'Pending' | 'Cancelled']: string } = {
    Completed: 'bg-green-500/20 text-green-300',
    Pending: 'bg-yellow-500/20 text-yellow-300',
    Cancelled: 'bg-gray-500/20 text-gray-300',
};

const LabResultsTable: React.FC<LabResultsTableProps> = ({ results, onViewDetails }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-700">
            <h2 className="text-lg font-semibold text-gray-100 mb-4 px-2">Lab Results</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-700/50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Patient</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Test Type</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Collection Date</th>
                            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                        {results.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-700/50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-100">{item.patientName}</div>
                                    <div className="text-sm text-gray-400">{item.patientId}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.testType}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusStyles[item.status]}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{item.collectionDate}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                                    <button 
                                        onClick={() => onViewDetails(item)} 
                                        className="text-blue-400 hover:text-blue-300 disabled:text-gray-600 disabled:cursor-not-allowed" 
                                        title="View Details"
                                        disabled={item.status !== 'Completed'}
                                    >
                                        <InfoIcon />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LabResultsTable;