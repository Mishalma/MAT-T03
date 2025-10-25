

import React from 'react';
import { ITSupportTicket } from '../types';

interface ITTicketDetailsProps {
    ticket: ITSupportTicket;
}

const ITTicketDetails: React.FC<ITTicketDetailsProps> = ({ ticket }) => {
    return (
        <div className="space-y-4 text-gray-200">
            <div>
                <p className="text-sm font-medium text-gray-400">User</p>
                <p>{ticket.user} ({ticket.department})</p>
            </div>
            <div>
                <p className="text-sm font-medium text-gray-400">Date Reported</p>
                <p>{ticket.date}</p>
            </div>
            <div>
                <p className="text-sm font-medium text-gray-400">Status & Priority</p>
                <p>{ticket.status} / {ticket.priority}</p>
            </div>
            <div>
                <p className="text-sm font-medium text-gray-400">Issue Description</p>
                <p className="whitespace-pre-wrap">{ticket.issue}</p>
            </div>
        </div>
    );
};

export default ITTicketDetails;