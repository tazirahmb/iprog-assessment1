'use client';

import React from 'react';

import style from './InputBox.module.css';

const InputBox = React.forwardRef<HTMLInputElement, InputBoxProps>(
	({ label, name, errorMessage, ...rest }: InputBoxProps, ref) => {
		return (
			<div className={`col-6 ${style['input-box']}`}>
				<label className="my-input-label" htmlFor={name}>
					{label}
				</label>
				<input name={name} id={name} aria-label={label} ref={ref} {...rest} />
				<span>{errorMessage?.message}</span>
			</div>
		);
	},
);

export default InputBox;

interface InputBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	name: string;
	errorMessage: { message: string } | null;
	[rest: string]: any;
}
