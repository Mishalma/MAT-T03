import React from 'react';
import { ComplianceTask } from '../types';

interface ComplianceTaskListProps {
    tasks: ComplianceTask[];
}

const statusStyles: { [key in 'Pending' | 'Completed']: string } = {
    Pending: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    Completed: 'bg-green-500/20 text-green-300 border-green-500/30',
};

const ComplianceTaskList: React.FC<ComplianceTaskListProps> = ({ tasks }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-700">
            <h2 className="text-lg font-semibold text-gray-100 mb-4 px-2">Compliance Tasks</h2>
            <ul className="space-y-4">
                {tasks.length > 0 ? tasks.map(task => (
                    <li key={task.id} className="p-4 bg-gray-700/50 rounded-lg border border-gray-700">
                        <div className="flex justify-between items-start">
                            <p className="text-sm text-gray-300 flex-1 pr-4">{task.description}</p>
                            <span className={`px-2 py-1 text-xs font-medium rounded-md border ${statusStyles[task.status]}`}>
                                {task.status}
                            </span>
                        </div>
                        <div className="mt-3 flex justify-between items-center text-xs text-gray-400">
                            <span>Due: {task.dueDate}</span>
                            {task.relatedLicenseId && <span>License ID: {task.relatedLicenseId}</span>}
                        </div>
                    </li>
                )) : (
                     <li className="p-4 text-sm text-gray-400 text-center">No compliance tasks.</li>
                )}
            </ul>
        </div>
    );
};

export default ComplianceTaskList;
