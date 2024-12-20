import React from "react";
import { SkillCard } from "./SkillCard";
import { getSkillContent } from "../utils/content";

export const Skills = () => {

    const skillData = getSkillContent();

    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">
                    {skillData.skillTitle}
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[70ch] reveal-up">
                    {skillData.skillTagline}
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(175px,_1fr))]">
                    {
                        skillData.skillItem.map(({ imgSrc, label, desc }, key) => (
                            <SkillCard
                                key={key}
                                imgSrc={imgSrc}
                                label={label}
                                desc={desc}
                                classes="reveal-up"
                            />
                        ))
                    }
                </div>

            </div>
        </section>
    );
};
