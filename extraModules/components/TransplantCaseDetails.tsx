

import React from 'react';
import { TransplantCase } from '../types';

interface TransplantCaseDetailsProps {
    transplantCase: TransplantCase;
}

const DetailItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div>
        <p className="text-sm font-medium text-gray-400">{label}</p>
        <p className="text-md text-gray-100">{value}</p>
    </div>
);

const TransplantCaseDetails: React.FC<TransplantCaseDetailsProps> = ({ transplantCase }) => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
                <DetailItem label="Case ID" value={transplantCase.id} />
                <DetailItem label="Patient Name" value={transplantCase.patientName} />
                <DetailItem label="Organ" value={transplantCase.organ} />
                <DetailItem label="Status" value={transplantCase.status} />
                <DetailItem label="Priority" value={transplantCase.priority} />
                <DetailItem label="Match Date" value={transplantCase.matchDate} />
            </div>
        </div>
    );
};

export default TransplantCaseDetails;