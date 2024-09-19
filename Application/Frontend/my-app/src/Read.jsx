import React,{useEffect} from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'
function Read() {
    const {id} = useParams();
    const [student, setStudent] = React.useState({})
    useEffect(() => {
       axios.get('https://localhost:8081/read/'+id)
       .then(res =>{
       console.log(res)
       setStudent(res.data);
    
    })
       .catch(err => console.log(err))
    },[])
  return (
    <div className= 'd-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className= 'w-50 bg-white rounded p-3'>
        <div>
        <h2>Student Detail</h2>
        <h2>{student.ID}</h2>
        <h2>{student.Name}</h2>
        <h2>{student.Age}</h2>
        <h2>{student.Email}</h2>
        </div>
        <Link to = '/' className='btn btn-primary me-2'>Back</Link>
        <Link to = {`/update/${student.ID}`} className='btn btn-primary'>Edit</Link>
        </div>      
    </div>
  )
}

export default Read
