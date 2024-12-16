import React from "react";
import getImage from "../utils/images";
import { getReviewContent } from "../utils/content";
import { ReviewCard } from "./ReviewCard";

export const Review = () => {

    const reviewData = getReviewContent();

    return (
        <section
            id="reviews"
            className="section overflow-hidden"
        >
            <div className="container">
                <h2 className="headline-2 mb-8">
                    {reviewData.reviewTitle}
                </h2>

                <div className="flex items-stretch gap-3 w-fit">
                    {
                        reviewData.reviews.map(({ content, name, imgSrc, company}, key) => (
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
