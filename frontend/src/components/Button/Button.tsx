const Button = ({ children, className = '', ...rest }: ButtonProps) => {
	return (
		<button className={`my-btn ${className}`} {...rest}>
			{children}
		</button>
	);
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	className?: string;
	[rest: string]: any;
}

export default Button;
