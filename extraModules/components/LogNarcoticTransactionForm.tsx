
import React, { useState } from 'react';
import { NarcoticLog, Narcotic } from '../types';

interface LogNarcoticTransactionFormProps {
    inventory: Narcotic[];
    onSubmit: (log: Omit<NarcoticLog, 'id'>) => void;
}
const formInputStyle = "mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500";


const LogNarcoticTransactionForm: React.FC<LogNarcoticTransactionFormProps> = ({ inventory, onSubmit }) => {
    const [formData, setFormData] = useState<Omit<NarcoticLog, 'id' | 'narcoticName'>>({
        narcoticId: inventory[0]?.id || '',
        transactionType: 'Dispense',
        amount: 0,
        user: '',
        timestamp: new Date().toLocaleString(),
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'number' ? parseFloat(value) : value as any }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const narcoticName = inventory.find(n => n.id === formData.narcoticId)?.name || 'Unknown';
        onSubmit({ ...formData, narcoticName });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <select name="narcoticId" value={formData.narcoticId} onChange={handleChange} required className={formInputStyle}>
                {inventory.map(n => <option key={n.id} value={n.id}>{n.name}</option>)}
            </select>
            <select name="transactionType" value={formData.transactionType} onChange={handleChange} required className={formInputStyle}>
                <option>Dispense</option>
                <option>Restock</option>
                <option>Audit</option>
            </select>
            <input type="number" name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} required min="0" className={formInputStyle}/>
            <input type="text" name="user" placeholder="Your Name/ID" value={formData.user} onChange={handleChange} required className={formInputStyle}/>
            <div className="flex justify-end pt-4">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">Log Transaction</button>
            </div>
        </form>
    );
};

export default LogNarcoticTransactionForm;