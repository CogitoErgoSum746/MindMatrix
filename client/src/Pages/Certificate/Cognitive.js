import React from "react";
import Navbar from "../../components/Navbar";
import Contact from "../../components/HomePage/Contact";
import pic1 from "../../images/Certificate/Cognitive/pic1.jpg";
import pic2 from "../../images/Certificate/Cognitive/pic2.jpg";
import ScrollToTop from "../../components/ScrollToTop.js";

function Cognitive() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="container p-2 md:px-0 md:py-5 mx-auto flex flex-col gap-3">
        <p className="text-xl md:text-2xl lg:text-4xl font-semibold">
          COGNITIVE BEHAVIOURAL THERAPY (CBT)
        </p>
        <p className="text-xl md:text-2xl lg:text-4xl font-semibold">
          Certification
        </p>
        <img src={pic1} className="max-h-96 self-center"></img>
        <p className="text-left text-base lg:text-xl">
          A Cognitive Behavioural Therapy (CBT) certification program is a vital
          educational endeavour that equips individuals with the specialized
          skills and knowledge needed to become proficient CBT practitioners.
          This program offers comprehensive training in the principles and
          techniques of CBT, emphasizing evidence-based practices for addressing
          various mental health challenges. Participants learn to assess,
          diagnose, and effectively treat issues such as anxiety, depression,
          and phobias by modifying dysfunctional thought patterns and
          behaviours. The certification ensures that professionals can provide
          high-quality, research-backed care to clients, promoting positive
          outcomes and improved mental well-being. It's a crucial step toward
          becoming a skilled and ethical CBT therapist.
        </p>
        <img src={pic2} className="max-h-96 self-center"></img>
        <p className="text-xl md:text-2xl lg:text-4xl font-semibold">
          What do you Learn?
        </p>
        <div className="p-4 text-left">
          <div className="">
            <h2 className="font-bold text-lg">Introduction</h2>
            <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2">
              <li>Course Objectives</li>
              <li>How Can CBT (Cognitive Behavioural Therapy) Help?</li>
              <li>Introducing CBT (Cognitive Behavioural Therapy)</li>
            </ul>
          </div>

          <div className="">
            <h2 className="font-bold text-lg">
              What Is CBT (Cognitive Behavioural Therapy)
            </h2>
            <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2">
              <li>What Is CBT (Cognitive Behavioural Therapy)</li>
              <li>Benefits Of Doing CBT (Cognitive Behavioural Therapy)</li>
              <li>Who CBT (Cognitive Behavioural Therapy) Works Best With</li>
              <li>Development Of CBT (Cognitive Behavioural Therapy)</li>
              <li>Cognitive Behavioural Therapies</li>
            </ul>
          </div>

          <div className="">
            <h2 className="font-bold text-lg">
              Who Uses CBT (Cognitive Behavioural Therapy)?
            </h2>
            <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2">
              <li>CBT With Children</li>
              <li>CBT With Couples & Families</li>
              <li>CBT In The Workplace</li>
              <li>CBT Coaching</li>
              <li>CBT For Self-Help</li>
            </ul>
          </div>

          <div className="">
            <h2 className="font-bold text-lg">
              How Do You Do CBT (Cognitive Behavioural Therapy)?
            </h2>
            <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2">
              <li>Principles Of CBT (Cognitive Behavioural Therapy)</li>
              <li>How Do You Do CBT?</li>
              <li>Goals & Objectives</li>
              <li>Scaling And Measuring Progress</li>
            </ul>
          </div>

          <div className="">
            <h2 className="font-bold text-lg">
              Identifying Problems, Challenges & Solutions
            </h2>
            <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2">
              <li>Identifying The Problem</li>
              <li>Identifying Challenges</li>
              <li>Finding Solutions</li>
            </ul>
          </div>

          <div className="">
            <h2 className="font-bold text-lg">
              Negative Automatic Thoughts (Nat's)
            </h2>
            <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2">
              <li>The Observing Self </li>
              <li>Thought Records</li>
            </ul>
          </div>

          <div className="">
            <h2 className="font-bold text-lg">
              Thinking, Feeling And Behaviours
            </h2>
            <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2">
              <li>Worry Map</li>
              <li>Connection Between Thinking And Feeling</li>
              <li>The Power Of Thoughts</li>
              <li>The Causal Thought</li>
              <li>The Downward Arrow Technique</li>
            </ul>
          </div>

          <div className="">
            <h2 className="font-bold text-lg">Challenging Negative Thoughts</h2>
            <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2">
              <li>Negative Thoughts: Truth Or Fiction</li>
              <li>Commitment To Change</li>
              <li>Four Stages Of Learning</li>
              <li>Developing Alternative Perspectives</li>
            </ul>
          </div>

          <div className="">
            <h2 className="font-bold text-lg">
              When Negative Thoughts Are True
            </h2>
            <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2">
              <li>Developing A Plan Of Action </li>
            </ul>
          </div>

          <div className="">
            <h2 className="font-bold text-lg">Faulty Thinking Styles</h2>
            <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2">
              <li>Recognising Faulty Thinking Styles</li>
              <li>Recognising Faulty Thinking Styles: Examples</li>
              <li>Checking For Evidence</li>
            </ul>
          </div>

          <div className="">
            <h2 className="font-bold text-lg">Identifying Emotions</h2>
            <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2">
              <li>Identifying Emotions</li>
              <li>Developing Emotional Intelligence</li>
              <li>Identifying The Real Feelings</li>
            </ul>
          </div>

          <div className="">
            <h2 className="font-bold text-lg">Changing Behaviours</h2>
            <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2">
              <li>Changing Learned Behaviours</li>
              <li>Behavioural Experiments </li>
            </ul>
          </div>
          <div className="">
            <h2 className="font-bold text-lg">Tackling Beliefs</h2>
            <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2">
              <li>Difference Between Thoughts & Beliefs</li>
              <li>Different Types Of Beliefs</li>
              <li>How To Discover Your Beliefs</li>
              <li>Downward Arrow Technique</li>
              <li>Challenging Beliefs Part 01</li>
              <li>Creating Helpful Beliefs Part 01</li>
              <li>Positive Data Log</li>
            </ul>
          </div>
          <div className="">
            <h2 className="font-bold text-lg">
              Additional CBT Therapeutic Ideas
            </h2>
            <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2">
              <li>Power Of Imagination</li>
              <li>Metaphorical Thinking</li>
              <li>Therapeutic Use Of Metaphors</li>
              <li>Keeping Clients Motivated</li>
              <li>Symptom Relief</li>
            </ul>
          </div>

          <div className="">
            <h2 className="font-bold text-lg">
              Relaxation, Mindfulness And Mental Rehearsal
            </h2>
            <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2">
              <li>Importance Of Relaxation</li>
              <li>How To Calm The Mind</li>
              <li>Breathing</li>
              <li>Muscle Relaxation</li>
              <li>Mental Rehearsal</li>
              <li>Reframing The Past</li>
              <li>Mindfulness</li>
            </ul>
          </div>

          <div className="">
            <h2 className="font-bold text-lg">
              Treating Different Conditions With CBT (Cognitive Behavioural
              Therapy)
            </h2>
            <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2">
              <li>Working With Sleep Difficulties</li>
              <li>Working With Anxiety</li>
              <li>Working With Depression</li>
              <li>Working With Addictions</li>
              <li>Working With Confidence And Self-Esteem</li>
              <li>Working With Anger</li>
            </ul>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}

export default Cognitive;
