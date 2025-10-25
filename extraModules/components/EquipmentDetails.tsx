

import React from 'react';
import { Equipment } from '../types';

interface EquipmentDetailsProps {
    equipment: Equipment;
}

const DetailItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div>
        <p className="text-sm font-medium text-gray-400">{label}</p>
        <p className="text-md text-gray-100">{value}</p>
    </div>
);

const EquipmentDetails: React.FC<EquipmentDetailsProps> = ({ equipment }) => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <DetailItem label="Equipment ID" value={equipment.id} />
                <DetailItem label="Name" value={equipment.name} />
                <DetailItem label="Type" value={equipment.type} />
                <DetailItem label="Status" value={equipment.status} />
                <DetailItem label="Location" value={equipment.location} />
                <DetailItem label="Purchase Date" value={equipment.purchaseDate} />
                <DetailItem label="Next Service" value={equipment.nextServiceDate} />
            </div>

            <div>
                <h3 className="text-md font-semibold text-gray-200 mb-2">Service History</h3>
                <ul className="divide-y divide-gray-700 border border-gray-700 rounded-lg">
                    {equipment.serviceHistory.length > 0 ? equipment.serviceHistory.map((log, index) => (
                        <li key={index} className="p-3">
                            <div className="flex justify-between items-center">
                                <p className="font-medium text-gray-100">{log.type} Service</p>
                                <p className="text-sm text-gray-400">{log.date}</p>
                            </div>
                            <p className="text-sm text-gray-300 mt-1">{log.notes}</p>
                            <p className="text-xs text-gray-500 mt-1">Serviced by: {log.performedBy}</p>
                        </li>
                    )) : (
                        <li className="p-3 text-sm text-gray-400 text-center">No service history available.</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default EquipmentDetails;