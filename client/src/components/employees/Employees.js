import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getWorkers } from '../../actions/workers';
import Employee from './employee/Employee';
import Form from './form/Form';
import './Employees.css'

const Employees = () => {

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const workers = useSelector((state) => state.workers);

    useEffect(() => {
        dispatch(getWorkers());
    }, [dispatch]);

    return (
        <div className='employees'>
            <div>
                Workers List:
                <div className='employeesCards'>
                    {workers.map((worker) => (
                        <div className='employeesCard' key={worker._id}>
                            <Employee worker={worker} setCurrentId={setCurrentId} />
                        </div>
                    ))}
                </div>
            </div>
            
            <div>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
            </div>
        </div>
    )
};

export default Employees;