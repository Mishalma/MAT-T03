
import React from 'react';
import { WorkOrder } from '../types';

interface WorkOrderListProps {
    workOrders: WorkOrder[];
}

const priorityStyles: { [key in 'High' | 'Medium' | 'Low']: string } = {
    High: 'bg-red-500/20 text-red-300 border-red-500/30',
    Medium: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    Low: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
};

const WorkOrderList: React.FC<WorkOrderListProps> = ({ workOrders }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-700">
            <h2 className="text-lg font-semibold text-gray-100 mb-4 px-2">Active Work Orders</h2>
            <ul className="space-y-4">
                {workOrders.length > 0 ? workOrders.map(wo => (
                    <li key={wo.id} className="p-4 bg-gray-700/50 rounded-lg border border-gray-700">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="font-semibold text-gray-100">{wo.equipmentName}</p>
                                <p className="text-sm text-gray-400">{wo.id}</p>
                            </div>
                            <span className={`px-2 py-1 text-xs font-medium rounded-md border ${priorityStyles[wo.priority]}`}>
                                {wo.priority}
                            </span>
                        </div>
                        <p className="mt-2 text-sm text-gray-300">{wo.issue}</p>
                        <div className="mt-3 flex justify-between items-center text-xs text-gray-400">
                            <span>Reported: {wo.reportedDate}</span>
                            <span className="font-semibold">{wo.status}</span>
                        </div>
                    </li>
                )) : (
                    <li className="p-4 text-sm text-gray-400 text-center">No active work orders.</li>
                )}
            </ul>
        </div>
    );
};

export default WorkOrderList;
