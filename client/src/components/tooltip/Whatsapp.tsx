// USE 
// <SupportChat 
// supportName="Customer Care"
// supportInitial="C"
// status="Available 24/7"
// statusColor="online"
// welcomeMessage="Hi there! How can we assist you today?"
// phoneNumber="+1234567890"
// className="shadow-lg rounded-lg overflow-hidden"
// />
import { useRef } from 'react';
type SupportChatProps = {
    supportName?: string;
    supportInitial?: string;
    status?: string;
    statusColor?: 'online' | 'offline' | 'busy';
    welcomeMessage?: string;
    phoneNumber?: string;
    className?: string;
};
export const Whatsapp = ({
    supportName = 'Support Team',
    supportInitial = 'S',
    status = 'Online',
    statusColor = 'online',
    welcomeMessage = 'Hello! How can we help you?',
    phoneNumber = '+919147711721',
    className = '',
}: SupportChatProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleSendMessage = () => {
        const message = inputRef.current?.value || '';
        if (message.trim()) {
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
            if (inputRef.current) {
                inputRef.current.value = '';
            }
        } else {
            alert("Please type a message!");
        }
    };
    const statusColors = {
        online: 'bg-green-500',
        offline: 'bg-gray-500',
        busy: 'bg-yellow-500',
    };
    return (
        <div className={`flex flex-col h-60 ${className}`}>
            {/* Header */}
            <div className={`${statusColors[statusColor]} text-white p-3 flex items-center gap-2`}>
                <div className="w-8 h-8 bg-white text-green-600 flex items-center justify-center rounded-full font-bold">
                    {supportInitial}
                </div>
                <div>
                    <p className="font-semibold leading-tight">{supportName}</p>
                    <p className="text-xs">{status}</p>
                </div>
            </div>
            {/* Messages */}
            <div className="flex-1 px-3 py-2 overflow-y-auto bg-gray-50 space-y-2 text-sm">
                <div className="flex flex-col items-start">
                    <div className="bg-white border rounded-lg px-3 py-2 shadow-sm">
                        <p>{welcomeMessage}</p>
                    </div>
                    <span className="text-xs text-gray-400 mt-1">
                        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                </div>
            </div>
            {/* Input */}
            <div className="border-t px-2 py-2 flex items-center gap-2 bg-white">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Type a message"
                    className="flex-1 border border-gray-300 rounded-full px-4 py-1 text-sm focus:outline-none"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button
                    className="text-green-600 text-xl cursor-pointer hover:text-green-700 transition-colors"
                    onClick={handleSendMessage}
                    aria-label="Send message"
                >
                    🕊️
                </button>
            </div>
        </div>
    );
};

