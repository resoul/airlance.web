import React, { type SVGProps } from 'react';
import { icons } from './icons';

export type IconName = keyof typeof icons;

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
    name: IconName;
    size?: number | string;
    className?: string;
}

export const Icon: React.FC<IconProps> = ({
                                              name,
                                              size = 24,
                                              className = '',
                                              viewBox = '0 0 24 24',
                                              ...props
                                          }) => {
    const IconComponent = icons[name];

    if (!IconComponent) {
        console.warn(`Icon "${name}" not found`);
        return null;
    }

    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox={viewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <IconComponent />
        </svg>
    );
};