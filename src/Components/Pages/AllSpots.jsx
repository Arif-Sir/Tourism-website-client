// import React from 'react';

import { useLoaderData } from "react-router-dom";
import TouristSpot from "./InHome/TouristSpot";

const AllSpots = () => {
    const spots = useLoaderData();
    console.log(spots);

    return (
        <div className="bg-orange-200">
           
            <hr />
            <br />
            <h2 className="text-center text-3xl ">
                All Touris Stpots
            </h2>
            <br />
            <hr className="border-black" />
            <br />
            <div className="text-center">
                <details className="dropdown  ">
                    <summary className="m-1 btn bg-black text-white">Sort By </summary>
                    <ul className=" shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>ascending</a></li>
                        <li><a>Dscending</a></li>
                    </ul>
                </details>
            </div>
            <br />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-6 ">
                {
                    spots.map(spot => <TouristSpot key={spot._id}
                        spotadd={spot}></TouristSpot>)
                }

            </div>
        </div>
    );
};

export default AllSpots;