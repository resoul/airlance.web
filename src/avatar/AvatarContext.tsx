import { createContext } from 'react';
import type { AvatarContextType } from './types';

export const AvatarContext = createContext<AvatarContextType | undefined>(undefined);