export interface Contact {
    id: string;
    name: string;
    avatar: string;
    lastMessage: string;
    time: string;
    unreadCount?: number;
    isOnline?: boolean;
    status?: 'online' | 'offline' | 'away';
}