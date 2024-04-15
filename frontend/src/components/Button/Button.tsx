import style from './Button.module.css';

const Button = ({ children, className = '', ...rest }) => {
	return (
		<button className={`my-btn ${className}`} {...rest}>
			{children}
		</button>
	);
};

export default Button;
