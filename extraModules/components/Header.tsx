
import React from 'react';
import { Module } from '../types';

interface HeaderProps {
    title: string;
    modules: Module[];
    activeModuleKey: string;
    onModuleSelect: (key: string) => void;
    onBack: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, modules, activeModuleKey, onModuleSelect, onBack }) => {
    return (
        <header className="bg-gray-800 shadow-md sticky top-0 z-40 border-b border-gray-700">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <button onClick={onBack} className="text-gray-300 hover:text-white mr-6 text-sm flex items-center gap-1">
                            <span className="text-lg">&larr;</span> Back to Services
                        </button>
                        <h1 className="text-xl font-bold text-white">{title}</h1>
                    </div>
                </div>
                <div className="border-t border-gray-700">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {modules.map((module) => (
                            <button
                                key={module.key}
                                onClick={() => onModuleSelect(module.key)}
                                className={`${
                                    activeModuleKey === module.key
                                        ? 'border-blue-500 text-blue-400'
                                        : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500'
                                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
                                aria-current={activeModuleKey === module.key ? 'page' : undefined}
                            >
                                {module.name}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
