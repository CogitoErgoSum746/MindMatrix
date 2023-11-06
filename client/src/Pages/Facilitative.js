import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/HomePage/Contact";
import ScrollToTop from "../components/ScrollToTop";
import pic1 from "../images/Facilitator/pic1.png";
import pic2 from "../images/Facilitator/pic2.png";
import pic3 from "../images/Facilitator/pic3.png";
import pic4 from "../images/Facilitator/pic4.png";
import pic5 from "../images/Facilitator/pic5.png";
import pic6 from "../images/Facilitator/pic6.png";
const Facilitative = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <div className="container mx-auto px-2">
      <p className="text-xl md:text-2xl lg:text-4xl font-semibold font-['Inter']">
              Profile
            </p>
        <div className="flex flex-col md:flex-row gap-4 justify-evenly items-center">
          <div className="flex flex-col justify-center items-center">
            <img
              src={pic1}
              className="max-h-96 md:max-h-80 self-start lg:ml-10 md:ml-10"
              alt="Image 1"
            />
            {/* <img
              src={pic2}
              className="max-h-40 md:max-h-28 self-start"
              alt="Image 2"
            /> */}
          </div>

          <div className="md:w-1/2 text-justify">
            {/* <p className="text-xl md:text-2xl lg:text-4xl font-semibold font-['Inter']">
              Who Am I?
            </p> */}
            <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2 font-['Inter'] mt-10">
              <li>Neurocognitive Psychologist</li>
              <li>NLP Master Practitioner Trainer</li>
              <li>Motivational Speaker & Author</li>
              <li>Transpersonal Hypnotherapist</li>
              <li>Executive Leadership Business Coach</li>
              <li>Learning & Development Specialist</li>
              <li>Accelerated Learning Coach</li>
              <li>Life Coach & Peak Performance Coach</li>
              <li>Emotional Intelligence Practitioner Trainer</li>
              <li>Psycho-Spiritual Counsellor & Psychotherapist</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row gap-4 justify-between mt-20">
          <div className="md:w-1/2">
            <p className="text-xl md:text-2xl lg:text-4xl font-semibold font-['Inter'] mb-5">
              Certifications:
            </p>
            <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2 font-['Inter']">
              <li>
                NLP Master Practitioner & Coach (The American Board of NLP- USA)
              </li>
              <li>NLP Master Practitioner Advanced to Expert (AMAP-USA)</li>
              <li>
                Train The Trainer- Advanced Level (Media Training Worldwide-USA)
              </li>
              <li>NLP Practitioner (ABNLP, IAPCCT, NLPCA)</li>
              <li>NLP Coach (NLPCA, IAPCCT)</li>
              <li>Diploma in NLP (ABNLP, IAPCCT, NLPCA)</li>
              <li>Advanced Diploma in NLP Coaching (ICF-CCE, IAPCCT, NLPCA)</li>
              <li>Wellness Coach (ICF-CCE, IAPCCT, NLPCA)</li>
              <li>Accelerated Learning Coach (IAPCCT, NLPCA)</li>
              <li>Group Peak Performance Coach (IAPCCT, NLPCA)</li>
              <li>Proactive Coaching (IAPCCT, NLPCA)</li>
              <li>Professional Leadership and Executive Coach (ICF)</li>
              <li>
                Master Practitioner in Ericksonian Hypnosis (IAPCCT, NLPCA)
              </li>
              <li>
                Associate Leadership and Executive Coach (ICF International
                Coach Federation -USA)
              </li>
              <li>
                Emotional Intelligence Coach (International Coach Federation –
                Continuing Coach Education- ICF –USA)
              </li>
              <li>
                Post Graduate Diploma in Instructional Design (PGDID Symbiosis
                Pune)
              </li>
              <li>
                Cognitive Behaviour Therapy (International Association of
                Therapists-CBT-IAOTH-UK)
              </li>
              <li>
                Gestalt Psychotherapy (REBT-IAOTH-UK International Association
                of Therapists)
              </li>
              <li>
                Rational Emotive Behaviour Therapy (REBT-IAOTH- International
                Association of Therapists-UK)
              </li>
              <li>
                Diploma in Modern Applied Psychology (Academy of Modern Applied
                Psychology -USA)
              </li>
              <li>
                Neuroscience for Personal Development (Brain Academy, Belgium)
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 mt-10 md:mt-10">
            <div className="md:flex md:flex-col gap-6">
              <img src={pic3} alt="Image 1" className="w-40 h-40 max-w-xs" />
              <img src={pic4} alt="Image 2" className="w-40 h-40 max-w-xs" />
              <img src={pic5} alt="Image 3" className="w-40 h-40 max-w-xs" />
              <img src={pic6} alt="Image 4" className="w-40 h-40 max-w-xs" />
            </div>
          </div>
        </div>
        <p className="text-left text-base lg:text-xl mt-10">
          Dr. Antony Augusthy is an esteemed and accomplished professional in
          the field of psychology. With a doctorate from the United States, he
          possesses a deep understanding of the human mind and behavior. As a
          Psychological Wellbeing Practitioner, Psychological Counsellor, and
          Therapist, Dr. Antony is dedicated to promoting mental health and
          helping individuals overcome challenges. With expertise as a
          Neurocognitive Psychologist, Dr. Antony delves into the intricacies of
          cognition, perception, and information processing, offering valuable
          insights into human brain thought processes. He is a certified NLP
          Master Practitioner Trainer, enabling him to effectively guide
          individuals towards personal and professional transformation.
        </p>
        <p className="text-left text-base lg:text-xl">
          He is also a renowned motivational speaker, captivating audiences with
          his inspiring talks that motivate and empower individuals to reach
          their full potential. As an Executive Leadership Business Coach and
          Learning & Development Specialist, he assists organizations in
          fostering effective leadership skills, creating high-performing teams,
          and driving organizational success. Besides, Dr. Antony is an
          Accelerated Learning Coach, empowering learners to optimize their
          learning potential and achieve academic success. His expertise extends
          to life coaching and peak performance coaching, enabling individuals
          in setting and achieving meaningful goals while maximizing their
          performance in various aspects of life.
        </p>
        <p className="text-left text-base lg:text-xl">
          With his deep understanding of Emotional Intelligence, Dr. Antony also
          trains practitioners in this field, equipping them with the tools and
          knowledge to foster emotional resilience and social intelligence in
          themselves and others. Dr. Antony’s extensive knowledge and experience
          are reflected in his authorship of multiple books covering diverse
          topics including Psychology, Cognitive Neuroscience, NLP, Emotional
          Intelligence, Leadership, Motivation, Spirituality, Holistic
          Approaches to Wellness, Parenting, And Student's Study Focus etc.
        </p>
        <p className="text-left text-base lg:text-xl mb-5">
          Dr. Antony's multifaceted expertise and extensive knowledge make him a
          highly passionate for helping individuals and organizations thrive has
          made him a sought-after professional in the realm of psychology,
          personal development, and leadership. Dr. Antony holds numerous
          international certifications, recognizing his expertise and commitment
          to continuous learning and professional development.
        </p>
      </div>

      <Contact />
    </>
  );
};

export default Facilitative;