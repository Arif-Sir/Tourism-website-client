// import React from 'react';


import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import {  toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';

import { Authcontext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Resister = () => {
    useEffect(()=>{
        document.title = 'ACME || Resister';
    },[])
    const [sucsess, setSucess] = useState('');
    const [error, setError] = useState('');

    const { creatUser } = useContext(Authcontext);

    const handelResister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photo = form.get('photo');
        console.log(email, password, name, photo);


        if (password.length < 6) {
            setError('Password Should be atleast 6 letter');
            return;
            // return toast('6 letter neeed');
        }

        if (!/[A-Z]/.test(password)) {
            setError('1 letter Must be Capital');
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError('1 letter Must be lowerCase');
            return;
        }

        setSucess('');

        setError('');

        // creat user in firebase
        creatUser(email, password)
            .then(result => {
                console.log(result.user);
                
                // creating new user in database
                const user ={email};
                fetch('https://tourism-website-server-seven.vercel.app/user',{
                    method: "POST", 
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.insertedId){
                        console.log('user added to the database');
                        Swal.fire("user added to the database");
                    }
                })



                setSucess('user created')

                // update
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                .then(()=> console.log('updated'))
                .catch()
            })
            .catch(error => {
                console.error(error);
            })

    }
    return (
        <div className=" ">

            <div className="hero min-h-screen bg-gray-400 ">

                <div className="card m-3 shrink-0 w-full max-w-sm shadow-2xl bg-white">
                    <h2 className="text-4xl text-blue-700 text-center font-bold">Please Resister</h2>
                    <form onSubmit={handelResister} className="card-body ">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo-Url" className="input input-bordered" required />
                        </div>
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
                            

                            {
                                sucsess && <p className="text-green-600">{sucsess}</p>
                            }
                            {
                                error && <p className="text-red-600">{error}</p>
                            }

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type="submit">Resister</button>

                        </div>



                        <p>Already Have an Account? <Link className="text-red-600 font-bold" to='/login'>Login Now</Link></p>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default Resister;