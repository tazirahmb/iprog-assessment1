const postOrder = (formData) =>
	fetch('http://localhost:9000/postOrder.php', {
		method: 'POST',
		body: formData,
	})
		.then((res) => res.text())
		.then((res) => JSON.parse(res)._id);

export default postOrder;
