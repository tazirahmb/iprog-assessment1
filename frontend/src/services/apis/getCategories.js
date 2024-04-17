const getCategories = ({ setItemData }) =>
	fetch('http://localhost:9000/getCategories.php')
		.then((res) => res.text())
		.then((res) => setItemData(JSON.parse(res)))
		.catch((err) => console.error(err));

export default getCategories;
