
import * as actionType from '../constants/actionTypes';

const workersReducer = (workers = [], action) => {
    switch (action.type) {

        case actionType.FETCH_ALL:
            return action.payload;

        case actionType.CREATE:
            return [...workers, action.payload];

        case actionType.UPDATE:
            return workers.map((worker) => worker._id !== action.payload._id ? action.payload : worker);

        case actionType.DELETE:
            return workers.filter((worker) => worker._id === action.payload._id ? action.payload : worker);
            
        default:
            return workers;
    }
};

export default workersReducer;