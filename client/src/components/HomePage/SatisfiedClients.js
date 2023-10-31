import React, { useState } from "react";
import FiveStar from "./FiveStar";

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
    text: "Additional review text Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nam reiciendis quasi.",
    author: "Additional Author",
    company: "Additional Company",
  },

  {
    text: "Enrolling in the NLP training at Success Steps was truly transformative Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nam reiciendis quasi.",
    author: "Mathew Joseph",
    company: "Lorem ipsum test | Company",
  },
  // Add more reviews as needed...
];

const SatisfiedClients = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const reviewsPerPage = 2;
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
    <div>
      <p className="text-black text-xl md:text-3xl lg:text-5xl font-semibold font-['Inter']">
        Satisfied Clients
      </p>
      <p className="text-neutral-700 text-base md:text-lg lg:text-xl font-normal font-['Source Sans Pro'] mx-auto">
        Read what our customers have to say about us
      </p>
      <div>
        <div className="mx-auto">
          <div className=" mt-4 text-neutral-700 text-sm mb:text-lg lg:text-xl font-semibold font-['Source Sans Pro'] leading-loose mb-5">
            <div className="grid grid-cols-2 text-left gap-4 lg:gap-8">
              {testimonials
                .slice(currentReview, currentReview + reviewsPerPage)
                .map((testimonial, index) => (
                  <div key={index} >
                    <FiveStar />
                    <p className="line-clamp-4">{testimonial.text}</p>
                    <br />
                    <br />
                    <p className="text-neutral-700 font-semibold font-['Source Sans Pro']">
                      {testimonial.author}
                    </p>
                    <div className="text-zinc-600 font-normal font-['Source Sans Pro']">
                      {testimonial.company}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <button
          onClick={handlePrevious}
          className="bg-transparent border border-gray-400 p-2 mr-1 rounded-full hover:bg-black hover:text-white transition duration-300 font-bold"
        >
          {"<"}
        </button>
        <button
          onClick={handleNext}
          className="bg-transparent border border-gray-400 p-2 rounded-full hover:bg-black hover:text-white transition duration-300 font-bold"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default SatisfiedClients;
