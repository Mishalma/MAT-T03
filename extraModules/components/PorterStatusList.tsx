


import React from 'react';
import { Porter, PorterStatus } from '../types';
// FIX: Corrected import path for icons.
import { UsersIcon } from './icons';

interface PorterStatusListProps {
    porters: Porter[];
}

const statusStyles: { [key in PorterStatus]: string } = {
    [PorterStatus.Available]: 'bg-green-500/20 text-green-300',
    [PorterStatus.Busy]: 'bg-red-500/20 text-red-300',
    [PorterStatus.OnBreak]: 'bg-yellow-500/20 text-yellow-300',
};

const PorterStatusList: React.FC<PorterStatusListProps> = ({ porters }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-700">
            <div className="flex items-center gap-2 mb-4 px-2">
                <UsersIcon className="text-gray-300" />
                <h2 className="text-lg font-semibold text-gray-100">Porter Status</h2>
            </div>
            <ul className="space-y-3">
                {porters.map(porter => (
                    <li key={porter.id} className="p-3 bg-gray-700/50 rounded-lg border border-gray-700 flex justify-between items-center">
                        <p className="font-medium text-gray-100">{porter.name}</p>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${statusStyles[porter.status]}`}>
                            {porter.status}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PorterStatusList;