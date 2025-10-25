

import React from 'react';
import { AVContent } from '../types';

interface AVContentDetailsProps {
    content: AVContent;
}

const DetailItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div>
        <p className="text-sm font-medium text-gray-400">{label}</p>
        <p className="text-md text-gray-100">{value}</p>
    </div>
);

const AVContentDetails: React.FC<AVContentDetailsProps> = ({ content }) => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <DetailItem label="Content ID" value={content.id} />
                <DetailItem label="Title" value={content.title} />
                <DetailItem label="Type" value={content.type} />
                <DetailItem label="Status" value={content.status} />
                <DetailItem label="Uploaded By" value={content.uploadedBy} />
                <DetailItem label="Upload Date" value={content.uploadDate} />
            </div>
             <div>
                <p className="text-sm font-medium text-gray-400">Description</p>
                <p className="text-md text-gray-200 mt-1">{content.description}</p>
            </div>
        </div>
    );
};

export default AVContentDetails;