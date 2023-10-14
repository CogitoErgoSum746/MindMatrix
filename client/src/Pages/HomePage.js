import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import flutter from "../images/flutter.svg";
import django from "../images/django.svg";
import html from "../images/html.svg";
import css from "../images/css.svg";

function HomePage() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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


  // const discoverRef = useRef(null);
  // const aboutUsRef = useRef(null);
  // const servicesRef = useRef(null);
  // const psychoRef = useRef(null);

  // const scrollToSection = (sectionRef) => {
  //   if (sectionRef.current) {
  //     sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  return (
    <>
      <Navbar />
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
          style={{ marginRight: 400 }}
        >
          <div className="text-black text-2xl font-medium font-['Inter'] leading-7">
            Get Rid Of
          </div>
          <div className="w-120 h-64 relative text-justify space-x-1">
            <ul
              style={{
                listStyleType: "disc",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <li style={{ flex: "1" }}>Stress</li>
              <li style={{ flex: "1" }}>Anxiety</li>
              <li style={{ flex: "1" }}>Panic Attacks</li>
              <li style={{ flex: "1" }}>Anger</li>
              <li style={{ flex: "1" }}>Fear</li>
              <li style={{ flex: "1" }}>Depression</li>
            </ul>
            <ul
              style={{
                listStyleType: "disc",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <li style={{ flex: "1" }}>Low Mood</li>
              <li style={{ flex: "1" }}>Phobias</li>
              <li style={{ flex: "1" }}>Shame</li>
              <li style={{ flex: "1" }}>Sadness</li>
              <li style={{ flex: "1" }}>Guilt</li>
              <li style={{ flex: "1" }}>Addiction</li>
              <li style={{ flex: "1" }}>OCD</li>
            </ul>
            <ul
              style={{
                listStyleType: "disc",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              <li style={{ flex: "1" }}>PTSD</li>
              <li style={{ flex: "1" }}>Relationship Issues</li>
              <li style={{ flex: "1" }}>ADHD & Teenage Issues ...</li>
            </ul>
          </div>
          <div className="text-black text-2xl font-medium font-['Inter'] leading-7">
            Talk Resolve Heal
          </div>
          <div className=" text-neutral-700 text-lg font-normal font-['Source Sans Pro'] leading-9">
            100% Safe and Secure Platform
          </div>

          <button className="px-3 py-2 bg-transparent border border-black">
            Get In Touch
          </button>
        </div>
      </div>

      <div id="aboutus">
        <p className="text-xl font-bold text-center">Image Gallery</p>
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
      <div>


      </div>
    </>
  );
}

export default HomePage;
