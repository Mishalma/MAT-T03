
import React, { useState } from 'react';
import { Employee, TrainingSession } from '../types';
// FIX: Corrected import path for icons.
import { PlusIcon } from './icons';
import Modal from './Modal';
import EmployeeTable from './EmployeeTable';
import TrainingSessionList from './TrainingSessionList';
import AddEmployeeForm from './AddEmployeeForm';
import ScheduleTrainingForm from './ScheduleTrainingForm';

interface HRDashboardProps {
    employees: Employee[];
    sessions: TrainingSession[];
    onAddEmployee: (employee: Omit<Employee, 'id' | 'status'>) => void;
    onScheduleTraining: (session: Omit<TrainingSession, 'id'>) => void;
}

const HRDashboard: React.FC<HRDashboardProps> = ({ employees, sessions, onAddEmployee, onScheduleTraining }) => {
    const [isAddEmployeeModalOpen, setIsAddEmployeeModalOpen] = useState(false);
    const [isScheduleTrainingModalOpen, setIsScheduleTrainingModalOpen] = useState(false);

    const handleAddEmployeeSubmit = (employeeData: Omit<Employee, 'id' | 'status'>) => {
        onAddEmployee(employeeData);
        setIsAddEmployeeModalOpen(false);
    };

    const handleScheduleTrainingSubmit = (sessionData: Omit<TrainingSession, 'id'>) => {
        onScheduleTraining(sessionData);
        setIsScheduleTrainingModalOpen(false);
    };

    return (
        <div>
            <div className="flex justify-end my-6 gap-4">
                <button onClick={() => setIsScheduleTrainingModalOpen(true)} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg shadow-sm hover:bg-green-700">
                    <PlusIcon /> Schedule Training
                </button>
                <button onClick={() => setIsAddEmployeeModalOpen(true)} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700">
                    <PlusIcon /> Add Employee
                </button>
            </div>
            <div className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-8">
                <div className="xl:col-span-2">
                    <EmployeeTable employees={employees} />
                </div>
                <div>
                    <TrainingSessionList sessions={sessions} />
                </div>
            </div>

            <Modal isOpen={isAddEmployeeModalOpen} onClose={() => setIsAddEmployeeModalOpen(false)} title="Add New Employee">
                <AddEmployeeForm onSubmit={handleAddEmployeeSubmit} />
            </Modal>
            <Modal isOpen={isScheduleTrainingModalOpen} onClose={() => setIsScheduleTrainingModalOpen(false)} title="Schedule New Training Session">
                <ScheduleTrainingForm onSubmit={handleScheduleTrainingSubmit} />
            </Modal>
        </div>
    );
};

export default HRDashboard;