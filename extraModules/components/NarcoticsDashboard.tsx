
import React, { useState } from 'react';
import { Narcotic, NarcoticLog } from '../types';
// FIX: Corrected import path for icons.
import { PlusIcon } from './icons';
import Modal from './Modal';
import NarcoticsInventoryTable from './NarcoticsInventoryTable';
import NarcoticsLogTable from './NarcoticsLogTable';
import AddNewNarcoticForm from './AddNewNarcoticForm';
import LogNarcoticTransactionForm from './LogNarcoticTransactionForm';

interface NarcoticsDashboardProps {
    inventory: Narcotic[];
    logs: NarcoticLog[];
    onAddNarcotic: (narcotic: Omit<Narcotic, 'id'>) => void;
    onLogTransaction: (log: Omit<NarcoticLog, 'id'>) => void;
}

const NarcoticsDashboard: React.FC<NarcoticsDashboardProps> = ({ inventory, logs, onAddNarcotic, onLogTransaction }) => {
    const [isAddNarcoticModalOpen, setIsAddNarcoticModalOpen] = useState(false);
    const [isLogTransactionModalOpen, setIsLogTransactionModalOpen] = useState(false);

    const handleAddNarcoticSubmit = (data: Omit<Narcotic, 'id'>) => {
        onAddNarcotic(data);
        setIsAddNarcoticModalOpen(false);
    };

    const handleLogTransactionSubmit = (data: Omit<NarcoticLog, 'id'>) => {
        onLogTransaction(data);
        setIsLogTransactionModalOpen(false);
    };

    return (
        <div>
            <div className="flex justify-end my-6 gap-4">
                <button onClick={() => setIsLogTransactionModalOpen(true)} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg shadow-sm hover:bg-green-700">
                    <PlusIcon /> Log Transaction
                </button>
                <button onClick={() => setIsAddNarcoticModalOpen(true)} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700">
                    <PlusIcon /> Add Narcotic
                </button>
            </div>
            <div className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-8">
                <div className="xl:col-span-1">
                    <NarcoticsInventoryTable inventory={inventory} />
                </div>
                <div className="xl:col-span-2">
                    <NarcoticsLogTable logs={logs} />
                </div>
            </div>

            <Modal isOpen={isAddNarcoticModalOpen} onClose={() => setIsAddNarcoticModalOpen(false)} title="Add New Narcotic to Inventory">
                <AddNewNarcoticForm onSubmit={handleAddNarcoticSubmit} />
            </Modal>
            <Modal isOpen={isLogTransactionModalOpen} onClose={() => setIsLogTransactionModalOpen(false)} title="Log Narcotic Transaction">
                <LogNarcoticTransactionForm onSubmit={handleLogTransactionSubmit} inventory={inventory} />
            </Modal>
        </div>
    );
};

export default NarcoticsDashboard;