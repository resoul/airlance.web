import { Profile } from "./Profile.tsx";
import { Logo } from "./Logo.tsx";
import { Stories } from "./stories/Stories.tsx";
import type { Story } from "./stories/types.ts";
import { ContactItem } from "./components/ContactItem.tsx";
import { contacts } from "./data/contacts.ts";
import { Tooltip } from "./hook/useTooltip.tsx";
import { ChatListSettings } from "./ChatListSettings.tsx";
import { Icon } from './icons';

const mockStories: Story[] = [
    {
        id: 1,
        name: 'Konnor',
        avatar: '/images/200x200.png',
        hasNewStory: true,
    },
    {
        id: 2,
        name: 'Travis',
        avatar: '/images/200x200.png',
        hasNewStory: true,
    },
    {
        id: 3,
        name: 'Fuller',
        avatar: '/images/avatar/avatar-19.jpg',
        hasNewStory: true,
    },
    {
        id: 4,
        name: 'Alfredo',
        avatar: '/images/200x200.png',
        hasNewStory: false,
    },
    {
        id: 5,
        name: 'Elliott',
        avatar: '/images/200x200.png',
        hasNewStory: true,
    },
    {
        id: 6,
        name: 'Derrick',
        avatar: '/images/200x200.png',
        hasNewStory: false,
    },
    {
        id: 7,
        name: 'Simmons',
        avatar: '/images/200x200.png',
        hasNewStory: true,
    },
    {
        id: 8,
        name: 'Katrina',
        avatar: '/images/200x200.png',
        hasNewStory: false,
    },
];

