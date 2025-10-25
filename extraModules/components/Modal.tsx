
import React, { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { XMarkIcon } from './icons';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);


    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div 
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center backdrop-blur-sm" 
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div 
                className="bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl mx-4 p-6 border border-gray-700 animate-fade-in" 
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-between items-center border-b border-gray-700 pb-3 mb-4">
                    <h2 id="modal-title" className="text-xl font-semibold text-gray-100">{title}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors" aria-label="Close modal">
                        <XMarkIcon />
                    </button>
                </div>
                <div>{children}</div>
            </div>
        </div>,
        document.getElementById('modal-root')!
    );
};

export default Modal;