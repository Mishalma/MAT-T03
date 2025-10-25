
import React, { ReactNode } from 'react';

interface StatCardProps {
    title: string;
    value: string | number;
    icon: ReactNode;
    color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color }) => {
    return (
        <div className="bg-gray-800 p-5 rounded-xl shadow-lg border border-gray-700 flex items-center justify-between">
            <div>
                <p className="text-sm font-medium text-gray-400">{title}</p>
                <p className="text-2xl font-bold text-gray-100 mt-1">{value}</p>
            </div>
            <div className={`p-3 rounded-full bg-gray-700/50 ${color}`}>
                {icon}
            </div>
        </div>
    );
};

export default StatCard;
