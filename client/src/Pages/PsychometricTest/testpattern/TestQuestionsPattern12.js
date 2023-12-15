import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import mechimg1 from "../../../images/mechimg1.png";
import mechimg2 from "../../../images/mechimg2.png";
import mechimg3 from "../../../images/mechimg3.png";
import abst1 from "../../../images/abst/abst1.png";
import abst2 from "../../../images/abst/abst2.png";
import abst3 from "../../../images/abst/abst3.png";
import abst4 from "../../../images/abst/abst4.png";
import abst5 from "../../../images/abst/abst5.png";
import abst6 from "../../../images/abst/abst6.png";
import abst7 from "../../../images/abst/abst7.png";
import abst8 from "../../../images/abst/abst8.png";
import abst9 from "../../../images/abst/abst9.png";
import abst10 from "../../../images/abst/abst10.png";
import abst11 from "../../../images/abst/abst11.png";
import abst12 from "../../../images/abst/abst12.png";
import abst13 from "../../../images/abst/abst13.png";
import abst14 from "../../../images/abst/abst14.png";
import abst15 from "../../../images/abst/abst15.png";
import abst16 from "../../../images/abst/abst16.png";
import abst17 from "../../../images/abst/abst17.png";
import abst18 from "../../../images/abst/abst18.png";
import abst19 from "../../../images/abst/abst19.png";
import abst20 from "../../../images/abst/abst20.png";
import mathfig from "../../../images/mathfig.png";
import spatial3 from "../../../images/spatial3.png";
import spatial11 from "../../../images/spatial11.png";
import { API_BASE_URL } from "../../../config";

