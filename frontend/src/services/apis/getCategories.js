const getCategories = ({ setItemData }) =>
	fetch(`${process.env.NEXT_PUBLIC_API_URL}/getCategories.php`)
		.then((res) => res.text())
		.then((res) => setItemData(JSON.parse(res)))
		.catch((err) => console.error(err));

export default getCategories;
