import { getCartPriceTotal, formatCartData } from '@/utils/cartHelpers';

const getOrder = ({ setItemData, setLoading, queryString }) =>
	fetch(`${process.env.NEXT_PUBLIC_API_URL}/getOrder.php` + queryString)
		.then((res) => res.text())
		.then((res) => {
			const parsedOrderData = JSON.parse(res)[0];
			const formattedOrderCart = JSON.parse(parsedOrderData.orders).map(
				({ price, stock, quantity, ...rest }) => ({
					price: parseFloat(price),
					stock: parseInt(stock, 10),
					quantity: parseInt(quantity, 10),
					...rest,
				}),
			);
			let formattedOrderData = {
				...parsedOrderData,
				orders: formatCartData(JSON.parse(parsedOrderData.orders)),
				cartPriceTotal: getCartPriceTotal(formattedOrderCart),
			};

			setItemData(formattedOrderData);
		})
		.catch((err) => console.error(err))
		.finally(() => setLoading(false));

export default getOrder;
