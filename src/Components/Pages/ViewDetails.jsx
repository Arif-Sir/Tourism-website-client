// import React from 'react';

import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const details = useLoaderData();
    
  const {  image, spot, country, location, description, cost, season, time, visitor, } = details;

    return (
      <div className="card lg:card-side bg-amber-100 shadow-xl m-4">
  <figure><img src={image} alt="Album"/></figure>
  <div className="card-body">
    <div>
    <h4 className="">{country} , {location}.</h4>
    <h1 className="text-3xl font-bold mb-3">{spot}</h1>
    </div>
    <p>{description}</p>
    
    <p className="">Season : <span className="font-bold"> {season} </span></p>
    <p>Visitor per Year : <span className="font-bold"> {visitor} </span></p>
    <p>Travel Time: <span className="font-bold"> {time} </span>Days </p>
    <p>Average Cost: <span className="font-bold"> ${cost} </span></p>
    
    
  </div>
</div>
    );
};

export default ViewDetails;