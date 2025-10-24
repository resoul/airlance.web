import { useState } from 'react';
import type  { AvatarProviderProps } from "./types.ts";
import { AvatarContext } from "./AvatarContext.tsx";

export function AvatarProvider({
                                   children,
                                   initialAvatar = null,
                                   initialUsername = ''
                               }: AvatarProviderProps) {
    const [avatar, setAvatar] = useState<string | null>(initialAvatar);
    const [username, setUsername] = useState<string>(initialUsername);

    const uploadAvatar = (file: File) => {
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setAvatar(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    const setAvatarUrl = (url: string) => {
        setAvatar(url);
    };

    const removeAvatar = () => {
        setAvatar(null);
    };

    const getInitials = (): string => {
        if (!username) return '?';
        return username
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    return (
        <AvatarContext.Provider value={{
            avatar,
            username,
            setUsername,
            uploadAvatar,
            setAvatarUrl,
            removeAvatar,
            getInitials
        }}>
            {children}
        </AvatarContext.Provider>
    );
}