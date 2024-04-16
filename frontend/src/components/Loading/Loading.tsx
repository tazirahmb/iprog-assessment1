import style from './Loading.module.css';

const Loading = () => (
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
);

export default Loading;
