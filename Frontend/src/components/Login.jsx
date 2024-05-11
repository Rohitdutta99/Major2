import React, {useState} from "react";
import { Link } from "react-router-dom";
import Validation from "./LoginValidation";

function Login(){
    const [values, setvalues] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({

    })
    const handleInput = (event) => {
        setvalues(prev => ({...prev, [event.target.name]: [event.target.name]}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    } 

    return (
        <div className= "d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-25" >
                <h2 className="align-items-center">Sign-In</h2>
                <form action="./home" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder="Enter Email" name="email"
                        onChange={handleInput} className="form-control rounded-0"/>
                        {errors.email && <span className="text-danger"> {errors.email}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder="Enter Password" name="password" className="form-control rounded-0"/>
                        {errors.password && <span className="text-danger"> {errors.password}</span>}
                    </div>
                    <button className="btn btn-success w-100 rounded-0" type="submit">Log in</button>
                    <p className="d-flex justify-content-center align-items-center">You agree to our terms and policies</p>
                    <Link to="/signup" className="btn btn-default border w-100 bg-l rounded-0 text-decoration-none">Create Account</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;