/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const TouristSpotsCard = () => {
    const { country } = useParams();
    const [spots, setSpots] = useState([]);




    useEffect(() => {
        fetch(`http://localhost:3000/spots?country=${country}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.filter(singleData => singleData.country == country));
                const filterData = data.filter(singleData => singleData.country == country);
                setSpots(filterData);
            })


    }, [country]);


    return (
        <div className="italic">
            <br />
            <h1 className="text-4xl text-center text-[#C0C] font-bold mb-6">Tourist Spots in {country}</h1>
            <hr className="border-black" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">            
                {spots.map(spot => (
                    <div key={spot.id} className="card bg-base-100 shadow-xl">
                        <figure><img src={spot.image} alt={spot.name} /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl">{spot.spot}</h2>
                            <p className="italic">{spot.description}</p>

                            <p className="italic">Season : <span className="font-bold"> {spot.season} </span></p>
                            <p>Visitor per Year : <span className="font-bold"> {spot.visitor} </span></p>
                            <p>Travel Time: <span className="font-bold"> {spot.time} </span> </p>
                            <p>Average Cost: <span className="font-bold"> ${spot.cost} </span></p>
                        </div>

                    </div>
                ))}
            </div>
            
        </div>
    );
};



export default TouristSpotsCard;