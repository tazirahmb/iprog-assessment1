'use client';

// component
import Header from '@/components/Header';
import ProductItem from '@/components/ProductItem';
import Categories from '@/components/Categories';
import NoData from '@/components/NoData/NoData';

import { useState, useEffect } from 'react';

function checkCartIndex(shoppingCart, _id) {
	return shoppingCart.findIndex((cartItem) => cartItem._id === _id);
}

export default function Home() {
	const [itemData, setItemData] = useState([]);

	useEffect(() => {
		const queryString = window.location.search;

		function fetchItemData() {
			fetch('http://localhost:9000/getItems.php' + queryString)
				.then((res) => res.text())
				.then((res) => {
					let rawItem = JSON.parse(res).map(({ price, stock, ...rest }) => ({
						price: parseFloat(price),
						stock: parseInt(stock, 10),
						...rest,
					}));
					setItemData(rawItem);
				})
				.catch((err) => console.error(err));
		}
		fetchItemData();
	}, []);

	function onClickAddToCart(e: { preventDefault: any }, item: object) {
		//TODO: ini item kyknya bisa diluasin jadi interface lain?
		e.preventDefault();

		let shoppingCart = JSON.parse(window.localStorage.getItem('cart')) || [];

		if (
			shoppingCart.length === 0 ||
			checkCartIndex(shoppingCart, item._id) === -1
		) {
			shoppingCart = [...shoppingCart, { ...item, quantity: 1 }];
		} else {
			shoppingCart[checkCartIndex(shoppingCart, item._id)].quantity += 1;
		}

		window.localStorage.setItem('cart', JSON.stringify(shoppingCart));

		window.alert(`${item.name} added to cart!`);
	}

	return (
		<>
			<Header />
			<Categories />
			<main className="container">
				<section className="flex-row justify-content-start flex-spacing-3">
					{itemData.length === 0 ? (
						<NoData />
					) : (
						itemData.map((item) => (
							<div className="col-3" key={item._id}>
								<ProductItem item={item} onClick={onClickAddToCart} />
							</div>
						))
					)}
				</section>
			</main>
		</>
	);
}
