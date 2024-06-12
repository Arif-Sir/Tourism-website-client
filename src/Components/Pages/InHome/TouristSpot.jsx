/* eslint-disable react/prop-types */
// import React from 'react';

import { Link } from "react-router-dom";

const TouristSpot = ({ spotadd }) => {
  const { _id, image, spot,  description} = spotadd;
  return (
    <div className="card card-compact  shadow-xl">
      <figure className="h-1/2"><img src={image} /></figure>
      <div className="card-body bg-[#FFE4C4]">
        <h2 className="card-title">{spot}</h2>
        <p>{description}</p>
        <div className=" ">
          <Link to={`/viewdsetail/${_id}`}>
            <button className="btn btn-neutral">
              View Details </button></Link>
        </div>

      </div>
    </div>
  );
};

export default TouristSpot;