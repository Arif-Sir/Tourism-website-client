// import React from 'react';
/* eslint-disable no-unused-vars */

import { useContext } from 'react';
import Swal from 'sweetalert2'
import { Authcontext } from '../Provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const letUpdate = useLoaderData();
    const {_id,image,spot,country,location,description,cost,season,time,visitor}= letUpdate;
        
  const {user} =useContext(Authcontext);
    const handleAdd = e =>{
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const spot = form.spot.value;
        const country = form.country.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const season = form.season.value;
        const time = form.time.value;
        const visitor = form.visitor.value;
        // const email = form.email.value;
        // const name = form.name.value;
        const newUpdate = {image,spot,country,location,description,cost,season,time,visitor}
        console.log(newUpdate);

        // sending to server
        fetch(`http://localhost:3000/spots/${_id}`,{
            method: "PUT", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUpdate)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Your Updated Successfull',
                    icon: 'success',
                    confirmButtonText: 'OKEY'
                  })
            }
        })
        
    }
            
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      {/* <h1 className="text-3xl font-bold">Update of <span className='font-italic'>{spot}</span> </h1>   */}
      <h1 className="text-3xl font-bold">Update of <span className="text-red-500 italic">{spot}</span> </h1>


    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleAdd} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="text"name="image" defaultValue={image} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Spot_name</span>
          </label>
          <input type="text" name="spot" defaultValue={spot} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> country_Name</span>
          </label>
          <input type="text" name="country" defaultValue={country} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input type="text" name="location" defaultValue={location} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Short description</span>
          </label>
          <input type="text" name="description" defaultValue={description} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Average_cost</span>
          </label>
          <input type="number" name="cost" defaultValue={cost} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Season</span>
          </label>
          <input type="text" name="season" defaultValue={season} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Travel_time</span>
          </label>
          <input type="number" name="time" defaultValue={time} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Visitor (per year)</span>
          </label>
          <input type="number" name="visitor" defaultValue={visitor} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Email</span>
          </label>
          <input type="email" name="email" defaultValue={user.email} className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">User name</span>
          </label>
          <input type="text" name="name"  value={user.displayName} className="input input-bordered font-extrabold"  />
        </div>
       
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};


export default Update;