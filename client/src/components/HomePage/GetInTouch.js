import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const GetInTouch = () => {
  function Submit(e) {
    e.preventDefault();

    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const optionSelect = document.getElementById("optionSelect");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
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

    e.preventDefault();
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);

    fetch(
      "https://script.google.com/macros/s/AKfycbws-vYS5vkKaG_jNUtv-3-enFlDdMEncZbvZ2-KwgaIvWYo37Z1hse8hkLyPKiUW7ynbw/exec",
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

  return (
    <div id="getintouch" className="bg-stone-50 w-full h-600 p-6">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-black text-4xl font-semibold font-['Inter'] leading-10">
          Get In Touch
        </h1>
        <p className="text-zinc-500 text-base font-normal font-['Source Sans Pro'] leading-relaxed mb-5">
          We’re here to help. Chat with us 24/7 and get set up and ready to go
          in just a quick.
        </p>
        <form className="form flex flex-col items-center">
          <div className="mb-4 md:flex md:flex-row md:mr-4">
            <div>
              <label
                className="flex items-start text-gray-700 text-sm font-bold mb-2 text-left"
                htmlFor="name"
              >
                Name
              </label>
              <input
                placeholder="Your Name"
                name="Name"
                type="text"
                className="border-b border-gray-500 focus:border-b md:mr-6"
                id="nameInput"
              />
            </div>
          </div>
          <div className="mb-4 md:flex md:flex-row md:mr-4">
            <div>
              <label
                className="flex items-start text-gray-700 text-sm font-bold mb-2 text-left"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                placeholder="Your Email"
                name="Email"
                type="text"
                id="emailInput"
                className="border-b border-gray-500 focus-border-b md:mr-6"
              />
            </div>
          </div>
          <div className="mb-4 md:flex md:flex-row md:mr-4">
            <div>
              <label className="flex items-start text-gray-700 text-sm font-bold mb-2 text-left">
                Select from the topics below
              </label>
              <select
                name="Option"
                className="border-b border-gray-500 focus-border-b md:mr-6"
                id="optionSelect"
              >
                <option value="">Select your topic</option>
                <option value="Counselling and Therapies">
                  Counselling and Therapies
                </option>
                <option value="Life Coaching Session">
                  Life Coaching Session
                </option>
                <option value="Corporate Training">Corporate Training</option>
                <option value="Business Coaching">Business Coaching</option>
                <option value="Leadership Training">Leadership Training</option>
                <option value="Psychometric Test">Psychometric Test</option>
                <option value="Career Counselling">Career Counselling</option>
                <option value="Students Training">Students Training</option>
                <option value="Teachers Training">Teachers Training</option>
                <option value="Parenting Session">Parenting Session</option>
                <option value="Certification Program">
                  Certification Program
                </option>
              </select>
            </div>
          </div>
          <div className="mb-4 md:flex md:flex-row md:mr-4">
            <div>
            <label
              className="flex items-start text-gray-700 text-sm font-bold mb-2 text-left"
              htmlFor="message"
            >
              Message
            </label>
            <input
              placeholder="Your Message"
              name="Message"
              type="text"
              className="border-b border-gray-500 focus-border-b w-full p-2 rounded"
              id="messageInput"
            />
          </div>
          </div>
          <input
            type="button"
            value="Submit"
            onClick={(e) => Submit(e)}
            className="mt-10 p-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500"
          />
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default GetInTouch;
