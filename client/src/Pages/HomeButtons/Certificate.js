import React from 'react'
import Navbar from '../../components/Navbar'
import Contact from '../../components/HomePage/Contact'
import img7 from "../../images/image 7.png";
import Card from '../../components/Card';

const testimonials = [
    {
      imageUrl: img7,
      title: `NEURO LINGUISTIC PROGRAMMING`,
      description: `“Unleash Your Potential & Build a Stronger Team” is a corporate retreat program designed to empower business leaders and here's an elaboration of the key components and benefits of this program...`,
      url: "/certificate/1"
    },
    {
      imageUrl: img7,
      title: `NLP MASTER PRACTITIONER & LIFE COACHING `,
      description: `This coaching approach equips professionals with valuable tools to navigate the complex landscape of business and optimize their personal and organizational effectiveness...`,
      url : "/certificate/2"
    },
    {
      imageUrl: img7,
      title: `EMOTIONAL INTELLIGENCE COACH PRACTITIONER`,
      description: `Success Steps provides ultra-personalized guidance on areas such as ‘emotional well-being’, ‘skill development’, ‘education and career planning’, ‘goal setting and achievement’. We help the children to access their dreams...`,
      url: "/certificate/3"
  },
  {
      imageUrl: img7,
      title: `COUNSELLING AND THERAPIES`,
      description: `NLP can be a powerful tool for addressing the specific needs of teachers, providing them with the skills and strategies they need to create a positive and engaging learning environment...`,
      url: "/certificate/4"
  },
  {
      imageUrl: img7,
      title: `GESTALT PSYCHOTHERAPY`,
      description: `NLP offers valuable assistance to parents in addressing the challenges of stress and overwhelm that can accompany the responsibilities of nurturing a child's growth...`,
      url: "/certificate/5"
  },
  {
    imageUrl: img7,
    title: `COGNITIVE BEHAVIOURAL THERAPY `,
    description: `NLP offers valuable assistance to parents in addressing the challenges of stress and overwhelm that can accompany the responsibilities of nurturing a child's growth...`,
    url: "/certificate/6"
},
{
  imageUrl: img7,
  title: `
  RATIONAL EMOTIVE BEHAVIROAL THERAPY 
 `,
  description: `NLP offers valuable assistance to parents in addressing the challenges of stress and overwhelm that can accompany the responsibilities of nurturing a child's growth...`,
  url: "/certificate/7"
},
{
  imageUrl: img7,
  title: `TRANSACTIONAL ANALYSIS CERFIFICATION`,
  description: `NLP offers valuable assistance to parents in addressing the challenges of stress and overwhelm that can accompany the responsibilities of nurturing a child's growth...`,
  url: "/certificate/8"
},
{
  imageUrl: img7,
  title: `DEVELOPMENTAL PSYCHOLOGY`,
  description: `NLP offers valuable assistance to parents in addressing the challenges of stress and overwhelm that can accompany the responsibilities of nurturing a child's growth...`,
  url: "/certificate/9"
},
    
  ]

const Certificate = () => {
  return (
    <div className='flex flex-col h-screen justify-between'>
        <Navbar />
        <div className='container mx-auto px-2 flex flex-wrap justify-center md:justify-around gap-6 py-3 md:py-6'>
            {testimonials.map((testimonial,index)=>(
                <div key={index} className='mb-2'>
                    <Card imageUrl={testimonial.imageUrl} description={testimonial.description} title={testimonial.title} url={testimonial.url}/>
                </div>
            ))}
        </div>
        <Contact />
    </div>
  )
}

export default Certificate