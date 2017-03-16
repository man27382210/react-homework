// import fakeData from './fakeData.json';
// // our example model is just an Array
// const todoElements = fakeData;
// export default todoElements;

import mongoose from 'mongoose';
import { mongodbUrl, TESTING_ENV } from '../config.json';

if (process.env.NODE_ENV !== TESTING_ENV) mongoose.connect(mongodbUrl);

// Use native promises
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;
const TodoElement = new Schema({
  category: { type: String, required: true},
  title: { type: String, required: true},
  owner: { type: String, required: true},
  status: { type: String, required: true},
  priority: { type: String, required: true},
  timestamps: { type: Date, default: Date.now },
});

// export model with the same name of Schema
export default mongoose.model('todoElement', TodoElement);
