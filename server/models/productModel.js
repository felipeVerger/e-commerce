import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    images: String,
    creator: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    dislikeCount: {
        type: Number,
        default: 0,
    }
});

const Product = mongoose.model('Product', productSchema);

export default Product;