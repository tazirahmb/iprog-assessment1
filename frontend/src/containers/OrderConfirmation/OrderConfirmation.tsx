'use client';

// component
import { useState, useEffect } from 'react';
import CartItem from '@/components/CartItem';
import Button from '@/components/Button';
import Header from '@/components/Header';
import LoadingSpinner from '@/components/Loading';

import style from './OrderConfirmation.module.css';
import NoData from '@/components/NoData';

export default function OrderConfirmation() {
	const [orderData, setOrderData] = useState({});
	const [loading, setLoading] = useState(true);

	function fetchOrderData() {
		const queryString = window.location.search;
		fetch('http://localhost:9000/getOrder.php' + queryString)
			.then((res) => res.text())
			.then((res) => {
				const parsedOrderData = JSON.parse(res)[0];
				const formattedOrderCart = JSON.parse(parsedOrderData.orders).map(
					({ price, stock, quantity, ...rest }) => ({
						price: parseFloat(price),
						stock: parseInt(stock, 10),
						quantity: parseInt(quantity, 10),
						...rest,
					}),
				);
				let formattedOrderData = {
					...parsedOrderData,
					orders: formattedOrderCart,
					cartPriceTotal: formattedOrderCart.reduce(
						(sum, { quantity, price }) => sum + quantity * price,
						0,
					),
				};

				setOrderData(formattedOrderData);
			})
			.catch((err) => console.error(err))
			.finally(() => setLoading(false));
	}

	useEffect(() => {
		fetchOrderData();
	}, []);

	function handleBackHome() {
		window.location.href = '/';
	}

	if (loading)
		return (
			<div
				className="flex-row align-items-center justify-content-center"
				style={{ width: '100vw', height: '100vh' }}
			>
				<LoadingSpinner />
			</div>
		);
	if (Object.keys(orderData).length === 0) return <NoData />;

	return (
		<>
			<Header minimum />
			<main className="container mb-8">
				<p className={`text-size-xl mt-6 ${style['text-center']}`}>🎉</p>
				<h1 className={`my-2 ${style['text-center']}`}>Order Complete</h1>
				<div className="flex-row justify-content-center">
					<div className="col-6">
						<p className="text-size-md">
							Thanks for shopping with us. Your invoice number is{' '}
							<strong>{orderData['order_id']}</strong> We also send your order
							summary to your email. Here is your order summary:
						</p>
						<div className="flex-column">
							<h2 className={`${style['text-center']} my-2`}>
								Personal Information
							</h2>
							<table>
								<tr>
									<td>
										<strong>Full Name</strong>
									</td>
									<td>{orderData['full_name']}</td>
								</tr>
								<tr>
									<td>
										<strong>Email</strong>
									</td>
									<td>{orderData['email']}</td>
								</tr>
								<tr>
									<td>
										<strong>Phone Number</strong>
									</td>
									<td>{orderData['phone_number']}</td>
								</tr>
								<tr>
									<td>
										<strong>Address</strong>
									</td>
									<td>{orderData['full_address']}</td>
								</tr>
							</table>
							<h2 className={`${style['text-center']} my-2`}>Ordered Item</h2>
							{orderData.orders?.map((item) => (
								<div className="mb-2" key={item._id}>
									<CartItem item={item} readOnly />
								</div>
							))}
						</div>
						<div className="flex-row justify-content-end align-items-center my-2">
							<span>Cart Total</span>
							<span className="ml-2 text-size-lg">
								<strong>A${orderData.cartPriceTotal}</strong>
							</span>
						</div>
						<Button onClick={handleBackHome} className="my-btn">
							Back to Home
						</Button>
					</div>
				</div>
			</main>
		</>
	);
}