function TestQuestionsPattern12() {
  const { subtestId } = useParams();
  const id = 12;
  const [isTestCompleted, setIsTestCompleted] = useState(false);

  const tests = {
    1: {
      title: "Linguistic",
      questions: [
        {
          questionText:
            "1. In the following analogy, which word completes the pair?\nFire: Hot: Ice: ______?",
          options: [
            { text: "A) Cold", isCorrect: true },
            { text: "B) Melt", isCorrect: false },
            { text: "C) Solid", isCorrect: false },
            { text: "D) Freeze", isCorrect: false },
          ],
        },
        {
          questionText:
            "2. The telephone rang. The _________ of the telephone startled all of us",
          options: [
            { text: "A) ring", isCorrect: true },
            { text: "B) rang", isCorrect: false },
            { text: "C) ringing", isCorrect: false },
            { text: "D) rung", isCorrect: false },
          ],
        },

        {
          questionText: `3. Choose the synonym for the word "Eager":`,
          options: [
            { text: "A) Angry", isCorrect: false },
            { text: "B) Patient", isCorrect: false },
            { text: "C) Enthusiastic", isCorrect: true },
            { text: "D) Calm", isCorrect: false },
          ],
        },
        {
          questionText:
            "4. He tried hard. He did not succeed.\n(Choose the most suitable passive voice)",
          options: [
            { text: "A) Trying hard, he did not succeed.", isCorrect: false },
            { text: "B) He tried hard and did not succeed.", isCorrect: false },
            {
              text: "C) In spite of trying hard, he did not succeed.",
              isCorrect: true,
            },
            {
              text: "D) He tried hard in spite of he did not succeed.",
              isCorrect: false,
            },
          ],
        },
        {
          questionText:
            "5. My house has a small kitchen garden _____ the back.",
          options: [
            { text: "A) On", isCorrect: false },
            { text: "B) In", isCorrect: false },
            { text: "C) By", isCorrect: false },
            { text: "D) At", isCorrect: true },
          ],
        },
        {
          questionText: `6. Choose the correct antonym for the word "Brave":`,
          options: [
            { text: "A) Cowardly", isCorrect: true },
            { text: "B) Strong", isCorrect: false },
            { text: "C) Courageous", isCorrect: false },
            { text: "D) Bold", isCorrect: false },
          ],
        },
        {
          questionText:
            "7. Find the missing letter in the sequence: C, F, I, L, __ ?",
          options: [
            { text: "A) O", isCorrect: true },
            { text: "B) P", isCorrect: false },
            { text: "C) M", isCorrect: false },
            { text: "D) N", isCorrect: false },
          ],
        },
        {
          questionText:
            "8. You should not eat the uncovered food items.\n(Choose the most suitable passive voice)",
          options: [
            {
              text: "A) Food items being uncovered should not be eaten by you.",
              isCorrect: false,
            },
            {
              text: "B) The uncovered food items not be eaten.",
              isCorrect: false,
            },
            {
              text: "C) The uncovered food items should not be eaten.",
              isCorrect: true,
            },
            { text: "D) None of these", isCorrect: false },
          ],
        },
        {
          questionText:
            "9. Find the missing word.\nParticular: Fussy ________ : Subservient",
          options: [
            { text: "A) Meek", isCorrect: true },
            { text: "B) Above", isCorrect: false },
            { text: "C) Cranky", isCorrect: false },
            { text: "D) Upright", isCorrect: false },
          ],
        },
        {
          questionText: "10. He was excited _______ the upcoming trip.",
          options: [
            { text: "A) About", isCorrect: true },
            { text: "B) With", isCorrect: false },
            { text: "C) To", isCorrect: false },
            { text: "D) For", isCorrect: false },
          ],
        },
        {
          questionText: "11. Pick the odd one out among the following:",
          options: [
            { text: "A) Tree", isCorrect: false },
            { text: "B) Leaf", isCorrect: true },
            { text: "C) Bush", isCorrect: false },
            { text: "D) Herb", isCorrect: false },
          ],
        },
        {
          questionText:
            '12. I said to her, "I am writing an essay now."\n(Choose the most suitable indirect speech)',
          options: [
            {
              text: "A) I told her that I was writing an essay then.",
              isCorrect: true,
            },
            {
              text: "B) I told her that I am writing an essay then.",
              isCorrect: false,
            },
            {
              text: "C) I told her that I was writing an essay now.",
              isCorrect: false,
            },
            {
              text: "D) I told to her that I was writing an essay then.",
              isCorrect: false,
            },
          ],
        },
        {
          questionText: '13. Choose the synonym for the word "Incredible":',
          options: [
            { text: "A) Ordinary", isCorrect: false },
            { text: "B) Amazing", isCorrect: true },
            { text: "C) Unimportant", isCorrect: false },
            { text: "D) Ugly", isCorrect: false },
          ],
        },
        {
          questionText:
            "14. Complete the sentence with the correct word:\nThe young child was _____ to eat ice cream.",
          options: [
            { text: "A) Agitated", isCorrect: false },
            { text: "B) Anxious", isCorrect: false },
            { text: "C) Afraid", isCorrect: false },
            { text: "D) Eager", isCorrect: true },
          ],
        },
        {
          questionText:
            "15. Rearrange the letters: 'T A L E R' to form a meaningful word that means vigilant.",
          options: [
            { text: "A) TALER", isCorrect: false },
            { text: "B) RATLE", isCorrect: false },
            { text: "C) ALERT", isCorrect: true },
            { text: "D) LATER", isCorrect: false },
          ],
        },
        {
          questionText:
            "16. Hello, I'd like to change some dollars into Indian rupees.\n(Choose the appropriate option)",
          options: [
            { text: "A) Getting money out.", isCorrect: false },
            { text: "B) Asking a friend for money.", isCorrect: false },
            { text: "C) Getting change.", isCorrect: false },
            { text: "D) Changing currency.", isCorrect: true },
          ],
        },
        {
          questionText:
            "17. __________yoga is a means of remaining calm even in disturbing situations.",
          options: [
            { text: "A) Practise", isCorrect: false },
            { text: "B) To practice", isCorrect: false },
            { text: "C) Practising", isCorrect: true },
            { text: "D) Having practiced", isCorrect: false },
          ],
        },
        {
          questionText: "18. Which word does NOT belong in the group?",
          options: [
            { text: "A) Table", isCorrect: false },
            { text: "B) Chair", isCorrect: false },
            { text: "C) Refrigerator", isCorrect: true },
            { text: "D) Sofa", isCorrect: false },
          ],
        },
        {
          questionText:
            "19. Do you drive on_________ right or on _________left in the USA?",
          options: [
            { text: "A) the, a", isCorrect: false },
            { text: "B) a, a", isCorrect: false },
            {
              text: "C) no article required, no article required",
              isCorrect: false,
            },
            { text: "D) the, the", isCorrect: true },
          ],
        },
        {
          questionText:
            "20. confuse | it | with | often effect green | house | people\n(Choose the rearranged sentence)",
          options: [
            {
              text: "A) Greenhouse effect often people confuse with it.",
              isCorrect: false,
            },
            {
              text: "B) People often confuse it with greenhouse effect.",
              isCorrect: true,
            },
            {
              text: "C) Confuse it with greenhouse effect often people.",
              isCorrect: false,
            },
            {
              text: "D) Green house is often effect confuse with people.",
              isCorrect: false,
            },
          ],
        },
      ],
    },

    2: {
      title: "Numerical",
      questions: [
        {
          questionText: "1. Which one of the following statement is false?",
          options: [
            {
              text: "A) One of every three consecutive positive integer is divisible by 3",
              isCorrect: false,
            },
            {
              text: "B) One of the every three consecutive positive integer is divisible by 5",
              isCorrect: true,
            },
            {
              text: "C) The product of two consecutive integers is divisible by 2",
              isCorrect: false,
            },
            {
              text: "D) The product of two consecutive integer may or may not be divisible by 2",
              isCorrect: false,
            },
          ],
        },
        {
          questionText: "2. If x= 5+√24 find the value of (x²+ 1/x²)",
          options: [
            { text: "A) 100", isCorrect: false },
            { text: "B) 24", isCorrect: false },
            { text: "C) 98", isCorrect: true },
            { text: "D) 25", isCorrect: false },
          ],
        },
        {
          questionText:
            "3. Find the greatest number which divides 1531 and 1222 leaving remainder 5 and 7 respectively.",
          options: [
            { text: "A) 45", isCorrect: true },
            { text: "B) 35", isCorrect: false },
            { text: "C) 55", isCorrect: false },
            { text: "D) 90", isCorrect: false },
          ],
        },
        {
          questionText:
            "4. The product of two consecutive positive integers is divisible by 2.",
          options: [
            { text: "A) True", isCorrect: true },
            { text: "B) False", isCorrect: false },
            { text: "C) Can't say", isCorrect: false },
            { text: "D) Partially True/False", isCorrect: false },
          ],
        },
        {
          questionText: "5. HCF of 96 and 404 is equal to ..........",
          options: [
            { text: "A) 2", isCorrect: false },
            { text: "B) 3", isCorrect: false },
            { text: "C) 4", isCorrect: true },
            { text: "D) 5", isCorrect: false },
          ],
        },
        {
          questionText:
            "6. The cubic equation whose three roots are -3, 5, 8 is given by:",
          options: [
            { text: "A)z³+10z²z+120", isCorrect: false },
            { text: "B)z³=10z²-z+120", isCorrect: false },
            { text: "C)z³-10z²+z+120", isCorrect: true },
            { text: "D)z³-10z²-z-120", isCorrect: false },
          ],
        },
        {
          questionText:
            "7. In figure, the graph of a polynomial p(x) is shown. Find the number of zeroes of p(x).",
          options: [
            { text: "A) 4", isCorrect: false },
            { text: "B) 1", isCorrect: true },
            { text: "C) 2", isCorrect: false },
            { text: "D) 3", isCorrect: false },
          ],
          imageUrl: mathfig,
        },
        {
          questionText:
            "8. Joseph has a garment factory where the shirts and trousers are made. He got an order from a school to prepare the uniform for the children of the school. He found that 2 men and 5 boys can finish the lot in 4 days, while 3 men and 6 boys can finish the same lot in 3 days. In how many days can one man alone finish the lot?",
          options: [
            { text: "A) 18 days", isCorrect: true },
            { text: "B) 36 days", isCorrect: false },
            { text: "C) 20 days", isCorrect: false },
            { text: "D) 60 days", isCorrect: false },
          ],
        },
        {
          questionText:
            "9. A manufacturer of laptop produced 6000 units in 3rd year and 7000 units in the 7th year. Assuming that production increases uniformly by a fixed number every year, find the production in the 5th year.",
          options: [
            { text: "A) 6500 units", isCorrect: true },
            { text: "B) 5000 units", isCorrect: false },
            { text: "C) 6000 units", isCorrect: false },
            { text: "D) 8000 units", isCorrect: false },
          ],
        },
        {
          questionText:
            "10. The perimeters of two similar triangles are 42 cm and 63 cm respectively. If one side of the first triangle is 12 cm, then find the corresponding side of the other triangle.",
          options: [
            { text: "A) 12cm", isCorrect: false },
            { text: "B) 16cm", isCorrect: false },
            { text: "C) 18cm", isCorrect: true },
            { text: "D) 9cm", isCorrect: false },
          ],
        },
        {
          questionText:
            "11. Two ships are sailing in the sea on the two sides of a lighthouse. The angle of elevation of the top of the lighthouse is observed from the ships are 30° and 45° respectively. If the lighthouse is 100 m high, the distance between the two ships is:",
          options: [
            { text: "A. 173 m", isCorrect: false },
            { text: "B. 200 m", isCorrect: false },
            { text: "C. 273 m", isCorrect: true },
            { text: "D. 300 m", isCorrect: false },
          ],
        },
        {
          questionText: "12. The value of sin 18° is given by:",
          options: [
            { text: "A)√5-1/4", isCorrect: true },
            { text: "B)√5+1/4", isCorrect: false },
            { text: "C)-√5+1/4", isCorrect: false },
            { text: "D)-√5-1/4", isCorrect: false },
          ],
        },
        {
          questionText:
            "13. A 24 m tall tree was cut to a height from the ground. The top of the tree touching the ground makes an angle 30° with the ground. At what height from the ground was the tree cut?",
          options: [
            { text: "A) 4 m", isCorrect: false },
            { text: "B) 8 m", isCorrect: true },
            { text: "C) 10 m", isCorrect: false },
            { text: "D) 6 m", isCorrect: false },
          ],
        },
        {
          questionText:
            "14. Rohit has a certain average for 9 innings. In the tenth innings, he scores 100 runs thereby increasing his average by 8 runs. His new average is:",
          options: [
            { text: "A. 20", isCorrect: false },
            { text: "B. 21", isCorrect: false },
            { text: "C. 28", isCorrect: true },
            { text: "D. 32", isCorrect: false },
          ],
        },
        {
          questionText:
            "15. The difference between the circumference and radius of a circle is 37 m. Find the circumference of the circle.",
          options: [
            { text: "A) 7m", isCorrect: false },
            { text: "B) 44m", isCorrect: true },
            { text: "C) 154 m", isCorrect: false },
            { text: "D) 186m", isCorrect: false },
          ],
        },
        {
          questionText:
            "16. A cuboidal metal of dimensions 44 cm × 30 cm × 15 cm was melted and cast into a cylinder of height 28 cm. Find its radius.",
          options: [
            { text: "A) 20cm", isCorrect: false },
            { text: "B) 15cm", isCorrect: true },
            { text: "C) 10cm", isCorrect: false },
            { text: "D) 18cm", isCorrect: false },
          ],
        },
        {
          questionText:
            "17. In a shower, 10 cm of rain falls. What will be the volume of water that falls on 1 hectare area of ground?",
          options: [
            { text: "A) 500 m³", isCorrect: false },
            { text: "B) 650 m³", isCorrect: false },
            { text: "C) 1000 m³", isCorrect: true },
            { text: "D) 750 m³", isCorrect: false },
          ],
        },
        {
          questionText:
            "18. There are two examinations rooms A and B. If 10 students are sent from A to B, then the number of students in each room is the same. If 20 candidates are sent from B to A, then the number of students in A is double the number of students in B. The number of students in room A is:",
          options: [
            { text: "A. 20", isCorrect: false },
            { text: "B. 80", isCorrect: false },
            { text: "C. 100", isCorrect: true },
            { text: "D. 200", isCorrect: false },
          ],
        },
        {
          questionText:
            "19. Following are the runs scored by seven batsmen in a calendar year in the test match played against different countries. The runs are 320, 310, 300, 240, 210, 150, 340. Find the mean deviation about the median for the above data.",
          options: [
            { text: "A) 52.86", isCorrect: true },
            { text: "B) 46.9", isCorrect: false },
            { text: "C) 48.65", isCorrect: false },
            { text: "D) 50.25", isCorrect: false },
          ],
        },
        {
          questionText:
            "20. A reduction of 20% in the price of sugar enables a housewife to purchase 6 kg more for Rs. 240. What is the original price per kg of sugar.",
          options: [
            { text: "A. Rs.10 per Kg", isCorrect: true },
            { text: "B. Rs.8 per Kg", isCorrect: false },
            { text: "C. Rs.6 per Kg", isCorrect: false },
            { text: "D. Rs.5 per Kg", isCorrect: false },
          ],
        },
      ],
    },

    3: {
      title: "Mechanical",
      questions: [
        {
          questionText:
            "1. Which simple machine is used to lift heavy objects using a rope over a pulley?",
          options: [
            { text: "A) Lever", isCorrect: false },
            { text: "B) Wheel and Axle", isCorrect: false },
            { text: "C) Pulley", isCorrect: true },
            { text: "D) Inclined Plane", isCorrect: false },
          ],
        },
        {
          questionText: "2. In which direction does the orange gear rotate?",
          options: [
            { text: "A) Clockwise", isCorrect: false },
            { text: "B) Anticlockwise", isCorrect: true },
            { text: "C) No rotation", isCorrect: false },
          ],
          imageUrl: mechimg1,
        },
        {
          questionText:
            "3. What type of energy does a wound-up spring in a mechanical toy have?",
          options: [
            { text: "A) Potential Energy", isCorrect: true },
            { text: "B) Kinetic Energy", isCorrect: false },
            { text: "C) Thermal Energy", isCorrect: false },
            { text: "D) Chemical Energy", isCorrect: false },
          ],
        },
        {
          questionText:
            "4. Which type of lever has the fulcrum located between the effort and the load?",
          options: [
            { text: "A) First-Class Lever", isCorrect: true },
            { text: "B) Second-Class Lever", isCorrect: false },
            { text: "C) Third-Class Lever", isCorrect: false },
            { text: "D) None of the above", isCorrect: false },
          ],
        },
        {
          questionText:
            "5. What mechanical advantage does an inclined plane provide?",
          options: [
            { text: "A) Less effort over a longer distance", isCorrect: false },
            { text: "B) Less effort over a shorter distance", isCorrect: true },
            { text: "C) More effort over a longer distance", isCorrect: false },
            {
              text: "D) More effort over a shorter distance",
              isCorrect: false,
            },
          ],
        },
        {
          questionText:
            "6. What mechanical device is used to transmit rotary motion between two shafts?",
          options: [
            { text: "A) Pulley", isCorrect: false },
            { text: "B) Screw", isCorrect: false },
            { text: "C) Gear", isCorrect: true },
            { text: "D) Lever", isCorrect: false },
          ],
        },
        {
          questionText:
            "7. Which simple machine is commonly used in door hinges?",
          options: [
            { text: "A) Pulley", isCorrect: false },
            { text: "B) Screw", isCorrect: false },
            { text: "C) Lever", isCorrect: true },
            { text: "D) Wheel and Axle", isCorrect: false },
          ],
        },
        {
          questionText:
            "8. What weight does the blue box have to be in order for the seesaw to be in equilibrium (balanced)?",
          options: [
            { text: "A. 10 kg", isCorrect: false },
            { text: "B. 15 kg", isCorrect: false },
            { text: "C. 20 kg", isCorrect: false },
            { text: "D. 25 kg", isCorrect: true },
          ],
          imageUrl: mechimg2,
        },
        {
          questionText: "9. What is the purpose of a bearing in machinery?",
          options: [
            { text: "A) To increase friction", isCorrect: false },
            { text: "B)To decrease mechanical advantage", isCorrect: false },
            { text: "C) To transmit motion", isCorrect: false },
            {
              text: "D) To reduce friction between moving parts",
              isCorrect: true,
            },
          ],
        },
        {
          questionText:
            "10. In a second-class lever, where is the load located in relation to the fulcrum and the effort?",
          options: [
            { text: "A) Between the fulcrum and the effort", isCorrect: true },
            { text: "B) At the same point as the fulcrum", isCorrect: false },
            { text: "C) At the same point as the effort", isCorrect: false },
            {
              text: "D) Opposite to the effort and away from the fulcrum",
              isCorrect: false,
            },
          ],
        },
        {
          questionText:
            "11. Which type of energy is associated with the motion of an object?",
          options: [
            { text: "A) Thermal Energy", isCorrect: false },
            { text: "B) Potential Energy", isCorrect: false },
            { text: "C) Mechanical Energy", isCorrect: true },
            { text: "D) Chemical Energy", isCorrect: false },
          ],
        },
        {
          questionText:
            "12. What type of lever has the effort located between the fulcrum and the load?",
          options: [
            { text: "A) First-Class Lever", isCorrect: false },
            { text: "B) Second-Class Lever", isCorrect: false },
            { text: "C) Third-Class Lever", isCorrect: true },
            { text: "D) Fourth-Class Lever", isCorrect: false },
          ],
        },
        {
          questionText: "13. How many pulleys are turning clockwise?",
          options: [
            { text: "A. 0", isCorrect: false },
            { text: "B. 4", isCorrect: false },
            { text: "C. 6", isCorrect: false },
            { text: "D. 8", isCorrect: true },
          ],
          imageUrl: mechimg3.png,
        },
        {
          questionText: "14. What is the purpose of a flywheel in a machine?",
          options: [
            { text: "A) To transmit motion", isCorrect: false },
            { text: "B) To change the direction of motion", isCorrect: false },
            {
              text: "C) To store energy and provide smooth and continuous motion",
              isCorrect: true,
            },
            { text: "D) To lift heavy loads", isCorrect: false },
          ],
        },
        {
          questionText: "15. What is the advantage of using a screw mechanism?",
          options: [
            { text: "A) It provides linear motion", isCorrect: false },
            { text: "B) It transmits rotary motion", isCorrect: false },
            { text: "C) It provides a mechanical advantage", isCorrect: true },
            { text: "D) It reduces friction", isCorrect: false },
          ],
        },
        {
          questionText: "16. What is the primary function of a gear train?",
          options: [
            { text: "A) To provide mechanical advantage", isCorrect: false },
            { text: "B) To change the direction of motion", isCorrect: false },
            {
              text: "C) To transmit motion between parallel shafts",
              isCorrect: true,
            },
            { text: "D) To generate electricity", isCorrect: false },
          ],
        },
        {
          questionText:
            "17. In a wheel and axle, where is the effort applied in relation to the fulcrum?",
          options: [
            { text: "A) At the same point as the fulcrum", isCorrect: false },
            {
              text: "B) Opposite to the fulcrum and away from the axle",
              isCorrect: false,
            },
            {
              text: "C) Opposite to the axle and away from the fulcrum",
              isCorrect: true,
            },
            { text: "D) At the center of the axle", isCorrect: false },
          ],
        },
        {
          questionText:
            "18. What type of lever is a broom used to sweep the floor?",
          options: [
            { text: "A) First-Class Lever", isCorrect: false },
            { text: "B) Second-Class Lever", isCorrect: false },
            { text: "C) Third-Class Lever", isCorrect: true },
            { text: "D) Fourth-Class Lever", isCorrect: false },
          ],
        },
        {
          questionText:
            "19. Which of the following is an example of a non-contact force?",
          options: [
            { text: "A) Friction", isCorrect: false },
            { text: "B) Gravity", isCorrect: false },
            { text: "C) Magnetism", isCorrect: true },
            { text: "D) Normal Force", isCorrect: false },
          ],
        },
        {
          questionText: "20. What is the role of lubricants in machinery?",
          options: [
            { text: "A) To increase friction", isCorrect: false },
            { text: "B) To decrease mechanical advantage", isCorrect: false },
            { text: "C) To increase wear and tear", isCorrect: false },
            {
              text: "D) To reduce friction and prevent wear and tear",
              isCorrect: true,
            },
          ],
        },
      ],
    },

    4: {
      title: "Abstract",
      questions: [
        {
          questionText: "1. Which figure completed the series?",
          options: [
            { text: "A", isCorrect: false },
            { text: "B", isCorrect: false },
            { text: "C", isCorrect: true },
            { text: "D", isCorrect: false },
          ],
          imageUrl: abst1,
        },
        {
          questionText: "2. Which figure is the odd one out?",
          options: [
            { text: "A", isCorrect: false },
            { text: "B", isCorrect: true },
            { text: "C", isCorrect: false },
            { text: "D", isCorrect: false },
          ],
          imageUrl: abst2,
        },
        {
          questionText: "3. Which figure is next in the series?",
          options: [
            { text: "A", isCorrect: false },
            { text: "B", isCorrect: true },
            { text: "C", isCorrect: false },
            { text: "D", isCorrect: false },
          ],
          imageUrl: abst3,
        },
        {
          questionText: "4. Which figure completes the statement?",
          options: [
            { text: "A", isCorrect: false },
            { text: "B", isCorrect: false },
            { text: "C", isCorrect: false },
            { text: "D", isCorrect: true },
          ],
          imageUrl: abst4,
        },
        {
          questionText: "5. Which figure belongs in neither group?",
          options: [
            { text: "A", isCorrect: false },
            { text: "B", isCorrect: false },
            { text: "C", isCorrect: false },
            { text: "D", isCorrect: true },
          ],
          imageUrl: abst5,
        },
        {
          questionText: "6. Which is the next logical image?",
          options: [
            { text: "A", isCorrect: false },
            { text: "B", isCorrect: true },
            { text: "C", isCorrect: false },
            { text: "D", isCorrect: false },
          ],
          imageUrl: abst6,
        },
        {
          questionText:
            "7. Which of the following best matches the relationship between the shapes in the image?",
          options: [
            { text: "A", isCorrect: false },
            { text: "B", isCorrect: false },
            { text: "C", isCorrect: false },
            { text: "D", isCorrect: true },
          ],
          imageUrl: abst7,
        },
        {
          questionText: "8. Which domino comes next in the sequence?",
          options: [
            { text: "A", isCorrect: true },
            { text: "B", isCorrect: false },
            { text: "C", isCorrect: false },
            { text: "D", isCorrect: false },
          ],
          imageUrl: abst8,
        },
        {
          questionText: "9. Which figure completes the grid?",
          options: [
            { text: "A", isCorrect: false },
            { text: "B", isCorrect: false },
            { text: "C", isCorrect: true },
            { text: "D", isCorrect: false },
          ],
          imageUrl: abst9,
        },
        {
          questionText:
            "10. In the given figure, if the centres of all the circles are joined by horizontal and vertical lines, then find the number of squares that can be formed.",
          options: [
            { text: "6", isCorrect: false },
            { text: "7", isCorrect: false },
            { text: "8", isCorrect: true },
            { text: "9", isCorrect: false },
          ],
          imageUrl: abst10,
        },
        {
          questionText: "11. Which shape comes next in the sequence?",
          options: [
            { text: "A", isCorrect: false },
            { text: "B", isCorrect: false },
            { text: "C", isCorrect: false },
            { text: "D", isCorrect: false },
            { text: "E", isCorrect: true },
          ],
          imageUrl: abst11,
        },
        {
          questionText: "12. Complete the sequence.",
          options: [
            { text: "A", isCorrect: false },
            { text: "B", isCorrect: false },
            { text: "C", isCorrect: true },
            { text: "D", isCorrect: false },
            { text: "E", isCorrect: false },
          ],
          imageUrl: abst12,
        },
        {
          questionText: "13. Complete the sequence.",
          options: [
            { text: "A", isCorrect: false },
            { text: "B", isCorrect: true },
            { text: "C", isCorrect: false },
            { text: "D", isCorrect: false },
          ],
          imageUrl: abst13,
        },
        {
          questionText:
            "14. Identify the number of squares in the figure given.",
          options: [
            { text: "36", isCorrect: false },
            { text: "40", isCorrect: true },
            { text: "44", isCorrect: false },
            { text: "48", isCorrect: false },
          ],
          imageUrl: abst14,
        },
        {
          questionText:
            "15. Identify the number of triangles in the figure given.",
          options: [
            { text: "22", isCorrect: false },
            { text: "24", isCorrect: false },
            { text: "26", isCorrect: false },
            { text: "28", isCorrect: true },
          ],
          imageUrl: abst15,
        },
        {
          questionText: "16. Count the number of cubes in the figure given.",
          options: [
            { text: "15", isCorrect: true },
            { text: "18", isCorrect: false },
            { text: "19", isCorrect: false },
            { text: "16", isCorrect: false },
          ],
          imageUrl: abst16,
        },
        {
          questionText:
            "17. Find the number of rectangles in the given figure.",
          options: [
            { text: "20", isCorrect: true },
            { text: "18", isCorrect: false },
            { text: "16", isCorrect: false },
            { text: "15", isCorrect: false },
          ],
          imageUrl: abst17,
        },
        {
          questionText:
            "18. Find the number of parallelograms contained in the following figure",
          options: [
            { text: "34", isCorrect: false },
            { text: "45", isCorrect: false },
            { text: "42", isCorrect: true },
            { text: "47", isCorrect: false },
          ],
          imageUrl: abst18,
        },
        {
          questionText:
            "19. What is the minimum number of different colours required to paint the figure given above such that no two adjacent regions have the same colour?",
          options: [
            { text: "3", isCorrect: true },
            { text: "4", isCorrect: false },
            { text: "5", isCorrect: false },
            { text: "6", isCorrect: false },
          ],
          imageUrl: abst19,
        },
        {
          questionText:
            "20. Find the minimum number of straight lines required to make the given figures.",
          options: [
            { text: "13", isCorrect: true },
            { text: "15", isCorrect: false },
            { text: "17", isCorrect: false },
            { text: "19", isCorrect: false },
          ],
          imageUrl: abst20,
        },
      ],
    },

    5: {
      title: "Spatial",
      questions: [
        {
          questionText: "1. Which 2D shape has three sides and three angles?",
          options: [
            { text: "A) Square", isCorrect: false },
            { text: "B) Circle", isCorrect: false },
            { text: "C) Triangle", isCorrect: true },
            { text: "D) Rectangle", isCorrect: false },
          ],
        },
        {
          questionText:
            "2. Which 3D shape has all its sides equal in length and all its angles equal?",
          options: [
            { text: "A) Sphere", isCorrect: false },
            { text: "B) Cone", isCorrect: false },
            { text: "C) Cylinder", isCorrect: false },
            { text: "D) Cube", isCorrect: true },
          ],
        },
        {
          questionText: "3. Which image depicting the same object shown",
          options: [
            { text: "A", isCorrect: false },
            { text: "B", isCorrect: true },
            { text: "C", isCorrect: false },
            { text: "D", isCorrect: false },
          ],
          imageUrl: spatial3,
        },
        {
          questionText: "4. If you unfold a cube, which 2D shape will you get?",
          options: [
            { text: "A) Triangle", isCorrect: false },
            { text: "B) Square", isCorrect: true },
            { text: "C) Circle", isCorrect: false },
            { text: "D) Rectangle", isCorrect: false },
          ],
        },
        {
          questionText: "5. Which 2D shape has no sides and no angles?",
          options: [
            { text: "A) Circle", isCorrect: true },
            { text: "B) Triangle", isCorrect: false },
            { text: "C) Rectangle", isCorrect: false },
            { text: "D) Pentagon", isCorrect: false },
          ],
        },
        {
          questionText:
            "6. If you rotate a shape 90° clockwise, which direction will it be facing?",
          options: [
            { text: "A) North", isCorrect: false },
            { text: "B) South", isCorrect: false },
            { text: "C) East", isCorrect: true },
            { text: "D) West", isCorrect: false },
          ],
        },
        {
          questionText:
            "7. Which 2D shape has four sides and four angles, where opposite sides are parallel and equal in length?",
          options: [
            { text: "A) Triangle", isCorrect: false },
            { text: "B) Circle", isCorrect: false },
            { text: "C) Square", isCorrect: true },
            { text: "D) Pentagon", isCorrect: false },
          ],
        },
        {
          questionText:
            "8. What do you call a line that divides a shape into two halves that are mirror images of each other??",
          options: [
            { text: "A) Perpendicular Line", isCorrect: false },
            { text: "B) Parallel Line", isCorrect: false },
            { text: "C) Bisecting Line", isCorrect: true },
            { text: "D) Diagonal Line", isCorrect: false },
          ],
        },
        {
          questionText:
            "9. If you look at a cube from the top, what shape will you see?",
          options: [
            { text: "A) Triangle", isCorrect: false },
            { text: "B) Square", isCorrect: true },
            { text: "C) Circle", isCorrect: false },
            { text: "D) Hexagon", isCorrect: false },
          ],
        },
        {
          questionText:
            "10. What is the term for the point where two rays meet to form an angle?",
          options: [
            { text: "A) Vertex", isCorrect: true },
            { text: "B) Perpendicular", isCorrect: false },
            { text: "C) Parallel", isCorrect: false },
            { text: "D) Midpoint", isCorrect: false },
          ],
        },
        {
          questionText:
            "11. In which of the four options is this cube shown from a different perspective?",
          options: [
            { text: "A", isCorrect: true },
            { text: "B", isCorrect: false },
            { text: "C", isCorrect: false },
            { text: "D", isCorrect: false },
          ],
          imageUrl: spatial11,
        },
        {
          questionText:
            "12. If you rotate a shape by 180°, what will its orientation be?",
          options: [
            { text: "A) Same as the initial orientation", isCorrect: false },
            {
              text: "B) 90∘ clockwise from the initial orientation",
              isCorrect: false,
            },
            {
              text: "C) 90∘ counterclockwise from the initial orientation",
              isCorrect: false,
            },
            {
              text: "D) Upside down from the initial orientation",
              isCorrect: true,
            },
          ],
        },
        {
          questionText:
            "13. What is the term for a line that crosses two parallel lines, creating equal angles on either side?",
          options: [
            { text: "A) Perpendicular Line", isCorrect: false },
            { text: "B) Bisecting Line", isCorrect: false },
            { text: "C) Diagonal Line", isCorrect: false },
            { text: "D) Transversal Line", isCorrect: true },
          ],
        },
        {
          questionText: "14. Which 2D shape has five sides and five angles?",
          options: [
            { text: "A) Square", isCorrect: false },
            { text: "B) Circle", isCorrect: false },
            { text: "C) Triangle", isCorrect: false },
            { text: "D) Pentagon", isCorrect: true },
          ],
        },
        {
          questionText:
            "15. If you reflect a shape over a vertical line, what type of symmetry does it have?",
          options: [
            { text: "A) Rotational Symmetry", isCorrect: false },
            { text: "B) Vertical Symmetry", isCorrect: false },
            { text: "C) Diagonal Symmetry", isCorrect: false },
            { text: "D) Reflectional Symmetry", isCorrect: true },
          ],
        },
        {
          questionText:
            "16. Which 3D shape has a circular base and a curved surface that is not tapered to a point?",
          options: [
            { text: "A) Sphere", isCorrect: false },
            { text: "B) Cone", isCorrect: false },
            { text: "C) Cylinder", isCorrect: true },
            { text: "D) Cube", isCorrect: false },
          ],
        },
        {
          questionText:
            "17. What is the term for the distance around the outside of a shape or object?",
          options: [
            { text: "A) Area", isCorrect: false },
            { text: "B) Perimeter", isCorrect: true },
            { text: "C) Volume", isCorrect: false },
            { text: "D) Diameter", isCorrect: false },
          ],
        },
        {
          questionText:
            "18. Which term describes a 3D shape with all points equidistant from the centre?",
          options: [
            { text: "A) Sphere", isCorrect: true },
            { text: "B) Cone", isCorrect: false },
            { text: "C) Prism", isCorrect: false },
            { text: "D) Pyramid", isCorrect: false },
          ],
        },
        {
          questionText:
            "19. What is the term for a line that intersects two sides of a shape at right angles?",
          options: [
            { text: "A) Perpendicular Line", isCorrect: true },
            { text: "B) Parallel Line", isCorrect: false },
            { text: "C) Diagonal Line", isCorrect: false },
            { text: "D) Transversal Line", isCorrect: false },
          ],
        },
        {
          questionText:
            "20. What is the term for a straight path that goes on infinitely in both directions?",
          options: [
            { text: "A) Ray", isCorrect: false },
            { text: "B) Line Segment", isCorrect: false },
            { text: "C) Line", isCorrect: true },
            { text: "D) Angle", isCorrect: false },
          ],
        },
      ],
    },

    6: {
      title: "Logical",
      questions: [
        {
          questionText:
            "1. If all roses are flowers and some flowers are red, which of the following statements must be true?",
          options: [
            { text: "A) All roses are red.", isCorrect: false },
            { text: "B) All red things are roses.", isCorrect: false },
            { text: "C) Some red things are flowers.", isCorrect: true },
            { text: "D) All flowers are red.", isCorrect: false },
          ],
        },
        {
          questionText:
            "2. The day before yesterday was Saturday. What day will it be the day after tomorrow?",
          options: [
            { text: "A) Tuesday", isCorrect: false },
            { text: "B) Wednesday", isCorrect: true },
            { text: "C) Thursday", isCorrect: false },
            { text: "D) Friday", isCorrect: false },
          ],
        },
        {
          questionText:
            "3. In the school midterm exams, David has lower marks than Dechen, but has more than Sonam. However, Karma also has more marks than David. Who has the lowest mark?",
          options: [
            { text: "A) David", isCorrect: false },
            { text: "B) Dechen", isCorrect: false },
            { text: "C) Sonam", isCorrect: false },
            { text: "D) Karma", isCorrect: true },
          ],
        },
        {
          questionText: "4. Shoe always has _____________.",
          options: [
            { text: "A) Laces", isCorrect: false },
            { text: "B) Leather", isCorrect: false },
            { text: "C) Strap", isCorrect: false },
            { text: "D) Soles", isCorrect: true },
          ],
        },
        {
          questionText:
            "5. If all cats have whiskers, and Felix is a cat, what can you conclude?",
          options: [
            { text: "A) Felix has whiskers", isCorrect: true },
            { text: "B) All whiskers are Felix.", isCorrect: false },
            { text: "C) Felix is not a cat.", isCorrect: false },
            { text: "D) Whiskers have cats.", isCorrect: false },
          ],
        },
        {
          questionText: "6. If 1 = 5, 2 = 25, 3 = 125, what is the value of 4?",
          options: [
            { text: "A) 625", isCorrect: true },
            { text: "B) 3125", isCorrect: false },
            { text: "C) 24", isCorrect: false },
            { text: "D) 1000", isCorrect: false },
          ],
        },
        {
          questionText: `7. If "run" is related to "walk," what is the relationship between "swim" and "float"?`,
          options: [
            { text: "A) Water", isCorrect: true },
            { text: "B) Movement", isCorrect: false },
            { text: "C) Liquid", isCorrect: false },
            { text: "D) Opposites", isCorrect: false },
          ],
        },
        {
          questionText:
            "8. Which of the following numbers comes next in the sequence: 2, 4, 8, 16, ...?",
          options: [
            { text: "A) 20", isCorrect: false },
            { text: "B) 24", isCorrect: false },
            { text: "C) 32", isCorrect: true },
            { text: "D) 64", isCorrect: false },
          ],
        },
        {
          questionText:
            "9. A is the mother of B. B is the sister of C.  C is the father of D. So, how A is related to D?",
          options: [
            { text: "A) Grandmother", isCorrect: true },
            { text: "B)	Mother", isCorrect: false },
            { text: "C)	Aunt", isCorrect: false },
            { text: "D)	Daughter", isCorrect: false },
          ],
        },
        {
          questionText: `10. If "flower" is related to "garden," what is the relationship between "book" and "library"?`,
          options: [
            { text: "A) Knowledge", isCorrect: false },
            { text: "B) Reading", isCorrect: false },
            { text: "C) Study", isCorrect: false },
            { text: "D) Location", isCorrect: true },
          ],
        },
        {
          questionText: `11. If "cat" is related to "meow," what is the relationship between "dog" and "bark"?`,
          options: [
            { text: "A) Animal", isCorrect: false },
            { text: "B) Sound", isCorrect: true },
            { text: "C) Pet", isCorrect: false },
            { text: "D) Movement", isCorrect: false },
          ],
        },
        {
          questionText:
            "12. What will be the missing number in the series 196, 169, 144, __, 100, 81?",
          options: [
            { text: "A) 120", isCorrect: false },
            { text: "B) 118", isCorrect: false },
            { text: "C) 121", isCorrect: true },
            { text: "D) 119", isCorrect: false },
          ],
        },
        {
          questionText:
            "13. Which letter comes next in the series: Z, Y, X, W, ...?",
          options: [
            { text: "A) U", isCorrect: false },
            { text: "B) T", isCorrect: false },
            { text: "C) V", isCorrect: true },
            { text: "D) S", isCorrect: false },
          ],
        },
        {
          questionText:
            "14. Raman says “Anuj’s mother is the only daughter of my mother.” How is Anuj related to Raman?",
          options: [
            { text: "A) Brother", isCorrect: false },
            { text: "B)	Father", isCorrect: false },
            { text: "C)	Nephew", isCorrect: true },
            { text: "D)	None of the above", isCorrect: false },
          ],
        },
        {
          questionText:
            "15. Which number should replace the question mark in the following series: 1, 4, 9, 16, ...?",
          options: [
            { text: "A) 25", isCorrect: true },
            { text: "B) 28", isCorrect: false },
            { text: "C) 32", isCorrect: false },
            { text: "D) 36", isCorrect: false },
          ],
        },
        {
          questionText:
            "16. Arrange the following words in a meaningful sequence -\n 1.	Frog.  2. Grass. 3. Grasshopper. 4. Eagle.  5. Snake",
          options: [
            { text: "A)	2, 3, 1, 5, 4", isCorrect: true },
            { text: "B)	3, 2, 1, 4, 5", isCorrect: false },
            { text: "C)	2, 1, 3, 4, 5", isCorrect: false },
            { text: "D)	4, 5, 1, 3, 2", isCorrect: false },
          ],
        },
        {
          questionText:
            "17. If all students like mathematics, and Jane is a student, what can you conclude?",
          options: [
            { text: "A) Jane likes mathematics.", isCorrect: true },
            { text: "B) Jane does not like mathematics.", isCorrect: false },
            { text: "C) All students are Jane.", isCorrect: false },
            { text: "D) Mathematics is liked by all.", isCorrect: false },
          ],
        },
        {
          questionText: `18. If "bake" is related to "bread," what is the relationship between "sew" and "fabric"?`,
          options: [
            { text: "A) Textile", isCorrect: false },
            { text: "B) Craft", isCorrect: false },
            { text: "C) Clothing", isCorrect: true },
            { text: "D) Thread", isCorrect: false },
          ],
        },
        {
          questionText:
            "19. Which of the following numbers comes next in the sequence: 3, 6, 9, 12, ...?",
          options: [
            { text: "A) 15", isCorrect: true },
            { text: "B) 18", isCorrect: false },
            { text: "C) 21", isCorrect: false },
            { text: "D) 24", isCorrect: false },
          ],
        },
        {
          questionText:
            "20. Marathon is to race as hibernation is to _______________",
          options: [
            { text: "A) Winter", isCorrect: false },
            { text: "B) Sleep", isCorrect: true },
            { text: "C) Bear", isCorrect: false },
            { text: "D) Summer", isCorrect: false },
          ],
        },
      ],
    },
  };

  const subtestIdInt = parseInt(subtestId);
  const subtest = tests[subtestIdInt];

  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showScore, setShowScore] = useState(false);
  const [scoresArray, setScoresArray] = useState(Array(subtest.questions.length).fill(0));

  const handleOptionChange = (optionIndex) => {
    const newScoresArray = [...scoresArray];
  newScoresArray[questionIndex] = subtest.questions[questionIndex].options[optionIndex].isCorrect ? 1 : 0;
  setScoresArray(newScoresArray);
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    if (questionIndex < subtest.questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setSelectedOption(null); // Reset selected option for the next question
    } else {
      // Display total score
      setShowScore(true);
    }
  };

  let totalScore = 0;

  for (let i = 0; i < scoresArray.length; i++) {
    totalScore += scoresArray[i];
  }


  const subCategory = tests[subtestId] ? tests[subtestId].title : "Unknown";
  const testType = "Aptitude";
  const score = totalScore;

  useEffect(() => {
    const fetchTestScores = async () => {
      try {
        const authtoken = localStorage.getItem("authtoken");
        const response = await fetch(`${API_BASE_URL}/user/checkscore`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authtoken: authtoken,
          },
          body: JSON.stringify({
            testType,
            subCategory,
          }),
        });
        if (response.ok) {
          const score = await response.json();

          setShowScore(score);

          if (score) {
            setIsTestCompleted(true);
          }
        } else {
          console.error("Failed to fetch test scores");
        }
      } catch (error) {
        console.error("Error fetching test scores:", error);
      }
    };

    if (subCategory && testType) {
      fetchTestScores();
    }
  }, [subCategory, testType]);

  const sendTestDataToServer = async () => {
    try {
      const authtoken = localStorage.getItem("authtoken");
      const response = await fetch(`${API_BASE_URL}/user/testResultToAPI`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authtoken: authtoken,
        },
        body: JSON.stringify({
          testType,
          subCategory,
          score,
        }),
      });

      if (response.ok) {
        console.log("Test data sent to the server successfully");
      } else {
        console.error("Failed to send test data to the server");
      }
    } catch (error) {
      console.error("Error sending test data:", error);
    }
  };

  return (
    <div className="bg-white min-h-screen ">
      

      {!isTestCompleted && (
        <>
          <div className="p-10">
            <h2 className="text-left font-semibold text-xl mb-5">
            Carefully read each question and choose the correct answer.
            </h2>
          </div>
        </>
      )}

      {/* <h1 className="text-2xl font-bold mb-4 text-white">{subtest.title}</h1> */}
      <div className="w-full h-full flex items-center justify-center">
        {isTestCompleted && (
          <div
            className="bg-white shadow-md p-4 rounded-lg mt-20 flex items-center justify-center"
            style={{ width: 400, height: 300 }}
          >
            <p className="text-2xl font-semibold text-green-600 mb-5 text-center">
              Test completed!
            </p>
          </div>
        )}
      </div>
      {!isTestCompleted && (
        <div className="p-10">
          {showScore ? (
            <div>
              <p>Total Score: {totalScore}</p>
            </div>
          ) : (
            <div className="mb-4">
              <p className="text-lg mb-2 text-left ">
                {subtest.questions[questionIndex].questionText}
              </p>
              <div className="flex flex-col justify-between md:flex-row">
                <div className="mt-2 text-left">
                  {subtest.questions[questionIndex].options.map(
                    (option, optionIndex) => (
                      <div key={optionIndex} className="mb-2">
                        <label className="inline-flex justify-items-start">
                          <input
                            type="radio"
                            className="form-radio h-5 w-5"
                            name={`question-${questionIndex}`}
                            value={optionIndex}
                            checked={selectedOption === optionIndex}
                            onChange={() => handleOptionChange(optionIndex)}
                          />
                          <span
                            className="ml-1 bg-gray-300 p-3 block"
                            style={{ width: "300px" }}
                          >
                            {option.text}
                          </span>
                        </label>
                      </div>
                    )
                  )}
                </div>
                <div className="flex text-right mr-20">
                  {subtest.questions[questionIndex].imageUrl && (
                    <img
                      src={subtest.questions[questionIndex].imageUrl}
                      alt="Question Image"
                      width="500"
                      height="500"
                    />
                  )}
                </div>
              </div>
              {showScore && (
                <p className="text-white">
                  {selectedOption ===
                  subtest.questions[questionIndex].options.findIndex(
                    (option) => option.isCorrect
                  )
                    ? "Correct! You earned 1 point."
                    : "Incorrect. You earned 0 points."}
                </p>
              )}
              <div className="mt-4">
                {selectedOption !== null ? (
                  questionIndex === subtest.questions.length - 1 ? (
                    <Link to={`/test/${id}`}>
                      <button
                        onClick={sendTestDataToServer}
                        className="bg-gradient-to-r from-orange-500 to-yellow-500 p-2 rounded-full font-semibold text-xl"
                      >
                        Submit Test Data
                      </button>
                    </Link>
                  ) : (
                    <button
                      className="bg-gradient-to-r from-orange-500 to-yellow-500 p-2 rounded-full font-semibold text-xl"
                      onClick={handleNextQuestion}
                    >
                      Next Question {">"}
                    </button>
                  )
                ) : (
                  <button
                    disabled
                    className="bg-gray-300 p-2 rounded-full font-semibold text-xl"
                  >
                    Next Question {">"}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TestQuestionsPattern12;
