


import React from 'react';
import { TranscriptionRequest } from '../types';
// FIX: Corrected import path for icons.
import { DocumentTextIcon } from './icons';

interface TranscriptionQueueProps {
    tasks: TranscriptionRequest[];
    onTranscribe: (task: TranscriptionRequest) => void;
}

const statusStyles: { [key in 'Pending' | 'Transcribing' | 'Completed']: string } = {
    Pending: 'border-yellow-500/30 text-yellow-300',
    Transcribing: 'border-blue-500/30 text-blue-300',
    Completed: 'border-green-500/30 text-green-300',
};

const TranscriptionQueue: React.FC<TranscriptionQueueProps> = ({ tasks, onTranscribe }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-700">
            <div className="flex items-center gap-2 mb-4 px-2">
                <DocumentTextIcon className="text-gray-300" />
                <h2 className="text-lg font-semibold text-gray-100">Transcription Queue</h2>
            </div>
            <ul className="space-y-3">
                {tasks.map(task => (
                    <li key={task.id} className="p-3 bg-gray-700/50 rounded-lg border border-gray-700">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="font-semibold text-gray-100">{task.patientName}</p>
                                <p className="text-sm text-gray-400">{task.id}</p>
                            </div>
                            <span className={`px-2 py-1 text-xs font-medium rounded-md border ${statusStyles[task.status]}`}>
                                {task.status}
                            </span>
                        </div>
                         <div className="mt-3 flex justify-between items-center text-xs text-gray-400">
                            <span>Requested: {task.requestTime}</span>
                            {task.status === 'Pending' && (
                                <button onClick={() => onTranscribe(task)} className="px-2 py-1 text-xs text-white bg-green-600 rounded hover:bg-green-700">
                                    Transcribe
                                </button>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TranscriptionQueue;