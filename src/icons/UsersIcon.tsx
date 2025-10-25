
import React, { type SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}

export const UsersIcon: React.FC<IconProps> = ({
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
        </svg>
    );
};
