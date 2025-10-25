


import React, { useState } from 'react';
import { License, ComplianceTask } from '../types';
// FIX: Corrected import path for icons.
import { PlusIcon } from './icons';
import LicenseTable from './LicenseTable';
import ComplianceTaskList from './ComplianceTaskList';
import Modal from './Modal';
import AddLicenseForm from './AddLicenseForm';
import LicenseDetails from './LicenseDetails';

interface ComplianceDashboardProps {
    licenses: License[];
    tasks: ComplianceTask[];
}

const ComplianceDashboard: React.FC<ComplianceDashboardProps> = ({ licenses, tasks }) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [selectedLicense, setSelectedLicense] = useState<License | null>(null);
    
    // In a real app, this would be handled by a state management library or context
    const handleAddLicense = (licenseData: Omit<License, 'id' | 'status'>) => {
        console.log("New license added:", licenseData);
        // Here you would typically update the state
        setIsAddModalOpen(false);
    };

    return (
        <div>
            <div className="flex justify-end my-6">
                <button
                    onClick={() => setIsAddModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                    <PlusIcon className="w-5 h-5" />
                    <span>Add License</span>
                </button>
            </div>
            <div className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-8">
                <div className="xl:col-span-2">
                    <LicenseTable licenses={licenses} onViewDetails={setSelectedLicense} />
                </div>
                <div>
                    <ComplianceTaskList tasks={tasks} />
                </div>
            </div>
            
            <Modal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                title="Add New License/Certification"
            >
                <AddLicenseForm onSubmit={handleAddLicense} />
            </Modal>

            {selectedLicense && (
                 <Modal
                    isOpen={!!selectedLicense}
                    onClose={() => setSelectedLicense(null)}
                    title={`Details for ${selectedLicense.name}`}
                >
                    <LicenseDetails license={selectedLicense} />
                </Modal>
            )}
        </div>
    );
};

export default ComplianceDashboard;