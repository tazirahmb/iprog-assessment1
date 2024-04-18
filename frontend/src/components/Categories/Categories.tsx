'use client';

import style from './Categories.module.css';

import getCategories from '@/services/apis/getCategories';
import useFetch from '@/services/hooks/useFetch';

const Categories = () => {
	// get categories ID
	const queryString = window.location.search;
	const params = new URLSearchParams(queryString);
	const selectedCategory = params.get('category');

	const { fetchedData: categoriesData } = useFetch(getCategories);

	return (
		<nav className={`${style['categories-wrapper']} mb-2`}>
			<div className="container flex-row justify-content-between g-1">
				{categoriesData.map(({ _id, name }) => (
					<div
						key={_id}
						className={`py-2 px-1 ${style['category__item']} ${_id === selectedCategory ? style['category__active'] : ''}`}
					>
						<a
							className={`link-reset ${style['categories__link']}`}
							href={`/?category=${_id}`}
						>
							{name}
						</a>
					</div>
				))}
			</div>
		</nav>
	);
};

export default Categories;
