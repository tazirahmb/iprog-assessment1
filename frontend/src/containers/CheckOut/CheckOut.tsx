'use client';

// component
// import Header from '@/components/Header';
import InputBox from '@/components/InputBox/InputBox';
// import Link from 'next/link';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
	firstName: yup.string().required('This field is Required'),
	lastName: yup.string().required('This field is Required'),
	phoneNumber: yup
		.number()
		.min(10, 'Phone number must be at 10 digit')
		.max(10, 'Phone number must be at 10 digit')
		.required('This field is Required'),
	email: yup.string().email().required('This field is Required'),
	address: yup.string().required('This field is Required'),
	state: yup.string().required('This field is Required'),
	suburb: yup.string().required('This field is Required'),
	postcode: yup
		.number()
		.min(4, 'Postal code must be at 4 digit')
		.max(4, 'Postal code must be at 4 digit')
		.required('This field is Required'),
});

import { useForm } from 'react-hook-form';

import style from './CheckOut.module.css';

const stateData = ['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'];

export default function CheckOut() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	console.log(errors);
	const onSubmit = (data) => console.log(data);

	console.log(watch('firstName', { required: true }));

	return (
		<>
			<main className="container mb-8">
				<h1 className={`${style['header']} mb-3`}>
					Checkout page / Delivery Detail
				</h1>
				<div className="flex-row justify-content-center">
					<div className="col-6">
						<form onSubmit={handleSubmit(onSubmit)} className="flex-row g-2">
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
