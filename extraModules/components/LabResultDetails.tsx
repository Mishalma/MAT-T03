

import React from 'react';
import { LabResult } from '../types';

interface LabResultDetailsProps {
    result: LabResult;
}

const LabResultDetails: React.FC<LabResultDetailsProps> = ({ result }) => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-b border-gray-700 pb-4">
                <div>
                    <p className="text-sm font-medium text-gray-400">Patient</p>
                    <p className="text-md text-gray-100">{result.patientName} ({result.patientId})</p>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-400">Test Type</p>
                    <p className="text-md text-gray-100">{result.testType}</p>
                </div>
                 <div>
                    <p className="text-sm font-medium text-gray-400">Collection Date</p>
                    <p className="text-md text-gray-100">{result.collectionDate}</p>
                </div>
            </div>

            <div>
                <h3 className="text-md font-semibold text-gray-200 mb-2">Test Components</h3>
                <div className="border border-gray-700 rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-700">
                         <thead className="bg-gray-700/50">
                            <tr>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase">Test</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase">Value</th>
                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase">Reference Range</th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-800 divide-y divide-gray-700">
                            {result.tests.length > 0 ? result.tests.map((test) => (
                                <tr key={test.id} className={test.isAbnormal ? 'bg-red-900/20' : ''}>
                                    <td className="px-4 py-3 font-medium text-gray-100 text-sm">{test.name}</td>
                                    <td className={`px-4 py-3 text-sm ${test.isAbnormal ? 'font-bold text-red-400' : 'text-gray-300'}`}>{test.value}</td>
                                    <td className="px-4 py-3 text-sm text-gray-400">{test.referenceRange}</td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={3} className="p-4 text-center text-sm text-gray-400">No component results available.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LabResultDetails;