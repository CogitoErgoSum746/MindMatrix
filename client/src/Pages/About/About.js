import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import abtimg1 from "../../images/about/abtimg1.png";
import abtimg2 from "../../images/about/abtimg2.png";
import abtimg4 from "../../images/about/abtimg4.png";
import abtimg5 from "../../images/about/abtimg5.png";
import abtimg6 from "../../images/about/abtimg6.png";
import abtimg7 from "../../images/about/abtimg7.png";
import abtimg8 from "../../images/about/abtimg8.png";
import abtimg9 from "../../images/about/abtimg9.png";
import abtimg10 from "../../images/about/abtimg10.png";
import abtimg11 from "../../images/about/abtimg11.png";
import abtimg12 from "../../images/about/abtimg3.png";
import ScrollToTop from "../../components/common/ScrollToTop";
import { Helmet } from "react-helmet";

function About() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger the fade-in animation when the component mounts
    setFadeIn(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us</title>

        <meta name="description" content="Learn more about our company and what we do." />

        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />
      </Helmet>
      <Navbar />
      <ScrollToTop />
      <div className={`container mx-auto px-2 md:px-10 user-select-none opacity-0 ${fadeIn ? 'opacity-100 transition-opacity duration-1000' : ''} ${fadeIn ? 'transform translate-y-0' : 'transform translate-y-[-50px] transition-transform duration-1000'}`}>

        <h1 className="text-center text-black  text-3xl md:text-3xl lg:text-5xl font-bold font-['Inter'] mb-10 py-5">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="border p-4 md:w-1/3">
            <h2 className="text-2xl font-semibold font-inter mb-2">Vision</h2>
            <p className="text-base font-inter leading-relaxed">
              Our vision is a relentless dedication to offering accessible, high-quality counseling, therapies, coaching, and training services. We aspire to uncover, nurture, and magnify human potential, igniting inspiration. Our mission is to empower individuals by fostering connections and collaboration through therapeutic coaching and training services.    </p>
          </div>
          <div className="border p-4 md:w-1/3">
            <h2 className="text-2xl font-semibold font-inter mb-2">Mission</h2>
            <p className="text-base font-inter leading-relaxed">
              Our mission centers on being a catalyst for societal change and a facilitator of personal success. With therapeutic coaching and training services, we empower individuals to strengthen connections and foster collaborative environments. Our goal is to uplift individuals and communities, fostering a positive and transformative impact.    </p>
          </div>
          <div className="border p-4 md:w-1/3">
            <h2 className="text-2xl font-semibold font-inter mb-2">Values</h2>
            <p className="text-base font-inter leading-relaxed">
              Our values encompass unwavering honesty, integrity, and authenticity. We prioritize transparency, maintain the highest ethical standards, and build genuine connections with our clients. Driven by a commitment to excellence, we constantly strive to exceed expectations and provide top-quality experiences.    </p>
          </div>
        </div>
        <div className="border-t border-blue-500 border-b-2 my-10"></div>


        <div className="flex flex-col py-10 gap-9">

          {/* 1st */}
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <img src={abtimg1} className="md:hidden"></img>
            <div className="self-center text-left text-base md:text-lg">
              Here at Success Steps, we invite you to join us on an
              extraordinary journey towards realizing your fullest potential and
              making your dreams a reality. Our purpose is to provide you with
              the tools and techniques necessary to transform your aspirations
              into substantial achievements. Our dynamic programs are designed
              to help you tap into the wellspring of your inner power, setting
              the stage for an exceptional life filled with success and
              fulfilment. Our goal is to be your partners in self-discovery,
              guiding you towards heightened self-awareness, expanded
              consciousness, and the ultimate state of insight. These elements
              together pave the way for enduring success and limitless joy.
            </div>
            <img src={abtimg1} className="hidden md:block"></img>
          </div>

          {/* 2nd */}
          <div className="flex flex-col md:flex-row gap-6 justify-between ">
            <img src={abtimg2} className="hidden md:block"></img>
            <img src={abtimg2} className="md:hidden"></img>
            <div className="self-center text-left text-base md:text-lg">
              Our approach takes into account every facet of your being, aiming
              to boost your self-confidence, nurture a strong sense of
              self-worth, cultivate a positive mindset, and assist you in
              uncovering your true passions. We believe that these aren't just
              techniques; they are gateways that lead to profound introspection
              and ignite your creativity. This transformative process empowers
              you to harness your personal and professional capacities to the
              absolute maximum.
            </div>
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
              <img src={abtimg4} className="md:hidden"></img>
              <div className="self-center text-left text-base md:text-lg">
                Get on board a transformative voyage with Success Steps as your steadfast companions. Our mission is to guide you toward unearthing your untapped potential across personal and professional domains. Engage in an extraordinary journey fuelled by our innovative Neuro Cognitive Emotional Behaviour (NCEB) approach, seamlessly integrating NLP, neuroscience, emotional intelligence, cognitive psychology, and meta-cognition. This journey promises an unmatched expedition into mastering your mind and igniting your limitless capabilities.
              </div>
              <img src={abtimg4} className="hidden md:block"></img>
            </div>
          </div>

          {/* 5th */}
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-['Inter'] text-center">
              Empower Your Wellbeing Journey: Seamlessly Navigate Life's
              Challenges!
            </h1>
            <div className="flex flex-col md:flex-row gap-6 justify-between">
              <img src={abtimg5} className="md:hidden"></img>
              <img src={abtimg5} className="hidden md:block"></img>
              <div className="self-center text-left text-base md:text-lg">
                Embark on a transformative journey towards enhanced wellbeing with our Talk! Resolve! Heal! Online and offline counselling therapy. Designed for your convenience, it's accessible anytime, anywhere, on any device. Our platform offers you a 100% private and secure haven for your healing voyage.
              </div>
            </div>
          </div>

          {/* 6th */}
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-['Inter'] text-center">
              Cultivating Mind Wellness for Triumph Over Life's Trials
            </h1>
            <div className="flex flex-col md:flex-row gap-6 justify-between">
              <div className="self-center text-left text-base md:text-lg">
                Here at Success Steps, we invite you to join us on an
                extraordinary journey towards realizing your fullest potential
                and making your dreams a reality. Our purpose is to provide you
                with the tools and techniques necessary to transform your
                aspirations into substantial achievements. Our dynamic programs
                are designed to help you tap into the wellspring of your inner
                power, setting the stage for an exceptional life filled with
                success and fulfilment. Our goal is to be your partners in
                self-discovery, guiding you towards heightened self-awareness,
                expanded consciousness, and the ultimate state of insight. These
                elements together pave the way for enduring success and
                limitless joy.
              </div>
              <img src={abtimg6}></img>
            </div>
          </div>

          {/* 7th */}
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-['Inter'] text-center">
              Embrace Serenity for Unshakable Confidence!
            </h1>
            <div className="flex flex-col md:flex-row gap-6 justify-between">
              <img src={abtimg7}></img>
              <div className="self-center text-left text-base md:text-lg">
                A stressed mind is a mind burdened with questions, doubts, and chaos. In contrast, a mind steeped in tranquillity becomes a treasure house of answers and resourceful solutions. When stress asserts its grip, your natural rhythm stumbles, obscuring your thoughts, sabotaging your decision-making process, and restricting your creative spark.
                But do not worry, for just as you shape your physical form, your mental strength can be moulded and strengthened. Envision a reality where stress is a mere whisper, emotional intelligence lights your path, and confidence stands unwavering by your side to embrace serenity amidst stress!
              </div>
            </div>
          </div>

          {/* 8th */}
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-['Inter'] text-center">
              Forge Your Mental Resilience: From Turmoil to Triumph
            </h1>
            <div className="flex flex-col md:flex-row gap-6 justify-between">
              <div className="self-center text-left text-base md:text-lg">
                At Success Steps, we're architects of serenity. We offer you a blueprint to forge unbreakable mental resilience. Imagine a life where stress dissipates like morning mist, your emotional intelligence guides you precisely, and confidence becomes your eternal ally on the path to success. Thus, your journey to this transformative existence starts right away.
              </div>
              <img src={abtimg8}></img>
            </div>
          </div>

          {/* 9th */}
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-['Inter'] text-center">
              Ignite Your Educational Journey: Uniting Students, Teachers, and Parents
            </h1>
            <div className="flex flex-col md:flex-row gap-6 justify-between">
              <img src={abtimg9}></img>
              <div className="self-center text-left text-base md:text-lg">
                Our educational synergy hub for Students, Teachers, and Parents – where we stand as your steadfast allies. Our platform forges vital connections, propels accelerated learning, and nurtures unwavering progress. Fuel the spark of potential, surpass performance boundaries, and chart a luminous course towards a future of brilliance.
              </div>
            </div>
          </div>

          {/* 10th */}
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-['Inter'] text-center">
              Find Your Authentic Career Pathway:   Harnessing the Force of NCEB Competency Mapping!
            </h1>
            <div className="flex flex-col md:flex-row gap-6 justify-between">
              <div className="self-center text-left text-base md:text-lg">
                Step into the spotlight of revelation with our Psychometric Tests & Career Guidance. Here, the dynamic fusion of Neuro Cognitive Emotional Behaviour (NCEB) Competency Mapping becomes the protagonist. Brace yourself, for within this transformative stage, your odyssey from unearthing to metamorphosis unfolds in all its glory. Your potential unfurls its wings and soars. Immerse yourself in the enchantment were discovery embraces transformation. Our purpose-built platform is your compass, guiding you to unearth your latent abilities and propelling you dynamically along the path to absolute success. NCEB Competency Mapping is your guiding light, illuminating the way to Discover Your Stream of Learning. Let it chisel a definitive and exhilarating path to your professional aspirations.
              </div>
              <img src={abtimg10}></img>
            </div>
          </div>

          {/* 11th */}
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-['Inter'] text-center">
              Ignite Excellence in Corporate Executive Leadership Mastery!
            </h1>
            <div className="flex flex-col md:flex-row gap-6 justify-between">
              <img src={abtimg11}></img>
              <div className="self-center text-left text-base md:text-lg">
                Step into the dominion of Corporate Executive Leadership and witness NLP as the masterstroke, igniting the gateway to unrivalled business mastery and leadership brilliance. Propel your innate potential to new heights, nurture teams that embody resilience, and transcend the ordinary norms of training, ushering in a sphere of authentic engagement, relentless inspiration, and limitless motivation.
              </div>
            </div>
          </div>

          {/* 12th */}
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-['Inter'] text-center">
              Certification Program: The Roadmap to Excellence Awaits!
            </h1>
            <div className="flex flex-col md:flex-row gap-6 justify-between">
              <div className="self-center text-left text-base md:text-lg">
                Seize the chance to embark on a dynamic voyage toward excellence through our Certification Program. This is your gateway to becoming a certified NLP Practitioner, NLP Master Practitioner, Emotional Intelligence Practitioner, and a proficient expert in Counseling Skills and Therapies. Right here, right now, your journey to a triumphant success story begins.
              </div>
              <img src={abtimg12}></img>
            </div>
          </div>

          <Link to="/about/termsandconditions" className="text-blue-500 cursor-pointer text-lg lg:text-2xl">
            Terms and Conditions
          </Link>

        </div>
      </div>
    </>
  );
}

export default About;
