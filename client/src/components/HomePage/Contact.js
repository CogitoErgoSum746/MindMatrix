import React from 'react'
import logoImage from "../../../src/images/logo.png";

const Contact = () => {
  return (
    
    <div className='bg-neutral-300 py-5 px-20 flex flex-col md:flex-row justify-around'>


<a href="/" className='self-center'>
        <img src={logoImage} alt="Logo" width="150px" height="40px" />
        </a>
        {/* <p className=" text-neutral-700 text-base lg:text-lg font-semibold font-['Source Sans Pro'] ">
          Get in touch now
        </p> */}
        <div>
        <div className=" text-black text-xl md:text-2xl lg:text-4xl font-semibold font-['Inter'] mb-6 ">
          Contact Us
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-16 lg:gap-48 ">
          <div>
            <p className="text-black text-sm font-medium font-['Inter'] leading-tight">
              PHONE
            </p>
            <p className=" text-blue-950 text-base font-medium font-['Inter'] leading-tight">
              +91 98330 86018
            </p>
          </div>
          <div>
            <p className="text-black text-sm font-medium font-['Inter'] leading-tight">
              EMAIL
            </p>
            <a href="mailto:successtepsnlpa@gmail.com" target="_blank">
              <p className=" text-blue-950 text-base font-medium font-['Inter'] leading-tight">
                successtepsnlpa@gmail.com
              </p>
            </a>
          </div>
          <div>
            <p className="text-black text-sm font-medium font-['Inter'] leading-tight ">
              SOCIAL MEDIA
            </p>
            <div className="flex justify-center">
              <a href="https://www.instagram.com/antony.k.a" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 30 30"
                >
                  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                </svg>
              </a>
              <a href="https://www.facebook.com/Successteps7" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 30 30"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
  )
}

export default Contact