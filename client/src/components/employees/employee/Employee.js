import React from "react";
import moment from 'moment';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch } from 'react-redux';

import './Employee.css';
import { deleteWorker } from '../../../actions/workers';

const Employee = ({ worker, setCurrentId }) => {

    const dispatch = useDispatch();
    const colorPlate = ['#2C363F', '#E75A7C', '#F2F5EA', '#D6DBD2', '#BBC7A4'];
    const randomBgColor = Math.floor(Math.random() * 5);

    const deleteSelectedWorker = () => {
        dispatch(deleteWorker(worker._id));
    };

    const editSelectedWorker = () => {
        setCurrentId(worker._id);
    }

    return (
        <div className="card" style={{background: colorPlate[randomBgColor]}}>
            <label className="employeeName">{worker.name}</label>
            <label className="employeeDate">Joined in {moment(worker.joinedAt).format('YYYY')}</label>
            <label className="employeeTitle">{worker.title}</label>
            <div className="solid"></div>
            <div className="icons">
                <div className="editIcon" onClick={editSelectedWorker}>
                    <EditIcon fontSize="small" /> Edit
                </div>
                <div className="deleteIcon" onClick={deleteSelectedWorker}>
                    <DeleteIcon fontSize="small" /> Delete 
                </div> 
            </div>
        </div>
    )
};

export default Employee;