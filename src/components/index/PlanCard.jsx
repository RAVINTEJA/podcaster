import React from "react";

import { CheckCircleIcon } from "@heroicons/react/24/outline";

function PlanCard({ name, price, features }) {
    return (
        <div className="bg-background border-primary border  rounded-xl  p-8 md:mx-8">
            <h3 className="text-lg font-bold mb-2">{name}</h3>
            <p className="text-gray-600 mb-4">
                {name === "Pro" ? "$" : ""}
                {price}
            </p>
            <ul className="mb-4">
                {features.map((item) => {
                    return (
                        <li key={item} className=" flex gap-4">
                            <CheckCircleIcon
                                className={
                                    name === "Pro"
                                        ? "h-5 w-5  text-primary"
                                        : "h-5 w-5"
                                }
                            />
                            <p>{item}</p>
                        </li>
                    );
                })}
            </ul>
            <button className={name==="Pro"?"bg-primary text-background rounded-md px-4 md:px-16 py-2":"bg-background text-primary border border-primary rounded-md px-4 md:px-16 py-2"}>
                Start with Free
            </button>
        </div>
    );
}

export default PlanCard;
