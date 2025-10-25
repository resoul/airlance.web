
import React, { type SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}

export const ChannelsIcon: React.FC<IconProps> = ({
                                                       size = 24,
                                                       className = '',
                                                       ...props
                                                   }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
            />
        </svg>
    );
};
