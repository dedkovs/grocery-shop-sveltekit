import { Product } from '../../db/mongoose';

export async function get() {
	try {
		const products = await Product.find({}).exec();
		return {
			status: 200,
			body: {
				products
			}
		};
	} catch (err) {
		return {
			status: 500,
			body: {
				message: err.message
			}
		};
	}
}
