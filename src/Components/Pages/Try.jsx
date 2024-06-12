// import React from 'react';

import { useTypewriter,cursor, } from "react-simple-typewriter";

const Try = () => {
  const [text] = useTypewriter({
    words:['Well-Come to Our WebSite', 'Well-Come to South Asia', 'Let Your Journy Begain Wth Us', 'We Are Here To FullFile Your Dream!'],
    loop: {},
    
    cursor
  });
    return (
    <div>
      <div>
      <div className="carousel w-full relative">
      <div id="slide1" className="carousel-item relative w-full">
        
        <img src="https://i.ibb.co/FxD0FSx/sundorban-deer-grazing.jpg" className="w-full" />
        
        
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-black text-6xl font-bold bg-white bg-opacity-50 p-4 rounded">
          Welcome to Explore South Asia. <br />
             <p className="text-xl text-black text-center mt-6">
             {text}
             </p>

          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        
        <img src="https://i.ibb.co/1X84qfX/bridge.jpg" className="w-full" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-black text-6xl font-bold bg-white bg-opacity-50 p-4 rounded">
          Welcome to Explore South Asia. <br />
             <p className="text-xl text-black text-center mt-6">
             {text}
             </p>

          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        {/* <img src="https://i.ibb.co/GtFZGcb/maldip.jpg" className="w-full" /> */}
        <img src="https://i.ibb.co/DDNsfkq/tajmohol.jpg" className="w-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-black text-6xl font-bold bg-white bg-opacity-50 p-4 rounded">
          Welcome to Explore South Asia. <br />
             <p className="text-xl text-black text-center mt-6">
             {text}
             </p>

          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      
    </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
  <a href="#slide1" className="btn btn-xs">1</a> 
  <a href="#slide2" className="btn btn-xs">2</a> 
  <a href="#slide3" className="btn btn-xs">3</a> 
  
</div>
    </div>
    
    
    );
};

export default Try;