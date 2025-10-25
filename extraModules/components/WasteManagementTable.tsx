import React from 'react';
import { WasteCollection } from '../types';

interface WasteManagementTableProps {
    collections: WasteCollection[];
}

const typeStyles: {[key in 'General' | 'Biohazard' | 'Sharps']: string} = {
    General: 'text-gray-300',
    Biohazard: 'text-red-400',
    Sharps: 'text-yellow-400',
};

const WasteManagementTable: React.FC<WasteManagementTableProps> = ({ collections }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700">
            <h2 className="text-lg font-semibold text-gray-100 mb-4 px-2">Waste Collection Log</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-700/50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Location</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Weight (kg)</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                        {collections.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-700/50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.collectionDate}</td>
                                <td className={`px-6 py-4 whitespace-nowrap text-sm font-semibold ${typeStyles[item.type]}`}>{item.type}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{item.location}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">{item.weightKg.toFixed(1)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WasteManagementTable;
