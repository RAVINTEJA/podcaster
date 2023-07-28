import React from "react";

function ExploreCard({src,name,studio}) {
    return (
        <div className="  rounded-lg p-4">
            <img
                src={src}
                alt="Podcast 2"
                className="w-64  h-64 object-cover rounded-lg"
            />
            <h3 className="font-bold text-lg mt-2">{name}</h3>
            <p className="text-gray-700">{studio}</p>
        </div>
    );
}

export default ExploreCard;
