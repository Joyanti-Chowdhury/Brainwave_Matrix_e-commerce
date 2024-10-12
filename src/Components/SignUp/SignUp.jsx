import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {
    const [error,setError] =useState('');
    const {createUser} = useContext(AuthContext);



const handleSignUp = event => {
        event.preventDefault();
        const form  = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email ,password,confirm);

            setError('');
            if(password !== confirm){
                setError('your password did not matched')
                return
            }
            else if (password.length < 6 ){
                setError('password must be 6 character or longer ')
                return
            }


            createUser(email,password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })



}






    return (
            <div className='form-container'>
            <h3 className='form-title'>Sign Up</h3>
            <form onSubmit={handleSignUp}>
                <div className='form-control'>
                    <label htmlFor=''>Email</label>
                    <input type="email" name="email" id="" placeholder='' required />

                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" id="" placeholder='' required />
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Confirm Password</label>
                    <input type="password" name="confirm" id="" placeholder='' required />
                </div>
                 <input  className='btn-submit' type="submit" value="Sign Up" />

                 <p><small>Already Have an account?<Link to="/login">Log In
                </Link></small></p>
                <p className='text-error'>{error}</p>
            </form>

             
        </div>
      
    );
};

export default SignUp;