import { type Options } from '@popperjs/core';
import { usePopper } from "./hook/usePopper.tsx";
import type React from "react";

export const ChatListSettings: React.FC = () => {
    const config: Partial<Options> = {
        placement: 'right-start',
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 4],
                }
            }
        ]
    }

    const {
        refEl,
        boxEl,
        handleRefEvent,
        handleMouseEnter,
        handleMouseLeave
    } = usePopper(config, 'click');

    return (
        <div className="flex flex-col items-center justify-center py-3">
            <div className="inline-flex" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <button
                    ref={refEl as React.RefObject<HTMLButtonElement>} onClick={handleRefEvent}
                    className="btn size-10 rounded-full border border-slate-200 p-0 font-medium hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-500 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                        />
                    </svg>
                </button>
                <div ref={boxEl as React.RefObject<HTMLDivElement>} className="popper-root">
                    <div
                        className="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
                        <ul>
                            <li>
                                <a href="#"
                                   className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-hidden transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Action</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-hidden transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Action</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-hidden transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">Action</a>
                            </li>
                        </ul>
                        <div className="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
                        <ul>
                            <li>
                                <a href="#"
                                   className="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-hidden transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
                                    Separated Link
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}