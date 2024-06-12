// import React from 'react';

import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  useEffect(()=>{
    document.title = 'ACME || Login';
},[])

    const {signInUser , signInGoogle} = useContext(Authcontext);
    const location = useLocation();
    console.log('privet e login koira koi Nevigate hoy',location);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        signInUser(email,password)
        .then(result=>{
            console.log(result.user);
            // e.target.reset();

            // nevigate after login
            navigate(location?.state? location.state : '/');
        })
        .catch(error=>{
            console.error(error.message);
        })    
    }

    // ------ google log in------
    const handelGoogle = () =>{
        signInGoogle()
        .then(result =>{
            console.log(result.user);
            Swal.fire("Log in sucessFull");
        })
        .catch(error=>{
            console.error(error);
        })
    }
    return (
        <div className="hero min-h-screen bg-gray-600">

      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onClick={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6 gap-3">
            <button className="btn btn-primary">Login</button>
            <button onClick={handelGoogle} className="btn btn-primary">Google Login </button>
            <button className="btn btn-primary">GitHub Login</button>
          </div>

          <p>Do not Have an Account? <Link className="text-red-600 font-bold" to='/resister'>Resister Now</Link></p>
        </form>
      </div>

    </div>
    );
};

export default Login;