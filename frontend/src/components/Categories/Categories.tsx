'use client';

import { useState, useEffect } from 'react';

import style from './Categories.module.css';

const Categories = () => {
	const [categoriesData, setCategoriesData] = useState([]);

	// get categories ID
	const queryString = window.location.search;
	const params = new URLSearchParams(queryString);
	const selectedCategory = params.get('category');

	console.log(selectedCategory);

	useEffect(() => {
		function fetchCategoriesData() {
			fetch('http://localhost:9000/getCategories.php')
				.then((res) => res.text())
				.then((res) => setCategoriesData(JSON.parse(res)))
				.catch((err) => console.error(err));
		}

		fetchCategoriesData();
	}, []);

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

interface CategoriesProps {
	categories: Array<{
		_id: string;
		name: string;
	}>;
}
