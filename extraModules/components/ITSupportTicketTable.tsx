import React from 'react';
import { ITSupportTicket } from '../types';
// FIX: Corrected import path for icons.
import { InfoIcon } from './icons';

interface ITSupportTicketTableProps {
    tickets: ITSupportTicket[];
    onViewDetails: (ticket: ITSupportTicket) => void;
}

const priorityStyles: {[key in 'Critical' | 'High' | 'Medium' | 'Low']: string} = {
    Critical: 'bg-red-500/20 text-red-300',
    High: 'bg-orange-500/20 text-orange-300',
    Medium: 'bg-yellow-500/20 text-yellow-300',
    Low: 'bg-blue-500/20 text-blue-300',
};

const ITSupportTicketTable: React.FC<ITSupportTicketTableProps> = ({ tickets, onViewDetails }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700">
            <h2 className="text-lg font-semibold text-gray-100 mb-4 px-2">IT Support Tickets</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-700/50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Issue</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Priority</th>
                            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                        {tickets.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-700/50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">{item.user}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 truncate max-w-xs">{item.issue}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${priorityStyles[item.priority]}`}>
                                        {item.priority}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                                    <button onClick={() => onViewDetails(item)} className="text-blue-400 hover:text-blue-300" title="View Details"><InfoIcon /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ITSupportTicketTable;