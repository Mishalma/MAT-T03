


import React, { useState } from 'react';
import { LabResult } from '../types';
import LabResultsTable from './LabResultsTable';
import Modal from './Modal';
import LabResultDetails from './LabResultDetails';
import StatCard from './StatCard';
// FIX: Corrected import path for icons.
import { BeakerIcon } from './icons';

interface LabDashboardProps {
    results: LabResult[];
}

const LabDashboard: React.FC<LabDashboardProps> = ({ results }) => {
    const [selectedResult, setSelectedResult] = useState<LabResult | null>(null);

    const completed = results.filter(r => r.status === 'Completed').length;
    const pending = results.filter(r => r.status === 'Pending').length;

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard title="Total Lab Orders" value={results.length} icon={<BeakerIcon />} color="text-blue-500" />
                <StatCard title="Results Completed" value={completed} icon={<BeakerIcon />} color="text-green-500" />
                <StatCard title="Results Pending" value={pending} icon={<BeakerIcon />} color="text-yellow-500" />
            </div>
            
            <LabResultsTable results={results} onViewDetails={setSelectedResult} />
            
            {selectedResult && (
                <Modal 
                    isOpen={!!selectedResult} 
                    onClose={() => setSelectedResult(null)}
                    title={`Lab Results for ${selectedResult.patientName}`}
                >
                    <LabResultDetails result={selectedResult} />
                </Modal>
            )}
        </div>
    );
};

export default LabDashboard;