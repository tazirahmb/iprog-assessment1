import style from './Loading.module.css';

const Loading = () => (
	<div
		className="flex-row align-items-center justify-content-center"
		style={{ width: '100vw', height: '100vh' }}
	>
		<div
			className={`my-5 mx-auto flex-column justify-content-center align-items-center text-center ${style['lds-spinner']}`}
		>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
);

export default Loading;
