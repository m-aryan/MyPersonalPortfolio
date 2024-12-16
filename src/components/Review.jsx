import React from "react";
import { getReviewContent } from "../utils/content";
import { ReviewCard } from "./ReviewCard";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP, ScrollTrigger);


export const Review = () => {

    useGSAP(() => {
        gsap.to('.scrub-slide', {
            scrollTrigger: {
                trigger: '.scrub-slide',
                start: '-200% 80%',
                end: '400% 80%',
                scrub: true,
            },
            x: '-1000',
        })
    });

    const reviewData = getReviewContent();
    return (
        <section
            id="reviews"
            className="section overflow-hidden"
        >
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    {reviewData.reviewTitle}
                </h2>

                <div className="scrub-slide flex items-stretch gap-3 w-fit">
                    {
                        reviewData.reviews.map(({ content, name, imgSrc, company }, key) => (
                            <ReviewCard
                                key={key}
                                name={name}
                                imgSrc={imgSrc}
                                company={company}
                                content={content}
                            />
                        ))
                    }
                </div>
            </div>

        </section>
    );
};
