


import React, { useState } from 'react';
import { Porter, TransportRequest, PorterStatus } from '../types';
// FIX: Corrected import path for icons.
import { PlusIcon } from './icons';
import TransportRequestList from './TransportRequestList';
import PorterStatusList from './PorterStatusList';
import Modal from './Modal';
import RequestTransportForm from './RequestTransportForm';
import AssignPorterForm from './AssignPorterForm';

interface PorterDashboardProps {
    porters: Porter[];
    requests: TransportRequest[];
    onRequestTransport: (requestData: Omit<TransportRequest, 'id' | 'status' | 'requestTime' | 'assignedPorterId'>) => void;
    onAssignPorter: (requestId: string, porterId: string) => void;
}

const PorterDashboard: React.FC<PorterDashboardProps> = ({ porters, requests, onRequestTransport, onAssignPorter }) => {
    const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
    const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState<TransportRequest | null>(null);

    const handleOpenAssignModal = (request: TransportRequest) => {
        setSelectedRequest(request);
        setIsAssignModalOpen(true);
    };

    const handleRequestSubmit = (data: Omit<TransportRequest, 'id' | 'status' | 'requestTime' | 'assignedPorterId'>) => {
        onRequestTransport(data);
        setIsRequestModalOpen(false);
    };

    const handleAssignSubmit = (requestId: string, porterId: string) => {
        onAssignPorter(requestId, porterId);
        setIsAssignModalOpen(false);
        setSelectedRequest(null);
    };

    return (
        <div>
            <div className="flex justify-end my-6">
                <button 
                    onClick={() => setIsRequestModalOpen(true)} 
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                    <PlusIcon className="w-5 h-5" />
                    <span>Request Transport</span>
                </button>
            </div>
            <div className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-8">
                <div className="xl:col-span-2">
                    <TransportRequestList requests={requests} onAssignPorter={handleOpenAssignModal} porters={porters} />
                </div>
                <div>
                    <PorterStatusList porters={porters} />
                </div>
            </div>

            <Modal isOpen={isRequestModalOpen} onClose={() => setIsRequestModalOpen(false)} title="Request Patient Transport">
                <RequestTransportForm onSubmit={handleRequestSubmit} />
            </Modal>
            
            {selectedRequest && (
                <Modal isOpen={isAssignModalOpen} onClose={() => setIsAssignModalOpen(false)} title="Assign Porter">
                    <AssignPorterForm 
                        request={selectedRequest}
                        porters={porters.filter(p => p.status === PorterStatus.Available)}
                        onSubmit={handleAssignSubmit}
                    />
                </Modal>
            )}
        </div>
    );
};

export default PorterDashboard;