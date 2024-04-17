import { formatCartData } from '@/utils/cartHelpers';

const getProducts = ({ setItemData, setLoading, queryString }) =>
	fetch('http://localhost:9000/getItems.php' + queryString)
		.then((res) => res.text())
		.then((res) => {
			let rawItem = formatCartData(JSON.parse(res));
			setItemData(rawItem);
		})
		.catch((err) => console.error(err))
		.finally(() => setLoading(false));

export default getProducts;
