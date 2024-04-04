// component
import Link from 'next/link';

export default function OrderConfirmation() {
	return (
		<>
			<div>orderConfirmation page</div>
			<Link
				href="/"
				style={{
					backgroundColor: 'yellow',
					fontWeight: 'bold',
					padding: '8px 16px',
				}}
			>
				Back to Home
			</Link>
		</>
	);
}
