// component
import Header from '@/components/Header';
import InputBox from '@/components/InputBox/InputBox';
import Link from 'next/link';

export default function CheckOut() {
	return (
		<>
			<div>Checkout page</div>
			<InputBox label="First Name" name="firstName" />
			<InputBox label="Last Name" name="lastName" />
			<InputBox label="Mobile Number" name="mobileNumber" />
			<InputBox label="Email" name="email" />
			<p>
				<strong>Address Information</strong>
			</p>
			<InputBox label="Address" name="address" />
			<InputBox label="Suburb" name="suburb" />
			{/* Should be dropdown */}
			<InputBox label="State" name="state" />
			<InputBox label="Postcode" name="postcode" />
			<Link
				href="/order-complete"
				style={{
					backgroundColor: 'yellow',
					fontWeight: 'bold',
					padding: '8px 16px',
				}}
			>
				Submit
			</Link>
		</>
	);
}
