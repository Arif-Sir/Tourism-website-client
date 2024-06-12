// import React from 'react';
import { useContext } from 'react';
import Swal from 'sweetalert2'
import { Authcontext } from '../Provider/AuthProvider';

const AddSpots = () => {
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
        const email = form.email.value;
        const name = form.name.value;
        const newSpot = {image,spot,country,location,description,cost,season,time,visitor,email,name}
        console.log(newSpot);

        // sending to server
        fetch('http://localhost:3000/spots',{
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newSpot)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.onmouseenter = Swal.stopTimer;
                      toast.onmouseleave = Swal.resumeTimer;
                    }
                  });
                  Toast.fire({
                    icon: "success",
                    title: "Added successfully"
                  });
            }
        })


    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Share The Details</h1>  
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleAdd} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="text"name="image" placeholder="image" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Spot_name</span>
          </label>
          <input type="text" name="spot" placeholder="place" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> country_Name</span>
          </label>
          <input type="text" name="country" placeholder="country" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input type="text" name="location" placeholder="location" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Short description</span>
          </label>
          <input type="text" name="description" placeholder="write here" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Average_cost</span>
          </label>
          <input type="number" name="cost" placeholder="cost" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Season</span>
          </label>
          <input type="text" name="season" placeholder="hot or cold" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Travel_time</span>
          </label>
          <input type="number" name="time" placeholder="time" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Visitor (per year)</span>
          </label>
          <input type="number" name="visitor" placeholder="" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">User Email</span>
          </label>
          <input type="email" name="email" defaultValue={user.email} className="input input-bordered " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">User name</span>
          </label>
          <input type="text" name="name"  value={user.displayName} className="input input-bordered font-extrabold"required  />
        </div>
       
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default AddSpots;