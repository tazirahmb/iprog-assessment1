'use client';

import { useEffect, useState } from 'react';

export default function useFetch(fetchFunc) {
	const queryString = window.location.search;

	const [fetchedData, setFetchedData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchFunc({ setItemData: setFetchedData, setLoading, queryString });
	}, []);

	return { fetchedData, loading };
}
