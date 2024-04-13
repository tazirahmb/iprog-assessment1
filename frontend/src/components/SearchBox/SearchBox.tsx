import Image from 'next/image';

function redirectToSearch(query) {
	window.location.search = `?search=${query}`;
}

const SearchBox = () => {
	function handleSearch(formData) {
		const searchQuery = formData.get('search');
		if (searchQuery !== '') {
			redirectToSearch(searchQuery.trim());
		}
	}

	function handleSearchKeyDown(e) {
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
				className="mr-2 p-1"
				onKeyDown={handleSearchKeyDown}
			/>
			<button type="submit" aria-label="search-icon" className="p-1">
				<Image
					src="/icons/search.png"
					width={24}
					height={24}
					alt="search-icon"
				/>
			</button>
		</form>
	);
};

export default SearchBox;
