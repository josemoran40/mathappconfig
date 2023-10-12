/**
 * Primary Button design component.
 */

import React from 'react';
import { SppinerIcon } from '../Icons';

/**
 * Button is a visual atom.
 *
 * @param {ButtonProps} props - input props
 * @returns React component
 */

export const PrimaryButton = (props) => {
    const { type, className, widthClassName, loading, disabled, ...remaining } = props;
    const classes = ['flex',
        'items-center',
        'justify-center',
        'border-transparent',
        'bg-green-600',
        'hover:opacity-50',
        'text-base',
        'text-center',
        'text-white',
        'font-semibold',
        'transition-all',
        'duration-300',
        'rounded-sm',
        'focus-outline',
        'max-w-sm',
        'w-full lg:w-auto',
        'px-8 py-2',

        disabled ? '!bg-gray-800 hover:!bg-gray-800 !text-black hover:!text-black' : '',
        className,
    ];
    const { children } = props;

    return (
        <button  {...remaining} type={type || 'button'} className={classes.join(' ')} disabled={loading || disabled}>
            {loading ? <SppinerIcon /> : children}
        </button>
    );
};
