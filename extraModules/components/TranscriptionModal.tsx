

import React, { useState } from 'react';
import { TranscriptionRequest } from '../types';

interface TranscriptionModalProps {
    request: TranscriptionRequest;
    onTranscribe: (request: TranscriptionRequest, notes: string) => Promise<void>;
}

const formInputStyle = "mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500";


const TranscriptionModal: React.FC<TranscriptionModalProps> = ({ request, onTranscribe }) => {
    const [notes, setNotes] = useState('');
    const [isTranscribing, setIsTranscribing] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!notes) {
            alert('Please enter the notes to be summarized.');
            return;
        }
        setIsTranscribing(true);
        await onTranscribe(request, notes);
        // The parent component will close the modal on success.
        setIsTranscribing(false);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <p className="text-sm text-gray-300">
                    Enter the doctor's raw notes for <strong>{request.patientName}</strong> to generate a discharge summary.
                </p>
            </div>
            <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-300">Doctor's Notes</label>
                <textarea
                    name="notes"
                    id="notes"
                    rows={10}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className={formInputStyle}
                    placeholder="E.g., Patient stable post-op. Vitals WNL. Prescribing Amoxicillin 500mg TID for 7 days. Follow-up with PCP in 2 weeks. No strenuous activity..."
                ></textarea>
            </div>
            <div className="flex justify-end pt-4">
                <button
                    type="submit"
                    disabled={isTranscribing}
                    className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:bg-gray-500"
                >
                    {isTranscribing ? 'Generating...' : 'Generate Summary'}
                </button>
            </div>
        </form>
    );
};

export default TranscriptionModal;