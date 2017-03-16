import { version } from '../../package.json';
import { Router } from 'express';
import todoElements from './todoElements';
export default ({ config, db }) => {
	let api = Router();

	// mount the todoElements resource
	api.use('/todoElements', todoElements({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
