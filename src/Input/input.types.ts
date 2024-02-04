export interface StyleBasedProps {
	labelClass?: string;
	wrapperClass?: string;
	errorClass?: string;
}

export interface InputDefaultProps extends React.ComponentProps<'input'>, StyleBasedProps {
	name: string;
	label: string;
	id?: string;
	isError?: boolean;
	hint?: string;
}
