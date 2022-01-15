import * as api from '../api';

//Action creators
export const getWorkers = () => async (dispatch) => {

    try {
        const { data } = await api.fetchWorkers();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
            console.log(error);
    }

}

export const createWorker = (worker) => async (dispatch) => {
    try {
      const { data } = await api.createWorker(worker);
  
      dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const updateWorker = (id, worker) => async (dispatch) => {
    try {
      const { data } = await api.updateWorker(id, worker);
  
      dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const deleteWorker = (id) => async (dispatch) => {
    try {
      await api.deleteWorker(id);
  
      dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
      console.log(error);
    }
  };