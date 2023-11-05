import React from "react";
import Navbar from "../../components/Navbar";
import Contact from "../../components/HomePage/Contact";
import pic1 from "../../images/Certificate/REBT/pic1.jpg";
import pic2 from "../../images/Certificate/REBT/pic2.jpg";
import ScrollToTop from "../../components/ScrollToTop.js";

function Rebt() {
  return (
    <>
<ScrollToTop />
      <Navbar />
      <div className="container p-2 md:px-0 md:py-5 mx-auto flex flex-col gap-3">
        <p className="text-xl md:text-2xl lg:text-4xl font-semibold">
          RATIONAL EMOTIVE BEHAVIROAL THERAPY (REBT)
        </p>
        <p className="text-xl md:text-2xl lg:text-4xl font-semibold">
          Certification
        </p>
        <img src={pic1} className="max-h-96 self-center"></img>
        <p className="text-left text-base lg:text-xl">
          The Rational Emotive Behavioural Therapy (REBT) certification program
          is a comprehensive training initiative designed to equip individuals
          with the specialized knowledge and skills required to become certified
          REBT therapists. This program focuses on teaching the principles and
          techniques of REBT, a psychotherapy approach developed by Albert
          Ellis, aimed at helping individuals identify and change irrational
          beliefs that lead to emotional distress and self-defeating behaviours.
          Participants in this program gain a deep understanding of the theory
          and practice of REBT, enabling them to effectively assist clients in
          managing their emotions, fostering rational thinking, and achieving
          improved mental and emotional well-being. Upon successful completion,
          participants earn certification, demonstrating their expertise in this
          evidence-based therapeutic method.
        </p>
        <img src={pic2} className="max-h-96 self-center"></img>
        <p className="text-xl md:text-2xl lg:text-4xl font-semibold">
          What do you Learn?
        </p>
        <ul className="list-decimal list-inside text-left text-base md:text-lg lg:text-xl ml-2">
          <li>Introduction</li>
          <li>REBT: Its Theoretical Principles & Philosophy</li>
          <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2">
            <li>Albert Ellis & REBT</li>
            <li>Philosophy & Theory Of REBT</li>
            <li>Theoretical Principles Of CBT (Post-REBT)</li>
            <li>The Original ABC Model</li>
            <li>The Expanded ABCD Model</li>
          </ul>
          <li>Thinking Patterns & Beliefs</li>
          <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2">
            <li>Adaptive (Healthy) And Maladaptive (Unhealthy) Emotions</li>
            <li>What Is ‘Rational’ Belief (Examples)?</li>
            <li>What Is ‘Irrational’ Belief (Examples)?</li>
            <li>The 3 Basic ‘Musts’</li>
            <li>Demandingness</li>
            <li>Awfulizing</li>
            <li>Low (& High) Frustration Tolerance</li>
          </ul>
          <li>Using REBT For Various Psychological Problems</li>
          <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2">
            <li>REBT For Depression</li>
            <li>REBT For Anxiety</li>
            <li>REBT For Substance Abuse</li>
            <li>REBT For Stress-Related Conditions</li>
            <li>REBT In Individual Therapy / Counselling</li>
            <li>REBT In Couple Therapy / Counselling</li>
          </ul>
          <li>How To Work As REBT Therapist</li>
          <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2">
            <li>Establishing Therapeutic Relationship</li>
            <li>Qualities Of Good REBT Therapist</li>
            <li>Identifying Treatment Goals</li>
            <li>Problems With Achieving Goals</li>
            <li>How To Think Like REBT Specialist</li>
            <li>How To Structure Sessions With Your Client</li>
            <li>When And How To Conclude Therapy?</li>
          </ul>
        </ul>
      </div>
      <Contact />
    </>
  );
}

export default Rebt;
