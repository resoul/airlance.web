export type ThemeMode = 'light' | 'dark';

export interface DarkModeContextType {
    currentMode: ThemeMode;
    setDarkMode: () => void;
    setLightMode: () => void;
    toggle: () => void;
}

export interface DarkModeProviderProps {
    children: React.ReactNode;
    initialMode?: ThemeMode;
}