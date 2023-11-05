import React from "react";
import Navbar from "../../components/Navbar";
import Contact from "../../components/HomePage/Contact";
import pic1 from "../../images/Certificate/Counselling/pic1.jpg";
import pic2 from "../../images/Certificate/Counselling/pic2.jpg";
import pic3 from "../../images/Certificate/Counselling/pic3.jpg";
import pic4 from "../../images/Certificate/Counselling/pic4.jpg";
import ScrollToTop from "../../components/ScrollToTop.js";

function Counselling() {
  return (
    <>
<ScrollToTop />
      <Navbar />
      <div className="container p-2 md:px-0 md:py-5 mx-auto flex flex-col gap-3">
        <p className="text-xl md:text-2xl lg:text-4xl font-semibold">
          COUNSELLING AND THERAPIES
        </p>
        <p className="text-xl md:text-2xl lg:text-4xl font-semibold">
          Certification Program
        </p>
        <img src={pic1} className="max-h-96 self-center"></img>
        <p className="text-left text-base lg:text-xl">
          The counselling and therapies certification program is a crucial
          educational pathway for aspiring mental health professionals. This
          program equips individuals with the essential skills and knowledge
          required to become certified counsellors and therapists. It focuses on
          instilling a deep understanding of various therapeutic techniques,
          ethical considerations, and the promotion of mental health advocacy.
          Certification ensures a high standard of quality, client safety, and
          competence in the field, while also fostering a commitment to ethical
          practice. Graduates of such programs are not only well-prepared to
          address a wide range of mental health challenges but also play a vital
          role in advocating for better mental health awareness and promoting
          mindful living.
        </p>
        <img src={pic2} className="max-h-96 self-center"></img>
        <p className="text-xl md:text-2xl lg:text-4xl font-bold">
          What do you Learn?
        </p>
        <div className="p-4 text-left">
          <div className="">
            <h2 className="font-bold text-lg">
              Foundations Of Behaviour & Basic Skills In Counselling Psychology:
            </h2>
            <ul className="list-decimal list-inside text-left text-base md:text-lg lg:text-xl ml-2">
              <li>Etymology Of Psychology.</li>
              <li>Background And Beginning Of Psychology.</li>
              <li>A Few Important Psychologists.</li>
              <li>Definitions Of Psychology.</li>
              <li>Goals Of Psychology.</li>
              <li>Roles Of Psychologists.</li>
              <li>Approaches Of Psychology.</li>
              <li>Sub-Fields Of Psychology.</li>
              <li>Learning.</li>
              <li>Behaviourist Theories Of Learning.</li>
              <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2">
                <li>Self-Awareness And Understanding.</li>
                <li>Good Psychological Health.</li>
                <li>Sensitivity To Understand Self And Others.</li>
                <li>Open-Mindedness.</li>
                <li>Objectivity.</li>
                <li>Competence.</li>
                <li>Trustworthiness.</li>
                <li>Interpersonal Attractiveness.</li>
              </ul>
              <li>Memory.</li>
              <li>A Three Stage Model Of Atkinson And Shiffrin.</li>
              <li>Stages Of Counselling Process.</li>
              <li>First Session Of The Counselling.</li>
              <li>Micro Skills.</li>
            </ul>
          </div>
          <img src={pic3} className="max-h-96 self-center"></img>

          <div className="">
            <h2 className="font-bold text-lg">Counselling:</h2>
            <ul className="list-decimal list-inside text-left text-base md:text-lg lg:text-xl ml-2">
              <li>Definition Of Counselling.</li>
              <li>What Counselling Is?</li>
              <li>What Counselling Is Not?</li>
              <li>Levels Of Helping.</li>
              <li>Guidance And Psychotherapy.</li>
              <li>Goals Of Counselling.</li>
              <li>Helping Formula.</li>
              <li>Essentials For Counselling Relationship.</li>
              <li>Counselling Functions.</li>
              <li>Characteristics Of Effective Helpers.</li>
              <li>Stages Of Counselling Process.</li>
              <li>First Session Of The Counselling.</li>
              <li>Micro Skills.</li>
            </ul>
          </div>
          <img src={pic4} className="max-h-96 self-center"></img>
          <div className="">
            <h2 className="font-bold text-lg">
              Structuring Of Counselling Session{" "}
            </h2>
            <ul className="list-decimal list-inside text-left text-base md:text-lg lg:text-xl ml-2">
              <li>Attending Skills</li>
              <li>Responding Skills</li>
              <li>Influencing Skills</li>
              <li>Termination Skills</li>
            </ul>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}

export default Counselling;
