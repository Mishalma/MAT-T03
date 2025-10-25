import React from 'react';
import { CSSDRequest } from '../types';

interface CSSDRequestTableProps {
    requests: CSSDRequest[];
}

const statusStyles: {[key in 'Pending' | 'Processing' | 'Completed']: string} = {
    Pending: 'bg-yellow-500/20 text-yellow-300',
    Processing: 'bg-blue-500/20 text-blue-300',
    Completed: 'bg-green-500/20 text-green-300',
};

const CSSDRequestTable: React.FC<CSSDRequestTableProps> = ({ requests }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700">
            <h2 className="text-lg font-semibold text-gray-100 mb-4 px-2">CSSD Requests</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-700/50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Department</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Item</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Quantity</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                        {requests.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-700/50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">{item.department}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.item}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.quantity}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusStyles[item.status]}`}>
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CSSDRequestTable;
