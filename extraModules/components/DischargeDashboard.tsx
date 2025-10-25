


import React from 'react';
import { DischargeProcess, TranscriptionRequest } from '../types';
// FIX: Corrected import path for icons.
import { PlusIcon, DocumentTextIcon } from './icons';
import DischargeProcessTable from './DischargeProcessTable';
import TranscriptionQueue from './TranscriptionQueue';

interface DischargeDashboardProps {
    processes: DischargeProcess[];
    tasks: TranscriptionRequest[];
    onInitiateDischarge: () => void;
    onStartTranscription: (request: TranscriptionRequest) => void;
    onViewDetails: (process: DischargeProcess) => void;
}

const DischargeDashboard: React.FC<DischargeDashboardProps> = ({ processes, tasks, onInitiateDischarge, onStartTranscription, onViewDetails }) => {
    return (
        <div>
            <div className="flex justify-end my-6 gap-4">
                <button
                    onClick={onInitiateDischarge}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                    <PlusIcon className="w-5 h-5" />
                    <span>Initiate Discharge</span>
                </button>
            </div>

            <div className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-8">
                <div className="xl:col-span-2">
                    <DischargeProcessTable processes={processes} onViewDetails={onViewDetails} />
                </div>
                <div>
                    <TranscriptionQueue tasks={tasks} onTranscribe={onStartTranscription} />
                </div>
            </div>
        </div>
    );
};

export default DischargeDashboard;