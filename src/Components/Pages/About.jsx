/* eslint-disable react/no-unescaped-entities */
// import React from 'react';

import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import groovyWalkAnimation from "../../../public/email.json";

const About = () => {
    const nevigate = useNavigate();

    const handelCardClick = (country) => {
        nevigate(`/spots/${country}`);
    };

    return (
        <div className="mt-10">
          
            <hr className="" />           
            <h1 className="text-center text-5xl font-extrabold">Choose Your Desire Country</h1>
            <br />
            <hr className="border-black" />
            <br />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* banfladesh */}
            <div className="Bangladesh" onClick={()=> handelCardClick('Bangladesh')}>
            <div className="card bg-base-100 shadow-xl mb-3 image-full">
  <figure><img src="https://www.foei.org/wp-content/uploads/2021/12/PN9A9505.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Bangladesh</h2>
   
    <p>Welcome to Bangladesh, a land of vibrant culture and rich history! Nestled in South Asia, Bangladesh is renowned for its lush greenery, extensive river networks, and the world's largest river delta. The capital, Dhaka, is a bustling metropolis that reflects the nation's dynamic spirit and colorful traditions. Visit the Sundarbans, home to the majestic Royal Bengal Tiger, and explore the breathtaking mangrove forests. The ancient city of Paharpur houses one of the worl. Our cuisine, with its flavorful curries and fresh seafood, promises a delightful culinary journey. Experience the warmth and hospitality of the Bangladeshi people, known for their friendliness </p>
    
  </div>
</div>
        </div>
        {/* Vietnam */}
            <div className="Vietnam" onClick={()=> handelCardClick('Vietnam')}>
            <div className="card min-h-96 bg-base-100 shadow-xl mb-3 image-full">
  <figure><img src="https://www.foei.org/wp-content/uploads/2021/12/PN9A9505.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Vietnam</h2>
    <p>Welcome to Vietnam, a land of breathtaking landscapes and rich cultural heritage! Nestled in Southeast Asia,
         Vietnam boasts a harmonious blend of ancient traditions and vibrant modernity. From the bustling streets of
          Hanoi and Ho Chi Minh City to the  beauty of Ha Long Bay and the Mekong Delta
        .Explore historical sites such as the ancient town of 
           Hoi An and the imperial city of Hue. Warm and hospitable, the Vietnamese people will make you at home. Whether you're seeking relaxation on pristine 
           beaches or trekking through lush mountains,
         Vietnam promises an unforgettable experience. Welcome,
          and enjoy all that Vietnam has to offer!</p>
    
  </div>
</div>
        </div>

        {/* Thailand */}
            <div className="Thailand" onClick={()=> handelCardClick('Thailand')}>
            <div className="card min-h-96 bg-base-100 shadow-xl mb-3 image-full">
  <figure><img src="https://www.foei.org/wp-content/uploads/2021/12/PN9A9505.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Thailand</h2>
    <p>Welcome to the enchanting land of Thailand, a country rich in culture, history, and natural beauty. Known as the "Land of Smiles," Thailand warmly greets visitors with its friendly and hospitable people. From the bustling streets of Bangkok to the tranquil beaches of Phuket, there's something for everyone to enjoy. Explore ancient temples, vibrant markets, and savor the world-renowned Thai cuisine. Discover the lush jungles of Chiang Mai and the stunning islands of Krabi. Whether you're seeking adventure, relaxation, or cultural experiences, Thailand promises an unforgettable journey. Embrace the warmth and charm of this captivating destination!</p>
    
  </div>
</div>
        </div>

        {/* Indonesiya */}
        <div className="Indonesia" onClick={()=> handelCardClick('Indonesia')}>
            <div className="card min-h-96 bg-base-100 shadow-xl mb-3 image-full">
  <figure><img src="https://www.foei.org/wp-content/uploads/2021/12/PN9A9505.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Indonesia</h2>
    <p>Welcome to Indonesia, a diverse archipelago of over 17,000 islands, offering a rich tapestry of culture, nature, and adventure! Discover the stunning beaches of Bali, the vibrant marine life in Raja Ampat, and the lush rice terraces of Ubud. Explore Jakarta's bustling city life and Yogyakarta's ancient temples, including Borobudur and Prambanan. Indonesia is a land of warm hospitality, where traditional customs blend seamlessly with modern influences. Whether you’re trekking up volcanoes, diving in crystal-clear waters, or savoring local cuisine, Indonesia promises an unforgettable journey. Experience the magic and warmth of Indonesia!</p>
    
  </div>
</div>
        </div>

        {/* no.5 Malaysiya */}
        <div className="Malaysia" onClick={()=> handelCardClick('Malaysia')}>
            <div className="card min-h-96 bg-base-100 shadow-xl mb-3 image-full">
  <figure><img src="https://www.foei.org/wp-content/uploads/2021/12/PN9A9505.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Malaysia</h2>
    <p>Welcome to Malaysia, a land of diverse cultures, stunning landscapes, and vibrant cities! Nestled in Southeast Asia, Malaysia is renowned for its  beaches, lush rainforests, and bustling urban centers like Kuala Lumpur. Explore the iconic Petronas Towers, indulge in the culinary delights of Penang, and relax on the pristine shores of Langkawi. Discover the rich cultural heritage in Malacca and the vibrant street markets in Kota Kinabalu. Warm and hospitable, Malaysians welcome you with open arms. Whether you're seeking adventure or relaxation, Malaysia promises an unforgettable experience. Welcome, and enjoy all that Malaysia has to offer!</p>
    
  </div>
</div>
        </div>

        {/* no.6 Cambodia */}
        <div className="Cambodia" onClick={()=> handelCardClick('Cambodia')}>
            <div className="card min-h-96 bg-base-100 shadow-xl mb-3 image-full">
  <figure><img src="https://www.foei.org/wp-content/uploads/2021/12/PN9A9505.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Cambodia</h2>
    <p>Welcome to Cambodia, a land of ancient wonders and vibrant culture! Nestled in Southeast Asia, Cambodia is home to the magnificent Angkor Wat, a UNESCO World Heritage site and one of the largest religious monuments in the world. Explore the bustling streets of Phnom Penh, where modernity meets tradition, and visit the serene beaches of Sihanoukville. Discover the rich history and warm hospitality of the Khmer people as you journey through lush landscapes and historic sites. From the captivating temples of Siem Reap to the tranquil countryside, Cambodia offers an unforgettable experience for every traveler. Welcome, and enjoy your adventure!</p>
    
  </div>
</div>
        </div>
        </div>

        {/* lets talk */}
        <hr />
        <div>
            <h2 className="text-5xl font-extrabold mx-auto mt-12 lg:ml-20">Let Us Know...</h2>
            <hr className="border-black " />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 shadow-xl">
  <div>
  <figure><Lottie animationData={groovyWalkAnimation} loop={true} /></figure>
  </div>
  <div className="card-body">
    <h2 className="card-title text-3xl">Give Us A Message abut your thoght</h2>
    <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label ">
            <span className="label-text">Message</span>
          </label>
          <textarea  placeholder="  Message us" rows={5} className=""  required />         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">send</button>
        </div>
      </form>
  </div>
</div>
        </div>
        
    );
};

export default About;