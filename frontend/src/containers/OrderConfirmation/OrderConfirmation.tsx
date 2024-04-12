'use client';

// component
import { useState, useEffect } from 'react';
import SummaryItem from '@/components/SummaryItem';

export default function OrderConfirmation() {
	const dummyOrderNumber = Math.floor(Math.random() * 100000000);

	const [shoppingCartItems, setShoppingCartItems] = useState([]);
	const [userData, setUserData] = useState({});

	useEffect(() => {
		let localCart = JSON.parse(window.localStorage.getItem('cart'));
		let localUserInformation = JSON.parse(
			window.localStorage.getItem('userInformation'),
		);

		if (!localCart && !localUserInformation) {
			window.location.href = '/';
		} else {
			setShoppingCartItems(localCart);
			setUserData(localUserInformation);
		}
	}, []);

	const cartPriceTotal = shoppingCartItems.reduce(
		(sum, { quantity, price }) => sum + quantity * price,
		0,
	);

	function handleBackHome() {
		window.localStorage.removeItem('cart');
		window.localStorage.removeItem('userInformation');

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
							<strong>{dummyOrderNumber}</strong> We also send your order
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
									<td>
										{userData?.firstName} {userData?.lastName}
									</td>
								</tr>
								<tr>
									<td>
										<strong>Email</strong>
									</td>
									<td>{userData?.email}</td>
								</tr>
								<tr>
									<td>
										<strong>Phone Number</strong>
									</td>
									<td>{userData?.phoneNumber}</td>
								</tr>
								<tr>
									<td>
										<strong>Address</strong>
									</td>
									<td>
										{userData?.address}, {userData?.suburb} {userData?.state}{' '}
										{userData?.postcode}
									</td>
								</tr>
							</table>
							<h2>Ordered Item:</h2>
							{shoppingCartItems.map((item) => (
								<SummaryItem item={item} key={item._id} />
							))}
						</div>
						<div>
							<strong>Cart Total: A${cartPriceTotal}</strong>
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
