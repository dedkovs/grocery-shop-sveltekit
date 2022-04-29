import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
mongoose.connect(process.env.MONGODB_URI);
const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		maxlength: 255
	},
	rating: {
		type: Number,
		min: 0,
		max: 5,
		default: 0
	},
	price: {
		type: Number,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	sizeType: {
		type: String,
		required: true
	},
	sizes: {
		type: Array,
		required: true
	}
});

export const Product = mongoose.model('Product', productSchema);
