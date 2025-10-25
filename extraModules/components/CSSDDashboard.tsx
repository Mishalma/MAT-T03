
import React, { useState } from 'react';
import { CSSDRequest } from '../types';
// FIX: Corrected import path for icons.
import { PlusIcon } from './icons';
import Modal from './Modal';
import CSSDRequestTable from './CSSDRequestTable';
import AddCSSDRequestForm from './AddCSSDRequestForm';

interface CSSDDashboardProps {
    requests: CSSDRequest[];
    onAddRequest: (request: Omit<CSSDRequest, 'id' | 'requestDate' | 'status' | 'quantity'> & { quantity: number }) => void;
}

const CSSDDashboard: React.FC<CSSDDashboardProps> = ({ requests, onAddRequest }) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleSubmit = (requestData: Omit<CSSDRequest, 'id' | 'requestDate' | 'status' | 'quantity'> & { quantity: number }) => {
        onAddRequest(requestData);
        setIsAddModalOpen(false);
    };

    return (
        <div>
            <div className="flex justify-end my-6">
                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                    <PlusIcon className="w-5 h-5" />
                    <span>New Request</span>
                </button>
            </div>
            <CSSDRequestTable requests={requests} />
            <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="New CSSD Request">
                <AddCSSDRequestForm onSubmit={handleSubmit} />
            </Modal>
        </div>
    );
};

export default CSSDDashboard;