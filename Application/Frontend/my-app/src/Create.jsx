import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [values, setValues] = useState({
        name: '',
        age: '',
        email: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Simple validation
        if (!values.name || !values.age || !values.email) {
            alert('Please fill in all fields');
            return;
        }

        // Ensure age is a valid positive number
        if (isNaN(values.age) || values.age <= 0) {
            alert('Please enter a valid age');
            return;
        }

        axios.post('http://localhost:127.0.0.1/crud/student', values)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
                alert('An error occurred while submitting the form.');
            });
    };

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Add Student</h2>
                    
                    <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input 
                            type="text" 
                            placeholder="Enter Name" 
                            className="form-control"
                            value={values.name}
                            onChange={e => setValues({ ...values, name: e.target.value })}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Age</label>
                        <input 
                            type="number" 
                            placeholder="Enter Age" 
                            className="form-control"
                            value={values.age}
                            onChange={e => setValues({ ...values, age: e.target.value })}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Email</label>
                        <input 
                            type="email" 
                            placeholder="Enter Email" 
                            className="form-control"
                            value={values.email}
                            onChange={e => setValues({ ...values, email: e.target.value })}
                        />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>   
        </div>
    );
}

export default Create;
