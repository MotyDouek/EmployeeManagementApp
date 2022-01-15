import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { createWorker, updateWorker } from '../../../actions/workers';
import './Form.css';

const Form = ({ currentId, setCurrentId }) => {

    const [workerData, setWorkerData] = useState({name: '', joinedAt: '' , title: ''});
    const worker = useSelector((state) => (currentId ? state.workers.find((wor) => wor._id === currentId) : null));
    const dispatch = useDispatch();

    useEffect(() => {
        if(worker) {
           setWorkerData({name: worker.name, joinedAt: moment(worker.joinedAt).format('YYYY-MM') , title: worker.title});
        } 
    }, [worker]);

    const handelSubmit = (e) => {
        e.preventDefault();
        if(currentId === 0) { //we are editing a post
            dispatch(updateWorker(currentId, workerData));
        } else { //we are not editing a post
            dispatch(createWorker(workerData));
        }
        clear();
    }

    const clear = () => {
        setCurrentId(0);
        setWorkerData({name: '', joinedAt: '' , title: ''});
    }

    return (
        <div className="addWorkerForm">
            <h2 className="addWorkerForm">{(currentId ? 'Edit Worker' : 'Add New Worker')}</h2>
            <form onSubmit={handelSubmit}>
                <div className="insideForm">
                    <label className="addWorkerForm">Full Name:</label>
                    <input className="addWorkerForm" type="text" value={workerData.name} name="name" onChange={(e) => setWorkerData({ ...workerData, name: e.target.value })} />
                    <p/>
                    <label className="addWorkerForm">Start Date</label>
                    <input className="addWorkerForm" type="month" value={workerData.joinedAt} name="joinedAt" onChange={(e) => setWorkerData({ ...workerData, joinedAt: e.target.value })} />
                    <p/>
                    <label className="addWorkerForm">Job Description:</label>
                    <input className="addWorkerForm" type="text" value={workerData.title} name="title" onChange={(e) => setWorkerData({ ...workerData, title: e.target.value })} />
                    <div className="buttons">
                        <button type="submit">Submit</button>
                        <button onClick={clear}>clear</button> 
                    </div>
                </div>
            </form>
        </div>
    )
};

export default Form;