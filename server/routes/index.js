import { getWorkersList, createWorker, deleteWorker, updateWorker } from '../controllers/workers.js';

const routes = (app) => {
    app.get('/', (req, res) =>
        res.send(`Node and express running on port 5000`)
    )

    app.get('/workers', getWorkersList);
    app.post('/workers', createWorker);
    app.delete('/workers/:id', deleteWorker);
    app.patch('/workers/:id', updateWorker);


}
export default routes;