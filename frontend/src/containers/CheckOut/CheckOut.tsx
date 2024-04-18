'use client';

// component
import InputBox from '@/components/InputBox';
import Button from '@/components/Button';
import Header from '@/components/Header';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import style from './CheckOut.module.css';

import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import postOrder from '@/services/apis/postOrder';

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

const stateData = ['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'];

const onSubmit = (data: { [x: string]: string }) => {
	const formData = new FormData();

	Object.keys(data).forEach((key) => formData.append(key, data[key]));

	// append cart order
	formData.append('order', window.localStorage.getItem('cart'));

	postOrder(formData).then((orderId) => {
		// remove cart because order already placed
		window.localStorage.removeItem('cart');
		window.location.href = `/order-complete?orderId=${orderId}`;
	});
};

export default function CheckOut() {
	const {
		register,
		handleSubmit,
		formState: { isValid, errors, submitCount },
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

	return (
		<>
			<Header minimum />
			<main className="container my-8">
				<h1 className={`mx-auto mb-3 text-size-lg ${style['text-center']}`}>
					Delivery Detail
				</h1>
				<div className="flex-row justify-content-center">
					<div className="col-6">
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="flex-row flex-spacing-2"
							method="POST"
						>
							<InputBox
								label="First Name"
								{...register('firstName', { required: true })}
								className="my-input-style"
								errorMessage={errors.firstName}
							/>
							<InputBox
								label="Last Name"
								{...register('lastName', { required: true })}
								className="my-input-style"
								errorMessage={errors.lastName}
							/>
							<InputBox
								label="Mobile Number"
								maxLength="10"
								{...register('phoneNumber', {
									required: true,
								})}
								className="my-input-style"
								errorMessage={errors.phoneNumber}
							/>
							<InputBox
								label="Email"
								{...register('email', { required: true })}
								className="my-input-style"
								errorMessage={errors.email}
							/>
							<h2
								className={`col-12 text-size-md mt-2 ${style['text-center']}`}
							>
								Address Information
							</h2>
							<InputBox
								label="Address"
								{...register('address', { required: true })}
								className="my-input-style"
								errorMessage={errors.address}
							/>
							<InputBox
								label="Suburb"
								{...register('suburb', { required: true })}
								className="my-input-style"
								errorMessage={errors.suburb}
							/>
							{/* Should be dropdown */}
							<InputBox
								label="State"
								list="state-list"
								{...register('state', { required: true })}
								className="my-input-style"
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
								className="my-input-style"
								errorMessage={errors.postcode}
							/>
							<Button
								type="submit"
								disabled={!isValid && submitCount > 0} // TODO: disable button when error after clicked?
								className="col-12 my-btn mt-2"
							>
								Submit
							</Button>
						</form>
					</div>
				</div>
			</main>
		</>
	);
}
