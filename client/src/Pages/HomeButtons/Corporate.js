import React from 'react'
import Navbar from '../../components/Navbar'
import Contact from '../../components/HomePage/Contact'
import img7 from "../../images/image 7.png";
import Card from '../../components/Card';

const testimonials = [
    {
      imageUrl: img7,
      title: `Corporate Leadership`,
      description: `“Unleash Your Potential & Build a Stronger Team” is a corporate retreat program designed to empower business leaders and here's an elaboration of the key components and benefits of this program...`,
      url: "/corporate/corporateleadership"
    },
    {
      imageUrl: img7,
      title: `Business Coaching`,
      description: `This coaching approach equips professionals with valuable tools to navigate the complex landscape of business and optimize their personal and organizational effectiveness...`,
      url : "/corporate/businesscoaching"
    },
  ]

const Corporate = () => {
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

export default Corporate