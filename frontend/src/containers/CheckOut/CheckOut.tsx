'use client';

// component
// import Header from '@/components/Header';
import InputBox from '@/components/InputBox/InputBox';
// import Link from 'next/link';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useEffect } from 'react';

const schema = yup.object({
	firstName: yup.string().required('This field is Required'),
	lastName: yup.string().required('This field is Required'),
	phoneNumber: yup.number().required('This field is Required'),
	email: yup.string().email().required('This field is Required'),
	address: yup.string().required('This field is Required'),
	state: yup.string().required('This field is Required'),
	suburb: yup.string().required('This field is Required'),
	postcode: yup.number().required('This field is Required'),
});

import { useForm } from 'react-hook-form';

const stateData = ['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'];

export default function CheckOut() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	useEffect(() => {
		let localCart = JSON.parse(window.localStorage.getItem('cart'));

		if (!localCart) {
			window.alert('Please add some items to cart first before checkout.');
			window.location.href = '/';
		}
	}, []);

	const onSubmit = (data) => {
		const formData = new FormData();

		Object.keys(data).forEach((key) => formData.append(key, data[key]));

		// append cart order
		formData.append('order', window.localStorage.getItem('cart'));
		fetch('http://localhost:9000/postOrder.php', {
			method: 'POST',
			body: formData,
		})
			.then((res) => res.text())
			.then((res) => {
				// dari success, generate order ID, lalu redirect sesuai order ID
				// kalo gaada order ID, ya redirect ke halaman lain?
				const orderId = JSON.parse(res)._id;
				console.log(orderId);
				// remove cart because order already placed
				window.localStorage.removeItem('cart');
				window.location.href = `/order-complete?orderId=${orderId}`;
			});
	};

	return (
		<>
			<main className="container mb-8">
				<h1 className="text-center mb-3">Checkout page / Delivery Detail</h1>
				<div className="flex-row justify-content-center">
					<div className="col-6">
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="flex-row g-2"
							method="POST"
						>
							<InputBox
								label="First Name"
								{...register('firstName', { required: true })}
								errorMessage={errors.firstName}
							/>
							<InputBox
								label="Last Name"
								{...register('lastName', { required: true })}
								errorMessage={errors.lastName}
							/>
							<InputBox
								label="Mobile Number"
								maxLength="10"
								{...register('phoneNumber', {
									required: true,
								})}
								errorMessage={errors.phoneNumber}
							/>
							<InputBox
								label="Email"
								{...register('email', { required: true })}
								errorMessage={errors.email}
							/>
							<h2 className="col-12">
								<strong>Address Information</strong>
							</h2>
							<InputBox
								label="Address"
								{...register('address', { required: true })}
								errorMessage={errors.address}
							/>
							<InputBox
								label="Suburb"
								{...register('suburb', { required: true })}
								errorMessage={errors.suburb}
							/>
							{/* Should be dropdown */}
							<InputBox
								label="State"
								list="state-list"
								{...register('state', { required: true })}
								errorMessage={errors.state}
							/>
							{/* datalist of state */}
							<datalist id="state-list">
								{stateData.map((state) => (
									<option value={state}></option>
								))}
							</datalist>
							<InputBox
								label="Postcode"
								maxLength="4"
								{...register('postcode', { required: true })}
								errorMessage={errors.postcode}
							/>
							<button
								// disabled={errors}
								className="col-12"
								style={{
									backgroundColor: 'yellow',
									fontWeight: 'bold',
									padding: '8px 16px',
									textAlign: 'center',
								}}
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			</main>
		</>
	);
}
