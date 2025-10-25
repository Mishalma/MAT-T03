
import React from 'react';
import { PerformanceReview } from '../types';

interface ReviewDetailsModalProps {
    review: PerformanceReview;
}

const ReviewDetailsModal: React.FC<ReviewDetailsModalProps> = ({ review }) => {
    return (
        <div className="space-y-4 text-gray-200">
            <div>
                <p className="text-sm font-medium text-gray-400">Employee</p>
                <p>{review.employeeName} ({review.employeeId})</p>
            </div>
            <div>
                <p className="text-sm font-medium text-gray-400">Review Date</p>
                <p>{review.reviewDate}</p>
            </div>
            <div>
                <p className="text-sm font-medium text-gray-400">Status</p>
                <p>{review.status}</p>
            </div>
            <div>
                <p className="text-sm font-medium text-gray-400">Summary</p>
                <p className="whitespace-pre-wrap">{review.summary || 'No summary yet.'}</p>
            </div>
        </div>
    );
};

export default ReviewDetailsModal;