import React from "react";
import { Header } from "./Header";


export default function Hero() {
    return (
        <section
            id="home"
            className="pt-28 lg:pt-36"
        >
            <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img src="public/images/avatar-1.jpg"
                                width={40}
                                height={40}
                                alt="Aryan Mane Potrait"
                                className="img-cover"
                            />
                        </figure>

                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="abslute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            Available for Work
                        </div>
                    </div>

                    <h2 className="headline-1 max-w-[15ch] sm::max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                        Building Scalable Apps with Cloud & AI Integration
                    </h2>

                    <div className="flex items-center gap-3">
                        ButtonPrimary

                        ButtonOutline
                    </div>
                </div>

                <div className=" lg:block">
                    <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
                        <img
                            src="/images/hero-banner.png"
                            width={656}
                            height={800}
                            className="w-full"
                            alt="Aryan Mane"
                        />

                    </figure>
                </div>

            </div>

        </section>
    )
}