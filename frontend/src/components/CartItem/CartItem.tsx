import type { ProductDefaultType } from '@/utils/cartHelpers';
import { productDummyImage } from '@/utils/cartHelpers';

import Image from 'next/image';

import Button from '@/components/Button';

import style from './CartItem.module.css';

const CartItem = ({
	item,
	readOnly,
	handleUpdateQuantity,
	handleAddQuantity,
	handleReduceQuantity,
}: CartItemProps) => {
	const { quantity = 0 } = item;

	return (
		<div
			className={`flex-row justify-content-between align-items-center ${style['cart-item']} p-2`}
		>
			<div className="flex-row align-items-center">
				<Image
					src={item.image || productDummyImage}
					alt={item.name}
					width={100}
					height={100}
					priority
					className="mr-2"
				/>
				<div className={style['cart-item__content']}>
					<p className="mb-1">
						<span className={`text-size-sm ${style['cart-item__price']}`}>
							A${item.price}
						</span>{' '}
						<span className={style['cart-item__unit']}>/ {item.unit}</span>
					</p>
					<h2 className="text-size-md">{item.name}</h2>
				</div>
			</div>
			<div
				className={`flex-column align-items-end g-2 ${style['cart-item__count']}`}
			>
				{readOnly ? (
					<span className={style['cart-item__unit']}>Qty: {quantity}</span>
				) : (
					<div>
						<Button
							className={style['cart-item__count__button-min']}
							onClick={() => handleReduceQuantity(item._id)}
						>
							-
						</Button>
						<input
							className={`my-input-style ${style['cart-item__count__input']}`}
							value={quantity}
							onChange={(e) => handleUpdateQuantity(e, item._id)}
							name="itemQty"
						/>
						<Button
							className={style['cart-item__count__button-plus']}
							onClick={() => handleAddQuantity(item._id)}
							disabled={quantity >= item.stock}
						>
							+
						</Button>
					</div>
				)}
				<span className={`${style['cart-item__count__total-price']}`}>
					total Price: <strong>A${quantity * item.price}</strong>
				</span>
			</div>
		</div>
	);
};

export default CartItem;

interface CartItemProps extends ProductDefaultType {
	handleAddQuantity: (itemId: string | number) => void;
	handleReduceQuantity: (itemId: string | number) => void;
	handleUpdateQuantity: (e: any, itemId: string | number) => void;
	readOnly: boolean;
}
