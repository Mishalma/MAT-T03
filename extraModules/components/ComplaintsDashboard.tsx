


import React, { useState } from 'react';
import { Complaint } from '../types';
// FIX: Corrected import path for icons.
import { PlusIcon } from './icons';
import ComplaintsTable from './ComplaintsTable';
import Modal from './Modal';
import AddComplaintForm from './AddComplaintForm';
import ComplaintDetails from './ComplaintDetails';

interface ComplaintsDashboardProps {
    complaints: Complaint[];
    onAddComplaint: (complaint: Complaint) => void;
}

const ComplaintsDashboard: React.FC<ComplaintsDashboardProps> = ({ complaints, onAddComplaint }) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(null);

    const handleAddComplaint = (complaint: Omit<Complaint, 'id'>) => {
        onAddComplaint({ ...complaint, id: `C-${Date.now()}` });
        setIsAddModalOpen(false);
    };

    return (
        <div>
            <div className="flex justify-end my-6">
                <button onClick={() => setIsAddModalOpen(true)} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700">
                    <PlusIcon /> Add Complaint
                </button>
            </div>
            <ComplaintsTable complaints={complaints} onViewDetails={setSelectedComplaint} />
            <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="File a New Complaint">
                <AddComplaintForm onSubmit={handleAddComplaint} />
            </Modal>
            {selectedComplaint && (
                <Modal isOpen={!!selectedComplaint} onClose={() => setSelectedComplaint(null)} title={`Complaint Details: ${selectedComplaint.id}`}>
                    <ComplaintDetails complaint={selectedComplaint} />
                </Modal>
            )}
        </div>
    );
};

export default ComplaintsDashboard;