import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const LogIn = () => {
const [show, setShow] = useState(false);


const {signIn} = useContext(AuthContext);
const navigate = useNavigate();
const location = useLocation();
console.log(location);

 
const from = location.state?.from?.pathname || '/';
console.log(from);

const handleLogIn = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    signIn(email,password)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from,{ replace:true })
    })
    .catch(error =>{
        console.log(error);
    })

}

    return (
        <div className='form-container'>
            <h3 className='form-title'>Log in</h3>
            <form onSubmit={handleLogIn}>
                <div className='form-control'>
                    <label htmlFor=''>Email</label>
                    <input type="email" name="email" id="" placeholder='' required />

                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type={show ? "text" : "password" } name="password" id="" placeholder='' required />
                        <p onClick={() =>setShow(!show)}><small>
                            
                            {
                                show ? <span>Hide password</span>: <span>Show password</span>
                            }
                            </small></p>
                </div>
                 <input  className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New to Ema-John ?<Link to="/signup">Create a account
                </Link></small></p>
               
        </div>
    );
};

export default LogIn;