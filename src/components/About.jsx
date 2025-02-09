import React from "react";
import { getAboutContent } from "../utils/content";
import getImage from "../utils/images";

export const About = () => {

    const imageData = getImage();
    const aboutData = getAboutContent();
    const aboutItems = [
        {
            label: 'Projects done',
            number: aboutData.projectsDone
        },
        {
            label: 'Years of experience',
            number: aboutData.yrOfExp
        }
    ];

    return (
        <section
            id="about"
            className="section"
        >
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl
                 md:p-12 reveal-up">
                    <p className="text-zinc-300 mb-7 md:mb-8mg:text-xl md:max-w-[80ch]">
                        {aboutData.introduction}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({ label, number }, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">
                                            {number}
                                        </span>
                                        <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                    </div>

                                    <p className="text-sm text-zinc-400">
                                        {label}
                                    </p>
                                </div>
                            ))
                        }

                        <img src={imageData.logo}
                            alt="Logo"
                            width={30}
                            height={30}
                            className="ml-auto md:w-[40px] md:h-[40px] md:mt-7"
                        />
                    </div>

                </div>




            </div>
        </section>
    );
};
