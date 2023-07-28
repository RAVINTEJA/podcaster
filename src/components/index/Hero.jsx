import React from "react";

import images from "@/../public/images.json"


function Hero() {
    console.log(images["hero"]);
    return (
        <div className="w-full bg-secondary flex items-center my-8 p-4 px-8">
            {/* <!-- Left Side --> */}
            <div className="w-1/2 px-16">
                <h2 className="font-bold mb-4 text-5xl  leading-normal pr-18">
                    Discover your favorite  podcasts & listen<br/> to 
                    them anywhere!
                </h2>
                <p className="text-lg mb-6">Start your free plan now.</p>
                <button className="bg-primary text-background rounded-xl px-16 py-2">
                    Start listening
                </button>
            </div>

            {/* <!-- Right Side --> */}
            <div className="w-1/2 px-16 ">
                <img
                    src={images["hero"]}
                    alt="Podcaster Image"
                />
            </div>
        </div>
    );
}

export default Hero;
