import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import Home from './Home'
import Create from './Create'
import Read from './Read'
import Update from './Update'
import Login from './Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
function App()
{
    return (
        <BrowserRouter>
        <Routes>
            <Route path = '/' element= {<Login />} />
            <Route path = '/signup' element= {<Signup />} />
            <Route path = '/Home' element = {<Home />} />
            <Route path = '/create' element = {<Create />} />
            <Route path = '/read/:id' element = {<Read />} />
            <Route path = '/update/:id' element = {<Update />} />
            </Routes></BrowserRouter>
    );
}

export default App;