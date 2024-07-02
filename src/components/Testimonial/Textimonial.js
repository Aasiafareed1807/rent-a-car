import React from "react";

const testimonialData = [
    {
        name: "John",
        image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "Lorem ipsum dolor sit amet consectetur elit.",
        aosDelay: "0",
    },
    {
        name: "Dazy",
        image: "https://miro.medium.com/v2/resize:fit:1200/1*pHb0M9z_UMhO22HlaOl2zw.jpeg",
        description: "Lorem ipsum dolor sit amet consectetur elit.",
        aosDelay: "300",
    },
    {
        name: "Mickel",
        image: "https://images.pexels.com/photos/938639/pexels-photo-938639.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "Lorem ipsum dolor sit amet consectetur elit.",
        aosDelay:"100,0",
    }
];

const Textimonial = () => {
  return (
    <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
            {/*header*/}
            <div className="space-y-4 pb-12">
                <p data-aos="fade--up" className="text-3xl font-semibold text-center sm:tex-4xl font-serif"> What Our Clients say About Us</p>
                <p data-aos="fade-up" className="text-center sm:px-44"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            {/* card section*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-back dark:text-white">
                {testimonialData.map((data) => (
                    <div data-aos="fade-up"  data-aos-delay ={data.aosDelay}key={data.name} className="card text-center group space-y-3 sm:space-y-6 p-4 bg-gray-100 dark:bg-white/20 sm:py-12 duration-300 rounded-lg">
                        <div className="grid place-items-center">
                            <img src={data.image} alt="" className=" h-20 w-20 rounded-full bg-center"/>
                        </div>
                        <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                        <p>{data.description}</p>
                        <p className="font-semibold text-center">{data.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Textimonial;
