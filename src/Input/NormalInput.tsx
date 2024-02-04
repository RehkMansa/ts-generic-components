import { forwardRef, useState } from 'react';
import { InputDefaultProps } from './input.types';
import { cn } from './utils';
import { HintBlock } from './common';

export type NormalInputProps = Omit<InputDefaultProps, 'ref'>;

export const NormalInput = forwardRef<any, NormalInputProps>((props, ref) => {
	const {
		label,
		name,
		placeholder,
		className,
		id,
		isError,
		hint,
		wrapperClass,
		labelClass,
		errorClass,
		type,
		...rest
	} = props;

	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className={cn(wrapperClass)}>
			<label
				htmlFor={id ?? name}
				className={cn('mb-2 block text-sm font-medium leading-normal', labelClass)}
			>
				{label}
			</label>
			<div className="relative">
				<input
					{...rest}
					type={showPassword && type === 'password' ? 'text' : type ?? 'text'}
					id={id ?? name}
					className={cn(
						'border-AccentGray text-AccentGray block w-full rounded-xl border bg-transparent p-4 text-sm outline-none ',
						'focus:border-white focus:text-white focus:ring-0',
						className
					)}
					placeholder={placeholder}
					name={name}
					ref={ref}
				/>
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
