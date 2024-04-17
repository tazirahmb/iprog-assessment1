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

import { handleUpdateCartData, getCartPriceTotal } from '@/utils/cartHelpers';

export default function ShoppingCart() {
	const [shoppingCartItems, setShoppingCartItems] = useState([]);

	function updateCartState(cartItems = []) {
		setShoppingCartItems(cartItems);

		window.localStorage.setItem('cart', JSON.stringify(cartItems));
	}

	useEffect(() => {
		let storageCartItems =
			JSON.parse(window.localStorage.getItem('cart')) || [];

		setShoppingCartItems(storageCartItems);
	}, []);

	const { modifyItemQuantity, addItemQuantity, reduceItemQuantity, resetCart } =
		handleUpdateCartData(shoppingCartItems, updateCartState);

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
											handleUpdateQuantity={modifyItemQuantity}
											handleAddQuantity={addItemQuantity}
											handleReduceQuantity={reduceItemQuantity}
											key={item._id}
										/>
									))}
								</div>
								<div className="flex-row justify-content-end align-items-center">
									<span>Cart Total:</span>
									<span className="mx-2 text-size-lg">
										<strong>A${getCartPriceTotal(shoppingCartItems)}</strong>
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
