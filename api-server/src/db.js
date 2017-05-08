import mongoose from 'mongoose';
import { mongodbUrl, seedDB, TEST_ENV } from './config.json';
import Product from './models/product';

import fakeData from './models/sampleData.json';

export default callback => {
	// connect to a database if needed, then pass it to `callback`:
	let db = null;
	if (process.env.NODE_ENV !== TEST_ENV) {
		db = mongoose.connect(mongodbUrl, (err) => {
			if (err) {
				console.error('Could not connect to MongoDB!');
				console.log(err);
			}
		});
	}

	// native promises
	mongoose.Promise = global.Promise;

	// Populate DB with sample data
  if (seedDB) {
    Product.find({}).remove(() => {
			Product.create(fakeData, () => console.log('> Finished populating products'));
		});
  }
	callback(db);
}
