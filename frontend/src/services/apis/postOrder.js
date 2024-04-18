const postOrder = (formData) =>
	fetch(`${process.env.NEXT_PUBLIC_API_URL}/postOrder.php`, {
		method: 'POST',
		body: formData,
	})
		.then((res) => res.text())
		.then((res) => JSON.parse(res)._id)
		.catch(({ message }) => window.alert(message));

export default postOrder;
