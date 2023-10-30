import React from 'react'

function Footer() {
  return (
    <div className="w-full h-56 relative bg-neutral-300 mt-10">
  <div className="w-14 h-5 left-[80px] top-[32px] absolute text-black text-base font-extrabold font-['Mulish'] uppercase tracking-wider">LOGO</div>
  <div className="left-[81px] top-[72px] absolute text-black text-sm font-semibold font-['Mulish'] leading-snug text-justify">Psychometric tests all at <br/>one place</div>
  <div className="w-44 h-24 left-[660px] top-[32px] absolute text-justify">
    <div className="w-44 h-6 left-0 top-[38px] absolute text-black text-sm font-semibold font-['Mulish'] leading-snug">Support</div>
    <div className="left-0 top-0 absolute text-black text-base font-extrabold font-['Mulish'] uppercase tracking-wider">Company</div>
    <div className="w-44 h-6 left-0 top-[66px] absolute text-black text-sm font-semibold font-['Mulish'] leading-snug">Explore</div>
  </div>
  <div className="w-44 h-24 left-[828px] top-[32px] absolute text-justify">
    <div className="w-44 h-7 left-0 top-0 absolute text-black text-base font-extrabold font-['Mulish'] uppercase tracking-wider">Contact US</div>
    <a href="mailto:successtepsnlpa@gmail.com">
    <div className="w-44 h-6 left-[2px] top-[46px] absolute text-black text-sm font-semibold font-['Mulish'] leading-snug">successtepsnlpa@gmail.com</div>
    </a>
    <div className="w-44 h-6 left-[1px] top-[73px] absolute text-black text-sm font-semibold font-['Mulish'] leading-snug">+91 98330 86018</div>
  </div>
  <div className="w-44 h-7 left-[1032px] top-[28px] absolute text-black text-base font-extrabold font-['Mulish'] uppercase tracking-wider">Stay up to date</div>
  <div className="w-64 h-11 left-[1033px] top-[83px] absolute">
    <div className="w-64 h-11 left-0 top-0 absolute bg-white rounded border-2 border-slate-300" />
    <div className="left-[16px] top-[9px] absolute text-slate-300 text-base font-semibold font-['Mulish'] leading-7">Email</div>
  </div>
</div>
  )
}

export default Footer