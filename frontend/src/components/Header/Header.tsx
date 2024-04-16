'use client';

import Image from 'next/image';
import style from './Header.module.css';
import Link from 'next/link';

import SearchBox from '@/components/SearchBox';
// import { useMemo } from 'react';

const Header = ({ minimum }) => {
	// // TODO: update each item addded?
	// const cartQtyTotal = useMemo(() => {
	// 	const cartItem = JSON.parse(window.localStorage.getItem('cart')) || [];
	// 	return `AU$${cartItem.reduce(
	// 		(sum, { quantity, price }) => sum + quantity * price,
	// 		0,
	// 	)}`;
	// }, []);

	return (
		<header title="page-header" className={`${style['header-wrapper']} py-1`}>
			<div className="container">
				<div
					className={`flex-row justify-content${minimum ? '-center' : '-between'} align-items-center`}
				>
					<div className="product-logo flex-row align-items-center">
						<Link className={`${style['logo-link']} link-reset`} href="/">
							<Image
								src="/logo_temp_1k.png"
								width={60}
								height={40}
								alt="Online shop logo"
								className="mr-2"
							/>
							<span>
								<strong>Tazirah</strong>
								<br />
								on line shop
							</span>
						</Link>
					</div>
					{!minimum && (
						<>
							<SearchBox />
							<Link
								href="/cart"
								className={`link-reset py-2 px-1 ${style['cart']}`}
								style={{
									border: `1px solid --var(primary)`,
									borderRadius: '12px',
								}}
							>
								Cart
							</Link>
						</>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
