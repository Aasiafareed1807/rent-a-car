import React from "react";

const CarListData = [
  {
    name: "BMW UX",
    price: 100,
    image: "car6.png",
    aosDelay: "0",
  },
  {
    name: "KIA UX",
    price: 140,
    image: "car7.png",
    aosDelay: "500",
  },
  {
    name: "BMW UX",
    price: 100,
    image: "car8.png",
    aosDelay: "1000",
  },
];
const CarList = () => {
  return (
    <div className="pb-24 pt-12 px-12 bg-white dark:bg-dark dark:text-white">
      <div cl scroll-pt-12>
        {/*heading*/}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Lorem, ipsum dolor
        </h1>
        <p data-aos="fade-up" className="text-sm pb-10">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing alit, Ipsum maxime
          sit odio!
        </p>
        {/*Car Listing Cards*/}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {CarListData.map((data, i) => {
              return(
              <div key={i} data-aos = "fade-up" data-aos-delay="200" className = "space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group">
                <div className = "w-full h-[120px]">
                    <img 
                    className = {i === 0? "-translate-y-10 w-[90%] object-conatain sm:traslate-x-8 group-hover:translate-x-16 duration-1000" : i === 1 ? "ml-6 w-[80%] h-[170px] object-conatain sm:traslate-x-8 group-hover:translate-x-16 duration-1000" : "translate-y-6 ml-6 w-[70%] object-conatain sm:traslate-x-8 group-hover:translate-x-16 duration-1000"}
                    src={data.image} alt=""/>
                    </div>
                <div className = "space-y-2">
                  <h1 className ="text-primary font-semibold">{data.name}</h1>
                  <div className = "flex justify-between items-center text-xl font-semibold">
                    <p>${data.price}/Day</p>
                    <a href ="#">Details</a>
                  </div>
                </div>
                <p className = "text-xl font-semibold absolute top-0 left-3">12km</p>
              </div>
              );
            })}
          </div>
        </div>
        {/*end of car listing cards*/}
        <div className = "grid place-content-center mt-8">
            <button data-aos = "fade-up" data-aos-delay="500"
            className = "button outline outline-yellow-500 rounded px-4 py-2 hover:bg-yellow-400 font-bold">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
