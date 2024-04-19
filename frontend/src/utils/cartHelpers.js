export const productDummyImage =
	'https://jmjglobalwinpex.com/wp-content/uploads/2019/01/11412309_7a598013-ad27-4020-9234-ecb4dda7e0f7_833_775.jpg';

export function checkCartIndex(shoppingCart, _id) {
	return shoppingCart.findIndex((cartItem) => cartItem._id === _id);
}

export function onClickAddToCart(e, item) {
	//TODO: ini item kyknya bisa diluasin jadi interface lain?
	e.preventDefault();

	let shoppingCart = JSON.parse(window.localStorage.getItem('cart')) || [];

	if (
		shoppingCart.length === 0 ||
		checkCartIndex(shoppingCart, item._id) === -1
	) {
		shoppingCart = [...shoppingCart, { ...item, quantity: 1 }];
	} else {
		shoppingCart[checkCartIndex(shoppingCart, item._id)].quantity += 1;
	}

	window.localStorage.setItem('cart', JSON.stringify(shoppingCart));

	window.alert(`${item.name} added to cart!`);
}

export const handleUpdateCartData = (cartState, setCartState) => ({
	modifyItemQuantity: (e, _id) => {
		let newCartQty = parseInt(e.target.value, 10);
		let variableShoppingCart = [...cartState];
		const maximumStock =
			variableShoppingCart[checkCartIndex(variableShoppingCart, _id)].stock;

		if (newCartQty === 0 || isNaN(newCartQty)) newCartQty = 1;
		else if (newCartQty > maximumStock) newCartQty = maximumStock;

		variableShoppingCart[checkCartIndex(variableShoppingCart, _id)].quantity =
			newCartQty;

		setCartState(variableShoppingCart);
	},
	addItemQuantity: (_id) => {
		let variableShoppingCart = [...cartState];
		variableShoppingCart[checkCartIndex(variableShoppingCart, _id)].quantity +=
			1;

		setCartState(variableShoppingCart);
	},
	reduceItemQuantity: (_id) => {
		let variableShoppingCart = [...cartState];
		let itemQuantity =
			variableShoppingCart[checkCartIndex(variableShoppingCart, _id)].quantity;
		let confirmReduceItem = true;

		if (itemQuantity === 1) {
			confirmReduceItem = window.confirm(
				'are you sure you want to remove selected item?',
			);

			if (confirmReduceItem) {
				variableShoppingCart.splice(
					variableShoppingCart.findIndex((item) => item._id === _id),
					1,
				);
			}
		} else {
			variableShoppingCart[
				checkCartIndex(variableShoppingCart, _id)
			].quantity -= 1;
		}

		setCartState(variableShoppingCart);
	},
	resetCart: () => {
		let confirmEmptyCart = window.confirm(
			'are you sure you want to remove all item(s) in the cart?',
		);

		if (confirmEmptyCart) {
			setCartState();
		}
	},
});

export const getCartPriceTotal = (shoppingCartItems) =>
	shoppingCartItems.reduce(
		(sum, { quantity, price }) => sum + quantity * price,
		0,
	);

export const formatCartData = (rawCartData) =>
	rawCartData.map(({ price, stock, quantity, ...rest }) => ({
		price: parseFloat(price),
		stock: parseInt(stock, 10),
		quantity: parseInt(quantity, 10),
		...rest,
	}));
