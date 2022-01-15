import axios from 'axios';

const url = 'http://localhost:5000/workers';

export const fetchWorkers = () => axios.get(url);

export const createWorker = (newWorker) => axios.post(url, newWorker);

export const updateWorker = (id, updatedWorker) => axios.patch(`${url}/${id}`, updatedWorker);

export const deleteWorker = (id) => axios.delete(`${url}/${id}`);