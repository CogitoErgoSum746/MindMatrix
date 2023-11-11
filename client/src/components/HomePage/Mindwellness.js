import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import mindimg1 from "../../images/Mindwellness/image 1.png";
import mindimg2 from "../../images/Mindwellness/image 2.png";
import mindimg3 from "../../images/Mindwellness/image 3.png";
import mindimg4 from "../../images/Mindwellness/image 4.png";
import mindimg5 from "../../images/Mindwellness/image 5.png";
import mindimg6 from "../../images/Mindwellness/image 6.png";
import mindimg7 from "../../images/Mindwellness/image 7.png";
import Contact from "./Contact";
import ScrollToTop from "../ScrollToTop";

function MindW() {
    const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
      // Trigger the fade-in animation when the component mounts
      setFadeIn(true);
  }, []);

    return (
        <>
            <Navbar />
            <ScrollToTop />
            <div className={`container mx-auto px-2 opacity-0 ${fadeIn ? 'opacity-100 transition-opacity duration-1000' : ''} ${fadeIn ? 'transform translate-y-0' : 'transform translate-y-[-50px] transition-transform duration-1000'}`}>

                <h1 className="text-center text-black  text-2xl md:text-3xl lg:text-5xl font-bold font-['Inter'] py-4" >
                    Mind Wellness
                </h1>
                <h1 className="text-center text-black  text-lg md:text-2xl lg:text-3xl font-['Inter']">
                    Counseling and Psycho-Therapies Services
                </h1>
                <div className="flex flex-col py-10 gap-5">

                    {/* 1st */}
                    <div className="flex flex-col md:flex-row justify-around">
                        <img src={mindimg1}></img>
                        <img src={mindimg2}></img>
                    </div>

                    {/* 2nd */}
                    <br />
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-['Inter'] text-center">
                        Your Path to Inner Balance and Fulfilment
                    </h1>
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
                    <div>
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-['Inter'] text-center">
                            Our Approach: Remedial, Promotional, and Preventive                        </h1>
                        <div className="flex flex-col md:flex-row gap-6 justify-between">
                            <img src={mindimg6}></img>
                            <div className="self-center text-left text-base md:text-lg">
                                Whether you're seeking remedial assistance to address specific challenges,
                                promotional support to unlock your true potential, or preventive strategies
                                to maintain your mental health, Mind Wellness offers a diverse range of
                                services designed to meet your goals.
                            </div>
                        </div>
                    </div>

                    {/* 4th */}
                    <div>
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-['Inter'] text-center">
                            A Safe and Confidential Space for All Ages                        </h1>
                        <div className="flex flex-col md:flex-row gap-6 justify-between">
                            <div className="self-center text-left text-base md:text-lg">
                                We understand that life can present various challenges at any age.
                                At Mind Wellness, we provide a safe, confidential, respectful,
                                and supportive environment where individuals of all ages can explore
                                their thoughts, feelings, and experiences. Our dedicated team of
                                professionals is committed to helping you navigate difficult life
                                situations and enhance your coping skills.
                            </div>
                            <img src={mindimg4}></img>
                        </div>
                    </div>

                    {/* 5th */}
                    <div>
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-['Inter'] text-center">
                            Your Journey to Wellness
                        </h1>
                        <div className="flex flex-col md:flex-row gap-6 justify-between">
                            <img src={mindimg5}></img>
                            <div className="self-center text-left text-base md:text-lg">
                                Mind Wellness is your partner on the path to wellness and self-discovery.
                                We can assist you in overcoming a wide range of challenges,
                                including: Stress, Anxiety, Panic Attacks, Anger, Fear, Depression,
                                Low Mood, Phobias, Shame, Sadness, Guilt, Addiction, OCD, PTSD,
                                Relationship Issues, ADHD,  Teenage Issues etc.
                            </div>
                        </div>
                    </div>

                    {/* 6th */}
                    <div className="text-center">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-['Inter']">
                            Empower Yourself and Unleash Your Potential
                        </h1>
                        <img src={mindimg7} className="mx-auto mt-4 mb-6"></img>

                        <div className="flex flex-col md:flex-row gap-6 justify-between">
                            <div className="self-center text-left text-base md:text-lg">
                                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold font-['Inter'] mb-4">
                                    Our goal is to empower you to unlock your full potential and maximize your performance in all areas of life. Through our personalized counselling and therapy sessions, you'll:
                                </h2>
                                <ul className="list-disc list-inside text-base md:text-lg lg:text-xl ml-2 font-['Inter'] mt-2">
                                    <li>Set clear goals aligned with your skills and talents.</li>
                                    <li>Gain clarity on the best choices for your future.</li>
                                    <li>Enhance your self-image and boost self-esteem and confidence.</li>
                                    <li>Activate your success mechanism to achieve your goals.</li>
                                    <li>Release frustration, resentment, and feelings of failure.</li>
                                    <li>Tap into your creative and intuitive abilities.</li>
                                    <li>Organize your time and life for greater productivity.</li>
                                    <li>Overcome limiting beliefs that hold you back.</li>
                                    <li>Protect your energy from negative influences.</li>
                                    <li>Stay relaxed and calm under pressure.</li>
                                </ul>

                                <p className="text-base md:text-lg lg:text-xl mt-6">
                                    At Mind Wellness, we believe in your potential to lead a fulfilling and balanced life. Let us be your partner on the journey to mental wellness and personal growth. Contact us today to begin your transformative journey towards a healthier, happier you.
                                </p>
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
