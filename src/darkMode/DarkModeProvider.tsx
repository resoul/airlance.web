import React, { useState, useEffect } from 'react';
import { DarkModeContext } from './DarkModeContext';
import type { DarkModeProviderProps, DarkModeContextType, ThemeMode } from './types';

const DARKMODE_KEY = 'dark-mode';

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
                                                                      children,
                                                                      initialMode = 'light'
                                                                  }) => {
    const [currentMode, setCurrentMode] = useState<ThemeMode>(() => {
        const saved = localStorage.getItem(DARKMODE_KEY);
        return (saved as ThemeMode) || initialMode;
    });

    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        if (currentMode === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        setIsInitialized(true);
    }, [currentMode]);

    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem(DARKMODE_KEY, currentMode);
        }
    }, [currentMode, isInitialized]);

    const setDarkMode = (): void => {
        setCurrentMode('dark');
    };

    const setLightMode = (): void => {
        setCurrentMode('light');
    };

    const toggle = (): void => {
        setCurrentMode(prev => prev === 'light' ? 'dark' : 'light');
    };

    const value: DarkModeContextType = {
        currentMode,
        setDarkMode,
        setLightMode,
        toggle
    };

    return (
        <DarkModeContext.Provider value={value}>
            {children}
        </DarkModeContext.Provider>
    );
};