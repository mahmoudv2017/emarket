import React from 'react';
import './style.scss'
import CSRFTOKEN from '../../csrfTokenGen'
import api from '../../../data/axios';
import { Button } from 'react-bootstrap'
import { useRef } from 'react';
import Cookies from 'js-cookie';




function Register() {
    const reffer = useRef()
    const formHandler = (e) => {
        e.preventDefault()
        const data = {
            fname : reffer.current.fname.value,
            lname : reffer.current.lname.value,
            email : reffer.current.email.value,
            password : reffer.current.password.value,
        }
      
        
            api.post('users/register' , data ,{
                headers : {
                    'X-CSRFToken' : Cookies.get('csrftoken')
                }
            })
            .then(res => {console.log(res)})
        
          
        
    
       
       
    }
    return (   
    
    <div className='w-50 register'>
        <p className='text-muted text-uppercase'>start for free</p>
        <h1 className='text-uppercase'>Create a new accout <span className='fs-4 text-primary'>.</span></h1>
        <p className='text-uppercase'>Already a member ? <span className='text-primary fw-4'>Login</span></p>

        <form ref={reffer} onSubmit={(e) => {
            formHandler(e)
        }}  >
            <CSRFTOKEN />

            <div>
                <input className='me-3' type="text" placeholder='first name' name='fname' />
                <input type="text" placeholder='last name' name='lname'/>
            </div>


            <input className='w-100' type="email" placeholder='email' name='email'/>
            <input className='w-100' type='password' placeholder='password' name='password' autoComplete='false' />
         

            <Button type='submit' variant='primary' >submit</Button>

        </form> 
        
        </div>
            
         
        
      
        );
}

export default Register;