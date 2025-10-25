


import React, { useState } from 'react';
import { ITSupportTicket } from '../types';
// FIX: Corrected import path for icons.
import { PlusIcon } from './icons';
import ITSupportTicketTable from './ITSupportTicketTable';
import Modal from './Modal';
import AddITRequestForm from './AddITRequestForm';
import ITTicketDetails from './ITTicketDetails';

interface ITDashboardProps {
    tickets: ITSupportTicket[];
    onAddTicket: (ticket: ITSupportTicket) => void;
}

const ITDashboard: React.FC<ITDashboardProps> = ({ tickets, onAddTicket }) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState<ITSupportTicket | null>(null);

    const handleAddTicket = (ticket: Omit<ITSupportTicket, 'id'>) => {
        onAddTicket({ ...ticket, id: `IT-${Date.now()}` });
        setIsAddModalOpen(false);
    };

    return (
        <div>
            <div className="flex justify-end my-6">
                <button onClick={() => setIsAddModalOpen(true)} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700">
                    <PlusIcon /> New Ticket
                </button>
            </div>
            <ITSupportTicketTable tickets={tickets} onViewDetails={setSelectedTicket} />
            <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="Submit IT Support Ticket">
                <AddITRequestForm onSubmit={handleAddTicket} />
            </Modal>
            {selectedTicket && (
                <Modal isOpen={!!selectedTicket} onClose={() => setSelectedTicket(null)} title={`Ticket Details: ${selectedTicket.id}`}>
                    <ITTicketDetails ticket={selectedTicket} />
                </Modal>
            )}
        </div>
    );
};

export default ITDashboard;