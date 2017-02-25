import resource from 'resource-router-middleware';
import todoElements from '../models/todoElements';

export default ({ config, db }) => resource({

	/** Property name to store preloaded entity on `request`. */
	id : 'todoElement',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		let todoElement = todoElements.find( todoElement => todoElement.id===id ),
			err = todoElement ? null : 'Not found';
		callback(err, todoElement);
	},

	/** GET / - List all entities */
	index({ params }, res) {
		res.json(todoElements);
	},

	/** POST / - Create a new entity */
	create({ body }, res) {
		body.id = todoElements.length.toString(36);
		todoElements.push(body);
		res.json(body);
	},

	/** GET /:id - Return a given entity */
	read({ todoElement }, res) {
		res.json(todoElement);
	},

	/** PUT /:id - Update a given entity */
	update({ todoElement, body }, res) {
		for (let key in body) {
			if (key!=='id') {
				todoElement[key] = body[key];
			}
		}
		res.sendStatus(204);
	},

	/** DELETE /:id - Delete a given entity */
	delete({ todoElement }, res) {
		todoElements.splice(todoElements.indexOf(todoElement), 1);
		res.sendStatus(204);
	}
});
