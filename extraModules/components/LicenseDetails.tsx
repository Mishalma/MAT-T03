

import React from 'react';
import { License } from '../types';

interface LicenseDetailsProps {
    license: License;
}

const DetailItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div>
        <p className="text-sm font-medium text-gray-400">{label}</p>
        <p className="text-md text-gray-100">{value}</p>
    </div>
);

const LicenseDetails: React.FC<LicenseDetailsProps> = ({ license }) => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <DetailItem label="Personnel" value={license.personnel} />
                <DetailItem label="License Name" value={license.name} />
                <DetailItem label="Status" value={license.status} />
                <DetailItem label="Issuing Authority" value={license.issuingAuthority} />
                <DetailItem label="Issue Date" value={license.issueDate} />
                <DetailItem label="Expiry Date" value={license.expiryDate} />
            </div>
        </div>
    );
};

export default LicenseDetails;