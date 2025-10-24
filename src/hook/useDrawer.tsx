
import { useState, useCallback, useRef, useEffect } from 'react';

interface UseDrawerOptions {
    onToggle?: (isOpen: boolean) => void;
    onAnimationEnd?: () => void;
}

interface UseDrawerReturn {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
    overlayRef: React.RefObject<HTMLDivElement | null>;
    contentRef: React.RefObject<HTMLDivElement | null>;
    getOverlayProps: () => {
        ref: React.RefObject<HTMLDivElement | null>;
        onClick: () => void;
        className: string;
    };
    getContentProps: () => {
        ref: React.RefObject<HTMLDivElement | null>;
        className: string;
    };
    getCloseButtonProps: () => {
        onClick: () => void;
    };
}

export const useDrawer = (options: UseDrawerOptions = {}): UseDrawerReturn => {
    const { onToggle, onAnimationEnd } = options;
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    const open = useCallback(() => {
        if (isOpen) return;
        setIsOpen(true);
        setIsClosing(false);
        onToggle?.(true);
    }, [isOpen, onToggle]);

    const close = useCallback(() => {
        if (!isOpen) return;
        setIsClosing(true);

        // Wait for animation to complete
        const animationDuration = 300; // adjust based on your CSS animation
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
            onToggle?.(false);
            onAnimationEnd?.();
        }, animationDuration);
    }, [isOpen, onToggle, onAnimationEnd]);

    const toggle = useCallback(() => {
        if (isOpen) {
            close();
        } else {
            open();
        }
    }, [isOpen, open, close]);

    const getOverlayProps = useCallback(() => {
        const baseClass = 'drawer-overlay fixed inset-0 z-[150] bg-slate-900/60';
        const visibilityClass = !isOpen && !isClosing ? 'hidden' : '';
        const animationClass = isClosing ? 'animate-fadeOut' : isOpen ? 'animate-fadeIn' : '';

        return {
            ref: overlayRef,
            onClick: close,
            className: `${baseClass} ${visibilityClass} ${animationClass}`.trim(),
        };
    }, [isOpen, isClosing, close]);

    const getContentProps = useCallback(() => {
        const baseClass = 'drawer-content fixed right-0 top-0 z-[101] h-full w-full sm:w-80';
        const visibilityClass = !isOpen && !isClosing ? 'hidden' : '';
        const animationClass = isClosing ? 'animate-slideOut' : isOpen ? 'animate-slideIn' : '';

        return {
            ref: contentRef,
            className: `${baseClass} ${visibilityClass} ${animationClass}`.trim(),
        };
    }, [isOpen, isClosing]);

    const getCloseButtonProps = useCallback(() => ({
        onClick: close,
    }), [close]);

    // Handle Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                close();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            // Prevent body scroll when drawer is open
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isOpen, close]);

    return {
        isOpen,
        open,
        close,
        toggle,
        overlayRef,
        contentRef,
        getOverlayProps,
        getContentProps,
        getCloseButtonProps,
    };
};