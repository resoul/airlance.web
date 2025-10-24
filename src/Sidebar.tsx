import { Profile } from "./Profile.tsx";
import { Logo } from "./Logo.tsx";
import { Stories } from "./stories/Stories.tsx";
import type { Story } from "./stories/types.ts";

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
                        <a
                            href="dashboards-crm-analytics.html"
                            data-tooltip="Dashboards"
                            data-placement="right"
                            className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg outline-hidden transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                        >
                            <svg
                                className="size-7"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    fillOpacity=".3"
                                    d="M5 14.059c0-1.01 0-1.514.222-1.945.221-.43.632-.724 1.453-1.31l4.163-2.974c.56-.4.842-.601 1.162-.601.32 0 .601.2 1.162.601l4.163 2.974c.821.586 1.232.88 1.453 1.31.222.43.222.935.222 1.945V19c0 .943 0 1.414-.293 1.707C18.414 21 17.943 21 17 21H7c-.943 0-1.414 0-1.707-.293C5 20.414 5 19.943 5 19v-4.94Z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M3 12.387c0 .267 0 .4.084.441.084.041.19-.04.4-.204l7.288-5.669c.59-.459.885-.688 1.228-.688.343 0 .638.23 1.228.688l7.288 5.669c.21.163.316.245.4.204.084-.04.084-.174.084-.441v-.409c0-.48 0-.72-.102-.928-.101-.208-.291-.355-.67-.65l-7-5.445c-.59-.459-.885-.688-1.228-.688-.343 0-.638.23-1.228.688l-7 5.445c-.379.295-.569.442-.67.65-.102.208-.102.448-.102.928v.409Z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M11.5 15.5h1A1.5 1.5 0 0 1 14 17v3.5h-4V17a1.5 1.5 0 0 1 1.5-1.5Z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M17.5 5h-1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Z"
                                />
                            </svg>
                        </a>

                        <a
                            href="apps-list.html"
                            data-tooltip="Applications"
                            data-placement="right"
                            className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary outline-hidden transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                        >
                            <svg
                                className="size-7"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 8H19V16C19 17.8856 19 18.8284 18.4142 19.4142C17.8284 20 16.8856 20 15 20H9C7.11438 20 6.17157 20 5.58579 19.4142C5 18.8284 5 17.8856 5 16V8Z"
                                    fill="currentColor"
                                    fillOpacity="0.3"
                                />
                                <path
                                    d="M12 8L11.7608 5.84709C11.6123 4.51089 10.4672 3.5 9.12282 3.5V3.5C7.68381 3.5 6.5 4.66655 6.5 6.10555V6.10555C6.5 6.97673 6.93539 7.79026 7.66025 8.2735L9.5 9.5"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M12 8L12.2392 5.84709C12.3877 4.51089 13.5328 3.5 14.8772 3.5V3.5C16.3162 3.5 17.5 4.66655 17.5 6.10555V6.10555C17.5 6.97673 17.0646 7.79026 16.3397 8.2735L14.5 9.5"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                />
                                <rect
                                    x="4"
                                    y="8"
                                    width="16"
                                    height="3"
                                    rx="1"
                                    fill="currentColor"
                                />
                                <path
                                    d="M12 11V15"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </a>

                        <a
                            href="pages-card-user-1.html"
                            className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg outline-hidden transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                            data-tooltip="Pages & Layouts"
                            data-placement="right"
                        >
                            <svg
                                className="size-7"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.85714 3H4.14286C3.51167 3 3 3.51167 3 4.14286V9.85714C3 10.4883 3.51167 11 4.14286 11H9.85714C10.4883 11 11 10.4883 11 9.85714V4.14286C11 3.51167 10.4883 3 9.85714 3Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M9.85714 12.8999H4.14286C3.51167 12.8999 3 13.4116 3 14.0428V19.757C3 20.3882 3.51167 20.8999 4.14286 20.8999H9.85714C10.4883 20.8999 11 20.3882 11 19.757V14.0428C11 13.4116 10.4883 12.8999 9.85714 12.8999Z"
                                    fill="currentColor"
                                    fillOpacity="0.3"
                                />
                                <path
                                    d="M19.757 3H14.0428C13.4116 3 12.8999 3.51167 12.8999 4.14286V9.85714C12.8999 10.4883 13.4116 11 14.0428 11H19.757C20.3882 11 20.8999 10.4883 20.8999 9.85714V4.14286C20.8999 3.51167 20.3882 3 19.757 3Z"
                                    fill="currentColor"
                                    fillOpacity="0.3"
                                />
                                <path
                                    d="M19.757 12.8999H14.0428C13.4116 12.8999 12.8999 13.4116 12.8999 14.0428V19.757C12.8999 20.3882 13.4116 20.8999 14.0428 20.8999H19.757C20.3882 20.8999 20.8999 20.3882 20.8999 19.757V14.0428C20.8999 13.4116 20.3882 12.8999 19.757 12.8999Z"
                                    fill="currentColor"
                                    fillOpacity="0.3"
                                />
                            </svg>
                        </a>

                        <a
                            href="forms-input-text.html"
                            data-tooltip="Forms"
                            data-placement="right"
                            className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg outline-hidden transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                        >
                            <svg
                                className="size-7"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillOpacity="0.25"
                                    d="M21.0001 16.05V18.75C21.0001 20.1 20.1001 21 18.7501 21H6.6001C6.9691 21 7.3471 20.946 7.6981 20.829C7.7971 20.793 7.89609 20.757 7.99509 20.712C8.31009 20.586 8.61611 20.406 8.88611 20.172C8.96711 20.109 9.05711 20.028 9.13811 19.947L9.17409 19.911L15.2941 13.8H18.7501C20.1001 13.8 21.0001 14.7 21.0001 16.05Z"
                                    fill="currentColor"
                                />
                                <path
                                    fillOpacity="0.5"
                                    d="M17.7324 11.361L15.2934 13.8L9.17334 19.9111C9.80333 19.2631 10.1993 18.372 10.1993 17.4V8.70601L12.6384 6.26701C13.5924 5.31301 14.8704 5.31301 15.8244 6.26701L17.7324 8.17501C18.6864 9.12901 18.6864 10.407 17.7324 11.361Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M7.95 3H5.25C3.9 3 3 3.9 3 5.25V17.4C3 17.643 3.02699 17.886 3.07199 18.12C3.09899 18.237 3.12599 18.354 3.16199 18.471C3.20699 18.606 3.252 18.741 3.306 18.867C3.315 18.876 3.31501 18.885 3.31501 18.885C3.32401 18.885 3.32401 18.885 3.31501 18.894C3.44101 19.146 3.585 19.389 3.756 19.614C3.855 19.731 3.95401 19.839 4.05301 19.947C4.15201 20.055 4.26 20.145 4.377 20.235L4.38601 20.244C4.61101 20.415 4.854 20.559 5.106 20.685C5.115 20.676 5.11501 20.676 5.11501 20.685C5.25001 20.748 5.385 20.793 5.529 20.838C5.646 20.874 5.76301 20.901 5.88001 20.928C6.11401 20.973 6.357 21 6.6 21C6.969 21 7.347 20.946 7.698 20.829C7.797 20.793 7.89599 20.757 7.99499 20.712C8.30999 20.586 8.61601 20.406 8.88601 20.172C8.96701 20.109 9.05701 20.028 9.13801 19.947L9.17399 19.911C9.80399 19.263 10.2 18.372 10.2 17.4V5.25C10.2 3.9 9.3 3 7.95 3ZM6.6 18.75C5.853 18.75 5.25 18.147 5.25 17.4C5.25 16.653 5.853 16.05 6.6 16.05C7.347 16.05 7.95 16.653 7.95 17.4C7.95 18.147 7.347 18.75 6.6 18.75Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>

                        <a
                            href="components-accordion.html"
                            data-tooltip="Components"
                            data-placement="right"
                            className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg outline-hidden transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                        >
                            <svg
                                className="size-7"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillOpacity="0.5"
                                    d="M14.2498 16C14.2498 17.5487 13.576 18.9487 12.4998 19.9025C11.5723 20.7425 10.3473 21.25 8.99976 21.25C6.10351 21.25 3.74976 18.8962 3.74976 16C3.74976 13.585 5.39476 11.5375 7.61726 10.9337C8.22101 12.4562 9.51601 13.6287 11.1173 14.0662C11.5548 14.1887 12.0185 14.25 12.4998 14.25C12.981 14.25 13.4448 14.1887 13.8823 14.0662C14.1185 14.6612 14.2498 15.3175 14.2498 16Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M17.75 9.00012C17.75 9.68262 17.6187 10.3389 17.3825 10.9339C16.7787 12.4564 15.4837 13.6289 13.8825 14.0664C13.445 14.1889 12.9813 14.2501 12.5 14.2501C12.0187 14.2501 11.555 14.1889 11.1175 14.0664C9.51625 13.6289 8.22125 12.4564 7.6175 10.9339C7.38125 10.3389 7.25 9.68262 7.25 9.00012C7.25 6.10387 9.60375 3.75012 12.5 3.75012C15.3962 3.75012 17.75 6.10387 17.75 9.00012Z"
                                    fill="currentColor"
                                />
                                <path
                                    fillOpacity="0.3"
                                    d="M21.25 16C21.25 18.8962 18.8962 21.25 16 21.25C14.6525 21.25 13.4275 20.7425 12.5 19.9025C13.5763 18.9487 14.25 17.5487 14.25 16C14.25 15.3175 14.1187 14.6612 13.8825 14.0662C15.4837 13.6287 16.7787 12.4562 17.3825 10.9337C19.605 11.5375 21.25 13.585 21.25 16Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>

                        <a
                            href="elements-avatar.html"
                            data-tooltip="Elements"
                            data-placement="right"
                            className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg outline-hidden transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                        >
                            <svg
                                className="size-7"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13.3111 14.75H5.03356C3.36523 14.75 2.30189 12.9625 3.10856 11.4958L5.24439 7.60911L7.24273 3.96995C8.07689 2.45745 10.2586 2.45745 11.0927 3.96995L13.1002 7.60911L14.0627 9.35995L15.2361 11.4958C16.0427 12.9625 14.9794 14.75 13.3111 14.75Z"
                                    fill="currentColor"
                                />
                                <path
                                    fillOpacity="0.3"
                                    d="M21.1667 15.2083C21.1667 18.4992 18.4992 21.1667 15.2083 21.1667C11.9175 21.1667 9.25 18.4992 9.25 15.2083C9.25 15.0525 9.25917 14.9058 9.26833 14.75H13.3108C14.9792 14.75 16.0425 12.9625 15.2358 11.4958L14.0625 9.36C14.4292 9.28666 14.8142 9.25 15.2083 9.25C18.4992 9.25 21.1667 11.9175 21.1667 15.2083Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    </div>

                    <div className="flex flex-col items-center space-y-3 py-3">
                        <a
                            href="forms-layout-5.html"
                            className="flex size-11 items-center justify-center rounded-lg outline-hidden transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                        >
                            <svg
                                className="size-7"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillOpacity="0.3"
                                    fill="currentColor"
                                    d="M2 12.947v-1.771c0-1.047.85-1.913 1.899-1.913 1.81 0 2.549-1.288 1.64-2.868a1.919 1.919 0 0 1 .699-2.607l1.729-.996c.79-.474 1.81-.192 2.279.603l.11.192c.9 1.58 2.379 1.58 3.288 0l.11-.192c.47-.795 1.49-1.077 2.279-.603l1.73.996a1.92 1.92 0 0 1 .699 2.607c-.91 1.58-.17 2.868 1.639 2.868 1.04 0 1.899.856 1.899 1.912v1.772c0 1.047-.85 1.912-1.9 1.912-1.808 0-2.548 1.288-1.638 2.869.52.915.21 2.083-.7 2.606l-1.729.997c-.79.473-1.81.191-2.279-.604l-.11-.191c-.9-1.58-2.379-1.58-3.288 0l-.11.19c-.47.796-1.49 1.078-2.279.605l-1.73-.997a1.919 1.919 0 0 1-.699-2.606c.91-1.58.17-2.869-1.639-2.869A1.911 1.911 0 0 1 2 12.947Z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M11.995 15.332c1.794 0 3.248-1.464 3.248-3.27 0-1.807-1.454-3.272-3.248-3.272-1.794 0-3.248 1.465-3.248 3.271 0 1.807 1.454 3.271 3.248 3.271Z"
                                />
                            </svg>
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

                        <div
                            className="is-scrollbar-hidden mt-3 flex grow flex-col overflow-y-auto"
                        >
                            <div
                                className="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
                            >
                                <div className="avatar size-10">
                                    <img
                                        className="rounded-full"
                                        src="/images/avatar/avatar-19.jpg"
                                        alt="avatar"
                                    />
                                    <div
                                        className="absolute right-0 size-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
                                    ></div>
                                </div>
                                <div className="flex flex-1 flex-col">
                                    <div
                                        className="flex items-baseline justify-between space-x-1.5"
                                    >
                                        <p
                                            className="text-xs-plus font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                                        >
                                            Alfredo Elliott
                                        </p>
                                        <span className="text-tiny-plus text-slate-400 dark:text-navy-300"
                                        >11:03</span
                                        >
                                    </div>
                                    <div
                                        className="mt-1 flex items-center justify-between space-x-1"
                                    >
                                        <p
                                            className="text-xs-plus text-slate-400 line-clamp-1 dark:text-navy-300"
                                        >
                                            😂 Lorem ipsum dolor
                                        </p>
                                        <div
                                            className="flex h-4.5 min-w-[1.125rem] items-center justify-center rounded-full bg-slate-200 px-1.5 text-tiny-plus font-medium leading-none text-slate-800 dark:bg-navy-450 dark:text-white"
                                        >
                                            5
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
                            >
                                <div className="avatar size-10">
                                    <img
                                        className="rounded-full"
                                        src="/images/200x200.png"
                                        alt="avatar"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col">
                                    <div
                                        className="flex items-baseline justify-between space-x-1.5"
                                    >
                                        <p
                                            className="text-xs-plus font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                                        >
                                            Konnor Guzman
                                        </p>
                                        <span className="text-tiny-plus text-slate-400 dark:text-navy-300"
                                        >09:16</span
                                        >
                                    </div>
                                    <div
                                        className="mt-1 flex items-center justify-between space-x-1"
                                    >
                                        <p
                                            className="text-xs-plus text-slate-400 line-clamp-1 dark:text-navy-300"
                                        >
                                            💣 Adipisicing elit. Prov ident?
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
                            >
                                <div className="avatar size-10">
                                    <img
                                        className="rounded-full"
                                        src="/images/200x200.png"
                                        alt="avatar"
                                    />
                                    <div
                                        className="absolute right-0 size-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
                                    >
                      <span
                          className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-80 dark:bg-accent"
                      ></span>
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col">
                                    <div
                                        className="flex items-baseline justify-between space-x-1.5"
                                    >
                                        <p
                                            className="text-xs-plus font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                                        >
                                            Travis Fuller
                                        </p>
                                        <span className="text-tiny-plus text-slate-400 dark:text-navy-300"
                                        >08:05</span
                                        >
                                    </div>
                                    <div
                                        className="mt-1 flex items-center justify-between space-x-1"
                                    >
                                        <p
                                            className="text-xs-plus text-slate-400 line-clamp-1 dark:text-navy-300"
                                        >
                                            Dolor set. Prov ident?
                                        </p>
                                        <div
                                            className="flex h-4.5 min-w-[1.125rem] items-center justify-center rounded-full bg-primary px-1.5 text-tiny-plus font-medium leading-none text-white dark:bg-accent"
                                        >
                                            4
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
                            >
                                <div className="avatar size-10">
                                    <img
                                        className="rounded-full"
                                        src="/images/200x200.png"
                                        alt="avatar"
                                    />
                                    <div
                                        className="absolute right-0 size-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
                                    ></div>
                                </div>
                                <div className="flex flex-1 flex-col">
                                    <div
                                        className="flex items-baseline justify-between space-x-1.5"
                                    >
                                        <p
                                            className="text-xs-plus font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                                        >
                                            Derrick Simmons
                                        </p>
                                        <span className="text-tiny-plus text-slate-400 dark:text-navy-300"
                                        >06:21</span
                                        >
                                    </div>
                                    <div
                                        className="mt-1 flex items-center justify-between space-x-1"
                                    >
                                        <p
                                            className="text-xs-plus text-slate-400 line-clamp-1 dark:text-navy-300"
                                        >
                                            And that’s why a 15th century
                                        </p>
                                        <div
                                            className="flex h-4.5 min-w-[1.125rem] items-center justify-center rounded-full bg-slate-200 px-1.5 text-tiny-plus font-medium leading-none text-slate-800 dark:bg-navy-450 dark:text-white"
                                        >
                                            2
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
                            >
                                <div className="avatar size-10">
                                    <img
                                        className="rounded-full"
                                        src="/images/200x200.png"
                                        alt="avatar"
                                    />
                                    <div
                                        className="absolute right-0 size-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
                                    ></div>
                                </div>
                                <div className="flex flex-1 flex-col">
                                    <div
                                        className="flex items-baseline justify-between space-x-1.5"
                                    >
                                        <p
                                            className="text-xs-plus font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                                        >
                                            Katrina West
                                        </p>
                                        <span className="text-tiny-plus text-slate-400 dark:text-navy-300"
                                        >06:21</span
                                        >
                                    </div>
                                    <div
                                        className="mt-1 flex items-center justify-between space-x-1"
                                    >
                                        <p
                                            className="text-xs-plus text-slate-400 line-clamp-1 dark:text-navy-300"
                                        >
                                            he wanted people to focus
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
                            >
                                <div className="avatar size-10">
                                    <img
                                        className="rounded-full"
                                        src="/images/200x200.png"
                                        alt="avatar"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col">
                                    <div
                                        className="flex items-baseline justify-between space-x-1.5"
                                    >
                                        <p
                                            className="text-xs-plus font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                                        >
                                            Corey Evans
                                        </p>
                                        <span className="text-tiny-plus text-slate-400 dark:text-navy-300"
                                        >Tue</span
                                        >
                                    </div>
                                    <div
                                        className="mt-1 flex items-center justify-between space-x-1"
                                    >
                                        <p
                                            className="text-xs-plus text-slate-400 line-clamp-1 dark:text-navy-300"
                                        >
                                            Ut enim ad minim veniam
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
                            >
                                <div className="avatar size-10">
                                    <img
                                        className="rounded-full"
                                        src="/images/200x200.png"
                                        alt="avatar"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col">
                                    <div
                                        className="flex items-baseline justify-between space-x-1.5"
                                    >
                                        <p
                                            className="text-xs-plus font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                                        >
                                            Anthony Jensen
                                        </p>
                                        <span className="text-tiny-plus text-slate-400 dark:text-navy-300"
                                        >Tue</span
                                        >
                                    </div>
                                    <div
                                        className="mt-1 flex items-center justify-between space-x-1"
                                    >
                                        <p
                                            className="text-xs-plus text-slate-400 line-clamp-1 dark:text-navy-300"
                                        >
                                            Excepteur sint occaecat cupidatat
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
                            >
                                <div className="avatar size-10">
                                    <img
                                        className="rounded-full"
                                        src="/images/200x200.png"
                                        alt="avatar"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col">
                                    <div
                                        className="flex items-baseline justify-between space-x-1.5"
                                    >
                                        <p
                                            className="text-xs-plus font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                                        >
                                            Lance Tucker
                                        </p>
                                        <span className="text-tiny-plus text-slate-400 dark:text-navy-300"
                                        >Tue</span
                                        >
                                    </div>
                                    <div
                                        className="mt-1 flex items-center justify-between space-x-1"
                                    >
                                        <p
                                            className="text-xs-plus text-slate-400 line-clamp-1 dark:text-navy-300"
                                        >
                                            Duis aute irure dolor in
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
                            >
                                <div className="avatar size-10">
                                    <img
                                        className="rounded-full"
                                        src="/images/200x200.png"
                                        alt="avatar"
                                    />
                                    <div
                                        className="absolute right-0 size-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
                                    ></div>
                                </div>
                                <div className="flex flex-1 flex-col">
                                    <div
                                        className="flex items-baseline justify-between space-x-1.5"
                                    >
                                        <p
                                            className="text-xs-plus font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                                        >
                                            Alfredo Elliott
                                        </p>
                                        <span className="text-tiny-plus text-slate-400 dark:text-navy-300"
                                        >11:03</span
                                        >
                                    </div>
                                    <div
                                        className="mt-1 flex items-center justify-between space-x-1"
                                    >
                                        <p
                                            className="text-xs-plus text-slate-400 line-clamp-1 dark:text-navy-300"
                                        >
                                            😂 Lorem ipsum dolor
                                        </p>
                                        <div
                                            className="flex h-4.5 min-w-[1.125rem] items-center justify-center rounded-full bg-slate-200 px-1.5 text-tiny-plus font-medium leading-none text-slate-800 dark:bg-navy-450 dark:text-white"
                                        >
                                            5
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
                            >
                                <div className="avatar size-10">
                                    <img
                                        className="rounded-full"
                                        src="/images/200x200.png"
                                        alt="avatar"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col">
                                    <div
                                        className="flex items-baseline justify-between space-x-1.5"
                                    >
                                        <p
                                            className="text-xs-plus font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                                        >
                                            Konnor Guzman
                                        </p>
                                        <span className="text-tiny-plus text-slate-400 dark:text-navy-300"
                                        >09:16</span
                                        >
                                    </div>
                                    <div
                                        className="mt-1 flex items-center justify-between space-x-1"
                                    >
                                        <p
                                            className="text-xs-plus text-slate-400 line-clamp-1 dark:text-navy-300"
                                        >
                                            💣 Adipisicing elit. Prov ident?
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
                            >
                                <div className="avatar size-10">
                                    <img
                                        className="rounded-full"
                                        src="/images/200x200.png"
                                        alt="avatar"
                                    />
                                    <div
                                        className="absolute right-0 size-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
                                    >
                      <span
                          className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-80 dark:bg-accent"
                      ></span>
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col">
                                    <div
                                        className="flex items-baseline justify-between space-x-1.5"
                                    >
                                        <p
                                            className="text-xs-plus font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                                        >
                                            Travis Fuller
                                        </p>
                                        <span className="text-tiny-plus text-slate-400 dark:text-navy-300"
                                        >08:05</span
                                        >
                                    </div>
                                    <div
                                        className="mt-1 flex items-center justify-between space-x-1"
                                    >
                                        <p
                                            className="text-xs-plus text-slate-400 line-clamp-1 dark:text-navy-300"
                                        >
                                            Dolor set. Prov ident?
                                        </p>
                                        <div
                                            className="flex h-4.5 min-w-[1.125rem] items-center justify-center rounded-full bg-primary px-1.5 text-tiny-plus font-medium leading-none text-white dark:bg-accent"
                                        >
                                            4
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
                            >
                                <div className="avatar size-10">
                                    <img
                                        className="rounded-full"
                                        src="/images/200x200.png"
                                        alt="avatar"
                                    />
                                    <div
                                        className="absolute right-0 size-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
                                    ></div>
                                </div>
                                <div className="flex flex-1 flex-col">
                                    <div
                                        className="flex items-baseline justify-between space-x-1.5"
                                    >
                                        <p
                                            className="text-xs-plus font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                                        >
                                            Derrick Simmons
                                        </p>
                                        <span className="text-tiny-plus text-slate-400 dark:text-navy-300"
                                        >06:21</span
                                        >
                                    </div>
                                    <div
                                        className="mt-1 flex items-center justify-between space-x-1"
                                    >
                                        <p
                                            className="text-xs-plus text-slate-400 line-clamp-1 dark:text-navy-300"
                                        >
                                            And that’s why a 15th century
                                        </p>
                                        <div
                                            className="flex h-4.5 min-w-[1.125rem] items-center justify-center rounded-full bg-slate-200 px-1.5 text-tiny-plus font-medium leading-none text-slate-800 dark:bg-navy-450 dark:text-white"
                                        >
                                            2
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
                            >
                                <div className="avatar size-10">
                                    <img
                                        className="rounded-full"
                                        src="/images/200x200.png"
                                        alt="avatar"
                                    />
                                    <div
                                        className="absolute right-0 size-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
                                    ></div>
                                </div>
                                <div className="flex flex-1 flex-col">
                                    <div
                                        className="flex items-baseline justify-between space-x-1.5"
                                    >
                                        <p
                                            className="text-xs-plus font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                                        >
                                            Katrina West
                                        </p>
                                        <span className="text-tiny-plus text-slate-400 dark:text-navy-300"
                                        >06:21</span
                                        >
                                    </div>
                                    <div
                                        className="mt-1 flex items-center justify-between space-x-1"
                                    >
                                        <p
                                            className="text-xs-plus text-slate-400 line-clamp-1 dark:text-navy-300"
                                        >
                                            he wanted people to focus
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
                            >
                                <div className="avatar size-10">
                                    <img
                                        className="rounded-full"
                                        src="/images/200x200.png"
                                        alt="avatar"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col">
                                    <div
                                        className="flex items-baseline justify-between space-x-1.5"
                                    >
                                        <p
                                            className="text-xs-plus font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                                        >
                                            Corey Evans
                                        </p>
                                        <span className="text-tiny-plus text-slate-400 dark:text-navy-300"
                                        >Tue</span
                                        >
                                    </div>
                                    <div
                                        className="mt-1 flex items-center justify-between space-x-1"
                                    >
                                        <p
                                            className="text-xs-plus text-slate-400 line-clamp-1 dark:text-navy-300"
                                        >
                                            Ut enim ad minim veniam
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
                            >
                                <div className="avatar size-10">
                                    <img
                                        className="rounded-full"
                                        src="/images/200x200.png"
                                        alt="avatar"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col">
                                    <div
                                        className="flex items-baseline justify-between space-x-1.5"
                                    >
                                        <p
                                            className="text-xs-plus font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                                        >
                                            Anthony Jensen
                                        </p>
                                        <span className="text-tiny-plus text-slate-400 dark:text-navy-300"
                                        >Tue</span
                                        >
                                    </div>
                                    <div
                                        className="mt-1 flex items-center justify-between space-x-1"
                                    >
                                        <p
                                            className="text-xs-plus text-slate-400 line-clamp-1 dark:text-navy-300"
                                        >
                                            Excepteur sint occaecat cupidatat
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600"
                            >
                                <div className="avatar size-10">
                                    <img
                                        className="rounded-full"
                                        src="/images/200x200.png"
                                        alt="avatar"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col">
                                    <div
                                        className="flex items-baseline justify-between space-x-1.5"
                                    >
                                        <p
                                            className="text-xs-plus font-medium text-slate-700 line-clamp-1 dark:text-navy-100"
                                        >
                                            Lance Tucker
                                        </p>
                                        <span className="text-tiny-plus text-slate-400 dark:text-navy-300"
                                        >Tue</span
                                        >
                                    </div>
                                    <div
                                        className="mt-1 flex items-center justify-between space-x-1"
                                    >
                                        <p
                                            className="text-xs-plus text-slate-400 line-clamp-1 dark:text-navy-300"
                                        >
                                            Duis aute irure dolor in
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="flex h-12 shrink-0 justify-between border-t border-slate-150 px-1.5 py-1 dark:border-navy-600"
                        >
                            <a
                                href="#"
                                data-tooltip="All Chats"
                                className="btn size-9 rounded-full p-0 text-primary hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
                                    />
                                    <path
                                        d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                data-tooltip="Users"
                                className="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"
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
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                data-tooltip="Groups"
                                className="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"
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
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                data-tooltip="Channels"
                                className="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"
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
                                        d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                data-tooltip="More"
                                className="btn size-9 rounded-full p-0 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25"
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
                                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                    />
                                </svg>
                            </a>
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
                                <div
                                    className="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
                                >
                                    <div className="avatar size-10">
                                        <img
                                            className="rounded-full"
                                            src="/images/avatar/avatar-19.jpg"
                                            alt="avatar"
                                        />
                                        <div
                                            className="absolute right-0 size-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
                                        ></div>
                                    </div>
                                </div>
                                <div
                                    className="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
                                >
                                    <div className="avatar size-10">
                                        <img
                                            className="rounded-full"
                                            src="/images/200x200.png"
                                            alt="avatar"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
                                >
                                    <div className="avatar size-10">
                                        <img
                                            className="rounded-full"
                                            src="/images/200x200.png"
                                            alt="avatar"
                                        />

                                        <div
                                            className="absolute right-0 size-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
                                        >
                        <span
                            className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-80 dark:bg-accent"
                        ></span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
                                >
                                    <div className="avatar size-10">
                                        <img
                                            className="rounded-full"
                                            src="/images/200x200.png"
                                            alt="avatar"
                                        />
                                        <div
                                            className="absolute right-0 size-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
                                        ></div>
                                    </div>
                                </div>
                                <div
                                    className="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
                                >
                                    <div className="avatar size-10">
                                        <img
                                            className="rounded-full"
                                            src="/images/200x200.png"
                                            alt="avatar"
                                        />
                                        <div
                                            className="absolute right-0 size-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
                                        ></div>
                                    </div>
                                </div>
                                <div
                                    className="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
                                >
                                    <div className="avatar size-10">
                                        <img
                                            className="rounded-full"
                                            src="/images/200x200.png"
                                            alt="avatar"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
                                >
                                    <div className="avatar size-10">
                                        <img
                                            className="rounded-full"
                                            src="/images/200x200.png"
                                            alt="avatar"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
                                >
                                    <div className="avatar size-10">
                                        <img
                                            className="rounded-full"
                                            src="/images/200x200.png"
                                            alt="avatar"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
                                >
                                    <div className="avatar size-10">
                                        <img
                                            className="rounded-full"
                                            src="/images/200x200.png"
                                            alt="avatar"
                                        />
                                        <div
                                            className="absolute right-0 size-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
                                        ></div>
                                    </div>
                                </div>
                                <div
                                    className="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
                                >
                                    <div className="avatar size-10">
                                        <img
                                            className="rounded-full"
                                            src="/images/200x200.png"
                                            alt="avatar"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
                                >
                                    <div className="avatar size-10">
                                        <img
                                            className="rounded-full"
                                            src="/images/200x200.png"
                                            alt="avatar"
                                        />
                                        <div
                                            className="absolute right-0 size-3 rounded-full border-2 border-white bg-primary dark:border-navy-700 dark:bg-accent"
                                        >
                        <span
                            className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-80 dark:bg-accent"
                        ></span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
                                >
                                    <div className="avatar size-10">
                                        <img
                                            className="rounded-full"
                                            src="/images/200x200.png"
                                            alt="avatar"
                                        />
                                        <div
                                            className="absolute right-0 size-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
                                        ></div>
                                    </div>
                                </div>
                                <div
                                    className="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
                                >
                                    <div className="avatar size-10">
                                        <img
                                            className="rounded-full"
                                            src="/images/200x200.png"
                                            alt="avatar"
                                        />
                                        <div
                                            className="absolute right-0 size-3 rounded-full border-2 border-white bg-slate-300 dark:border-navy-700"
                                        ></div>
                                    </div>
                                </div>
                                <div
                                    className="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
                                >
                                    <div className="avatar size-10">
                                        <img
                                            className="rounded-full"
                                            src="/images/200x200.png"
                                            alt="avatar"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
                                >
                                    <div className="avatar size-10">
                                        <img
                                            className="rounded-full"
                                            src="/images/200x200.png"
                                            alt="avatar"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600"
                                >
                                    <div className="avatar size-10">
                                        <img
                                            className="rounded-full"
                                            src="/images/200x200.png"
                                            alt="avatar"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="py-3">
                            <button
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}