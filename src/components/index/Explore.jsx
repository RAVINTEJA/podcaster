import React from "react";
import ExploreCard from "./ExploreCard";

import data from "@/../public/data.json";

function Explore() {
    const explore = data["explore"];
    return (
        <div className="bg-secondary py-16">
            <h2 className="font-bold text-2xl pl-4 mb-4">
                Explore Most Popular Podcasts
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4">
                {explore.map((item) => {
                    return (
                        <ExploreCard
                            key={item.name}
                            src={item.src}
                            name={item.name}
                            studio={item.studio}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Explore;
