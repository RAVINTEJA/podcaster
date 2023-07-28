import React from "react";

import data from "@/../public/data.json";

function PodcastCategories() {
    const categories = data["podcastCategories"];
    return (
        <section className="bg-secondary py-16 px-4 border-t-2 border-b-2 border-primary/60">
            <h2 className="text-2xl font-bold text-center mb-8">
                {" "}
                Podcast Categories
            </h2>
            <ul className="flex flex-wrap gap-2 justify-center">
                {categories.map((item) => {
                    return (
                        <li key={item}>
                            <input
                                type="checkbox"
                                id={item}
                                value=""
                                className="hidden peer mx-4"
                                required=""
                            />
                            <label
                                for={item}
                                class=" px-8 py-2 m inline-flex items-center justify-between w-full p-5 text-gray-500 bg-background border border-black rounded-full cursor-pointer peer-checked:bg-primary hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-white hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                            >
                                    {item}
                            </label>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default PodcastCategories;
