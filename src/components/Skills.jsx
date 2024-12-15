import React from "react";
import getImage from "../utils/images";
import { SkillCard } from "./SkillCard";
import { getSkillContent } from "../utils/content";

export const Skills = () => {

    const { skillTitle, skillTagline } = getSkillContent();

    const {
        python,
        java,
        mysql,
        postgres,
        aws,
        css3,
        javascript,
        postman,
        powerbi,
        firebase,
        spring,
        springboot,
        nextjs,
        tensorflow,
        tailwindcss,
        figma,
        mongodb,
        react,
        git,
        expo
    } = getImage();

    const skillItem = [
        {
            imgSrc: tailwindcss,
            label: 'TailwindCSS',
            desc: 'User Interface'
        },
        {
            imgSrc: java,
            label: 'Java',
            desc: 'Language'
        },
        {
            imgSrc: figma,
            label: 'Figma',
            desc: 'Design Tool'
        },
        {
            imgSrc: postgres,
            label: 'PostgreSQL',
            desc: 'Database'
        },
        {
            imgSrc: powerbi,
            label: 'Power BI',
            desc: 'Analysis Tool'
        },
        {
            imgSrc: css3,
            label: 'CSS',
            desc: 'User Interface'
        },
        {
            imgSrc: springboot,
            label: 'Spring Boot',
            desc: 'Framework'
        },
        {
            imgSrc: mongodb,
            label: 'MongoDB',
            desc: 'Database'
        },
        {
            imgSrc: nextjs,
            label: 'Next.js',
            desc: 'Framework'
        },
        {
            imgSrc: tensorflow,
            label: 'TensorFlow',
            desc: 'Framework'
        },
        {
            imgSrc: expo,
            label: 'Expo',
            desc: 'Mobile Dev.'
        },
        {
            imgSrc: mysql,
            label: 'MySQL',
            desc: 'Database'
        },
        {
            imgSrc: postman,
            label: 'Postman',
            desc: 'API Platform'
        },
        {
            imgSrc: git,
            label: 'Git/Github',
            desc: 'VCS'
        },
        {
            imgSrc: aws,
            label: 'AWS',
            desc: 'PaaS'
        },
        {
            imgSrc: spring,
            label: 'Spring',
            desc: 'Framework'
        },
        {
            imgSrc: javascript,
            label: 'JavaScript',
            desc: 'Language'
        },
        {
            imgSrc: firebase,
            label: 'Firebase',
            desc: 'SaaS'
        },
        {
            imgSrc: react,
            label: 'React',
            desc: 'Framework'
        },
        {
            imgSrc: python,
            label: 'Python',
            desc: 'Language'
        }
    ];    

    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2">
                    { skillTitle }
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[70ch]">
                    { skillTagline }
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(175px,_1fr))]">
                    {
                        skillItem.map(({ imgSrc, label, desc }, key) => (
                            <SkillCard
                                key={key}
                                imgSrc={imgSrc}
                                label={label}
                                desc={desc}
                            />
                        ))
                    }
                </div>

            </div>
        </section>
    );
};
