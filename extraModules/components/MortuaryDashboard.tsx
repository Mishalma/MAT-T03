


import React, { useState } from 'react';
import { MortuaryCase } from '../types';
// FIX: Corrected import path for icons.
import { PlusIcon } from './icons';
import MortuaryCasesTable from './MortuaryCasesTable';
import Modal from './Modal';
import MortuaryCaseDetails from './MortuaryCaseDetails';

interface MortuaryDashboardProps {
    cases: MortuaryCase[];
    onAddCase: () => void;
}

const MortuaryDashboard: React.FC<MortuaryDashboardProps> = ({ cases, onAddCase }) => {
    const [selectedCase, setSelectedCase] = useState<MortuaryCase | null>(null);

    return (
        <div>
            <div className="flex justify-end my-6">
                <button
                    onClick={onAddCase}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                    <PlusIcon className="w-5 h-5" />
                    <span>Add Case</span>
                </button>
            </div>
            <MortuaryCasesTable cases={cases} onViewDetails={setSelectedCase} />
            
            {selectedCase && (
                <Modal
                    isOpen={!!selectedCase}
                    onClose={() => setSelectedCase(null)}
                    title={`Details for ${selectedCase.deceasedName}`}
                >
                    <MortuaryCaseDetails mortuaryCase={selectedCase} />
                </Modal>
            )}
        </div>
    );
};

export default MortuaryDashboard;