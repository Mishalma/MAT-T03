
import React, { useState } from 'react';
import { PerformanceReview } from '../types';
// FIX: Corrected import path for icons.
import { PlusIcon } from './icons';
import Modal from './Modal';
import PerformanceReviewTable from './PerformanceReviewTable';
import StartReviewForm from './StartReviewForm';
import ReviewDetailsModal from './ReviewDetailsModal';

interface PerformanceDashboardProps {
    reviews: PerformanceReview[];
    onStartReview: (review: Omit<PerformanceReview, 'id' | 'status' | 'summary'>) => void;
}

const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ reviews, onStartReview }) => {
    const [isStartReviewModalOpen, setIsStartReviewModalOpen] = useState(false);
    const [selectedReview, setSelectedReview] = useState<PerformanceReview | null>(null);

    const handleStartReviewSubmit = (reviewData: Omit<PerformanceReview, 'id' | 'status' | 'summary'>) => {
        onStartReview(reviewData);
        setIsStartReviewModalOpen(false);
    };

    return (
        <div>
            <div className="flex justify-end my-6">
                <button onClick={() => setIsStartReviewModalOpen(true)} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700">
                    <PlusIcon /> Start Review
                </button>
            </div>
            <PerformanceReviewTable reviews={reviews} onViewDetails={setSelectedReview} />

            <Modal isOpen={isStartReviewModalOpen} onClose={() => setIsStartReviewModalOpen(false)} title="Start New Performance Review">
                <StartReviewForm onSubmit={handleStartReviewSubmit} />
            </Modal>
            {selectedReview && (
                <Modal isOpen={!!selectedReview} onClose={() => setSelectedReview(null)} title={`Review for ${selectedReview.employeeName}`}>
                    <ReviewDetailsModal review={selectedReview} />
                </Modal>
            )}
        </div>
    );
};

export default PerformanceDashboard;