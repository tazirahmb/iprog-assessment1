import type { ProductDefaultType } from '@/utils/cartHelpers';
import { productDummyImage } from '@/utils/cartHelpers';

import Image from 'next/image';
import style from './ProductItem.module.css';

import Button from '@/components/Button';

const ProductItem = ({ item, onClick }: ProductItemProps) => {
	const isSoldOut = item.stock === 0;

	return (
		<div className={`${style['product-item']} p-2`}>
			<Image
				src={item.image || productDummyImage}
				alt={item.name}
				width={200}
				height={200}
				className="mx-auto"
				priority
			/>
			<div className={`${style['product-item__content']} my-1`}>
				<h2 className="text-size-md mt-2 mb-1">{item.name}</h2>
				<p className="mt-2 mb-1">
					<span className={`text-size-sm ${style['product-item__price']}`}>
						A${item.price}
					</span>{' '}
					<span className={`text-size-xs ${style['product-item__unit']}`}>
						/ {item.unit}
					</span>
				</p>
			</div>
			<Button disabled={isSoldOut} onClick={(e) => onClick(e, item)}>
				{isSoldOut ? 'Sold Out' : 'Add to Cart'}
			</Button>
		</div>
	);
};

interface ProductItemProps extends ProductDefaultType {
	onClick: any;
}

export default ProductItem;
