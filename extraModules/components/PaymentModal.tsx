// Provided full implementation for the missing PaymentModal component.
import React, { useState } from 'react';

interface PaymentModalProps {
    onProcessPayment: (amount: number, method: string) => void;
    onClose: () => void;
    patientName: string;
    outstandingBalance: number;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ onProcessPayment, onClose, patientName, outstandingBalance }) => {
    const [paymentMethod, setPaymentMethod] = useState('Credit Card');
    const [amount, setAmount] = useState(outstandingBalance);

    const handleSubmit = () => {
        onProcessPayment(amount, paymentMethod);
        onClose();
    };

    return (
        <div className="space-y-4">
            <p className="text-sm text-gray-700">
                Processing payment for <strong>{patientName}</strong>.
                <br />
                Outstanding Balance: <strong>${outstandingBalance.toFixed(2)}</strong>
            </p>
            <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Payment Amount</label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(parseFloat(e.target.value))}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <div>
                <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">Payment Method</label>
                <select
                    id="paymentMethod"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                    <option>Credit Card</option>
                    <option>Debit Card</option>
                    <option>Cash</option>
                    <option>Insurance</option>
                </select>
            </div>
            <div className="flex justify-end pt-4 gap-4">
                 <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300">
                    Cancel
                </button>
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700"
                >
                    Process Payment
                </button>
            </div>
        </div>
    );
};

export default PaymentModal;
