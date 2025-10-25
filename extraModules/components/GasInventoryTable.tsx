
import React, { useState } from 'react';
import { GasCylinder, GasCylinderStatus } from '../types';
import Modal from './Modal';
import LogConsumptionForm from './LogConsumptionForm';

interface GasInventoryTableProps {
    cylinders: GasCylinder[];
    onLogConsumption: (cylinder: GasCylinder) => void;
}

const statusStyles: { [key in GasCylinderStatus]: string } = {
    [GasCylinderStatus.Full]: 'bg-green-500/20 text-green-300',
    [GasCylinderStatus.InUse]: 'bg-blue-500/20 text-blue-300',
    [GasCylinderStatus.Empty]: 'bg-gray-500/20 text-gray-300',
};

const GasInventoryTable: React.FC<GasInventoryTableProps> = ({ cylinders, onLogConsumption }) => {
    const [selectedCylinder, setSelectedCylinder] = useState<GasCylinder | null>(null);

    const handleLogSubmit = (cylinderId: string, notes: string) => {
        const cylinder = cylinders.find(c => c.id === cylinderId);
        if (cylinder) {
            onLogConsumption(cylinder); // The parent handles the state update
            console.log(`Consumption logged for ${cylinderId} with notes: ${notes}`);
        }
        setSelectedCylinder(null);
    };

    return (
        <>
            <div className="bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-700">
                <h2 className="text-lg font-semibold text-gray-100 mb-4 px-2">Gas Cylinder Inventory</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-700">
                        <thead className="bg-gray-700/50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Cylinder ID</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Location</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-800 divide-y divide-gray-700">
                            {cylinders.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-700/50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">{item.type} (Size {item.size})</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{item.location}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusStyles[item.status]}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                                        <button 
                                            onClick={() => setSelectedCylinder(item)}
                                            disabled={item.status === 'Empty'}
                                            className="text-yellow-400 hover:text-yellow-300 disabled:text-gray-600 disabled:cursor-not-allowed"
                                        >
                                            Log Consumption
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {selectedCylinder && (
                <Modal isOpen={!!selectedCylinder} onClose={() => setSelectedCylinder(null)} title={`Log Consumption for ${selectedCylinder.id}`}>
                    <LogConsumptionForm cylinder={selectedCylinder} onSubmit={handleLogSubmit} />
                </Modal>
            )}
        </>
    );
};

export default GasInventoryTable;
