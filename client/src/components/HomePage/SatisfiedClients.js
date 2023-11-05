import React, { useState } from "react";
import FiveStar from "./FiveStar";

const testimonials = [
  {
    text: `"Dr. Antony's life coaching sessions at Success Steps NLP Academy is a true catalyst for personal growth. His guidance has helped me redefine my goals and develop a clear roadmap to achieve them. The sessions are not only insightful but also empowering. The combination of NLP strategies and Dr. Antony's expertise creates an enriching coaching experience that has positively influenced various aspects of my life."`,
    author: "Vicky Rajesh",
    location: "Melbourne | Australia",
  },
  {
    text: `"Enrolling in the NLP training at Success Steps was truly transformative. The trainers' expertise and personalized approach made the complex concepts of NLP easy to grasp. The practical exercises were eye-opening and have empowered me to communicate effectively and understand the underlying patterns in human behaviour. This training has been a game-changer for both my personal and professional life."`,
    author: "Mathew Joseph",
    location: "Cochin | Kerala",
  },
  {
    text: `"The Emotional Intelligence Training exceeded my expectations. Dr. Antony’s deep understanding of the subject matter was evident, and the real-world examples added a relatable touch to the training. I've noticed a significant improvement in my communication skills and conflict resolution abilities after completing this program. Success Steps NLP Academy has truly empowered me to harness the power of emotional intelligence."`,
    author: "Mansy Patel",
    location: "Ahmadabad | Gujarat",
  },

  {
    text: `I wanted to drop a quick note to express my satisfaction with the Neuro Linguist Programming Practitioner and Emotional Intelligence training I recently completed with Success Steps NLP Academy. In a nutshell, it was fantastic! The course content was enlightening, the instructor Dr. Antony was expert, and the interactive nature of the training kept us engaged. I particularly appreciated the practical application and the incorporation of Emotional Intelligence training alongside NLP. The value I received far exceeded the cost, and I'm already seeing positive changes in my professional skills and emotional awareness.`,
    author: "Dr. Sahil Dhawan",
    location: "California | USA",
  },

  {
    text: `"Having attended the Teachers Training program at Success Steps NLP Academy, I feel like I've unlocked a treasure trove of effective mind set and teaching methodologies. The trainer’s masterfully combined NLP principles with teaching strategies, resulting in a program that's both enlightening and impactful. I now approach lesson planning, student interactions, and even challenges with a newfound sense of capability."`,
    author: "Rajiv Manohar",
    location: "Delhi NCR | India",
  },

  {
    text: `"The counselling session has been a inspiration of light during a period of darkness in my life. The counsellor’s adeptness in combining NLP techniques with traditional counselling provided me with a holistic approach to healing. I felt genuinely heard and understood throughout the sessions. The tools I've gained have not only aided in my recovery but have also fostered a stronger connection with myself. I'm thankful to Dr. Antony for offering such a transformative counselling experience."`,
    author: "Wilma Jaison",
    location: "Ottawa | Canada",
  },

  {
    text: `"I was initially sceptical, but after just a few sessions, I noticed a remarkable shift in my thought patterns and behaviour. The therapist is compassionate, non-judgmental, and highly skilled. I've learned techniques that I can apply in my daily life to manage stress, improve communication, and cultivate a more optimistic outlook. The therapies I've undergone at Success Steps NLP Academy have been transformative.”`,
    author: "Farheen Shaikh",
    location: "Dubai | UAE",
  },

  {
    text: `“Amazing sessions! I've learned how to manage my time efficiently, handle stress, and communicate persuasively. I realised the smart way of accelerate learning and I've integrated the techniques into my daily routine, resulting in improved focus during studies and more effective collaboration with fellow students. The power of disassociation of negative, affirmation and visualisation techniques are very effective."`,
    author: "Anika Singh",
    location: "Lucknow | UP",
  },

  {
    text: `"Participating in the Psychometric Tests and Career Guidance program at Success Steps NLP Academy was truly eye-opening. The tests provided deep insights into my strengths, preferences, and areas for growth. The career guidance sessions were equally invaluable, helping me align my aspirations with a suitable career path. I now feel more confident and focused in pursuing my professional goals. This program has given me a newfound sense of purpose.  I'm thankful for the clarity and direction this program has provided. This program is an investment in self-discovery and future success."`,
    author: "Saikrishna",
    location: "Ahmednagar | India",
  },
  
  {
    text: `"As a startup founder, I was facing numerous challenges in scaling my business. The business coaching program at Success Steps NLP Academy was the guidance I needed. The personalized strategies and actionable insights helped me navigate hurdles with confidence. My revenue has doubled, and I credit a significant portion of that success to the coaching I received here."`,
    author: "Joseph Devis",
    location: "Mumbai | India",
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
                      {testimonial.location}
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
