


import React, { useState } from 'react';
import { GasCylinder, GasRequest } from '../types';
// FIX: Corrected import path for icons.
import { PlusIcon } from './icons';
import GasInventoryTable from './GasInventoryTable';
import GasRequestList from './GasRequestList';
import Modal from './Modal';
import AddCylinderForm from './AddCylinderForm';
import RequestGasForm from './RequestGasForm';

interface GasDashboardProps {
    cylinders: GasCylinder[];
    requests: GasRequest[];
    onAddCylinder: (cylinderData: Omit<GasCylinder, 'id'>) => void;
    onRequestGas: (requestData: Omit<GasRequest, 'id' | 'requestDate' | 'status'>) => void;
    onLogConsumption: (cylinderId: string) => void;
}

const GasDashboard: React.FC<GasDashboardProps> = ({ cylinders, requests, onAddCylinder, onRequestGas, onLogConsumption }) => {
    const [isAddCylinderModalOpen, setIsAddCylinderModalOpen] = useState(false);
    const [isRequestGasModalOpen, setIsRequestGasModalOpen] = useState(false);

    const handleAddCylinderSubmit = (data: Omit<GasCylinder, 'id'>) => {
        onAddCylinder(data);
        setIsAddCylinderModalOpen(false);
    };

    const handleRequestGasSubmit = (data: Omit<GasRequest, 'id' | 'requestDate' | 'status'>) => {
        onRequestGas(data);
        setIsRequestGasModalOpen(false);
    };

    return (
        <div>
            <div className="flex justify-end my-6 gap-4">
                 <button 
                    onClick={() => setIsRequestGasModalOpen(true)} 
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                >
                    <PlusIcon className="w-5 h-5" />
                    <span>Request Gas</span>
                </button>
                <button 
                    onClick={() => setIsAddCylinderModalOpen(true)} 
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                    <PlusIcon className="w-5 h-5" />
                    <span>Add Cylinder</span>
                </button>
            </div>
            <div className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-8">
                <div className="xl:col-span-2">
                    <GasInventoryTable cylinders={cylinders} onLogConsumption={(cylinder) => onLogConsumption(cylinder.id)} />
                </div>
                <div>
                    <GasRequestList requests={requests} />
                </div>
            </div>

            <Modal isOpen={isAddCylinderModalOpen} onClose={() => setIsAddCylinderModalOpen(false)} title="Add New Gas Cylinder">
                <AddCylinderForm onSubmit={handleAddCylinderSubmit} />
            </Modal>
            <Modal isOpen={isRequestGasModalOpen} onClose={() => setIsRequestGasModalOpen(false)} title="Request New Gas Cylinder">
                <RequestGasForm onSubmit={handleRequestGasSubmit} />
            </Modal>
        </div>
    );
};

export default GasDashboard;