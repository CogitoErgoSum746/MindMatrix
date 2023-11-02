import React from "react";
import Navbar from "../components/Navbar";
import mindimg1 from "../images/Mindwellness/image 1.png";
import mindimg2 from "../images/Mindwellness/image 2.png";
import mindimg3 from "../images/Mindwellness/image 3.png";
import mindimg4 from "../images/Mindwellness/image 4.png";
import mindimg5 from "../images/Mindwellness/image 5.png";
import abtimg1 from "../images/about/abtimg1.png";
import abtimg2 from "../images/about/abtimg2.png";
import abtimg4 from "../images/about/abtimg4.png";
import abtimg5 from "../images/about/abtimg5.png";
import abtimg6 from "../images/about/abtimg6.png";
import abtimg7 from "../images/about/abtimg7.png";
import abtimg8 from "../images/about/abtimg8.png";
import abtimg9 from "../images/about/abtimg9.png";
import abtimg10 from "../images/about/abtimg10.png";
import abtimg11 from "../images/about/abtimg11.png";
import abtimg12 from "../images/about/abtimg3.png";
import Contact from "../components/HomePage/Contact";
function MindW() {
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-2">

                <h1 className="text-center text-black  text-2xl md:text-3xl lg:text-5xl font-bold font-['Inter'] py-4" >
                    Mind Wellness
                </h1>
                <h1 className="text-center text-black  text-2xl md:text-3xl lg:text-2xl font-['Inter']">
                    Counseling and Psycho-Therapies Services
                </h1>
                <div className="flex flex-col py-10 gap-10">

                    {/* 1st */}
                    <div className="flex md:flex-row gap-6 justify-between">
                        <img src={mindimg1}></img>
                        <img src={mindimg2}></img>
                    </div>

                    {/* 2nd */}
                    <div className="flex flex-col md:flex-row gap-6 justify-between">
                        <div className="self-center text-left text-base md:text-lg">
                            With our Mind Wellness program, we are dedicated to providing you with
                            a comprehensive range of professional counselling and psychotherapy
                            services tailored to your unique needs. Our experienced therapists are
                            here to guide and support you on your journey towards improved mental
                            well-being, personal growth, and peak performance.
                        </div>
                        <img src={mindimg3}></img>
                    </div>

                    {/* 3rd */}
                    <div className="text-base md:text-lg text-center">
                        In a world that often values practicality and analytical thinking,
                        we invite you to create a special place for your dreams. Think of
                        our coaching and training as tools that delicately shape away the
                        layers, uncovering the natural strength and beauty inside you. Just
                        as a sculptor gives life to stone, our goal is to breathe life into
                        your aspirations. Our programs have the potential to expand your
                        dreams beyond your imagination, elevate your performance to
                        unprecedented levels, articulate your deepest aspirations, chart a
                        strategic course towards your goals, and unlock the vast extent of
                        your latent potential. An enriched understanding of your
                        accomplishments and a blossoming journey towards becoming the finest
                        version of yourself.
                    </div>

                    {/* 4th */}
                    <div>
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-['Inter'] text-center">
                            Unleash Your Boundless Potential
                        </h1>
                        <div className="flex flex-col md:flex-row gap-6 justify-between">
                            <div className="self-center text-left text-base md:text-lg">
                                Our approach takes into account every facet of your being,
                                aiming to boost your self-confidence, nurture a strong sense of
                                self-worth, cultivate a positive mindset, and assist you in
                                uncovering your true passions. We believe that these aren't just
                                techniques; they are gateways that lead to profound
                                introspection and ignite your creativity. This transformative
                                process empowers you to harness your personal and professional
                                capacities to the absolute maximum.
                            </div>
                            <img src={abtimg4}></img>
                        </div>
                    </div>

                    {/* 5th */}
                    <div>
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-['Inter'] text-center">
                            Empower Your Wellbeing Journey: Seamlessly Navigate Life's
                            Challenges!
                        </h1>
                        <div className="flex flex-col md:flex-row gap-6 justify-between">
                            <img src={abtimg5}></img>
                            <div className="self-center text-left text-base md:text-lg">
                                Our approach takes into account every facet of your being,
                                aiming to boost your self-confidence, nurture a strong sense of
                                self-worth, cultivate a positive mindset, and assist you in
                                uncovering your true passions. We believe that these aren't just
                                techniques; they are gateways that lead to profound
                                introspection and ignite your creativity. This transformative
                                process empowers you to harness your personal and professional
                                capacities to the absolute maximum.
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <Contact />
        </>
    );
}

export default MindW;
