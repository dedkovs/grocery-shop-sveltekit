export interface Product {
	id: number;
	name: string;
	description: string;
	rating: number;
	price: number;
	image: string;
	sizeType: 'kg' | 'pcs';
	sizes: [number, number, number];
	quantity: number;
}
