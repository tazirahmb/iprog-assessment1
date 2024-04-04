// component
import Header from '@/components/Header';
import Link from 'next/link';

export default function CheckOut() {
	return (
		<>
			<div>Checkout page</div>
			<Link
				href="/order-complete"
				style={{
					backgroundColor: 'yellow',
					fontWeight: 'bold',
					padding: '8px 16px',
				}}
			>
				Go to Order Confirmation
			</Link>
		</>
	);
}
