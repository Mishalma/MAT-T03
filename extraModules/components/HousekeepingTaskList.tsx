import React from 'react';
import { HousekeepingTask } from '../types';

interface HousekeepingTaskListProps {
    tasks: HousekeepingTask[];
}

const priorityStyles = {
    High: 'bg-red-500/20 text-red-300 border-red-500/30',
    Medium: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    Low: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
};

const HousekeepingTaskList: React.FC<HousekeepingTaskListProps> = ({ tasks }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-700">
            <h2 className="text-lg font-semibold text-gray-100 mb-4 px-2">Housekeeping Tasks</h2>
            <ul className="space-y-4">
                {tasks.map(task => (
                    <li key={task.id} className="p-4 bg-gray-700/50 rounded-md border border-gray-700">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="font-semibold text-gray-100">{task.location}</p>
                                <p className="text-sm text-gray-400">{task.task}</p>
                            </div>
                            <span className={`px-2 py-1 text-xs font-medium rounded-md border ${priorityStyles[task.priority]}`}>
                                {task.priority}
                            </span>
                        </div>
                        <div className="mt-3 flex justify-between items-center text-xs text-gray-400">
                            <span>Assigned To: {task.assignedTo}</span>
                            <span className="font-semibold text-gray-200">{task.status}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HousekeepingTaskList;
