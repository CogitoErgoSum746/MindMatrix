import React from 'react'
import Navbar from '../components/Navbar'
import {Link} from "react-router-dom"
import Footer from '../components/Footer'
import abtimg1 from "../images/about/abtimg1.png"
import abtimg2 from "../images/about/abtimg2.png"
import abtimg3 from "../images/about/abtimg3.png"
import abtimg4 from "../images/about/abtimg4.png"
import abtimg5 from "../images/about/abtimg5.png"
import abtimg6 from "../images/about/abtimg6.png"
import abtimg7 from "../images/about/abtimg7.png"
import abtimg8 from "../images/about/abtimg8.png"
import abtimg9 from "../images/about/abtimg9.png"
import abtimg10 from "../images/about/abtimg10.png"
import abtimg11 from "../images/about/abtimg11.png"
function About() {
  return (
    <>
    <Navbar />
    <div className="top-[140px] absolute">
    <div className="text-center text-black text-5xl font-bold font-['Inter']">About Us</div>
    <div className='flex flex-col md:flex-row justify-between mt-10 items-center' >
      <div className="text-left font-['Source Sans Pro'] font-normal ml-0 md:ml-20 mr-0 md:mr-20 text-xl">Here at Success Steps, we invite you to join us on an extraordinary journey towards realizing your fullest potential and making your dreams a reality. Our purpose is to provide you with the tools and techniques necessary to transform your aspirations into substantial achievements. Our dynamic programs are designed to help you tap into the wellspring of your inner power, setting the stage for an exceptional life filled with success and fulfilment. Our goal is to be your partners in self-discovery, guiding you towards heightened self-awareness, expanded consciousness, and the ultimate state of insight. These elements together pave the way for enduring success and limitless joy.</div>
      <img src={abtimg1} className='mr-20'></img>

    </div>

    <div className='flex flex-col md:flex-row  justify-between mt-10 items-center' >
      <img src={abtimg2} className='ml-20'></img>
      <div className="text-left font-['Source Sans Pro'] font-normal ml-0 md:ml-20 mr-0 md:mr-20  text-xl">
      Our approach takes into account every facet of your being, aiming to boost your self-confidence, nurture a strong sense of self-worth, cultivate a positive mindset, and assist you in uncovering your true passions. We believe that these aren't just techniques; they are gateways that lead to profound introspection and ignite your creativity. This transformative process empowers you to harness your personal and professional capacities to the absolute maximum.

    </div>
    </div>

    <div className="flex flex-row justify-between mt-10 items-center ml-20 mr-20 font-['Source Sans Pro'] font-normal text-xl">
    In a world that often values practicality and analytical thinking, we invite you to create a special place for your dreams. Think of our coaching and training as tools that delicately shape away the layers, uncovering the natural strength and beauty inside you. Just as a sculptor gives life to stone, our goal is to breathe life into your aspirations. Our programs have the potential to expand your dreams beyond your imagination, elevate your performance to unprecedented levels, articulate your deepest aspirations, chart a strategic course towards your goals, and unlock the vast extent of your latent potential. An enriched understanding of your accomplishments and a blossoming journey towards becoming the finest version of yourself.
    </div>

    <h1 className="text-3xl font-semibold font-['Inter'] text-center mt-10">Unleash Your Boundless Potential</h1>
   
    <div className='flex flex-row justify-between mt-10 items-center' >
      <div className="text-left font-['Source Sans Pro'] font-normal ml-20 mr-20 text-xl">
      Here at Success Steps, we invite you to join us on an extraordinary journey towards realizing your fullest potential and making your dreams a reality. Our purpose is to provide you with the tools and techniques necessary to transform your aspirations into substantial achievements. Our dynamic programs are designed to help you tap into the wellspring of your inner power, setting the stage for an exceptional life filled with success and fulfilment. Our goal is to be your partners in self-discovery, guiding you towards heightened self-awareness, expanded consciousness, and the ultimate state of insight. These elements together pave the way for enduring success and limitless joy.
      </div>
      <img src={abtimg3} className='mr-20'></img>

    </div>

    <h1 className="text-3xl font-semibold font-['Inter'] text-center mt-10">Empower Your Wellbeing Journey: Seamlessly Navigate Life's Challenges!</h1>

    <div className='flex flex-row justify-between mt-10 items-center' >
      <img src={abtimg2} className='ml-20'></img>
      <div className="text-left font-['Source Sans Pro'] font-normal ml-20 mr-20 text-xl">
      Our approach takes into account every facet of your being, aiming to boost your self-confidence, nurture a strong sense of self-worth, cultivate a positive mindset, and assist you in uncovering your true passions. We believe that these aren't just techniques; they are gateways that lead to profound introspection and ignite your creativity. This transformative process empowers you to harness your personal and professional capacities to the absolute maximum.

    </div>
    </div>


    <h1 className="text-3xl font-semibold font-['Inter'] text-center mt-10">Cultivating Mind Wellness for Triumph Over Life's Trials</h1>
   
    <div className='flex flex-row justify-between mt-5 items-center' >
      <div className="text-left font-['Source Sans Pro'] font-normal ml-20 mr-20 text-xl">Here at Success Steps, we invite you to join us on an extraordinary journey towards realizing your fullest potential and making your dreams a reality. Our purpose is to provide you with the tools and techniques necessary to transform your aspirations into substantial achievements. Our dynamic programs are designed to help you tap into the wellspring of your inner power, setting the stage for an exceptional life filled with success and fulfilment. Our goal is to be your partners in self-discovery, guiding you towards heightened self-awareness, expanded consciousness, and the ultimate state of insight. These elements together pave the way for enduring success and limitless joy.</div>
      <img src={abtimg10} className='mr-20'></img>
    </div>

    <h1 className="text-3xl font-semibold font-['Inter'] text-center mt-10">Embrace Serenity for Unshakable Confidence!</h1>

    <div className='flex flex-row justify-between mt-10 items-center' >
      <img src={abtimg11} className='ml-20'></img>
      <div className="text-left font-['Source Sans Pro'] font-normal ml-20 mr-20 text-xl">
      A stressed mind is a mind burdened with questions, doubts, and chaos. In contrast, a mind steeped in tranquillity becomes a treasure house of answers and resourceful solutions. When stress asserts its grip, your natural rhythm stumbles, obscuring your thoughts, sabotaging your decision-making process, and restricting your creative spark.
But do not worry, for just as you shape your physical form, your mental strength can be moulded and strengthened. Envision a reality where stress is a mere whisper, emotional intelligence lights your path, and confidence stands unwavering by your side to embrace serenity amidst stress!

    </div>
    </div>

    <h1 className="text-3xl font-semibold font-['Inter'] text-center mt-10">Forge Your Mental Resilience: From Turmoil to Triumph</h1>

    <div className='flex flex-row justify-between mt-10 items-center' >
      <div className="text-left font-['Source Sans Pro'] font-normal ml-20 mr-20 text-xl">
      At Success Steps, we're architects of serenity. We offer you a blueprint to forge unbreakable mental resilience. Imagine a life where stress dissipates like morning mist, your emotional intelligence guides you precisely, and confidence becomes your eternal ally on the path to success. Thus, your journey to this transformative existence starts right away.
      </div>
      <img src={abtimg6} className='mr-20'></img>

    </div>

    <h1 className="text-3xl font-semibold font-['Inter'] text-center mt-10">Ignite Your Educational Journey: Uniting Students, Teachers, and Parents</h1>

    <div className='flex flex-row justify-between mt-10 items-center' >
  
      <img src={abtimg5} className='ml-20'></img>
      <div className="text-left font-['Source Sans Pro'] font-normal ml-20 mr-20 text-xl">
      Our approach takes into account every facet of your being, aiming to boost your self-confidence, nurture a strong sense of self-worth, cultivate a positive mindset, and assist you in uncovering your true passions. We believe that these aren't just techniques; they are gateways that lead to profound introspection and ignite your creativity. This transformative process empowers you to harness your personal and professional capacities to the absolute maximum.

    </div>
    </div>

    <h1 className="text-3xl font-semibold font-['Inter'] text-center mt-10">Find Your Authentic Career Pathway:   Harnessing the <br></br>Force of NCEB Competency Mapping!</h1>

    <div className='flex flex-row justify-between mt-10 items-center' >
      <div className="text-left font-['Source Sans Pro'] font-normal ml-20 mr-20 text-xl">
      Step into the spotlight of revelation with our Psychometric Tests & Career Guidance. Here, the dynamic fusion of Neuro Cognitive Emotional Behaviour (NCEB) Competency Mapping becomes the protagonist. Brace yourself, for within this transformative stage, your odyssey from unearthing to metamorphosis unfolds in all its glory. Your potential unfurls its wings and soars. Immerse yourself in the enchantment were discovery embraces transformation. Our purpose-built platform is your compass, guiding you to unearth your latent abilities and propelling you dynamically along the path to absolute success. NCEB Competency Mapping is your guiding light, illuminating the way to Discover Your Stream of Learning. Let it chisel a definitive and exhilarating path to your professional aspirations.
      </div>
      <img src={abtimg7} className='mr-20'></img>

    </div>

    <h1 className="text-3xl font-semibold font-['Inter'] text-center mt-10">Ignite Excellence in Corporate Executive Leadership Mastery!</h1>

    <div className='flex flex-row justify-between mt-10 items-center' >
      <img src={abtimg8} className='ml-20'></img>
      <div className="text-left font-['Source Sans Pro'] font-normal ml-20 mr-20 text-xl">
      Step into the dominion of Corporate Executive Leadership and witness NLP as the masterstroke, igniting the gateway to unrivalled business mastery and leadership brilliance. Propel your innate potential to new heights, nurture teams that embody resilience, and transcend the ordinary norms of training, ushering in a sphere of authentic engagement, relentless inspiration, and limitless motivation.

    </div>
    </div>

    <h1 className="text-3xl font-semibold font-['Inter'] text-center mt-10">Certification Program: The Roadmap to Excellence Awaits!</h1>

    <div className='flex flex-row justify-between mt-10 items-center' >
      <div className="text-left font-['Source Sans Pro'] font-normal ml-20 mr-20 text-xl">
      Seize the chance to embark on a dynamic voyage toward excellence through our Certification Program. This is your gateway to becoming a certified NLP Practitioner, NLP Master Practitioner, Emotional Intelligence Practitioner, and a proficient expert in Counseling Skills and Therapies. Right here, right now, your journey to a triumphant success story begins.
      </div>
      <img src={abtimg9} className='mr-20'></img>

    </div>


<Footer />
    </div>

   


    </>
  )
}

export default About