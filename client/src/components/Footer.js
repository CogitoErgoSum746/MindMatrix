import React from 'react';

function Footer() {
  return (
    <div className="bg-neutral-300 mt-10 py-8 md:py-12 px-4 md:px-8">
      <div className='relative text-center'>
        <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left">
          <div className="text-black text-base font-extrabold font-Mulish uppercase tracking-wider mb-2 md:mb-0 md:mr-8">LOGO</div>
          <div className="text-black text-sm font-semibold font-Mulish leading-snug text-justify md:mr-8">Psychometric tests all at one place</div>
          <div className="text-justify mb-6 md:mb-0">
            <div className="mb-2 text-black text-sm font-semibold font-Mulish leading-snug">Support</div>
            <div className="text-base font-extrabold font-Mulish uppercase tracking-wider mb-2">Company</div>
            <div className="text-black text-sm font-semibold font-Mulish leading-snug">Explore</div>
          </div>
          <div className="text-justify">
            <div className="mb-2 text-base font-extrabold font-Mulish uppercase tracking-wider">Contact US</div>
            <a href="mailto:successtepsnlpa@gmail.com" className="mb-2 text-black text-sm font-semibold font-Mulish leading-snug">successtepsnlpa@gmail.com</a>
            <div className="text-black text-sm font-semibold font-Mulish leading-snug">+91 98330 86018</div>
          </div>
          <div className="mt-6 md:mt-0 md:ml-8">
            <div className="text-base font-extrabold font-Mulish uppercase tracking-wider mb-2">Stay up to date</div>
            <div className="bg-white rounded border-2 border-slate-300 p-2 flex items-center">
              <input
                type="text"
                placeholder="Email"
                className="w-full text-slate-300 text-base font-semibold font-Mulish"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
