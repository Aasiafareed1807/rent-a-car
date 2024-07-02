import React from "react";
const pattern="./pattern.jpg"
const playStoreImg="./playStoreImg.png"
const AppStoreimg="./playStore.png"

const bannerImg = {
    backgroundImage: `url(${pattern})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width:"100%",
};
const AboutStoreBanner = () => {
  return (
    <div className="container">
        <div className="text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl" style={bannerImg}>
            <div>
                <div className="space-y-6 max-w-xl mx-auto">
                    <h1 data-aos="fade-up"
                    className="text-2xl text-center sm:text-4xl font-semibold font-serif">Get Started with our app</h1>
                    <p data-aos="fade-up" className="text-center sm:px-20">Lorem ipsum dolor dolor sit, amet consectetur adipisicing elit. Nisi neque nam sed quia!</p>
                    <div data-aos="fade-up" className="flex flex-wrap justify-center items-center gap-4"> 
                        <a href="#">
                       <img src={playStoreImg} alt="" className="max-w-[180px] sm:max-w-[140px] md:max-w-[250px]"/></a>
                       <a href="#">
                        <img src={AppStoreimg} alt="" className="max-w-[150px] sm:max-w-[110px] md:max-w-[200px]"/>
                       </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutStoreBanner
