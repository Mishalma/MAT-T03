

import React, { useState } from 'react';
import Header from './Header';
import EquipmentDashboard from './EquipmentDashboard';
import GasDashboard from './GasDashboard';
import PorterDashboard from './PorterDashboard';
import { serviceCategories } from '../navigation';
import {
    equipmentData, workOrdersData, gasCylindersData, gasRequestsData, portersData, transportRequestsData,
} from '../data';
import * as geminiService from '../services/geminiService';
// FIX: Import EquipmentStatus enum
import { WorkOrder, EquipmentStatus } from '../types';

interface OperationsDashboardProps {
    onBack: () => void;
}

const OperationsDashboard: React.FC<OperationsDashboardProps> = ({ onBack }) => {
    const category = serviceCategories['operations'];
    const [activeModuleKey, setActiveModuleKey] = useState(category.modules[0].key);
    
    const [equipment, setEquipment] = useState(equipmentData);
    const [workOrders, setWorkOrders] = useState(workOrdersData);

    const handleAddEquipment = (newEquipment: any) => {
        const newEq = { ...newEquipment, id: `EQ-${Date.now()}`, serviceHistory: [] };
        setEquipment(prev => [...prev, newEq]);
    };

    const handleReportBreakdown = (workOrderData: Omit<WorkOrder, 'id' | 'reportedDate' | 'status'>) => {
        const newWorkOrder: WorkOrder = {
            ...workOrderData,
            id: `WO-${Date.now()}`,
            reportedDate: new Date().toLocaleDateString(),
            status: 'Open',
        };
        setWorkOrders(prev => [...prev, newWorkOrder]);
        // FIX: Use EquipmentStatus enum member instead of string literal.
        setEquipment(prev => prev.map(e => e.id === workOrderData.equipmentId ? { ...e, status: EquipmentStatus.Offline } : e));
    };

    const renderModule = () => {
        switch (activeModuleKey) {
            case 'equipment':
                return <EquipmentDashboard equipment={equipment} workOrders={workOrders} onAddEquipment={handleAddEquipment} onReportBreakdown={handleReportBreakdown} onAnalyzeBreakdown={geminiService.analyzeBreakdownDescription} />;
            case 'gas':
                return <GasDashboard cylinders={gasCylindersData} requests={gasRequestsData} onAddCylinder={() => {}} onRequestGas={() => {}} onLogConsumption={() => {}} />;
            case 'porters':
                return <PorterDashboard porters={portersData} requests={transportRequestsData} onRequestTransport={() => {}} onAssignPorter={() => {}} />;
            default:
                return null;
        }
    };

    return (
        <>
            <Header
                title={category.name}
                modules={category.modules}
                activeModuleKey={activeModuleKey}
                onModuleSelect={setActiveModuleKey}
                onBack={onBack}
            />
            <div className="p-8">{renderModule()}</div>
        </>
    );
};

export default OperationsDashboard;
