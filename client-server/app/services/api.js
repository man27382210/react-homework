import { API_HOST } from '../config';
import request from 'superagent';

const PRODUCTS_API_URL = `${API_HOST}/api/products`;

export function getProducts() {
  return request
    .get(PRODUCTS_API_URL)
    .then((res) => res.body,
    (err) => {
      throw err.toString();
    });
}

export function addProdcut(product) {
  return request
    .post(PRODUCTS_API_URL)
    .send(product)
    .then((res) => res.body,
    (err) => {
      throw err.toString();
    });
}

export function editProdcut(product) {
  return request
    .put(`${PRODUCTS_API_URL}/${product.id}`)
    .send(product)
    .then((res) => res.status,
    (err) => {
      throw err.toString();
    });
}

export function deleteProdcut(id) {
  return request
    .del(`${PRODUCTS_API_URL}/${id}`)
    .then((res) => res.status,
    (err) => {
      throw err.toString();
    });
}
