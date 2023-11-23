import React from 'react'
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import img1 from "../../images/corporateLeadership/pic1.png";
import img2 from "../../images/businesscoaching/pic1.png";
import img3 from "../../images/students/pic1.jpg";
import img4 from "../../images/Teachers/pic1.jpg";
import img5 from "../../images/Parents/pic1.jpg";
import ScrollToTop from "../../components/ScrollToTop";
import {Helmet} from "react-helmet";

const testimonials = [
    {
      imageUrl: img1,
      title: `Corporate Leadership`,
      description: `“Unleash Your Potential & Build a Stronger Team” is a corporate retreat program designed to empower business leaders and here's an elaboration of the key components and benefits of this program...`,
      url: "/training/corporateleadership"
    },
    {
      imageUrl: img2,
      title: `Business Coaching`,
      description: `This coaching approach equips professionals with valuable tools to navigate the complex landscape of business and optimize their personal and organizational effectiveness...`,
      url : "/training/businesscoaching"
    },
    {
      imageUrl: img3,
      title: `Students`,
      description: `Success Steps provides ultra-personalized guidance on areas such as ‘emotional well-being’, ‘skill development’, ‘education and career planning’, ‘goal setting and achievement’. We help the children to access their dreams...`,
      url: "/training/students"
  },
  {
      imageUrl: img4,
      title: `Teachers`,
      description: `NLP can be a powerful tool for addressing the specific needs of teachers, providing them with the skills and strategies they need to create a positive and engaging learning environment...`,
      url: "/training/teachers"
  },
  {
      imageUrl: img5,
      title: `Parents`,
      description: `NLP offers valuable assistance to parents in addressing the challenges of stress and overwhelm that can accompany the responsibilities of nurturing a child's growth...`,
      url: "/training/parents"
  },
    
  ]

const Training = () => {
  return (
    <>
    <Helmet>
        <title>Training</title>

        <meta name="description" content=""/>

        <meta property="og:title" content=""/>
        <meta property="og:description" content=""/>
        <meta property="og:image" content=""/>

        <meta name="twitter:card" content=""/>
        <meta name="twitter:title" content=""/>
        <meta name="twitter:description" content=""/>
        <meta name="twitter:image" content=""/>
      </Helmet>
    <div className='flex flex-col min-h-screen justify-between'>
      <ScrollToTop />
        <Navbar />
        <div className='container mx-auto px-2 flex flex-wrap justify-center md:justify-around gap-6 py-3 md:py-6'>
            {testimonials.map((testimonial,index)=>(
                <div key={index} className='mb-2'>
                    <Card imageUrl={testimonial.imageUrl} description={testimonial.description} title={testimonial.title} url={testimonial.url}/>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Training;