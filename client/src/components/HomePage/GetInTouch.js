import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const GetInTouch = () => {
  function Submit(e) {
    e.preventDefault();

    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const contactInput = document.getElementById("contactInput");
    const optionSelect = document.getElementById("optionSelect");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const contact = contactInput.value.trim();
    const option = optionSelect.value;

    // Validation checks
    if (name.length < 5) {
      toast.error("Name must contain at least five characters.");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (option === "") {
      toast.error("Please select an option.");
      return;
    }

    if (!isValidContact(contact)) {
      toast.error("Please enter a valid 10-digit contact number starting with 7, 8, or 9.");
      return;
    }

    e.preventDefault();
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);

    fetch(
      "https://script.google.com/macros/s/AKfycbyOYCwqob7-7YT5za4qB9Tp2abFgYR8joUxhJMjehjvccXG_YuPfChWTk8ukEaAM5ZtvQ/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

    toast.success("Form Submitted Successfully");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  function isValidContact(contact) {
    const contactRegex = /^[789]\d{9}$/;
    return contactRegex.test(contact);
  }

  return (
    <div id="getintouch" className="bg-stone-50 w-full py-12">
  <div className="max-w-screen-lg mx-auto px-4 border-2 border-gray-400 rounded-lg shadow-lg p-4">
    <div className="text-center">
      <h3 className="text-black text-4xl font-semibold font-inter leading-10">
        Get In Touch
      </h3>
      <p className="text-zinc-500 text-base font-normal font-sans-pro leading-relaxed my-5">
        We’re here to help. Chat with us 24/7 and get set up and ready to go in just a quick.
      </p>
    </div>
    <form className="mt-6 space-y-6">
      <div className="flex flex-col items-center mb-4">
        <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          placeholder="  Your Name"
          name="Name"
          type="text"
          className="border-b border-gray-500 focus:border-b pl-4 focus:outline-none w-full w-96 h-12 transition-all duration-300 hover:bg-gray-100 focus:bg-light-blue-100 rounded-lg shadow-md"
          id="nameInput"
        />
      </div>
      <div className="flex flex-col items-center mb-4">
        <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email Address
        </label>
        <input
          placeholder="  Your Email"
          name="Email"
          type="text"
          id="emailInput"
          className="border-b border-gray-500 focus-border-b pl-4 focus:outline-none w-full w-96 h-12 transition-all duration-300 hover:bg-gray-100 focus:bg-light-blue-100 rounded-lg shadow-md"
        />
      </div>
      <div className="flex flex-col items-center mb-4">
        <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
          Contact No.
        </label>
        <input
          placeholder="  Enter Contact no."
          name="Contact"
          type="number"
          id="contactInput"
          className="border-b border-gray-500 focus-border-b pl-4 focus:outline-none w-full w-96 h-12 transition-all duration-300 hover:bg-gray-100 focus:bg-light-blue-100 rounded-lg shadow-md"
        />
      </div>
      <div className="flex flex-col items-center mb-4">
        <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="optionSelect">
          Select from the topics below
        </label>
        <select
          name="Option"
          className="border-b border-gray-500 focus-border-b pl-4 focus:outline-none w-full w-96 h-12 transition-all duration-300 hover:bg-gray-100 focus:bg-light-blue-100 rounded-lg shadow-md"
          id="optionSelect"
        >
          <option value="">Select your topic</option>
          <option value="Counselling and Therapies">Counselling and Therapies</option>
          <option value="Life Coaching Session">Life Coaching Session</option>
          <option value="Corporate Training">Corporate Training</option>
          <option value="Business Coaching">Business Coaching</option>
          <option value="Leadership Training">Leadership Training</option>
          <option value="Psychometric Test">Psychometric Test</option>
          <option value="Career Counselling">Career Counselling</option>
          <option value="Students Training">Students Training</option>
          <option value="Teachers Training">Teachers Training</option>
          <option value="Parenting Session">Parenting Session</option>
          <option value="Certification Program">Certification Program</option>
        </select>
      </div>
      <div className="flex flex-col items-center mb-4">
        <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          name="Message"
          placeholder="  Your Message"
          id="messageInput"
          className="border-b border-gray-500 focus-border-b pl-4 focus:outline-none w-full w-96 h-24 transition-all duration-300 hover:bg-gray-100 focus:bg-light-blue-100 rounded-lg shadow-md"
        ></textarea>
      </div>
      <button
        type="button"
        onClick={(e) => Submit(e)}
        className="p-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white hover:from-yellow-500 hover:to-orange-500 focus:outline-none w-64"
      >
        Submit
      </button>
    </form>
    <ToastContainer position="top-right" autoClose={2000} />
  </div>
</div>



  );
};

export default GetInTouch;