import { useContext } from 'react';
import { AvatarContext } from "./AvatarContext.tsx";
import type { AvatarContextType } from './types';

export const useAvatar = (): AvatarContextType => {
    const context = useContext(AvatarContext);
    if (!context) {
        throw new Error('useAvatar must be used within AvatarProvider');
    }
    return context;
};