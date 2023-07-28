import React from "react";

import data from "@/../public/data.json";
import PlanCard from "./PlanCard";

function Plans() {
    const plans = data["plans"];
    return (
        <div className="m-16 bg-secondary">
            <h2 className="text-2xl font-bold text-center mb-8">
                Choose your plan
            </h2>

            <div className="flex justify-center">
                {plans.map((plan) => {
                    return (
                        <PlanCard
                            key={plan.id}
                            name={plan.name}
                            price={plan.price}
                            features={plan.features}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Plans;
