import React from 'react';
import { NarcoticLog } from '../types';

interface NarcoticsLogTableProps {
    logs: NarcoticLog[];
}

const transactionTypeStyles: {[key in 'Dispense' | 'Restock' | 'Audit']: string} = {
    Dispense: 'text-red-400',
    Restock: 'text-green-400',
    Audit: 'text-yellow-400',
};

const NarcoticsLogTable: React.FC<NarcoticsLogTableProps> = ({ logs }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700">
            <h2 className="text-lg font-semibold text-gray-100 mb-4 px-2">Transaction Logs</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-700/50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Timestamp</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Narcotic</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Amount</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                        {logs.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-700/50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.timestamp}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">{item.narcoticName}</td>
                                <td className={`px-6 py-4 whitespace-nowrap text-sm font-semibold ${transactionTypeStyles[item.transactionType]}`}>{item.transactionType}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.amount}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.user}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default NarcoticsLogTable;
