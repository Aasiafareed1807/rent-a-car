import React from "react";

const Contact = () => {
  return (
    <div data-aos = "zoom-in" className = "dark:bg-black dark:text-white py-14">
        <div className = "grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6">
            <div className = "col-span-2 space-y-3 ">
                <h1 className = "text-4xl sm:text-5xl font-bold text-white">{" "}Lets collaborate on your upcoming car rental venture</h1>
                <p className = "text-gray-400"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blandtiis atque repudiandae accusantium voluptas.</p>
            </div>
            <div className = "grid place-items-center">
            <a href = "#" className = "inline-block font-semibold py-4 px-8 bg-primary text-white rounded-lg tracking-wider uppercase hover:bg-primary/80 duration-300">Contact</a>
            </div>
        </div>
    </div>
  );
};

export default Contact
