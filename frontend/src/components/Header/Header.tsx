'use client';

import Image from 'next/image';
import style from './Header.module.css';
import Link from 'next/link';

import SearchBox from '@/components/SearchBox';

const Header = ({ minimum }: HeaderProps) => {
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

interface HeaderProps {
	minimum?: boolean;
}

export default Header;
