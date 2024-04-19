export interface ProductDefaultType {
	item: {
		_id: number | string;
		name: string;
		image?: string;
		unit: string;
		price: number;
		stock: number;
		quantity?: number;
	}
}
