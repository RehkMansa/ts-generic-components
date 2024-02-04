import React, { forwardRef } from 'react';
import { FloatingLabelInput, FloatingLabelInputProps } from './FloatingLabelInput';
import { NormalInput, NormalInputProps } from './NormalInput';

type Variant = 'floating' | 'normal';

type DecideExtensionProps<Var> = Var extends 'floating'
	? FloatingLabelInputProps
	: Var extends 'normal'
	? NormalInputProps
	: never;

type InputProps<Var extends Variant> = DecideExtensionProps<Var> & {
	variant?: Var;
};

const InputElement = <T extends Variant = 'normal'>(props: InputProps<T>, ref: any) => {
	const { variant = 'normal' as Variant, ...rest } = props;

	function renderInput(): JSX.Element {
		switch (variant) {
			case 'floating':
				return (
					<FloatingLabelInput
						ref={ref}
						{...(rest as unknown as FloatingLabelInputProps)}
					/>
				);
			case 'normal':
				return <NormalInput ref={ref} {...(rest as unknown as NormalInputProps)} />;
		}
	}

	return renderInput();
};

export const Input = forwardRef(InputElement);
