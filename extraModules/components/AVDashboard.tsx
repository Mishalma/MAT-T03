


import React, { useState } from 'react';
import { AVContent } from '../types';
// FIX: Corrected import path for icons.
import { PlusIcon } from './icons';
import AVContentTable from './AVContentTable';
import Modal from './Modal';
import AddAVContentForm from './AddAVContentForm';
import AVContentDetails from './AVContentDetails';

interface AVDashboardProps {
    content: AVContent[];
    onAddContent: (contentData: Omit<AVContent, 'id' | 'uploadDate' | 'status'>) => void;
}

const AVDashboard: React.FC<AVDashboardProps> = ({ content, onAddContent }) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [selectedContent, setSelectedContent] = useState<AVContent | null>(null);

    const handleSubmit = (contentData: Omit<AVContent, 'id' | 'uploadDate' | 'status'>) => {
        onAddContent(contentData);
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
                    <span>Add A/V Content</span>
                </button>
            </div>
            <AVContentTable content={content} onViewDetails={setSelectedContent} />

            <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="Add New A/V Content">
                <AddAVContentForm onSubmit={handleSubmit} />
            </Modal>
            
            {selectedContent && (
                <Modal isOpen={!!selectedContent} onClose={() => setSelectedContent(null)} title={`Details for ${selectedContent.title}`}>
                    <AVContentDetails content={selectedContent} />
                </Modal>
            )}
        </div>
    );
};

export default AVDashboard;