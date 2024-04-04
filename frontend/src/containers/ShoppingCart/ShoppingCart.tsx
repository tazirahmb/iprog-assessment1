'use client';

// component
import Header from '@/components/Header';
import CartItem from '@/components/CartItem';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import NoData from '@/components/NoData/NoData';

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

	function handleUpdateCartData(cartItems) {
		setShoppingCartItems(cartItems);

		window.localStorage.setItem('cart', JSON.stringify(cartItems));
	}

	function handleAddQuantity(_id) {
		let variableShoppingCart = [...shoppingCartItems];
		variableShoppingCart[checkCartIndex(variableShoppingCart, _id)].quantity +=
			1;

		handleUpdateCartData(variableShoppingCart);
	}

	function handleReduceQuantity(_id) {
		let variableShoppingCart = [...shoppingCartItems];
		let itemQuantity =
			variableShoppingCart[checkCartIndex(variableShoppingCart, _id)].quantity;
		let confirmReduceItem = true;

		if (itemQuantity === 1) {
			confirmReduceItem = window.confirm(
				'are you sure you want to remove item?',
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

	return (
		<>
			<Header />
			<main className="container mb-8">
				<div className="flex-row justify-content-center">
					<div className="col-6">
						{shoppingCartItems.length === 0 ? (
							<NoData />
						) : (
							<>
								<h1>Shopping Cart</h1>
								<div className="flex-column g-2 my-3">
									{shoppingCartItems.map((item) => (
										<CartItem
											item={item}
											handleAddQuantity={handleAddQuantity}
											handleReduceQuantity={handleReduceQuantity}
											key={item._id}
										/>
									))}
								</div>
								<div>
									<strong>Cart Total: A${cartPriceTotal}</strong>
								</div>
								<Link
									href="/checkout"
									style={{
										backgroundColor: 'yellow',
										fontWeight: 'bold',
										padding: '8px 16px',
									}}
								>
									Go to Checkout page
								</Link>
							</>
						)}
					</div>
				</div>
			</main>
		</>
	);
}
