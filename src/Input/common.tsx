import React from 'react';
import { cn } from './utils';

interface HintProps {
	hint?: string;
	className?: string;
}

export const HintBlock = ({ hint, className }: HintProps) => (
	<div
		className={cn(
			'max-h-0 text-xs transition-all duration-300 ease-out',
			hint && 'max-h-[300px]',
			className
		)}
	>
		{hint}
	</div>
);
