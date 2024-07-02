import React from 'react'

const About = () => {
  return (
    <div className= "dark:bg-dark bg-slate-100 dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center"> 
        <div data-aos="slide-right" data-aos-duration="500" data-aos-once="false">
            <img src="car4.png" alt="" className= "sm:scale-105 sm:tranlate-x-11 max-h-[300px] drop-shadow-[]" style={{transform:"scaleX(-1)"}}/>
        </div>
        <div>
         <div className="space-y-5 sm:p-16 pb-6">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold font-serif">
            About Us</h1>
            <p data-aos="fade-up"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore atque ut doloremque est.</p>
            <p  data-aos="fade-up"> Lorem ipsum dolor sit, amet consectetur adipisicingelit. Aliquid, ratione.</p>
            <button  data-aos="fade-up" className="button outline rounded outline-yellow-500 px-4 py-2 hover:bg-yellow-400 font-bold">Get Started</button>
            </div> 
        </div>
            </div>
        </div>
    </div>
  )
}

export default About
