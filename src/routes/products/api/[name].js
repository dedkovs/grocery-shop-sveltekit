import { Product } from '../../../db/mongoose';

export async function get({ params }) {
	try {
		const product = await Product.findOne({ name: params.name }).exec();
		return {
			status: 200,
			body: {
				product
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
