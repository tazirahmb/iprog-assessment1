'use client';

// component
import { useState, useEffect } from 'react';
import SummaryItem from '@/components/SummaryItem';

export default function OrderConfirmation() {
	const [orderData, setOrderData] = useState({});

	function fetchOrderData() {
		const queryString = window.location.search;
		fetch('http://localhost:9000/getOrder.php' + queryString)
			.then((res) => res.text())
			.then((res) => {
				console.log();
				const parsedOrderData = JSON.parse(res)[0];
				console.log(parsedOrderData);
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
			.catch((err) => console.error(err));
	}

	console.log(orderData);

	useEffect(() => {
		fetchOrderData();
	}, []);

	function handleBackHome() {
		window.location.href = '/';
	}

	return (
		<>
			<main className="container mb-8">
				<h1 className="text-center mb-3">Order Complete</h1>
				<div className="flex-row justify-content-center">
					<div className="col-6">
						<p>
							Thanks for shopping with us. Your invoice number is{' '}
							<strong>{orderData['order_id']}</strong> We also send your order
							summary to your email.
						</p>
						<p>Here is your order summary:</p>
						<div className="flex-column">
							<h2>Personal Information:</h2>
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
							<h2>Ordered Item:</h2>
							{orderData.orders?.map((item) => (
								<SummaryItem item={item} key={item._id} />
							))}
						</div>
						<div>
							<strong>Cart Total: A${orderData.cartPriceTotal}</strong>
						</div>
						<button
							onClick={handleBackHome}
							style={{
								backgroundColor: 'yellow',
								fontWeight: 'bold',
								padding: '8px 16px',
							}}
						>
							Back to Home
						</button>
					</div>
				</div>
			</main>
		</>
	);
}
