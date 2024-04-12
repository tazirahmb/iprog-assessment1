import Image from 'next/image';
import styles from './Header.module.css';
import Link from 'next/link';

import SearchBox from '@/components/SearchBox';

// TODO: kudu pk state biar auto update
const cartItem = JSON.parse(window.localStorage.getItem('cart')) || [];
const cartQtyTotal = cartItem.reduce((sum, { quantity }) => sum + quantity, 0);

const Header = () => (
	<header title="page-header" className={`${styles['header-wrapper']} py-2`}>
		<div className="container">
			<div className="flex-row justify-content-between align-items-center">
				<div className="product-logo flex-row align-items-center">
					<Link href="/">
						<Image
							src="/logo_temp_1k.png"
							width={80}
							height={50}
							alt="Online shop logo"
						/>
						<span>Tazirah on line shop</span>
					</Link>
				</div>
				<SearchBox />
				<Link
					href="/cart"
					style={{
						backgroundColor: 'yellow',
						fontWeight: 'bold',
						padding: '8px 16px',
					}}
				>
					Cart Dummy ({cartQtyTotal})
				</Link>
			</div>
		</div>
	</header>
);

export default Header;
