

import React from 'react';
import { MortuaryCase } from '../types';

interface MortuaryCaseDetailsProps {
    mortuaryCase: MortuaryCase;
}

const DetailItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div>
        <p className="text-sm font-medium text-gray-400">{label}</p>
        <p className="text-md text-gray-100">{value}</p>
    </div>
);

const MortuaryCaseDetails: React.FC<MortuaryCaseDetailsProps> = ({ mortuaryCase }) => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
                <DetailItem label="Case ID" value={mortuaryCase.id} />
                <DetailItem label="Deceased Name" value={mortuaryCase.deceasedName} />
                <DetailItem label="Date of Death" value={mortuaryCase.dateOfDeath} />
                <DetailItem label="Date of Admission" value={mortuaryCase.dateOfAdmission} />
                <DetailItem label="Status" value={mortuaryCase.status} />
                <DetailItem label="Storage Location" value={mortuaryCase.storageLocation} />
            </div>
        </div>
    );
};

export default MortuaryCaseDetails;