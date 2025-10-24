import { useContext } from 'react';
import { DarkModeContext } from './DarkModeContext';
import type { DarkModeContextType } from './types';

export const useDarkMode = (): DarkModeContextType => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error('useDarkMode must be used within DarkModeProvider');
    }
    return context;
};