

import React, { useState } from 'react';
import { Equipment, WorkOrder, EquipmentStatus, BreakdownAnalysis, ServiceLog } from '../types';
import StatCard from './StatCard';
import EquipmentTable from './EquipmentTable';
import WorkOrderList from './WorkOrderList';
import Modal from './Modal';
import AddEquipmentForm from './AddEquipmentForm';
import ReportBreakdownForm from './ReportBreakdownForm';
import EquipmentDetails from './EquipmentDetails';
import LogServiceForm from './LogServiceForm';
// FIX: Corrected import path for icons.
import { PlusIcon, WrenchScrewdriverIcon, ExclamationTriangleIcon } from './icons';

interface EquipmentDashboardProps {
    equipment: Equipment[];
    workOrders: WorkOrder[];
    onAddEquipment: (newEquipment: Omit<Equipment, 'id' | 'serviceHistory'>) => void;
    onReportBreakdown: (workOrderData: Omit<WorkOrder, 'id' | 'reportedDate' | 'status'>) => void;
    onAnalyzeBreakdown: (description: string) => Promise<BreakdownAnalysis | null>;
}

const EquipmentDashboard: React.FC<EquipmentDashboardProps> = ({ equipment, workOrders, onAddEquipment, onReportBreakdown, onAnalyzeBreakdown }) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [isReportModalOpen, setIsReportModalOpen] = useState(false);
    const [isLogServiceModalOpen, setIsLogServiceModalOpen] = useState(false);
    const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);

    const handleOpenDetails = (item: Equipment) => {
        setSelectedEquipment(item);
        setIsDetailsModalOpen(true);
    };

    const handleOpenReport = (item: Equipment) => {
        setSelectedEquipment(item);
        setIsReportModalOpen(true);
    };

    const handleOpenLogService = (item: Equipment) => {
        setSelectedEquipment(item);
        setIsLogServiceModalOpen(true);
    };

    const handleAddSubmit = (newEquipment: Omit<Equipment, 'id' | 'serviceHistory'>) => {
        onAddEquipment(newEquipment);
        setIsAddModalOpen(false);
    };

    const handleReportSubmit = (workOrderData: Omit<WorkOrder, 'id' | 'reportedDate' | 'status'>) => {
        onReportBreakdown(workOrderData);
        setIsReportModalOpen(false);
        setSelectedEquipment(null);
    };
    
    const handleLogServiceSubmit = (equipmentId: string, log: Omit<ServiceLog, 'date'>) => {
        console.log("Service logged for", equipmentId, log);
        // In a real app, you would update the equipment's service history state here.
        setIsLogServiceModalOpen(false);
        setSelectedEquipment(null);
    };

    const onlineCount = equipment.filter(e => e.status === EquipmentStatus.Online).length;
    const maintenanceCount = equipment.filter(e => e.status === EquipmentStatus.Maintenance).length;
    const offlineCount = equipment.filter(e => e.status === EquipmentStatus.Offline).length;

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard title="Total Equipment" value={equipment.length} icon={<WrenchScrewdriverIcon className="h-6 w-6"/>} color="text-blue-500" />
                <StatCard title="Online" value={onlineCount} icon={<WrenchScrewdriverIcon className="h-6 w-6"/>} color="text-green-500" />
                <StatCard title="In Maintenance" value={maintenanceCount} icon={<WrenchScrewdriverIcon className="h-6 w-6"/>} color="text-yellow-500" />
                <StatCard title="Offline" value={offlineCount} icon={<ExclamationTriangleIcon className="h-6 w-6"/>} color="text-red-500" />
            </div>

            <div className="flex justify-end my-6">
                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                    <PlusIcon className="w-5 h-5" />
                    <span>Add Equipment</span>
                </button>
            </div>

            <div className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-8">
                <div className="xl:col-span-2">
                    <EquipmentTable 
                        equipment={equipment} 
                        onViewDetails={handleOpenDetails}
                        onLogService={handleOpenLogService}
                        onReportBreakdown={handleOpenReport}
                    />
                </div>
                <div>
                    <WorkOrderList workOrders={workOrders.filter(wo => wo.status !== 'Completed')} />
                </div>
            </div>

            {/* Modals */}
            <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="Add New Equipment">
                <AddEquipmentForm onSubmit={handleAddSubmit} />
            </Modal>

            {selectedEquipment && (
                <>
                    <Modal isOpen={isDetailsModalOpen} onClose={() => { setIsDetailsModalOpen(false); setSelectedEquipment(null); }} title={`Details for ${selectedEquipment.name}`}>
                        <EquipmentDetails equipment={selectedEquipment} />
                    </Modal>
                    <Modal isOpen={isReportModalOpen} onClose={() => { setIsReportModalOpen(false); setSelectedEquipment(null); }} title={`Report Breakdown for ${selectedEquipment.name}`}>
                        <ReportBreakdownForm equipment={selectedEquipment} onSubmit={handleReportSubmit} onAnalyze={onAnalyzeBreakdown} />
                    </Modal>
                     <Modal isOpen={isLogServiceModalOpen} onClose={() => { setIsLogServiceModalOpen(false); setSelectedEquipment(null); }} title={`Log Service for ${selectedEquipment.name}`}>
                        <LogServiceForm equipment={selectedEquipment} onSubmit={handleLogServiceSubmit} />
                    </Modal>
                </>
            )}
        </div>
    );
};

export default EquipmentDashboard;