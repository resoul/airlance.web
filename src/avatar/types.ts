import type { ReactNode } from 'react';

export interface AvatarContextType {
    avatar: string | null;
    username: string;
    setUsername: (name: string) => void;
    uploadAvatar: (file: File) => void;
    setAvatarUrl: (url: string) => void;
    removeAvatar: () => void;
    getInitials: () => string;
}

export interface AvatarProviderProps {
    children: ReactNode;
    initialAvatar?: string | null;
    initialUsername?: string;
}