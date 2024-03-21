import Image from 'next/image';
import styles from './Header.module.css';

import SearchBox from '@/components/SearchBox';

const Header = () => (
	<header className={`${styles['header-wrapper']} py-2`}>
		<div className="container">
			<div className="flex-row justify-content-between align-items-center">
				<div className="product-logo flex-row align-items-center">
					<Image
						src="/logo_temp_1k.png"
						width={80}
						height={50}
						alt="Online shop logo"
					/>
					<span>Tazirah on line shop</span>
				</div>
				<SearchBox />
				<div>Cart dummy</div>
			</div>
		</div>
	</header>
);

export default Header;
