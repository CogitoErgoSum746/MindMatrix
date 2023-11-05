import React from "react";
import Navbar from "../../components/Navbar";
import Contact from "../../components/HomePage/Contact";
import pic1 from "../../images/Certificate/Developmental/pic1.jpg";
import pic2 from "../../images/Certificate/Developmental/pic2.jpg";

function Developmental() {
  return (
    <>
      <Navbar />
      <div className="container p-2 md:px-0 md:py-5 mx-auto flex flex-col gap-3">
        <p className="text-xl md:text-2xl lg:text-4xl font-semibold">
          DEVELOPMENTAL PSYCHOLOGY
        </p>
        <img src={pic1} className="max-h-96 self-center"></img>
        <p className="text-left text-base lg:text-xl">
          The developmental psychology certification program is a pivotal
          educational initiative aimed at equipping individuals with an in-depth
          understanding of human growth and development across the lifespan.
          This program delves into the intricate interplay of biological,
          cognitive, emotional, and social factors that shape human behaviour
          and personality from infancy to old age. Through a comprehensive
          curriculum, participants gain the expertise to assess and support
          individuals at various life stages, addressing developmental
          challenges and facilitating healthy growth. This certification program
          is essential for professionals in fields such as education,
          counselling, and healthcare, as it fosters a deeper insight into human
          development, enabling them to make informed decisions and provide more
          effective support to individuals of all ages.
        </p>
        <img src={pic2} className="max-h-96 self-center"></img>
        <p className="text-xl md:text-2xl lg:text-4xl font-semibold">
          What do you Learn?
        </p>
        <div className="p-4 text-left">
          <div className="">
            <h2 className="font-bold text-lg">
              1. What Is Developmental Psychology?
            </h2>
            <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2">
              <li>Human Development</li>
              <li>Scope And Significance Of The Study Of Human Development</li>
              <li>Three Dimensions Of Human Development</li>
              <li>General Principles Of Human Development</li>
              <li>
                Influence Of Hereditary And Environment (Nature And Nurture)
              </li>
              <li>Biological And Beginning Of Human Development</li>
              <li>Genetic Foundation Of Human Development</li>
            </ul>
          </div>

          <div className="">
            <h2 className="font-bold text-lg">
              2. The Theoretical Perspectives Of Human Development
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
              3. Four Stages Of Cognitive Development
            </h2>
            <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2">
              <li>Sensorimotor Stage</li>
              <li>Preoperational Stage</li>
              <li>Concrete Operational Stage</li>
              <li>Formal Operational Stage</li>
            </ul>
          </div>

          <div className="">
            <h2 className="font-bold text-lg">
              4. Life Span Approach To Human Development
            </h2>
            <ul className="list-disc list-inside text-left text-base md:text-lg lg:text-xl ml-2">
              <li>In Life Span Perspective:</li>
              <li>Stages In The Life Span (Elizabeth Herlock):</li>
              <li>Prenatal Period: Conception To Birth</li>
              <li>Infancy: Birth To The End Of The Second Week</li>
              <li>
                Babyhood: End Of The Second Week To The End Of The Second Year
              </li>
              <li>Early Childhood: Two To Six Years</li>
              <li>Late Childhood: Six To Twelve Years</li>
              <li>Puberty: Twelve To Fourteen Years</li>
              <li>Adolescence: Fourteen To Eighteen Years</li>
              <li>Early Adulthood: Eighteen To Forty Years</li>
              <li>Middle Age: Forty To Sixty Years</li>
              <li>Old Age: Sixty Years To Death</li>
            </ul>
          </div>

         </div>
      </div>
      <Contact />
    </>
  );
}

export default Developmental;
