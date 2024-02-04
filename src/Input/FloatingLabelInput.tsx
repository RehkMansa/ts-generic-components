/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { InputDefaultProps } from './input.types';
import { forwardRef, useState } from 'react';
import { cn } from './utils';
import { HintBlock } from './common';

export type FloatingLabelInputProps = Omit<InputDefaultProps, 'children' | 'placeholder' | 'ref'>;

export const FloatingLabelInput = forwardRef<any, FloatingLabelInputProps>((props, ref) => {
	const {
		type,
		id,
		name,
		label,
		labelClass,
		className,
		isError,
		hint,
		errorClass,
		wrapperClass,
		...rest
	} = props;

	const [showPassword, setShowPassword] = useState(false);

	return (
		<div>
			<div className={cn('relative', wrapperClass)}>
				<input
					{...rest}
					type={showPassword && type === 'password' ? 'text' : type ?? 'text'}
					id={id ?? name}
					name={name}
					className={cn(
						'peer block w-full appearance-none rounded-xl border border-AccentGray',
						'p-4 text-sm leading-normal focus:outline-none focus:ring-0',
						'bg-transparent text-AccentGray focus:border-white focus:text-white',
						className
					)}
					ref={ref}
					placeholder=" "
				/>

				<label
					htmlFor={id ?? name}
					className={cn(
						'absolute left-2.5 top-2 z-[2] origin-[0] -translate-y-4 scale-75 transform',
						'px-2 text-sm font-medium text-white duration-300',
						'peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100',
						'peer-placeholder-shown:cursor-text peer-focus:top-2 peer-focus:-translate-y-4',
						'peer-focus:scale-75 peer-focus:px-2 peer-focus:text-white',
						'bg-Secondary peer-placeholder-shown:text-AccentGray',
						labelClass
					)}
				>
					{label}
				</label>
				{type === 'password' && (
					<button
						type="button"
						className="absolute right-4 top-1/2 -translate-y-1/2"
						onClick={() => setShowPassword((c) => !c)}
					>
						{showPassword ? <span>hide</span> : <span>show</span>}
					</button>
				)}
			</div>
			<HintBlock
				hint={hint}
				className={cn(isError && 'text-Danger', 'ml-2 mt-0.5', errorClass)}
			/>
		</div>
	);
});

FloatingLabelInput.displayName = 'FloatingLabelInput';
