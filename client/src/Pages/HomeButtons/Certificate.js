import React from 'react';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import img6 from "../../images/Certificate/Cognitive/pic1.jpg";
import img4 from "../../images/Certificate/Counselling/pic1.jpg";
import img9 from "../../images/Certificate/Developmental/pic1.jpg";
import img3 from "../../images/Certificate/Emotional/pic1.jpg";
import img5 from "../../images/Certificate/Gestalt/pic1.jpg";
import img1 from "../../images/Certificate/NeuroLinguistic/pic4.jpg";
import img2 from "../../images/Certificate/NlpMaster/pic1.jpg";
import img7 from "../../images/Certificate/REBT/pic1.jpg";
import img8 from "../../images/Certificate/Transactional/pic1.jpg";
import ScrollToTop from "../../components/ScrollToTop.js";
import { Helmet } from 'react-helmet';

const testimonials = [
  {
    imageUrl: img1,
    title: `NLP PRACTITIONER`,
    description: `NLP is a versatile field linking mind, language, and behaviour. As an NLP Practitioner, you gain powerful tools to enhance communication, understand human behaviour, and inspire positive change. This course offers respected certification programs for those aspiring to excel in NLP practice.`,
    url: "/certificate/NeuroLinguistic"
  },
  {
    imageUrl: img2,
    title: `NLP MASTER PRACTITIONER & LIFE COACHING `,
    description: `Elevate Your NLP Journey. This advanced course takes you beyond practitioner level to true NLP mastery. Reserved for NLP Certified Practitioner, it empowers you to create custom NLP techniques, explore advanced patterning, and delve into the essence of NLP. `,
    url: "/certificate/NlpMaster"
  },
  {
    imageUrl: img3,
    title: `EMOTIONAL INTELLIGENCE COACH PRACTITIONER`,
    description: `Unlock the power of Emotional Intelligence Training Certifications to supercharge your emotional acumen and master interpersonal skills. Perfect for HR professionals, teachers, business leaders, managers, and anyone on a mission to elevate your emotional intelligence.`,
    url: "/certificate/Emotional"
  },
  {
    imageUrl: img4,
    title: `COUNSELLING AND THERAPY SKILLS`,
    description: `Our program equips aspiring mental health professionals with vital skills for counselling and therapy certification. We focus on therapeutic techniques, ethics, and mental health advocacy, fostering excellence and mindfulness advocacy.`,
    url: "/certificate/Counselling"
  },
  {
    imageUrl: img5,
    title: `GESTALT PSYCHOTHERAPY`,
    description: `The gestalt psychotherapy certification program is a comprehensive and specialized training initiative that equips mental health professionals with the skills and knowledge needed to practice gestalt psychotherapy effectively.`,
    url: "/certificate/Gestalt"
  },
  {
    imageUrl: img6,
    title: `COGNITIVE BEHAVIOURAL THERAPY (CBT)`,
    description: `Elevate your journey to becoming a mental health professional through CBT program. It's your gateway to certification, expertise in therapy, ethical practice, and championing mental health awareness. Be a dynamic advocate for mindful living.`,
    url: "/certificate/Cognitive"
  },
  {
    imageUrl: img7,
    title: `
  RATIONAL EMOTIVE BEHAVIROAL THERAPY (REBT)
 `,
    description: `Unleash your potential with the REBT Certification Program! Dive into the world of Rational Emotive Behavioural Therapy and become a certified REBT therapist. Master the techniques and principles of this transformative psychotherapy approach with our comprehensive training.`,
    url: "/certificate/Rebt"
  },
  {
    imageUrl: img8,
    title: `TRANSACTIONAL ANALYSIS CERTIFICATION`,
    description: `Our Transactional Analysis Certification Program equips you to become a certified transactional analyst. Delve into interpersonal dynamics and communication patterns with this comprehensive training. You gain a deep understanding of how individuals interact, communicate, and navigate life's challenges.`,
    url: "/certificate/Transactional"
  },
  {
    imageUrl: img9,
    title: `DEVELOPMENTAL PSYCHOLOGY`,
    description: `The Developmental Psychology Certification Program is a transformative educational journey, empowering individuals with profound insights into human growth and development across the lifespan. Dive into the complex interplay of biological, cognitive, emotional, and social factors shaping behaviour and personality from infancy to old age.`,
    url: "/certificate/Developmental"
  },

]

const Certificate = () => {
  return (
    <>
      <Helmet>
        <title>Certificate</title>

        <meta name="description" content="" />

        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />
      </Helmet>
      <div className='flex flex-col h-screen justify-between'>
        <Navbar />
        <ScrollToTop />
        <div className='container mx-auto px-2 flex flex-wrap justify-center md:justify-around gap-6 py-3 md:py-6'>
          {testimonials.map((testimonial, index) => (
            <div key={index} className='mb-2'>
              <Card imageUrl={testimonial.imageUrl} description={testimonial.description} title={testimonial.title} url={testimonial.url} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Certificate