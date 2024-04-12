'use client';

// component
import Header from '@/components/Header';
import ProductItem from '@/components/ProductItem';
import Categories from '@/components/Categories';
import NoData from '@/components/NoData/NoData';

const dummyCategories = ['Frozen', 'Fresh', 'Beverages', 'Home', 'Pet-food'];

const dummyData = [
	{
		_id: 1,
		name: 'product 1',
		image:
			'https://lasallefood.id/wp-content/uploads/2020/06/20190109_Packshoot-combination_Marjan.jpg',
		unit: '500 gram',
		price: 1.22,
		stock: 4,
	},
	{
		_id: 2,
		name: 'product 2',
		image:
			'https://lasallefood.id/wp-content/uploads/2020/06/20190109_Packshoot-combination_Marjan.jpg',
		unit: 'Pack of 10',
		price: 100,
		stock: 10,
	},
	{ _id: 3, name: 'product 3', unit: 'Kilo', price: 5.4, stock: 0 },
	{
		_id: 4,
		name: 'product 4',
		image:
			'https://lasallefood.id/wp-content/uploads/2020/06/20190109_Packshoot-combination_Marjan.jpg',
		unit: 'Cup',
		price: 30,
		stock: 3,
	},
	{
		_id: 5,
		name: 'product 5',
		image:
			'https://lasallefood.id/wp-content/uploads/2020/06/20190109_Packshoot-combination_Marjan.jpg',
		unit: 'Litre',
		price: 2.03,
		stock: 34,
	},
];

function checkCartIndex(shoppingCart, _id) {
	return shoppingCart.findIndex((cartItem) => cartItem._id === _id);
}

export default function Home() {
	function onClickAddToCart(e: { preventDefault: any }, item: object) {
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

	return (
		<>
			<Header />
			<main className="container">
				<div className="flex-row g-2 my-5">
					<aside className="col-2">
						<Categories categories={dummyCategories} />
					</aside>
					<section className="flex-row justify-content-start col gx-2 gy-3">
						{dummyData.length === 0 ? (
							<NoData />
						) : (
							dummyData.map((item) => (
								<ProductItem
									item={item}
									onClick={onClickAddToCart}
									key={item._id}
								/>
							))
						)}
					</section>
				</div>
			</main>
		</>
	);
}
