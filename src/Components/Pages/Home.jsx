/* eslint-disable react/no-unescaped-entities */



import { useLoaderData } from "react-router-dom";
// import Banner from "./InHome/Banner";
import TouristSpot from "./InHome/TouristSpot";
import About from "./About";
import Try from "./Try";


const Home = () => {
    const spots = useLoaderData();
    console.log(spots);
    return (
        <div className="bg-[#FFE4C4] px-6">
            <Try></Try>
            {/* <Banner></Banner> */}

             {/* wellcome section*/}
             <div className="text-center mt-10">
            <hr className="" />
            
                <h2 className="text-5xl font-extrabold text-black m-3"> Welcome to the <br /> South Asia  </h2>        
                <hr className="border-black" />
                Your gateway to unforgettable adventures in this vibrant region.
                Embark on a journey through the enchanting lands of South Asia, where culture, history, and natural beauty intertwine.
                Discover the wonders of ancient civilizations,Immerse yourself in the rich tapestry of cultures.Experience the warm hospitality and
                diverse cuisines that reflect the unique heritage of each South Asian nation.Let us be your guide as you explore iconic landmarks, hidden gems,
                and off-the-beaten-path treasures across South Asia.Whether you seek spiritual enlightenment, adrenaline-fueled adventures, or simply moments of tranquility, South Asia has it all.
                Our expertly crafted itineraries cater to every traveler's interests, ensuring a truly personalized and memorable experience.
                Join us and embark on the journey of a lifetime as you create cherished memories in South Asia that will last a lifetime.
                Welcome aboard – your South Asia adventure awaits!
            </div>


            {/* <AllSpots></AllSpots> */}
            <div className="">
           
            <hr />
            <br />
            <h2 className="text-center text-3xl ">
                All Touris Stpots
            </h2>
            <br />
            <hr className="border-black" />
            <br />
            
            <br />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-6 ">
                {
                    spots.map(spot => <TouristSpot key={spot._id}
                        spotadd={spot}></TouristSpot>)
                }

            </div>
        </div>

           
            {/* country card section */}

            <About></About>

        </div>
    );
};

export default Home;