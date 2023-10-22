import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import flutter from "../images/flutter.svg";
import django from "../images/django.svg";
import html from "../images/html.svg";
import css from "../images/css.svg";
import { Link as ScrollLink, Element } from "react-scroll";
import FloatingIcon from "../components/FloatingIcon";

function HomePage() {
  const [currentReview, setCurrentReview] = useState(0);
  const reviewsPerPage = 2;
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const testimonials = [
    {
      text: `"Dr. Antony's life coaching sessions at Success Steps NLP Academy is a true catalyst for personal growth. His guidance has helped me redefine my goals and develop a clear roadmap to achieve them. The sessions are not only insightful but also empowering. The combination of NLP strategies and Dr. Antony's expertise creates an enriching coaching experience that has positively influenced various aspects of my life."`,
      author: "Vicky Rajesh",
      company: "Lorem ipsum test | Company",
    },
    {
      text: `"Enrolling in the NLP training at Success Steps was truly transformative. The trainers' expertise and personalized approach made the complex concepts of NLP easy to grasp. The practical exercises were eye-opening and have empowered me to communicate effectively and understand the underlying patterns in human behaviour. This training has been a game-changer for both my personal and professional life."`,
      author: "Mathew Joseph",
      company: "Lorem ipsum test | Company",
    },
    {
      text: "Additional review text...",
      author: "Additional Author",
      company: "Additional Company",
    },

    {
      text: "Enrolling in the NLP training at Success Steps was truly transformative...",
      author: "Mathew Joseph",
      company: "Lorem ipsum test | Company",
    },
    // Add more reviews as needed...
  ];

  const handleNext = () => {
    setCurrentReview((prevReview) =>
      prevReview + reviewsPerPage >= testimonials.length
        ? 0
        : prevReview + reviewsPerPage
    );
  };

  const handlePrevious = () => {
    setCurrentReview((prevReview) =>
      prevReview - reviewsPerPage < 0
        ? testimonials.length - reviewsPerPage
        : prevReview - reviewsPerPage
    );
  };

  return (
    <>
      <Navbar />
      <Element name="discover">
        <div
          className="py-20 bg-neutral-500 w-full"
          id="discover"
          style={{ height: "700px" }}
        >
          <h1 className="text-white text-3xl text-center font-bold mt-40">
            Unlock Your Limitless Potential
          </h1>
          <h1 className="text-white text-3xl text-center font-bold">
            Counselling Therapy
          </h1>
          <p className="text-white text-center mt-1">
            Personal Resourcefulness and Professional Excellence
          </p>
          <p className="text-white text-center mt-8">
            NLP + Neuroscience + Emotional Intelligence + Cognitive Psychology +
            Meta Cognition{" "}
          </p>
          <p className="text-white font-semibold mb-5">
            = Next –Level Mind Mastery
          </p>
          <div className="flex flex-row justify-center">
            <Link to="/getstarted">
              <button className="w-32 h-11 px-6 py-3 bg-black text-center text-white font-normal font-['Inter']justify-center items-center inline-flex mr-3">
                Get Started
              </button>
            </Link>
            <button className="w-32 h-11 px-5 py-3 bg-transparent border  border-white text-center text-white font-normal font-['Inter'] justify-center items-center inline-flex">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-120 h-64 relative mt-10 ml-20 text-justify mb-40">
            <div className="left-0 top-0 absolute text-neutral-700 text-lg font-normal font-['Source Sans Pro'] leading-9">
              Unveiling the Fusion of
            </div>
            <div className="w-120 left-0 top-[26px] absolute text-black text-3xl font-medium font-['Inter'] leading-10">
              Neurocognitive Emotional Behavior (NCEB)
            </div>
            <div className="left-0 top-[76px] absolute text-black text-lg font-normal font-['Inter'] leading-7">
              Neuro-cognitive-emotional Intelligence Behaviour Competency <br />
              Mapping.
              <br />
              Find Your Stream of Learning- Carer Pathway by the <br />
              most scientific way!
            </div>
            <div className="w-96 h-7 left-0 top-[215px] absolute">
              <div className="w-24 h-7 left-0 top-0 absolute">
                <img
                  className="w-6 h-6 left-0 top-[3px] absolute"
                  src="https://via.placeholder.com/24x24"
                />
                <div className="left-[32px] top-0 absolute text-black text-base font-medium font-['Inter'] leading-7">
                  Remedial
                </div>
              </div>
              <div className="w-28 h-7 left-[257px] top-0 absolute">
                <img
                  className="w-6 h-6 left-0 top-[3px] absolute"
                  src="https://via.placeholder.com/24x24"
                />
                <div className="left-[32px] top-0 absolute text-black text-base font-medium font-['Inter'] leading-7">
                  Preventive
                </div>
              </div>
              <div className="w-28 h-7 left-[120px] top-0 absolute">
                <img
                  className="w-6 h-6 left-0 top-[3px] absolute"
                  src="https://via.placeholder.com/24x24"
                />
                <div className="left-[32px] top-0 absolute text-black text-base font-medium font-['Inter'] leading-7">
                  Promotional
                </div>
              </div>
            </div>
            <div
              className="w-96 h-96 bg-zinc-100 border-2 border-zinc-400 justify-center items-center inline-flex"
              style={{ marginLeft: 900, marginTop: 15 }}
            >
              <img src="#"></img>
            </div>
          </div>
        </div>
      

      <div className="flex flex-row justify-between p-20">
        <div className="w-96 h-96 bg-zinc-100 border-2 border-zinc-400 justify-center items-center inline-flex ">
          <img src="#"></img>
        </div>
        <div
          className="w-120 h-64 relative text-justify"
          style={{ marginRight: 150 }}
        >
          <div className="text-black text-2xl font-medium font-['Inter'] leading-7 text-justify mr-5 mb-2 mt-10">
            Get Rid Of
          </div>
          <div className="w-200 h-64 relative">
            <ul className="flex flex-row list-disc space-x-7 text-gray-500 text-lg mb-2">
              <li>Stress</li>
              <li>Anxiety</li>
              <li>Panic Attacks</li>
              <li>Anger</li>
              <li>Fear</li>
              <li>Depression</li>
            </ul>
            <ul className="flex flex-row list-disc space-x-7 text-gray-500 text-lg mb-2">
              <li>Low mood</li>
              <li>Phobias</li>
              <li>Shame</li>
              <li>Sadness</li>
              <li>Guilt</li>
              <li>Addiction</li>
              <li>OCD</li>
            </ul>
            <ul className="flex flex-row list-disc space-x-7 text-gray-500 text-lg mb-10">
              <li>PTSD</li>
              <li>Relationship Issues</li>
              <li>ADHD & Tennage Issues</li>
            </ul>

            <div className="text-black text-2xl font-medium font-['Inter'] leading-7">
              Talk Resolve Heal
            </div>
            <div className=" text-neutral-700 text-lg font-normal font-['Source Sans Pro'] leading-9 mb-5">
              100% Safe and Secure Platform
            </div>
            <button className="px-3 py-2 bg-transparent border border-black">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      </Element>

      <Element name="services">
      <div>
        <p className="text-black text-3xl font-semibold font-['Inter'] leading-10">
          Image Gallery
        </p>
        <div>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1200}
            className="owl-carousel owl-theme skill-slider mt-10"
          >
            <div className="item">
              <img src={html} alt="Image1" />
            </div>
            <div className="item">
              <img src={django} alt="Image5" />
            </div>
            <div className="item">
              <img src={flutter} alt="Image5" />
            </div>
            <div className="item">
              <img src={css} alt="Image2" />
            </div>
          </Carousel>
        </div>
      </div>
        <div id="services" className="mb-10">
          <div>
            <div className="text-black text-4xl font-semibold font-['Inter'] leading-10 mt-20 text-left ml-20">
              Satisfied Clients
            </div>
            <p className="text-neutral-700 text-xl font-normal font-['Source Sans Pro'] leading-9 text-left ml-20 mb-20">
              Read what our customers have to say about us
            </p>
          </div>
          <div className="flex flex-row ml-20">
            <div className="flex flex-col text-left">
              <div className="container mx-auto p-1 flex justify-between">
                <div className="w-5/6 mt-4 text-neutral-700 text-xl font-semibold font-['Source Sans Pro'] leading-loose mb-5">
                  <div className="flex flex-row ">
                    {testimonials
                      .slice(currentReview, currentReview + reviewsPerPage)
                      .map((testimonial, index) => (
                        <div key={index} className="w-5/6 pr-20">
                          <div className="flex flex-row mb-5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              class="w-6 h-6"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              class="w-6 h-6"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              class="w-6 h-6"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              class="w-6 h-6"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              class="w-6 h-6"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                          {testimonial.text}
                          <br />
                          <br />
                          <p className="text-neutral-700 text-lg font-semibold font-['Source Sans Pro']">
                            {testimonial.author}
                          </p>
                          <div className="text-zinc-600 text-lg font-normal font-['Source Sans Pro']">
                            {testimonial.company}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end mr-20">
            <button
              onClick={handlePrevious}
              className="bg-transparent border border-gray-400 p-2 mr-4 rounded-full hover:bg-black hover:text-white transition duration-300 font-bold"
            >
              {"<"}
            </button>
            <button
              onClick={handleNext}
              className="bg-transparent border border-gray-400 p-2 mr-2 rounded-full hover:bg-black hover:text-white transition duration-300 font-bold"
            >
              {">"}
            </button>
          </div>
        </div>
      </Element>

      <div id="certificate">
        <div className="flex flex-row mt-15 justify-between">
          <div>
            <h1 className="text-black text-4xl font-semibold font-['Inter'] leading-10 text-left ml-20">
              Explore Our Certification Program
            </h1>
            <p className="text-neutral-700 text-xl font-normal font-['Source Sans Pro'] leading-9 ml-20 mb-10">
              Explore from our wide range of certification program and get
              certified.
            </p>
            <Link to="">
              <p className="text-neutral-700 text-lg font-semibold font-['Source Sans Pro'] text-left ml-20 mb-20">
                <u>View Certification</u>
              </p>
            </Link>
          </div>
          <div className="mr-40">
            <button className="px-7 py-3 bg-black text-white font-normal font-['Inter']justify-center items-center inline-flex mr-3 mt-5">
              Explore
            </button>
          </div>
        </div>
      </div>

      <div id="getintouch" className="bg-stone-50 w-full h-600 p-6">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-black text-4xl font-semibold font-['Inter'] leading-10">
            Get In Touch
          </h1>
          <p className="text-zinc-500 text-base font-normal font-['Source Sans Pro'] leading-relaxed mb-5">
            We’re here to help. Chat with us 24/7 and get set up and ready to go
            in just quick.
          </p>
          <form>
            <div className="mb-4 flex flex-row mr-4">
              <div>
                <label
                  className="flex items-start text-gray-700 text-sm font-bold mb-2 text-left"
                  htmlFor="username"
                >
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="border-b border-gray-500 focus:border-b mr-6"
                />
              </div>
              <div>
                <label
                  className="flex items-start text-gray-700 text-sm font-bold mb-2 text-left"
                  htmlFor="username"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="border-b border-gray-500 focus:border-b"
                />
              </div>
            </div>
            <div className="mt-6 flex flex-row mr-4">
              <div>
                <label
                  className="flex items-start text-gray-700 text-sm font-bold mb-2 text-left"
                  htmlFor="username"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="border-b border-gray-500 focus:border-b mr-20 w-200"
                />
              </div>
            </div>
            <div className="mt-6 flex flex-row mr-20">
              <div>
                <label
                  className="flex items-start text-gray-700 text-sm font-bold mb-2 text-left"
                >
                  Select from the topic below
                </label>
                <select
                  className="border-b border-gray-500 focus:border-b mr-20"
                  placeholder="Select"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                </select>
              </div>
            </div>
            <button className="mt-10 p-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500" type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div id="contactus" className="mt-20">
        <p className="text-left ml-20 text-neutral-700 text-lg font-semibold font-['Source Sans Pro']">Get in touch now</p>
        <div className="text-left ml-20 text-black text-4xl font-semibold font-['Inter'] leading-10 mb-20">Contact Us</div>

        <div className="flex flex-row justify-between">
          <div className="ml-20">
          <p className="text-black text-sm font-medium font-['Inter'] leading-tight text-left">PHONE</p>
          <p className=" text-blue-950 text-base font-medium font-['Inter'] leading-tight">(91) 9833-086-018</p>
          </div>
          <div>
          <p className="text-black text-sm font-medium font-['Inter'] leading-tight text-left">EMAIL</p>
          <p className=" text-blue-950 text-base font-medium font-['Inter'] leading-tight">contact@successsteps.in</p>
          </div>
          <div className="mr-40">
          <p className="text-black text-sm font-medium font-['Inter'] leading-tight text-left">SOCIAL MEDIA</p>
          <div className="flex flex-row mt-1">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
</svg>
<div className="mr-5"></div>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
    <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
</svg>
</div>
          </div>

        </div>

      </div>

      <FloatingIcon />
    </>
  );
}

export default HomePage;
