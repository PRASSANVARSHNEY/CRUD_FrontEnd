import React from 'react'
import { useState,useEffect } from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios'

function Update() {
    const {id} = useParams();
    const [student, setStudent] = useState({})
    useEffect(() => {
        axios.get('https://localhost:8081/read/'+id)
        .then(res =>{
        console.log(res)
        setStudent(res.data);
     
     })
        .catch(err => console.log(err))
     },[])

    const [values, setValues] = useState({
        name: student.Name,
        email: student.Email
    })
    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('https://localhost:8081/update/'+id, values)
        .then(res=>{
            console.log(res)
            window.location.href = '/'
        }).catch(err => console.log(err));
    }
  return (
<div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className = 'w-50 bg-white rounded p-3'>
        <form onSubmit={handleUpdate}>
            <h2>Update Student</h2>
            <div className='mb-2'>
                <label htmlFor = "">Name</label>
                <input type = "text" placeholder = 'Enter Name' className='form-control'  value={values.name}
                onChange={e => setValues({...values,name: e.target.value})}/>
            </div>
            <div className='mb-2'>
                <label htmlFor = "">Email</label>
                <input type = "email" placeholder = 'Enter Email' className='form-control'  values={values.email}
                onChange = {e => setValues({...values, email:e.target.value})}/>
            </div>
            <button className = 'btn btn-success'>Update</button>
        </form>
        </div>   
    </div>
  )
}

export default Update
