import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useParams } from "react-router-dom";
import { Sidebar } from "./Sidebar.tsx";
import { Drawer } from "./Drawer.tsx";
import { ChatDetail } from "./ChatDetail.tsx";
import { ChatHeader } from "./ChatHeader.tsx";
import { ChatMessages } from "./ChatMessages.tsx";
import { ChatTextEditor } from "./ChatTextEditor.tsx";
import { useDrawer } from "./hook/useDrawer.tsx";
import { contacts } from "./data/contacts.ts";
import type { Message } from "./types/message.ts";

const initialMessages: Message[] = [
    {
        id: '1',
        text: 'Hello My Dear. Lorem ipsum dolor sit amet, consectetur.',
        timestamp: new Date('2023-01-20T08:16:00'),
        isOwn: false,
        avatar: '/images/avatar/avatar-19.jpg'
    },
    {
        id: '2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda necessitatibus, ratione. Voluptatum.',
        timestamp: new Date('2024-01-20T08:16:00'),
        isOwn: true
    },
    {
        id: '3',
        text: "And that's why a 15th century",
        timestamp: new Date('2024-01-20T08:16:00'),
        isOwn: true
    },
    {
        id: '4',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius.',
        timestamp: new Date('2024-01-20T08:16:00'),
        isOwn: false,
        avatar: '/images/avatar/avatar-19.jpg'
    },
    {
        id: '5',
        text: '',
        timestamp: new Date('2024-01-20T08:21:00'),
        isOwn: false,
        avatar: '/images/avatar/avatar-19.jpg',
        images: [
            '/images/800x600.png',
            '/images/800x600.png',
            '/images/800x600.png',
            '/images/800x600.png',
            '/images/800x600.png'
        ]
    },
    {
        id: '6',
        text: '',
        timestamp: new Date('2025-10-23T08:29:00'),
        isOwn: true,
        images: [
            '/images/800x600.png'
        ]
    },
    {
        id: '7',
        text: 'Please Download This File',
        timestamp: new Date('2025-10-24T08:31:00'),
        isOwn: true
    }
];

const Preloader = () => (
    <div className="app-preloader fixed z-50 grid h-full w-full place-content-center bg-slate-50 dark:bg-navy-900">
        <div className="app-preloader-inner relative inline-block size-48"></div>
    </div>
);

export function ChatLayout() {
    const { contactId } = useParams<{ contactId: string }>();
    const currentContact = contacts.find(c => c.id === contactId);
    const [messages, setMessages] = useState<Message[]>(initialMessages);

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

    const handleSendMessage = (text: string) => {
        const newMessage: Message = {
            id: Date.now().toString(),
            text,
            timestamp: new Date(),
            isOwn: true
        };
        setMessages(prev => [...prev, newMessage]);
    };

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
                <ChatMessages messages={messages} />
                <ChatTextEditor onSendMessage={handleSendMessage} />
                <ChatDetail
                    contact={currentContact}
                    drawer={chatDetailDrawer}
                />
            </main>
        </>
    )
}