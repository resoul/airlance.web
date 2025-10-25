import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { Contact } from '../types/contact';

interface ContactItemProps {
    contact: Contact;
    variant?: 'full' | 'mini';
}

export const ContactItem: React.FC<ContactItemProps> = ({ contact, variant = 'full' }) => {
    const navigate = useNavigate();
    const { contactId } = useParams();
    const isActive = contactId === contact.id;

    const handleClick = () => {
        navigate(`/messenger/${contact.id}`);
    };

    const getStatusDotClass = () => {
        if (contact.status === 'online') {
            return 'bg-primary dark:bg-accent';
        }
        return 'bg-slate-300';
    };

    const isMini = variant === 'mini';

    return (
        <div
            onClick={handleClick}
            className={`flex cursor-pointer items-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600 ${
                isMini ? 'justify-center' : 'space-x-2.5 px-4 font-inter'
            } ${isActive ? 'bg-slate-150 dark:bg-navy-600' : ''}`}
        >
            <div className="avatar size-10">
                <img
                    className="rounded-full"
                    src={contact.avatar}
                    alt={contact.name}
                />
                <div
                    className={`absolute right-0 size-3 rounded-full border-2 border-white dark:border-navy-700 ${getStatusDotClass()}`}
                >
                    {contact.status === 'online' && (
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-80 dark:bg-accent"></span>
                    )}
                </div>
            </div>
            {!isMini && (
                <div className="flex flex-1 flex-col">
                    <div className="flex items-baseline justify-between space-x-1.5">
                        <p className="text-xs-plus font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
                            {contact.name}
                        </p>
                        <span className="text-tiny-plus text-slate-400 dark:text-navy-300">
                            {contact.time}
                        </span>
                    </div>
                    <div className="mt-1 flex items-center justify-between space-x-1">
                        <p className="text-xs-plus text-slate-400 line-clamp-1 dark:text-navy-300">
                            {contact.lastMessage}
                        </p>
                        {contact.unreadCount && contact.unreadCount > 0 && (
                            <div
                                className={`flex h-4.5 min-w-[1.125rem] items-center justify-center rounded-full px-1.5 text-tiny-plus font-medium leading-none ${
                                    isActive
                                        ? 'bg-primary text-white dark:bg-accent'
                                        : 'bg-slate-200 text-slate-800 dark:bg-navy-450 dark:text-white'
                                }`}
                            >
                                {contact.unreadCount}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};