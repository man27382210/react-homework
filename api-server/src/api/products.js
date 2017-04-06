import resource from 'resource-router-middleware';
import products from '../models/products';

export default ({ config, db }) => resource({

	/** Property name to store preloaded entity on `request`. */
	id : 'product',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		let product = products.find( product => product.id===id ),
			err = product ? null : 'Not found';
		callback(err, product);
	},

	/** GET / - List all entities */
	index({ params }, res) {
		res.json(products);
	},

	/** POST / - Create a new entity */
	create({ body }, res) {
		let lastElementId = parseInt(products[products.length - 1].id);
		body.id = (lastElementId + 1).toString(36);
		products.push(body);
		res.json(body);
	},

	/** GET /:id - Return a given entity */
	read({ product }, res) {
		res.json(product);
	},

	/** PUT /:id - Update a given entity */
	update({ product, body }, res) {
		for (let key in body) {
			if (key!=='id') {
				product[key] = body[key];
			}
		}
		res.sendStatus(204);
	},

	/** DELETE /:id - Delete a given entity */
	delete({ product }, res) {
		products.splice(products.indexOf(product), 1);
		res.sendStatus(204);
	}
});
