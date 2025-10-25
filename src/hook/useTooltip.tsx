import React, { useEffect, useRef, type ReactNode, type AnchorHTMLAttributes, type HTMLAttributes } from 'react';
import tippy, { type Instance, type Props as TippyProps, type Placement } from 'tippy.js';
import { followCursor } from 'tippy.js';

interface BaseTooltipProps {
    children: ReactNode;
    content: string | Element;
    placement?: Placement;
    theme?: string;
    delay?: number | [number | null, number | null];
    duration?: number | [number | null, number | null];
    trigger?: string;
    followCursor?: boolean;
    followCursorMode?: 'x' | 'y' | 'initial';
    allowHTML?: boolean;
    interactive?: boolean;
    arrow?: boolean | string | SVGElement;
}

type TooltipAsLink = BaseTooltipProps & {
    as?: 'a';
    href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'content'>;

type TooltipAsSpan = BaseTooltipProps & {
    as?: 'span';
    href?: never;
} & Omit<HTMLAttributes<HTMLSpanElement>, 'content'>;

type TooltipProps = TooltipAsLink | TooltipAsSpan;

export const Tooltip: React.FC<TooltipProps> = ({
                                             children,
                                             content,
                                             placement = 'top',
                                             theme,
                                             delay,
                                             duration,
                                             trigger = 'mouseenter focus',
                                             followCursor: shouldFollowCursor,
                                             followCursorMode,
                                             allowHTML = false,
                                             interactive = false,
                                             arrow = true,
                                             as = 'span',
                                             href,
                                             className,
                                             style,
                                             ...restProps
                                         }) => {
    const elementRef = useRef<HTMLElement>(null);
    const tippyInstance = useRef<Instance | null>(null);

    useEffect(() => {
        if (!elementRef.current || !content) return;

        const config: Partial<TippyProps> = {
            content,
            placement,
            animation: 'shift-away',
            zIndex: 10003,
            arrow,
            allowHTML,
            interactive,
            plugins: []
        };

        if (theme) config.theme = theme;
        if (delay !== undefined) config.delay = delay;
        if (duration !== undefined) config.duration = duration;
        if (trigger) config.trigger = trigger;

        if (shouldFollowCursor) {
            config.plugins = [followCursor];

            if (followCursorMode === 'x') {
                config.followCursor = 'horizontal';
            } else if (followCursorMode === 'y') {
                config.followCursor = 'vertical';
            } else if (followCursorMode === 'initial') {
                config.followCursor = 'initial';
            } else {
                config.followCursor = true;
            }
        }

        tippyInstance.current = tippy(elementRef.current, config);

        return () => {
            if (tippyInstance.current) {
                tippyInstance.current.destroy();
            }
        };
    }, [content, placement, theme, delay, duration, trigger, shouldFollowCursor, followCursorMode, allowHTML, interactive, arrow]);

    const commonProps = {
        ref: elementRef as any,
        className,
        style: { ...style },
        ...restProps
    };

    if (as === 'a' && href) {
        return (
            <a href={href} {...commonProps}>
                {children}
            </a>
        );
    }

    return (
        <span {...commonProps}>
      {children}
    </span>
    );
};