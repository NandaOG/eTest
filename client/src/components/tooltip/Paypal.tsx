// USE
// <PayPalPayment 
// currencies={[
//     { label: 'USD ($)', value: 'USD123' },
//     { label: 'GBP (£)', value: 'GBP456' },
// ]}
// defaultCurrency="USD123"
// className="my-4"
// />
import { useState } from 'react';
import { SiPaypal } from 'react-icons/si';
type CurrencyOption = {
    label: string;
    value: string;
};
type PayPalPaymentProps = {
    currencies?: CurrencyOption[];
    defaultCurrency?: string;
    className?: string;
};
export const Paypal = ({
    currencies = [
        { label: 'USD ($)', value: 'CQYR6L2VYXVA4' },
        { label: 'AUD ($)', value: 'YD5T7VRGGNED2' },
        { label: 'EUR (€)', value: 'YXG4Q5DE23GYC' },
        { label: 'CAD ($)', value: 'HLCGUKTBFNUVC' }
    ],
    defaultCurrency = 'CQYR6L2VYXVA4',
    className = '',
}: PayPalPaymentProps) => {
    const [selectedCurrency, setSelectedCurrency] = useState(defaultCurrency);

    const handlePayment = () => {
        window.open(`https://www.paypal.com/ncp/payment/${selectedCurrency}`, '_blank');
    };
    return (
        <div className={`p-4 h-60 space-y-4 backdrop-blur-md bg-white/30 rounded-lg shadow-lg border border-white/20 ${className}`}>
            <div className="flex items-center gap-2">
                <div className="text-xl bg-blue-500 text-white p-1 rounded">
                    <SiPaypal />
                </div>
                <div>
                    <p className="font-semibold text-[#002440]">PayPal Payments</p>
                    <p className="text-[#002440] text-sm">Secure payment processing</p>
                </div>
            </div>
            {/* Currency selection */}
            <div className="space-y-3">
                <label className="block text-sm font-medium text-[#002440]">Currency</label>
                <div className="grid grid-cols-2 gap-x-20 gap-y-4">
                    {currencies.map(({ label, value }) => (
                        <label key={value} className="flex items-center gap-2 text-sm cursor-pointer group">
                            <input
                                type="radio"
                                name="paypalCurrency"
                                value={value}
                                checked={selectedCurrency === value}
                                onChange={() => setSelectedCurrency(value)}
                                className="absolute opacity-0 h-0 w-0"
                            />
                            <div className={`flex items-center justify-center w-5 h-5 border-2 rounded-full transition-colors 
              ${selectedCurrency === value ? 'border-gray-300' : 'border-gray-300 group-hover:border-gray-300'}`}>
                                <div className={`w-3 h-3 rounded-full transition-colors 
                ${selectedCurrency === value ? 'bg-green-300' : 'bg-transparent group-hover:bg-green-300'}`} />
                            </div>
                            <span className={`transition-colors 
              ${selectedCurrency === value ? 'text-[#002440] font-bold' : 'text-gray-700 group-hover:text-[#002440]'}`}>
                                {label}
                            </span>
                        </label>
                    ))}
                </div>
            </div>
            {/* Pay button */}
            <button
                className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md cursor-pointer transition-colors"
                onClick={handlePayment}
            >
                Pay Now
            </button>
        </div>
    );
};