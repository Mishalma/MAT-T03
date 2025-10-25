
import React from 'react';
import { Equipment, EquipmentStatus } from '../types';
import { InfoIcon, WrenchScrewdriverIcon, ExclamationTriangleIcon } from './icons';

interface EquipmentTableProps {
    equipment: Equipment[];
    onViewDetails: (item: Equipment) => void;
    onLogService: (item: Equipment) => void;
    onReportBreakdown: (item: Equipment) => void;
}

const statusStyles: { [key in EquipmentStatus]: string } = {
    [EquipmentStatus.Online]: 'bg-green-500/20 text-green-300',
    [EquipmentStatus.Maintenance]: 'bg-yellow-500/20 text-yellow-300',
    [EquipmentStatus.Offline]: 'bg-red-500/20 text-red-300',
};

const EquipmentTable: React.FC<EquipmentTableProps> = ({ equipment, onViewDetails, onLogService, onReportBreakdown }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-700">
            <h2 className="text-lg font-semibold text-gray-100 mb-4 px-2">Equipment Fleet</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-700/50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Location</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                        {equipment.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-700/50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-100">{item.name}</div>
                                    <div className="text-sm text-gray-400">{item.id}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.type}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.location}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusStyles[item.status]}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center space-x-4">
                                    <button onClick={() => onViewDetails(item)} className="text-blue-400 hover:text-blue-300 transition-colors" title="View Details"><InfoIcon /></button>
                                    <button onClick={() => onLogService(item)} className="text-green-400 hover:text-green-300 transition-colors" title="Log Service"><WrenchScrewdriverIcon /></button>
                                    <button onClick={() => onReportBreakdown(item)} className="text-red-400 hover:text-red-300 transition-colors" title="Report Breakdown"><ExclamationTriangleIcon /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EquipmentTable;
