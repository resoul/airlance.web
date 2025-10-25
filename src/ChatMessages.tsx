import { useEffect, useRef } from "react";
import { useAvatar } from "./avatar/useAvatar.ts";
import type { Message } from "./types/message.ts";
import { DateSeparator } from "./components/DateSeparator.tsx";

interface ChatMessagesProps {
    messages: Message[];
}

export function ChatMessages({ messages }: ChatMessagesProps) {
    const { avatar } = useAvatar();
    const avatarSrc = avatar ?? "/images/200x200.png"
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = (behavior: ScrollBehavior = "smooth") => {
        messagesEndRef.current?.scrollIntoView({ behavior });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    };

    const isDifferentDay = (a?: Message, b?: Message) => {
        if (!a || !b) return true;
        return (
            new Date(a.timestamp).toDateString() !==
            new Date(b.timestamp).toDateString()
        );
    };

    const shouldShowDateSeparator = (current: Message, prev?: Message) =>
        isDifferentDay(current, prev);

    const shouldShowAvatarAndTime = (current: Message, next?: Message) => {
        if (!next) return true; // последнее сообщение в списке
        if (current.isOwn !== next.isOwn) return true; // другой автор
        if (isDifferentDay(current, next)) return true; // новый день — показываем
        return false;
    };

    return (
        <div
            ref={containerRef}
            className="scrollbar-sm grow overflow-y-auto px-[calc(var(--margin-x)-.5rem)] py-5 transition-all duration-[.25s]"
        >
            <div className="space-y-5">
                {messages.map((message, index) => {
                    const prev = messages[index - 1];
                    const next = messages[index + 1];
                    const showDateSeparator = shouldShowDateSeparator(message, prev);
                    const showAvatarAndTime = shouldShowAvatarAndTime(message, next);
                    const isOwn = message.isOwn;

                    return (
                        <div key={message.id}>
                            {showDateSeparator && (
                                <DateSeparator date={new Date(message.timestamp)} />
                            )}

                            {isOwn ? (
                                <div className="flex items-start justify-end space-x-2.5 sm:space-x-5">
                                    <div className="flex flex-col items-end space-y-3.5">
                                        <div className="ml-4 max-w-lg sm:ml-10">
                                            <div className="rounded-2xl rounded-tr-none bg-info/10 p-3 text-slate-700 shadow-xs dark:bg-accent dark:text-white">
                                                {message.text}
                                            </div>
                                            {showAvatarAndTime && (
                                                <p className="mt-1 ml-auto text-left text-xs text-slate-400 dark:text-navy-300">
                                                    {formatTime(new Date(message.timestamp))}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        {showAvatarAndTime && (
                                            <img className="rounded-full" src={avatarSrc} alt="avatar"/>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-start space-x-2.5 sm:space-x-5">
                                    <div className="avatar">
                                        {showAvatarAndTime && (
                                            <img className="rounded-full" src={message.avatar || '/images/200x200.png'} alt="avatar"/>
                                        )}
                                    </div>
                                    <div className="flex flex-col items-start space-y-3.5">
                                        <div className="mr-4 max-w-lg sm:mr-10">
                                            {message.text && (
                                                <>
                                                    <div className="rounded-2xl rounded-tl-none bg-white p-3 text-slate-700 shadow-xs dark:bg-navy-700 dark:text-navy-100">
                                                        {message.text}
                                                    </div>
                                                    <p className="mt-1 ml-auto text-right text-xs text-slate-400 dark:text-navy-300">
                                                        {formatTime(new Date(message.timestamp))}
                                                    </p>
                                                </>
                                            )}
                                            {message.images && message.images.length > 0 && (
                                                <>
                                                    <div className="grid grid-cols-12 gap-2">
                                                        <div className="group relative col-span-12 sm:col-span-4">
                                                            <img className="h-full rounded-lg object-cover" src={message.images[0]} alt="image"/>
                                                            <div className="absolute top-0 flex h-full w-full items-center justify-center rounded-lg bg-black/30 opacity-0 transition-all duration-300 group-hover:opacity-100">
                                                                <button className="btn size-9 rounded-full bg-info p-0 font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {message.images.length > 1 && (
                                                            <div className="col-span-12 grid grid-cols-2 gap-2 sm:col-span-8">
                                                                {message.images.slice(1).map((img, idx) => (
                                                                    <div key={idx} className="group relative">
                                                                        <img className="h-full rounded-lg object-cover" src={img} alt="image"/>
                                                                        <div className="absolute top-0 flex h-full w-full items-center justify-center rounded-lg bg-black/30 opacity-0 transition-all duration-300 group-hover:opacity-100">
                                                                            <button className="btn size-9 rounded-full bg-info p-0 font-medium text-white hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90">
                                                                                <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                    {showAvatarAndTime && (
                                                        <p className="mt-1 ml-auto text-right text-xs text-slate-400 dark:text-navy-300">
                                                            {formatTime(new Date(message.timestamp))}
                                                        </p>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}
                <div ref={messagesEndRef} />
            </div>
        </div>
    )
}