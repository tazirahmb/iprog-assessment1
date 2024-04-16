'use client';

// component
import Header from '@/components/Header';
import CartItem from '@/components/CartItem';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import NoData from '@/components/NoData';
import Button from '@/components/Button';
import Categories from '@/components/Categories';

import style from './ShoppingCart.module.css';

function checkCartIndex(shoppingCart, _id) {
	return shoppingCart.findIndex((cartItem) => cartItem._id === _id);
}

export default function ShoppingCart() {
	// TODO: ganti jadi useMemo or useCallback?
	const [shoppingCartItems, setShoppingCartItems] = useState([]);

	useEffect(() => {
		let storageCartItems =
			JSON.parse(window.localStorage.getItem('cart')) || [];

		setShoppingCartItems(storageCartItems);
	}, []);

	function handleUpdateCartData(cartItems = []) {
		setShoppingCartItems(cartItems);

		window.localStorage.setItem('cart', JSON.stringify(cartItems));
	}

	function handleAddQuantity(_id) {
		let variableShoppingCart = [...shoppingCartItems];
		variableShoppingCart[checkCartIndex(variableShoppingCart, _id)].quantity +=
			1;

		handleUpdateCartData(variableShoppingCart);
	}

	function handleUpdateQuantity(e, _id) {
		console.log(_id);
		let newCartQty = parseInt(e.target.value, 10);
		console.log(newCartQty);
		let variableShoppingCart = [...shoppingCartItems];
		console.log(variableShoppingCart);
		console.log(checkCartIndex(variableShoppingCart, _id));
		const maximumStock =
			variableShoppingCart[checkCartIndex(variableShoppingCart, _id)].stock;

		if (newCartQty === 0 || isNaN(newCartQty)) newCartQty = 1;
		else if (newCartQty > maximumStock) newCartQty = maximumStock;

		variableShoppingCart[checkCartIndex(variableShoppingCart, _id)].quantity =
			newCartQty;

		handleUpdateCartData(variableShoppingCart);
	}

	function handleReduceQuantity(_id) {
		let variableShoppingCart = [...shoppingCartItems];
		let itemQuantity =
			variableShoppingCart[checkCartIndex(variableShoppingCart, _id)].quantity;
		let confirmReduceItem = true;

		if (itemQuantity === 1) {
			confirmReduceItem = window.confirm(
				'are you sure you want to remove selected item?',
			);

			if (confirmReduceItem) {
				variableShoppingCart.splice(
					variableShoppingCart.findIndex((item) => item._id === _id),
					1,
				);
			}
		} else {
			variableShoppingCart[
				checkCartIndex(variableShoppingCart, _id)
			].quantity -= 1;
		}

		handleUpdateCartData(variableShoppingCart);
	}

	const cartPriceTotal = shoppingCartItems.reduce(
		(sum, { quantity, price }) => sum + quantity * price,
		0,
	);

	function resetCart() {
		let confirmEmptyCart = window.confirm(
			'are you sure you want to remove all item(s) in the cart?',
		);

		if (confirmEmptyCart) {
			handleUpdateCartData();
		}
	}

	return (
		<>
			<Header />
			<Categories />
			<main className="container mb-8">
				<div className="flex-row justify-content-center">
					<div className="col-6">
						{shoppingCartItems.length === 0 ? (
							<NoData message="Add item to your cart first" icon="🪹" />
						) : (
							<>
								<div className="flex-row justify-content-between mt-6">
									<h1 className="text-size-lg">Shopping Cart</h1>
									<Button
										className={style['button__clear-cart']}
										onClick={resetCart}
									>
										Clear Cart
									</Button>
								</div>
								<div className="flex-column g-2 my-3">
									{shoppingCartItems.map((item) => (
										<CartItem
											item={item}
											handleUpdateQuantity={handleUpdateQuantity}
											handleAddQuantity={handleAddQuantity}
											handleReduceQuantity={handleReduceQuantity}
											key={item._id}
										/>
									))}
								</div>
								<div className="flex-row justify-content-end align-items-center">
									<span>Cart Total:</span>
									<span className="mx-2 text-size-lg">
										<strong>A${cartPriceTotal}</strong>
									</span>
									<Link
										href="/checkout"
										className={`my-btn link-reset ${style['checkout-btn']}`}
									>
										Place an Order
									</Link>
								</div>
							</>
						)}
					</div>
				</div>
			</main>
		</>
	);
}
