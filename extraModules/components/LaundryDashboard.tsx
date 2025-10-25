
import React from 'react';
import { LaundryRequest } from '../types';
// FIX: Corrected import path for icons.
import { PlusIcon } from './icons';
import LaundryRequestTable from './LaundryRequestTable';

interface LaundryDashboardProps {
    requests: LaundryRequest[];
    onAddRequest: () => void;
}

const LaundryDashboard: React.FC<LaundryDashboardProps> = ({ requests, onAddRequest }) => {
    return (
        <div>
            <div className="flex justify-end my-6">
                <button
                    onClick={onAddRequest}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                    <PlusIcon className="w-5 h-5" />
                    <span>New Laundry Request</span>
                </button>
            </div>
            <LaundryRequestTable requests={requests} />
        </div>
    );
};

export default LaundryDashboard;