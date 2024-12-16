import React from "react";
import getImage from "../utils/images";
import { getWorkContent } from "../utils/content";
import { ProjectCard } from "./ProjectCard";

export const Work = () => {

    const { project1, project2, project3, project4, project5, project6 } = getImage();
    const { workTitle } = getWorkContent();
    const works = [
        {
            imgSrc: project1,
            title: 'Wallpaper App',
            tags: ['React Native', 'Expo'],
            projectLink: 'https://github.com/m-aryan/mkbhdClone'
        },
        {
            imgSrc: project2,
            title: 'Welocity',
            tags: ['Java', 'AWT', 'Swing'],
            projectLink: 'https://github.com/m-aryan/Welocity'
        },
        {
            imgSrc: project3,
            title: 'Thrift',
            tags: ['Flutter', 'Firebase'],
            projectLink: 'https://github.com/m-aryan/ThriftApp'
        },
        {
            imgSrc: project4,
            title: 'Profit Dashboard',
            tags: ['PowerBI', 'Data Analytics'],
            projectLink: ''
        },
        {
            imgSrc: project5,
            title: 'Solana Faucet',
            tags: ['Solana', 'JavaScript'],
            projectLink: 'https://github.com/m-aryan/Airdrop-SOL-NFT'
        },
        {
            imgSrc: project6,
            title: 'Pulse United',
            tags: ['HTML', 'CSS'],
            projectLink: ''
        },
    ]

    return (
        <section className="section" id="work">
            <div className="container">
                <h2 className="headline-2 mb-8">
                    {workTitle}
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {
                        works.map(({ imgSrc, title, tags, projectLink }, key) => (
                            <ProjectCard 
                                key={key}
                                imgSrc={imgSrc}
                                title={title}
                                tags={tags}
                                projectLink={projectLink}
                            />
                        ))
                    }
                </div>

            </div>
        </section>
    );
};
