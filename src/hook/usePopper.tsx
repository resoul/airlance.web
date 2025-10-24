import { useEffect, useRef, useState, useCallback } from 'react';
import { createPopper, type Instance, type Options } from '@popperjs/core';

const POPPER_SHOW_CLASS = 'show';
const REF_ACTIVE_CLASS = 'is-active';

type EventType = 'click' | 'hover';

interface UsePopperReturn {
    refEl: React.RefObject<HTMLElement | null>;
    boxEl: React.RefObject<HTMLElement | null>;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleRefEvent: (e: React.MouseEvent) => void;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
}

export const usePopper = (
    options: Partial<Options> = {},
    event: EventType = 'click',
    onToggle?: (isOpen: boolean) => void
): UsePopperReturn => {
    const [isOpen, setIsOpen] = useState(false);
    const refEl = useRef<HTMLElement>(null);
    const boxEl = useRef<HTMLElement>(null);
    const popperInstance = useRef<Instance | null>(null);

    useEffect(() => {
        if (!refEl.current || !boxEl.current) return;

        popperInstance.current = createPopper(refEl.current, boxEl.current, options);

        return () => {
            if (popperInstance.current) {
                popperInstance.current.destroy();
                popperInstance.current = null;
            }
        };
    }, [options]);

    useEffect(() => {
        if (popperInstance.current) {
            popperInstance.current.update();
        }
    }, [isOpen]);

    useEffect(() => {
        if (!boxEl.current || !refEl.current) return;

        if (isOpen) {
            boxEl.current.classList.add(POPPER_SHOW_CLASS);
            refEl.current.classList.add(REF_ACTIVE_CLASS);
        } else {
            boxEl.current.classList.remove(POPPER_SHOW_CLASS);
            refEl.current.classList.remove(REF_ACTIVE_CLASS);
        }

        onToggle?.(isOpen);
    }, [isOpen, onToggle]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node;
            if (
                refEl.current &&
                boxEl.current &&
                !refEl.current.contains(target) &&
                !boxEl.current.contains(target)
            ) {
                setIsOpen(false);
            }
        };

        const handleBreakpointChange = () => {
            setIsOpen(false);
        };

        if (event === 'click') {
            document.addEventListener('click', handleClickOutside);
        }

        window.addEventListener('change:breakpoint', handleBreakpointChange);

        return () => {
            document.removeEventListener('click', handleClickOutside);
            window.removeEventListener('change:breakpoint', handleBreakpointChange);
        };
    }, [event]);

    const handleRefEvent = useCallback(
        (e: React.MouseEvent) => {
            if (event === 'click') {
                e.stopPropagation();
                setIsOpen((prev) => !prev);
            }
        },
        [event]
    );

    const handleMouseEnter = useCallback(() => {
        if (event === 'hover') {
            setIsOpen(true);
        }
    }, [event]);

    const handleMouseLeave = useCallback(() => {
        if (event === 'hover') {
            setIsOpen(false);
        }
    }, [event]);

    return {
        refEl,
        boxEl,
        isOpen,
        setIsOpen,
        handleRefEvent,
        handleMouseEnter,
        handleMouseLeave,
    };
};