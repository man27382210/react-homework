import resource from 'resource-router-middleware';
import TodoElement from '../models/todoElement';

export default ({ config, db }) => resource({

	/** Property name to store preloaded entity on `request`. */
	id : 'todoElement',

	/** For requests with an `id`, you can auto-load the entity.
	 *  Errors terminate the request, success sets `req[id] = data`.
	 */
	load(req, id, callback) {
		// callback(error message, collectionFound)
		TodoElement.findById(id)
			.then((todoElement) => {
				callback(undefined, todoElement);
			})
			.catch(() => {
				callback('todoElement Not found');
			});
	},

	/** GET / - List all entities */
	index({ params }, res) {
		TodoElement.find({})
			.then((todoElements) => {
				res.json(todoElements);
			})
			.catch(() => {
				res.sendStatus(500);
			});
	},

	/** POST / - Create a new entity */
	create({ body }, res) {
		let todoElement = new TodoElement(body);
		todoElement.save()
			.then((collection)=> {
				// todoElement has been saved successfully
				res.json(collection);
			})
			.catch(() => {
				res.sendStatus(500);
			});
	},

	/** PUT /:id - Update a given entity */
	update({ todoElement, body }, res) {
		let opts = { runValidators: true , new: true}
		TodoElement.findOneAndUpdate(todoElement._id, body, opts)
			.then(() => {
				// update successfully
				res.sendStatus(200);
			})
			.catch(() => {
				res.sendStatus(500);
			});
	},

	/** DELETE /:id - Delete a given entity */
	delete({ todoElement }, res) {
		TodoElement.findByIdAndRemove(todoElement._id)
			.then(() => {
				res.sendStatus(200);
			})
			.catch((err) => {
				res.sendStatus(500);
			});
	}

	/** GET /:id - Return a given entity */
	// read({ todoElement }, res) {
	// 	res.json(todoElement);
	// },
});
