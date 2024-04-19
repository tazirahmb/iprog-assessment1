'use client';

// component
import Header from '@/components/Header';
import ProductItem from '@/components/ProductItem';
import Categories from '@/components/Categories';
import NoData from '@/components/NoData/NoData';
import LoadingSpinner from '@/components/Loading';

import getProducts from '@/services/apis/getProducts';
import useFetch from '@/services/hooks/useFetch';

import { onClickAddToCart } from '@/utils/cartHelpers';

export default function Home() {
	const { loading, fetchedData: itemData } = useFetch(getProducts);

	return (
		<>
			<Header />
			<Categories />
			<main className="container">
				<section className="flex-row justify-content-start flex-spacing-3">
					{loading ? (
						<LoadingSpinner />
					) : itemData.length === 0 ? (
						<NoData />
					) : (
						itemData.map((item) => (
							<div className="col-3" key={item._id}>
								<ProductItem item={item} onClick={onClickAddToCart} />
							</div>
						))
					)}
				</section>
			</main>
		</>
	);
}
