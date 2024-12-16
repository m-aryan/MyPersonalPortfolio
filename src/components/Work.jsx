import React from "react";
import { getWorkContent } from "../utils/content";
import { ProjectCard } from "./ProjectCard";

export const Work = () => {

    const workData = getWorkContent();

    return (
        <section className="section" id="work">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    {workData.workTitle}
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] reveal-up">
                    {
                        workData.works.map(({ imgSrc, title, tags, projectLink }, key) => (
                            <ProjectCard 
                                key={key}
                                imgSrc={imgSrc}
                                title={title}
                                tags={tags}
                                projectLink={projectLink}
                                classes="reveal-up"
                            />
                        ))
                    }
                </div>

            </div>
        </section>
    );
};
