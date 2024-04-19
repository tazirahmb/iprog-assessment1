import style from './NoData.module.css';

const NoData = ({
	message = 'Check your search query again',
	icon = '🔍',
}: NoDataProps) => (
	<div
		className={`${style['no-data']} my-5 flex-column justify-content-center align-items-center text-center`}
	>
		<span className={`${style['no-data__icon']} mb-2`}>{icon}</span>
		<h1 className={`${style['no-data__text']} text-size-md mb-1`}>Not Found</h1>
		<span className={`${style['no-data__message']}`}>{message}</span>
	</div>
);

interface NoDataProps {
	message?: string;
	icon?: string;
}

export default NoData;
