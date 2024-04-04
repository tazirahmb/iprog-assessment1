export default function InputBox({ label, name, ...props }: InputBoxProps) {
	return (
		<>
			<label htmlFor={name}>{label}</label>
			<input name={name} id={name} aria-label={label} {...props} />
		</>
	);
}

interface InputBoxProps {
	label: string;
	name: string;
}
