import { DarkModeToggle } from "./darkMode";
import { useDrawer } from "./hook/useDrawer.tsx";
import { useTab } from "./hook/useTab.tsx";
import type { Contact } from "./types/contact.ts";

interface ChatDetailProps {
    contact?: Contact;
    drawer: ReturnType<typeof useDrawer>;
}

const MediaTabContent: React.FC = () => (
    <div className="grid grid-cols-4 gap-2">
        <img className="aspect-square rounded-lg object-cover object-center"
             src="/images/800x600.png" alt="image"/>
        <img className="aspect-square rounded-lg object-cover object-center"
             src="/images/800x600.png" alt="image"/>
        <img className="aspect-square rounded-lg object-cover object-center"
             src="/images/800x600.png" alt="image"/>
        <img className="aspect-square rounded-lg object-cover object-center"
             src="/images/800x600.png" alt="image"/>
        <img className="aspect-square rounded-lg object-cover object-center"
             src="/images/800x600.png" alt="image"/>
        <img className="aspect-square rounded-lg object-cover object-center"
             src="/images/800x600.png" alt="image"/>
        <img className="aspect-square rounded-lg object-cover object-center"
             src="/images/800x600.png" alt="image"/>
        <img className="aspect-square rounded-lg object-cover object-center"
             src="/images/800x600.png" alt="image"/>
        <img className="aspect-square rounded-lg object-cover object-center"
             src="/images/800x600.png" alt="image"/>
        <img className="aspect-square rounded-lg object-cover object-center"
             src="/images/800x600.png" alt="image"/>
        <img className="aspect-square rounded-lg object-cover object-center"
             src="/images/800x600.png" alt="image"/>
        <img className="aspect-square rounded-lg object-cover object-center"
             src="/images/800x600.png" alt="image"/>
    </div>
);
const FilesTabContent: React.FC = () => (
    <div className="flex flex-col space-y-3.5">
        <div className="flex items-center space-x-3">
            <div
                className="mask is-squircle flex size-11 items-center justify-center bg-secondary text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
                </svg>
            </div>
            <div>
                <p className="font-medium text-slate-700 dark:text-navy-100"> Slow
                    Music </p>
                <div className="flex text-xs text-slate-400 dark:text-navy-300">
                    <span>03:12</span>
                    <div
                        className="mx-2 my-1 w-px bg-slate-200 dark:bg-navy-500"></div>
                    <span>8.32 MB</span>
                </div>
            </div>
        </div>
        <div className="flex items-center space-x-3">
            <div
                className="mask is-squircle flex size-11 items-center justify-center bg-info text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
            </div>
            <div>
                <p className="font-medium text-slate-700 dark:text-navy-100"> Final.fig </p>
                <div className="flex text-xs text-slate-400 dark:text-navy-300">
                    <span>45 MB</span>
                </div>
            </div>
        </div>
        <div className="flex items-center space-x-3">
            <div
                className="mask is-squircle flex size-11 items-center justify-center bg-warning text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
            </div>
            <div>
                <p className="font-medium text-slate-700 dark:text-navy-100"> Report.docx </p>
                <div className="flex text-xs text-slate-400 dark:text-navy-300">
                    <span>3.5 MB</span>
                </div>
            </div>
        </div>
        <div className="flex items-center space-x-3">
            <div
                className="mask is-squircle flex size-11 items-center justify-center bg-success text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
            </div>
            <div>
                <p className="font-medium text-slate-700 dark:text-navy-100"> TheBook.pdf </p>
                <div className="flex text-xs text-slate-400 dark:text-navy-300">
                    <span>14 MB</span>
                </div>
            </div>
        </div>
    </div>
);

export const ChatDetail: React.FC<ChatDetailProps> = ({ contact, drawer }) => {
    const tabs = [
        {
            id: "#tab-media-images",
            label: (
                <>Images</>
            ),
            content: <MediaTabContent />,
        },
        {
            id: "#tab-media-files",
            label: (
                <>Files</>
            ),
            content: <FilesTabContent />,
        }
    ]

    const {
        activeTab,
        getTabProps,
        getTabPanelProps
    } = useTab(tabs, {
        defaultTab: "#tab-media-images",
        onChange: (tabId) => {
            console.log('Active tab:', tabId);
        },
    })

    const displayName = contact?.name || 'Select a contact';
    const displayAvatar = contact?.avatar || '/images/200x200.png';
    const displayRole = 'Frontend Developer';

    return (
        <div className="drawer drawer-right">
            <div {...drawer.getContentProps()}>
                <div
                    className="flex h-full w-full flex-col border-l border-slate-150 bg-white transition-transform duration-200 dark:border-navy-600 dark:bg-navy-750">
                    <div className="flex h-[60px] items-center justify-between p-4">
                        <h3 className="text-base font-medium text-slate-700 dark:text-navy-100"> Chat Info </h3>
                        <div className="-mr-1.5 flex space-x-1">
                            <button data-toggle="drawer" data-target="#right-sidebar"
                                    className="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="size-5.5 text-slate-500 dark:text-navy-100" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                                </svg>
                            </button>
                            <DarkModeToggle />
                            <button onClick={drawer.toggle}
                                    className="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="mt-5 flex flex-col items-center">
                        <div className="avatar size-20">
                            <img className="rounded-full" src={displayAvatar} alt="avatar"/>
                        </div>
                        <h3 className="mt-2 text-lg font-medium text-slate-700 dark:text-navy-100">
                            { displayName }
                        </h3>
                        <p>{ displayRole }</p>
                        <div className="mt-2 flex space-x-1.5">
                            <button
                                className="btn size-10 rounded-full p-0 text-slate-600 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                            </button>
                            <button
                                className="btn size-10 rounded-full p-0 text-slate-600 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                                </svg>
                            </button>
                            <button
                                className="btn size-10 rounded-full p-0 text-slate-600 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div id="tab-media" className="tabs mt-6 flex flex-col">
                        <div className="is-scrollbar-hidden overflow-x-auto px-4">
                            <div className="tabs-list flex">
                                {tabs.map(tab => (
                                    <button
                                        key={tab.id}
                                        {...getTabProps(tab.id)}
                                        className={`tab btn shrink-0 rounded-none border-b-2 px-3 py-2 font-medium ${
                                            activeTab === tab.id
                                                ? "border-primary dark:border-accent text-primary dark:text-accent-light" 
                                                : "border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100"
                                        }`}>
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="px-4 pt-4">
                            {tabs.map(tab => (
                                <div
                                    key={tab.id}
                                    id={tab.id.substring(1)}
                                    {...getTabPanelProps(tab.id, "tab-content tab-shift-left")}
                                >
                                    {tab.content}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};