import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useParams } from "react-router-dom";
import { Sidebar } from "./Sidebar.tsx";
import { Drawer } from "./Drawer.tsx";
import { ChatDetail } from "./ChatDetail.tsx";
import { ChatHeader } from "./ChatHeader.tsx";
import { ChatMessages } from "./ChatMessages.tsx";
import { ChatFooter } from "./ChatFooter.tsx";
import { useDrawer } from "./hook/useDrawer.tsx";
import { contacts } from "./data/contacts.ts";

const Preloader = () => (
    <div className="app-preloader fixed z-50 grid h-full w-full place-content-center bg-slate-50 dark:bg-navy-900">
        <div className="app-preloader-inner relative inline-block size-48"></div>
    </div>
);

export function ChatLayout() {
    const { contactId } = useParams<{ contactId: string }>();
    const currentContact = contacts.find(c => c.id === contactId);

    useEffect(() => {
        const root = document.querySelector("#root");
        const preloader = document.querySelector(".app-preloader");
        if (!preloader) return;

        const fadeOut = () => {
            preloader.classList.add("animate-[var(--ease-in-out)_fade-out_500ms_forwards]");
            setTimeout(() => root?.classList.remove("cloak") && preloader.remove(), 1000);
        }

        const timer = setTimeout(fadeOut, 300);

        return () => clearTimeout(timer);
    }, [])

    const chatDetailDrawer = useDrawer({
        onToggle: (isOpen) => {
            console.log('Chat detail drawer:', isOpen ? 'opened' : 'closed');
        },
    });

    return (
        <>
            { createPortal(<Preloader/>, document.body) }
            <Sidebar />
            <Drawer />
            <main className={`main-content h-100vh chat-app mt-0 flex w-full flex-col ${
                chatDetailDrawer.isOpen ? "lg:mr-80" : ""
            }`}>
                <ChatHeader
                    contact={currentContact}
                    onToggleChatDetail={chatDetailDrawer.toggle}
                    isChatDetailOpen={chatDetailDrawer.isOpen}
                />
                <ChatMessages />
                <ChatFooter />
                <ChatDetail
                    contact={currentContact}
                    drawer={chatDetailDrawer}
                />
            </main>
        </>
    )
}