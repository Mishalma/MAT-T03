import React from 'react';
import { TrainingSession } from '../types';

interface TrainingSessionListProps {
    sessions: TrainingSession[];
}

const TrainingSessionList: React.FC<TrainingSessionListProps> = ({ sessions }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-700">
            <h2 className="text-lg font-semibold text-gray-100 mb-4 px-2">Upcoming Training</h2>
            <ul className="space-y-4">
                {sessions.map(session => (
                    <li key={session.id} className="p-4 bg-gray-700/50 rounded-lg border border-gray-700">
                        <p className="font-semibold text-gray-100">{session.title}</p>
                        <p className="text-sm text-gray-400">Date: {session.date}</p>
                        <p className="text-sm text-gray-400">Attendees: {session.attendees.length}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrainingSessionList;
