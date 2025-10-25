import React from 'react';
import { AVContent } from '../types';
// FIX: Corrected import path for icons.
import { InfoIcon } from './icons';

interface AVContentTableProps {
    content: AVContent[];
    onViewDetails: (content: AVContent) => void;
}

const statusStyles: { [key in 'Processing' | 'Available' | 'Archived']: string } = {
    Processing: 'bg-yellow-500/20 text-yellow-300',
    Available: 'bg-green-500/20 text-green-300',
    Archived: 'bg-gray-500/20 text-gray-300',
};

const AVContentTable: React.FC<AVContentTableProps> = ({ content, onViewDetails }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700">
            <h2 className="text-lg font-semibold text-gray-100 mb-4 px-2">A/V Content Library</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-700/50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Title</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Upload Date</th>
                            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                        {content.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-700/50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">{item.title}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.type}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusStyles[item.status]}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{item.uploadDate}</td>
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

export default AVContentTable;