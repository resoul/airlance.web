import { createContext } from 'react';
import type { DarkModeContextType } from './types';

export const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);