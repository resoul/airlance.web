import { type Options } from '@popperjs/core';
import { usePopper } from "./hook/usePopper.tsx";
import type React from "react";
import type { Contact } from "./types/contact.ts";
import { useNavigate } from 'react-router-dom';

interface ChatHeaderProps {
    contact?: Contact;
    onToggleChatDetail: () => void;
    isChatDetailOpen: boolean;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
                                                          contact,
                                                   onToggleChatDetail,
                                                   isChatDetailOpen
                                               }) => {
    const navigate = useNavigate();
    const config: Partial<Options> = {
        placement: 'bottom-end',
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 4],
                }
            }
        ]
    }

    const handleClick = () => {
        document.body.classList.toggle("is-sidebar-open");
    }

    const handleVideoClick = () => {
        navigate(`/video`);
    };

    const {
        refEl,
        boxEl,
        handleRefEvent,
        handleMouseEnter,
        handleMouseLeave
    } = usePopper(config, 'click');

    const displayName = contact?.name || 'Select a contact';
    const displayAvatar = contact?.avatar || '/images/200x200.png';
    const displayStatus = contact?.status === 'online' ? 'Online' : 'Last seen recently';

    return (
        <div className="chat-header relative z-10 flex h-[61px] w-full shrink-0 items-center justify-between border-b border-slate-150 bg-white px-[calc(var(--margin-x)-.5rem)] shadow-xs transition-[padding,width] duration-[.25s] dark:border-navy-700 dark:bg-navy-800">
            <div className="flex items-center space-x-5">
                <div className="ml-1 size-7">
                    <button
                        onClick={handleClick}
                        className="sidebar-toggle cursor-pointer ml-0.5 flex size-7 flex-col justify-center space-y-1.5 text-primary outline-hidden focus:outline-hidden dark:text-accent-light/80">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div onClick={onToggleChatDetail}
                     className="flex cursor-pointer items-center space-x-4 font-inter">
                    <div className="avatar">
                        <img className="rounded-full" src={displayAvatar} alt="avatar"/>
                    </div>
                    <div>
                        <p className="font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
                            { displayName }
                        </p>
                        <p className="mt-0.5 text-xs">{ displayStatus }</p>
                    </div>
                </div>
            </div>
            <div className="-mr-1 flex items-center">
                <button
                    onClick={handleVideoClick}
                    className="btn hidden size-9 rounded-full p-0 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5.5" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                </button>
                <button
                    className="btn size-9 rounded-full p-0 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5.5" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                </button>
                <button onClick={onToggleChatDetail}
                        className={`btn hidden size-9 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:flex ${isChatDetailOpen ? "text-primary dark:text-accent-light" : "text-slate-500 dark:text-navy-200"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5.5" fill="none" stroke="currentColor"
                         strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M9.25 21.167h5.5c4.584 0 6.417-1.834 6.417-6.417v-5.5c0-4.583-1.834-6.417-6.417-6.417h-5.5c-4.583 0-6.417 1.834-6.417 6.417v5.5c0 4.583 1.834 6.417 6.417 6.417ZM13.834 2.833v18.334"/>
                    </svg>
                </button>
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="inline-flex">
                    <button
                        ref={refEl as React.RefObject<HTMLButtonElement>} onClick={handleRefEvent}
                        className="popper-ref btn size-9 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5.5" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                        </svg>
                    </button>
                    <div ref={boxEl as React.RefObject<HTMLDivElement>} className="popper-root">
                        <div
                            className="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
                            <ul>
                                <li>
                                    <a href="#"
                                       className="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-hidden transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="mt-px size-5"
                                             fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                             strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                                                  clipRule="evenodd"/>
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/>
                                        </svg>
                                        <span>Unmute</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-hidden transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="mt-px size-5"
                                             fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                             strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>
                                        <span>Chat Setting</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide outline-hidden transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="mt-px size-5"
                                             fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                             strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                                        </svg>
                                        <span>Block User</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="flex h-8 items-center space-x-3 px-3 pr-8 font-medium tracking-wide text-error outline-hidden transition-all hover:bg-error/20 focus:bg-error/20">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                        </svg>
                                        <span> Delete chat</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
