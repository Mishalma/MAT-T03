
import React from 'react';

interface DischargeSummaryViewProps {
    summary: string;
    patientName: string;
}

const DischargeSummaryView: React.FC<DischargeSummaryViewProps> = ({ summary, patientName }) => {
    // A simple way to format the summary text that may contain markdown-like headings
    const formattedSummary = summary.split('\n').map((line, index) => {
        if (line.startsWith('Discharge summary generated:')) {
            return null; // Don't show this line
        }
        if (line.match(/^#+\s/)) { // Basic check for markdown headers
            return <h4 key={index} className="text-md font-semibold text-gray-200 mt-3 mb-1">{line.replace(/^#+\s/, '')}</h4>;
        }
        if (line.trim() === '') {
            return <br key={index} />;
        }
        return <p key={index} className="text-sm text-gray-300">{line}</p>;
    }).filter(Boolean);

    return (
        <div className="mt-4 p-4 border border-gray-700 rounded-lg bg-gray-800/50">
            <h3 className="text-lg font-semibold text-gray-100 border-b border-gray-700 pb-2 mb-3">Discharge Summary for {patientName}</h3>
            <div className="space-y-1">
                {formattedSummary}
            </div>
        </div>
    );
};

export default DischargeSummaryView;