'use client';

import React from 'react';

import style from './InputBox.module.css';

const InputBox = React.forwardRef(
	({ label, name, errorMessage, ...props }: InputBoxProps, ref) => {
		return (
			<div className={`col-6 ${style['input-box']}`}>
				<label htmlFor={name}>{label}</label>
				<input name={name} id={name} aria-label={label} ref={ref} {...props} />
				<span>{errorMessage?.message}</span>
			</div>
		);
	},
);

export default InputBox;

interface InputBoxProps {
	label: string;
	name: string;
	errorMessage: object | null;
}
