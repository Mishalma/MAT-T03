

import React from 'react';
import { Complaint } from '../types';

interface ComplaintDetailsProps {
    complaint: Complaint;
}

const ComplaintDetails: React.FC<ComplaintDetailsProps> = ({ complaint }) => {
    return (
        <div className="space-y-4 text-gray-200">
            <div>
                <p className="text-sm font-medium text-gray-400">Complainant</p>
                <p>{complaint.complainant}</p>
            </div>
            <div>
                <p className="text-sm font-medium text-gray-400">Department</p>
                <p>{complaint.department}</p>
            </div>
            <div>
                <p className="text-sm font-medium text-gray-400">Date Filed</p>
                <p>{complaint.date}</p>
            </div>
            <div>
                <p className="text-sm font-medium text-gray-400">Description</p>
                <p className="whitespace-pre-wrap">{complaint.description}</p>
            </div>
        </div>
    );
};

export default ComplaintDetails;