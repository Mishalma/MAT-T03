


import React, { useState } from 'react';
import { HousekeepingTask, WasteCollection } from '../types';
// FIX: Corrected import path for icons.
import { PlusIcon } from './icons';
import HousekeepingTaskList from './HousekeepingTaskList';
import WasteManagementTable from './WasteManagementTable';
import Modal from './Modal';
import AddHousekeepingTaskForm from './AddHousekeepingTaskForm';
import AddWasteCollectionForm from './AddWasteCollectionForm';

interface HousekeepingDashboardProps {
    tasks: HousekeepingTask[];
    collections: WasteCollection[];
    onAddTask: (task: HousekeepingTask) => void;
    onAddCollection: (collection: WasteCollection) => void;
}

const HousekeepingDashboard: React.FC<HousekeepingDashboardProps> = ({ tasks, collections, onAddTask, onAddCollection }) => {
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
    const [isWasteModalOpen, setIsWasteModalOpen] = useState(false);

    const handleAddTask = (task: Omit<HousekeepingTask, 'id'>) => {
        onAddTask({ ...task, id: `HK-${Date.now()}` });
        setIsTaskModalOpen(false);
    };

    const handleAddCollection = (collection: Omit<WasteCollection, 'id'>) => {
        onAddCollection({ ...collection, id: `WC-${Date.now()}` });
        setIsWasteModalOpen(false);
    };

    return (
        <div>
            <div className="flex justify-end my-6 gap-4">
                <button onClick={() => setIsWasteModalOpen(true)} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg shadow-sm hover:bg-green-700">
                    <PlusIcon /> Add Waste Collection
                </button>
                <button onClick={() => setIsTaskModalOpen(true)} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700">
                    <PlusIcon /> Add Task
                </button>
            </div>
            <div className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-8">
                <div className="xl:col-span-2">
                    <WasteManagementTable collections={collections} />
                </div>
                <div>
                    <HousekeepingTaskList tasks={tasks} />
                </div>
            </div>

            <Modal isOpen={isTaskModalOpen} onClose={() => setIsTaskModalOpen(false)} title="Add Housekeeping Task">
                <AddHousekeepingTaskForm onSubmit={handleAddTask} />
            </Modal>
            <Modal isOpen={isWasteModalOpen} onClose={() => setIsWasteModalOpen(false)} title="Log Waste Collection">
                <AddWasteCollectionForm onSubmit={handleAddCollection} />
            </Modal>
        </div>
    );
};

export default HousekeepingDashboard;