import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Product = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  inStock: { type: Number, required: true },
  status: { type: String, required: true },
  imageUrl: { type: String, required: true },
  timestamps: { type: Date, default: Date.now }
});

// Duplicate the ID field.
Product.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
Product.set('toJSON', {
    virtuals: true
});

// export model with the same name of Schema
export default mongoose.model('product', Product);