export function Sidebar() {
    const handleAddStory = () => {
        console.log('Add new story');
    };

    return (
        <div className="sidebar print:hidden">
            <div className="main-sidebar">
                <div
                    className="flex h-full w-full flex-col items-center border-r border-slate-150 bg-white dark:border-navy-700 dark:bg-navy-800"
                >
                    <Logo />

                    <div
                        className="is-scrollbar-hidden flex grow flex-col space-y-4 overflow-y-auto pt-6"
                    >
                        <Tooltip
                            as="a"
                            href="/dashboard"
                            content="Dashboards"
                            placement="right"
                            className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg outline-hidden transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                        >
                            <Icon name="dashboard" className="size-7" />
                        </Tooltip>
                        <Tooltip
                            as="a"
                            href="/apps-list"
                            content="Applications"
                            placement="right"
                            className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary outline-hidden transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                        >
                            <Icon name="application" className="size-7" />
                        </Tooltip>
                        <Tooltip
                            as="a"
                            href="/pages-card-user"
                            content="Pages & Layouts"
                            placement="right"
                            className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg outline-hidden transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                        >
                            <Icon name="layout" className="size-7" />
                        </Tooltip>
                        <Tooltip
                            as="a"
                            href="/forms-input-text"
                            content="Forms"
                            placement="right"
                            className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg outline-hidden transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                        >
                            <Icon name="form" className="size-7" />
                        </Tooltip>
                        <Tooltip
                            as="a"
                            href="/components-accordion"
                            content="Components"
                            placement="right"
                            className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg outline-hidden transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                        >
                            <Icon name="component" className="size-7" />
                        </Tooltip>
                        <Tooltip
                            as="a"
                            href="/elements-avatar"
                            content="Elements"
                            placement="right"
                            className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg outline-hidden transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                        >
                            <Icon name="element" className="size-7" />
                        </Tooltip>
                    </div>

                    <div className="flex flex-col items-center space-y-3 py-3">
                        <a
                            href="forms-layout-5.html"
                            className="flex size-11 items-center justify-center rounded-lg outline-hidden transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                        >
                            <Icon name="settings" className="size-7" />
                        </a>

                        <Profile />
                    </div>
                </div>
            </div>
            <div className="sidebar-panel">
                <div
                    className="flex h-full grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-navy-750"
                >
                    <div
                        className="flex h-18 w-full items-center justify-between pl-4 pr-1"
                    >
                        <div className="flex items-center">
                            <div className="avatar mr-3 hidden size-9 lg:flex">
                                <div
                                    className="is-initial rounded-full bg-primary/10 text-primary dark:bg-accent-light/10 dark:text-accent-light"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <p
                                className="text-lg font-medium tracking-wider text-slate-800 line-clamp-1 dark:text-navy-100"
                            >
                                Chat
                            </p>
                        </div>

                        <button
                            className="sidebar-close btn size-7 rounded-full p-0 text-primary hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 xl:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="flex h-[calc(100%-4.5rem)] grow flex-col">
                        <Stories
                            title="History"
                            stories={mockStories}
                            onAddStory={handleAddStory}
                        />

                        <div className="mt-4 flex px-4">
                            <label className="relative mr-1.5 flex">
                                <input
                                    className="form-input peer h-8 w-full rounded-lg bg-slate-150 px-3 py-2 pl-9 text-xs-plus ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring-3 dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
                                    placeholder="Search chats"
                                    type="text"
                                />
                                <span
                                    className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent"
                                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 transition-colors duration-200"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                      <path
                          d="M3.316 13.781l.73-.171-.73.171zm0-5.457l.73.171-.73-.171zm15.473 0l.73-.171-.73.171zm0 5.457l.73.171-.73-.171zm-5.008 5.008l-.171-.73.171.73zm-5.457 0l-.171.73.171-.73zm0-15.473l-.171-.73.171.73zm5.457 0l.171-.73-.171.73zM20.47 21.53a.75.75 0 101.06-1.06l-1.06 1.06zM4.046 13.61a11.198 11.198 0 010-5.115l-1.46-.342a12.698 12.698 0 000 5.8l1.46-.343zm14.013-5.115a11.196 11.196 0 010 5.115l1.46.342a12.698 12.698 0 000-5.8l-1.46.343zm-4.45 9.564a11.196 11.196 0 01-5.114 0l-.342 1.46c1.907.448 3.892.448 5.8 0l-.343-1.46zM8.496 4.046a11.198 11.198 0 015.115 0l.342-1.46a12.698 12.698 0 00-5.8 0l.343 1.46zm0 14.013a5.97 5.97 0 01-4.45-4.45l-1.46.343a7.47 7.47 0 005.568 5.568l.342-1.46zm5.457 1.46a7.47 7.47 0 005.568-5.567l-1.46-.342a5.97 5.97 0 01-4.45 4.45l.342 1.46zM13.61 4.046a5.97 5.97 0 014.45 4.45l1.46-.343a7.47 7.47 0 00-5.568-5.567l-.342 1.46zm-5.457-1.46a7.47 7.47 0 00-5.567 5.567l1.46.342a5.97 5.97 0 014.45-4.45l-.343-1.46zm8.652 15.28l3.665 3.664 1.06-1.06-3.665-3.665-1.06 1.06z"
                      />
                    </svg>
                  </span>
                            </label>

                            <button
                                className="btn -mr-2 size-8 shrink-0 rounded-full p-0 text-slate-500 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="10"
                                        d="M22 6.5h-9.5M6 6.5H2M9 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM22 17.5h-6M9.5 17.5H2M13 20a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="is-scrollbar-hidden mt-3 flex grow flex-col overflow-y-auto">
                            { contacts.map((contact) => (
                                <ContactItem key={contact.id} contact={contact} />
                            )) }
                        </div>
                        <div
                            className="flex h-12 shrink-0 justify-between border-t border-slate-150 px-1.5 py-1 dark:border-navy-600"
                        >
                            <Tooltip
                                as="a"
                                href="/messenger"
                                placement="top"
                                content="All Chats"
                                className="btn size-9 rounded-full p-0 text-primary hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                            >
                                <Icon name="chats" className="size-5" fill="currentColor" viewBox="0 0 20 20" />
                            </Tooltip>
                            <Tooltip
                                as="a"
                                href="/users"
                                placement="top"
                                content="Users"
                                className="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"
                            >
                                <Icon name="users" className="size-5" stroke="currentColor" strokeWidth="1.5" />
                            </Tooltip>
                            <Tooltip
                                as="a"
                                href="/group"
                                placement="top"
                                content="Groups"
                                className="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"
                            >
                                <Icon name="groups" className="size-5" stroke="currentColor" strokeWidth="1.5" />
                            </Tooltip>
                            <Tooltip
                                as="a"
                                href="/channels"
                                placement="top"
                                content="Channels"
                                className="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"
                            >
                                <Icon name="channels" className="size-5" stroke="currentColor" strokeWidth="1.5" />
                            </Tooltip>
                            <Tooltip
                                as="a"
                                href="/more"
                                placement="top"
                                content="More"
                                className="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"
                            >
                                <Icon name="more" className="size-5" stroke="currentColor" strokeWidth="1.5" />
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebar-panel-min">
                <div className="flex h-full flex-col bg-white dark:bg-navy-750">
                    <div className="flex h-18 shrink-0 items-center justify-center">
                        <div className="avatar flex size-10">
                            <div
                                className="is-initial is-initial rounded-full bg-primary/10 text-primary dark:bg-accent-light/10 dark:text-accent-light"
                            >
                                <svg
                                    className="size-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex h-[calc(100%-4.5rem)] grow flex-col">
                        <div
                            className="is-scrollbar-hidden flex grow flex-col overflow-y-auto"
                        >
                            <ul
                                className="mt-2 flex flex-col items-center justify-center space-y-1"
                            >
                                <li>
                                    <a
                                        href="#"
                                        className="btn size-10 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-5.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="btn size-10 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-5.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                            <div
                                className="my-4 mx-4 h-px shrink-0 bg-slate-200 dark:bg-navy-500"
                            ></div>
                            <div className="flex flex-col">
                                { contacts.map((contact) => (
                                    <ContactItem key={contact.id} contact={contact} variant="mini" />
                                )) }
                            </div>
                        </div>

                        <ChatListSettings />
                    </div>
                </div>
            </div>
        </div>
    )
}