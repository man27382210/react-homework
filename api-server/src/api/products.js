import resource from 'resource-router-middleware';
import Product from '../models/product';

export default () => resource({

	/** Property name to store preloaded entity on `request`. */
	id : 'product',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		Product.findById(id)
			.then((product) => {
				product ? callback(null, product) : callback('Not found');
			})
			.catch(() => callback('Not found'));
	},

	/** GET / - List all entities */
	index({ params }, res) {
		Product.find({})
			.then((products) => res.json(products))
			.catch((err) => res.status(500).json(err));
	},

	/** POST / - Create a new entity */
	create({ body }, res) {
		let productElement = new Product(body);
		productElement.save()
			.then((newProduct) => res.json(newProduct))
			.catch((err) => res.status(500).json(err));
	},

	/** GET /:id - Return a given entity */
	read({ product }, res) {
		res.json(product);
	},

	/** PUT /:id - Update a given entity */
	update({ product, body }, res) {
		Product.findByIdAndUpdate(product.id, body)
			.then(() => res.sendStatus(200))
			.catch((err) => res.status(500).json(err));
	},

	/** DELETE /:id - Delete a given entity */
	delete({ product }, res) {
		Product.findByIdAndRemove(product.id)
			.then(() => res.sendStatus(200))
			.catch((err) => res.status(500).json(err));
	}
});
