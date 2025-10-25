


import React, { useState } from 'react';
import { DischargeProcess, ClearanceStatus, Clearance } from '../types';
import DischargeSummaryView from './DischargeSummaryView';

interface DischargeDetailsModalProps {
    process: DischargeProcess;
    onUpdate: (processId: string, department: 'pharmacy' | 'billing' | 'nursing', clearance: Clearance) => void;
}

const formInputStyle = "mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500";


const ClearanceSection: React.FC<{
    title: 'pharmacy' | 'billing' | 'nursing';
    clearance: Clearance;
    processId: string;
    onUpdate: (processId: string, department: 'pharmacy' | 'billing' | 'nursing', clearance: Clearance) => void;
}> = ({ title, clearance, processId, onUpdate }) => {
    const [currentClearance, setCurrentClearance] = useState<Clearance>(clearance);
    const [isEditing, setIsEditing] = useState(false);

    const handleSave = () => {
        onUpdate(processId, title, {
            ...currentClearance,
            updatedAt: new Date().toLocaleString(),
            updatedBy: 'Admin', // In a real app, this would be the logged-in user
        });
        setIsEditing(false);
    };

    const handleCancel = () => {
        setCurrentClearance(clearance);
        setIsEditing(false);
    }

    return (
        <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="font-semibold text-lg capitalize text-gray-100">{title}</h3>
            <div className="mt-2 space-y-3">
                {isEditing ? (
                    <>
                        <div>
                            <label className="text-sm font-medium text-gray-300">Status</label>
                            <select
                                value={currentClearance.status}
                                onChange={(e) => setCurrentClearance(prev => ({ ...prev, status: e.target.value as ClearanceStatus }))}
                                className={formInputStyle}
                            >
                                
                                {/* FIX: Cast enum value to string for key prop */}
                                {Object.values(ClearanceStatus).map(s => <option key={s as string} value={s}>{s}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-300">Notes</label>
                            <textarea
                                value={currentClearance.notes}
                                onChange={(e) => setCurrentClearance(prev => ({ ...prev, notes: e.target.value }))}
                                rows={3}
                                className={formInputStyle}
                            />
                        </div>
                        <div className="flex justify-end gap-2">
                            <button onClick={handleCancel} className="px-3 py-1 bg-gray-600 text-gray-100 rounded-md hover:bg-gray-500">Cancel</button>
                            <button onClick={handleSave} className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700">Save</button>
                        </div>
                    </>
                ) : (
                    <>
                        <p className="text-sm"><span className="font-medium text-gray-400">Status:</span> {currentClearance.status}</p>
                        <p className="text-sm"><span className="font-medium text-gray-400">Notes:</span> {currentClearance.notes || 'N/A'}</p>
                        {currentClearance.updatedAt && (
                           <p className="text-xs text-gray-500">Last updated by {currentClearance.updatedBy} at {currentClearance.updatedAt}</p>
                        )}
                        <div className="flex justify-end">
                            <button onClick={() => setIsEditing(true)} className="text-sm text-blue-400 hover:underline">Edit</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};


const DischargeDetailsModal: React.FC<DischargeDetailsModalProps> = ({ process, onUpdate }) => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ClearanceSection title="pharmacy" clearance={process.pharmacy} processId={process.id} onUpdate={onUpdate} />
                <ClearanceSection title="billing" clearance={process.billing} processId={process.id} onUpdate={onUpdate} />
                <ClearanceSection title="nursing" clearance={process.nursing} processId={process.id} onUpdate={onUpdate} />
            </div>
            {process.nursing.notes.includes("Discharge summary generated") && (
                 <DischargeSummaryView summary={process.nursing.notes} patientName={process.patientName} />
            )}
        </div>
    );
};

export default DischargeDetailsModal;