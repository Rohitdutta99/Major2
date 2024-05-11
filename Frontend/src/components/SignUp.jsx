import React from "react";
import { Link } from "react-router-dom";
import Validation from "./SignupValidation";

function SignUp(){
    return (
        <div className= "d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-25" >
                <h2>Sign-Up</h2>
                <form action="./home">
                    <div className="mb-3">
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input type="text" placeholder="Enter Name" className="form-control rounded-0"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder="Enter Password" className="form-control rounded-0"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder="Enter Password" className="form-control rounded-0"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password"><strong>Confirm Password</strong></label>
                        <input type="password" placeholder="Enter Password" className="form-control rounded-0"/>
                    </div>
                    <button className="btn btn-success w-100 rounded-0" type="submit">Sign Up</button>
                    <p className="d-flex justify-content-center align-items-center">You agree to our terms and policies</p>
                    <Link to="/" className="btn btn-default border w-100 bg-l rounded-0 text-decoration-none">Log in</Link>
                </form>
            </div>
        </div>
    );
}

export default SignUp;