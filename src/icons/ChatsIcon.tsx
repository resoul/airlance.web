
import React, { type SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}

export const ChatsIcon: React.FC<IconProps> = ({
                                                       size = 24,
                                                       className = '',
                                                       ...props
                                                   }) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
            />
            <path
                d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
            />
        </svg>
    );
};
