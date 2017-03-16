/* eslint no-console:0 */
import axios from 'axios';
import config from '../common/config';

// GET / - List all entities
export function getTodoElements() {
  return axios.get(config.API_SERVER_TODOELEMENTS)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

// POST / - Create a new entity
export function postTodoElements(action) {
  return axios.post(config.API_SERVER_TODOELEMENTS, action.payload)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

// PUT /:id - Update a given entity
export function putTodoElement(action) {
  const {category, title, owner, status, priority} = action.payload;
  return axios.put(config.API_SERVER_TODOELEMENTS + action.payload._id, {category, title, owner, status, priority})
    .then((res) => {
      return res.status;
    })
    .catch((err) => {
      console.log(err);
    });
}

// DELETE /:id - Delete a given entity
export function deleteTodoElement(action) {
  return axios.delete(config.API_SERVER_TODOELEMENTS + action.payload._id)
    .then((res) => {
      return res.status;
    })
    .catch((err) => {
      console.log(err);
    });
}
