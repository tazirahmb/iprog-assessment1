const dummyImg =
	'https://jmjglobalwinpex.com/wp-content/uploads/2019/01/11412309_7a598013-ad27-4020-9234-ecb4dda7e0f7_833_775.jpg';

import Image from 'next/image';
import style from './ProductItem.module.css';

import Button from '@/components/Button';

const ProductItem = ({ item, onClick }: ProductItemProps) => {
	const isSoldOut = item.stock === 0;

	return (
		<div className={`${style['product-item']} p-2`}>
			<Image
				src={item.image || dummyImg}
				alt={item.name}
				width={200}
				height={200}
				priority
			/>
			<div className={`${style['product-item__content']} my-1`}>
				<p className="mt-2 mb-1">
					<span className={style['product-item__price']}>A${item.price}</span>{' '}
					<span className={style['product-item__unit']}>/ {item.unit}</span>
				</p>
				<h2 className="text-size-xs">{item.name}</h2>
			</div>
			<Button disabled={isSoldOut} onClick={(e) => onClick(e, item)}>
				{isSoldOut ? 'Sold Out' : 'Add to Cart'}
			</Button>
		</div>
	);
};

export default ProductItem;

interface ProductItemProps {
	readonly item: {
		_id: number | string;
		name: string;
		image?: string;
		unit: string;
		price: number;
		stock: number;
	};
	onClick: any; // TODO: ganti jadi buat function?
}
