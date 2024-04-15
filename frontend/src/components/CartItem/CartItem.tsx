const dummyImg =
	'https://jmjglobalwinpex.com/wp-content/uploads/2019/01/11412309_7a598013-ad27-4020-9234-ecb4dda7e0f7_833_775.jpg';

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
	return (
		<div
			className={`flex-row justify-content-between align-items-center ${style['cart-item']} p-2`}
		>
			<div className="flex-row align-items-center">
				<Image
					src={item.image || dummyImg}
					alt={item.name}
					width={100}
					height={100}
					priority
					className="mr-2"
				/>
				<div className={style['cart-item__content']}>
					<p className="mb-1">
						<span className={style['cart-item__price']}>A${item.price}</span>{' '}
						<span className={style['cart-item__unit']}>/ {item.unit}</span>
					</p>
					<h2 className="text-size-xs">{item.name}</h2>
				</div>
			</div>
			<div
				className={`flex-column align-items-end g-2 ${style['cart-item__count']}`}
			>
				{!readOnly && (
					<div>
						<Button
							className={style['cart-item__count__button-min']}
							onClick={() => handleReduceQuantity(item._id)}
						>
							-
						</Button>
						<input
							className={`my-input-style ${style['cart-item__count__input']}`}
							value={item.quantity}
							onChange={(e) => handleUpdateQuantity(e, item._id)}
							name="itemQty"
						/>
						<Button
							className={style['cart-item__count__button-plus']}
							onClick={() => handleAddQuantity(item._id)}
							disabled={item.quantity >= item.stock}
						>
							+
						</Button>
					</div>
				)}
				<span className={`${style['cart-item__count__total-price']}`}>
					total Price: <strong>A${item.quantity * item.price}</strong>
				</span>
			</div>
		</div>
	);
};

export default CartItem;

interface CartItemProps {
	item: {
		_id: number | string;
		name: string;
		image?: string;
		unit: string;
		price: number;
		stock: number;
		quantity: number;
	};
	handleAddQuantity: any;
	handleReduceQuantity: any;
}
