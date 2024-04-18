import Button from '@/components/Button';

import style from './SearchBox.module.css';

function redirectToSearch(query: string) {
	window.location.href = `/?search=${query}`;
}

const SearchBox = () => {
	function handleSearch(formData: FormData) {
		const searchQuery = formData.get('search') || '';
		if (searchQuery !== '') {
			redirectToSearch(searchQuery);
		}
	}

	function handleSearchKeyDown(e: KeyboardEvent) {
		const { value } = e.target;
		if (e.key === 'Enter' && value !== '') {
			redirectToSearch(value.trim());
		}
	}

	return (
		<form method="get" action={handleSearch}>
			<input
				name="search"
				placeholder="Search product..."
				aria-label="searchbox-input"
				className={`my-input-style ${style['search-box']}`}
				onKeyDown={handleSearchKeyDown}
			/>
			<Button
				type="submit"
				aria-label="search-icon"
				className={`${style['search-box__btn']}`}
			>
				Search
			</Button>
		</form>
	);
};

export default SearchBox;
