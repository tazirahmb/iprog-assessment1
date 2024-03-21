import Image from "next/image";

const SearchBox = () => (
  <form method="get" action="">
    <input name="search" placeholder="Search product..." aria-label="searchbox-input" className="mr-2 p-1"/>
    <button type="submit" aria-label="search-icon" className="p-1"><Image src="/icons/search.png" width={24} height={24} alt="search-icon"/></button>
  </form>
)

export default SearchBox;