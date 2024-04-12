const dummyImg =
	'https://jmjglobalwinpex.com/wp-content/uploads/2019/01/11412309_7a598013-ad27-4020-9234-ecb4dda7e0f7_833_775.jpg';

import Image from 'next/image';

const SummaryItem = ({ item }: SummaryItemProps) => {
	return (
		<div className="col-3">
			<Image
				src={item.image || dummyImg}
				alt={item.name}
				width={200}
				height={200}
				priority
			/>
			<p>
				<strong>{item.name}</strong>
			</p>
			<p>
				A${item.price} per {item.unit}
			</p>
			<p>qty: {item.quantity}</p>
			<div>
				<strong>total Price: A${item.quantity * item.price}</strong>
			</div>
		</div>
	);
};

export default SummaryItem;

interface SummaryItemProps {
	item: {
		_id: number | string;
		name: string;
		image?: string;
		unit: string;
		price: number;
		stock: number;
		quantity: number;
	};
}
