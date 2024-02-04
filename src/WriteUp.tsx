import React from 'react';

type InputVariants = 'normal' | 'floating' | 'radio' | 'text-area';
// Create prop definitions for each element.

interface NormalInputProps {
	text: string;
}
const NormalInput = (props: NormalInputProps): JSX.Element => <></>;

interface FloatingProps {
	label: string;
}

const FloatingInput = (props: FloatingProps): JSX.Element => <></>;

interface RadioProps {
	options: string[];
}
const RadioInput = (props: RadioProps): JSX.Element => <></>;

interface TextAreaProps {
	rows: string | number;
	columns: string | number;
}

const TextArea = (props: TextAreaProps): JSX.Element => <></>;

// Create a picker props to choose the selected input.
type PickProps<Selected extends InputVariants> = Selected extends 'normal'
	? NormalInputProps
	: Selected extends 'floating'
	? FloatingProps
	: Selected extends 'radio'
	? RadioProps
	: Selected extends 'text-area'
	? TextAreaProps
	: NormalInputProps;

type AllInputProps<Variant extends InputVariants> = PickProps<Variant> & {
	variant?: Variant;
};

// passing an a default value is essential to scope the props to the default
export const InputExample = <Variant extends InputVariants = 'normal'>(
	props: AllInputProps<Variant>
) => {
	const { variant = 'normal', ...rest } = props;

	const renderInput = (): React.ReactNode => {
		// not doing a strong prop narrowing to save myself from the typescript headache
		// this is bad because the component can be initialized with props assigned to Floating input
		// but it defaults to a normal input
		switch (variant) {
			case 'normal':
				return <NormalInput {...(rest as unknown as NormalInputProps)} />;
			case 'floating':
				return <FloatingInput {...(rest as unknown as FloatingProps)} />;
			case 'radio':
				return <RadioInput {...(rest as unknown as RadioProps)} />;
			case 'text-area':
				return <TextArea {...(rest as unknown as TextAreaProps)} />;
		}
	};

	return renderInput();
};

export const UsageExample = () => {
	return (
		<>
			<InputExample variant="floating" label="Floating" />
			<InputExample variant="radio" options={['one', 'two']} />
			<InputExample variant="text-area" columns={20} rows={20} />
			<InputExample text="Default" />
			<InputExample<'normal'> text="Type is passed as a generic" />
		</>
	);
};
