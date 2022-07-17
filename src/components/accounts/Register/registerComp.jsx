import React from 'react';
import './style.scss'
import CSRFTOKEN from '../../csrfTokenGen'

function Register() {
    return (   
    
    <div className='w-50 register'>
        <p className='text-muted text-uppercase'>start for free</p>
        <h1 className='text-uppercase'>Create a new accout <span className='fs-4 text-primary'>.</span></h1>
        <p className='text-uppercase'>Already a member ? <span className='text-primary fw-4'>Login</span></p>

        <form action="" method='POST'>
            <CSRFTOKEN />
            <div>
                <input className='me-3' type="text" placeholder='first name' />
                <input type="text" placeholder='last name' />
            </div>



            <input className='w-100' type="email" placeholder='email' />
            <input className='w-100 ' type='password' placeholder='password' />
        </form> 
        
        </div>
            
         
        
      
        );
}

export default Register;