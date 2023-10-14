import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Ellipse1 from "../../images/Ellipse1.png"; 
import Ellipse2 from '../../images/Ellipse2.png';
import Ellipse3 from "../../images/Ellipse3.png";
import mechimg1 from "../../images/mechimg1.png";
import mechimg2 from "../../images/mechimg2.png";
import mechimg3 from "../../images/mechimg3.png";
import abst1 from "../../images/abst/abst1.png";
import abst2 from "../../images/abst/abst2.png";
import abst3 from "../../images/abst/abst3.png";
import abst4 from "../../images/abst/abst4.png";
import abst5 from "../../images/abst/abst5.png";
import abst6 from "../../images/abst/abst6.png";
import abst7 from "../../images/abst/abst7.png";
import abst8 from "../../images/abst/abst8.png";
import abst9 from "../../images/abst/abst9.png";
import abst10 from "../../images/abst/abst10.png";
import abst11 from "../../images/abst/abst11.png";
import abst12 from "../../images/abst/abst12.png";
import abst13 from "../../images/abst/abst13.png";
import abst14 from "../../images/abst/abst14.png";
import abst15 from "../../images/abst/abst15.png";
import abst16 from "../../images/abst/abst16.png";
import abst17 from "../../images/abst/abst17.png";
import abst18 from "../../images/abst/abst18.png";
import abst19 from "../../images/abst/abst19.png";
import abst20 from "../../images/abst/abst20.png";

function TestQuestionsPattern12() {
  const { subtestId } = useParams();

  const tests = {
    1: {
      title: "Linguistic Reasoning",
      questions: [
        {
          questionText: "In the following analogy, which word completes the pair?\nFire: Hot: Ice: ______?",
          options: [
            { text: "A) Cold", isCorrect: true },
            { text: "B) Melt", isCorrect: false },
            { text: "C) Solid", isCorrect: false },
            { text: "D) Freeze", isCorrect: false },
          ],
        },
        {
            questionText: "The telephone rang. The _________ of the telephone startled all of us",
            options: [
              { text: "A) ring", isCorrect: true },
              { text: "B) rang", isCorrect: false },
              { text: "C) ringing", isCorrect: false },
              { text: "D) rung", isCorrect: false },
            ],
          },

          {
            questionText: "Choose the synonym for the word Eager:",
            options: [
              { text: "A) Angry", isCorrect: false },
              { text: "B) Patient", isCorrect: false },
              { text: "C) Enthusiastic", isCorrect: true },
              { text: "D) Calm", isCorrect: false }
            ]
          },
          {
            questionText: "Choose the correct antonym for the word Brave:",
            options: [
              { text: "A) Cowardly", isCorrect: true },
              { text: "B) Strong", isCorrect: false },
              { text: "C) Courageous", isCorrect: false },
              { text: "D) Bold", isCorrect: false }
            ]
          },
          {
            questionText: "Choose the synonym for the word Incredible:",
            options: [
              { text: "A) Ordinary", isCorrect: false },
              { text: "B) Amazing", isCorrect: true },
              { text: "C) Unimportant", isCorrect: false },
              { text: "D) Ugly", isCorrect: false }
            ]
          },
          {
            questionText: "Complete the sentence with the correct word:\nThe young child was _____ to eat ice cream.",
            options: [
              { text: "A) Agitated", isCorrect: false },
              { text: "B) Anxious", isCorrect: false },
              { text: "C) Afraid", isCorrect: false },
              { text: "D) Eager", isCorrect: true }
            ]
          },
          {
            questionText: "He tried hard. He did not succeed.",
            options: [
              { text: "A) Trying hard, he did not succeed.", isCorrect: false },
              { text: "B) He tried hard and did not succeed.", isCorrect: false },
              { text: "C) In spite of trying hard, he did not succeed.", isCorrect: true },
              { text: "D) He tried hard in spite of he did not succeed.", isCorrect: false }
            ]
          },
          {
            questionText: "My house has a small kitchen garden _____ the back.",
            options: [
              { text: "A) On", isCorrect: false },
              { text: "B) In", isCorrect: false },
              { text: "C) By", isCorrect: false },
              { text: "D) At", isCorrect: true }
            ]
          },
          {
            questionText: "Find the missing letter in the sequence: C, F, I, L, _?",
            options: [
              { text: "A) O", isCorrect: true },
              { text: "B) P", isCorrect: false },
              { text: "C) M", isCorrect: false },
              { text: "D) N", isCorrect: false }
            ]
          },
          {
            questionText: "You should not eat the uncovered food items.\n(Choose the most suitable passive voice)",
            options: [
              { text: "A) Food items being uncovered should not be eaten by you.", isCorrect: false },
              { text: "B) The uncovered food items not be eaten.", isCorrect: false },
              { text: "C) The uncovered food items should not be eaten.", isCorrect: true },
              { text: "D) None of these", isCorrect: false }
            ]
          },
          {
            questionText: "Find the missing word.\nParticular: Fussy ________ : Subservient",
            options: [
              { text: "A) Meek", isCorrect: true },
              { text: "B) Above", isCorrect: false },
              { text: "C) Cranky", isCorrect: false },
              { text: "D) Upright", isCorrect: false }
            ]
          },
          {
            questionText: "He was excited _______ the upcoming trip.",
            options: [
              { text: "A) About", isCorrect: true },
              { text: "B) With", isCorrect: false },
              { text: "C) To", isCorrect: false },
              { text: "D) For", isCorrect: false }
            ]
          },
          {
            questionText: "Pick the odd one out among the following:",
            options: [
              { text: "A) Tree", isCorrect: false },
              { text: "B) Leaf", isCorrect: true },
              { text: "C) Bush", isCorrect: false },
              { text: "D) Herb", isCorrect: false }
            ]
          },
          {
            questionText: "I said to her, 'I am writing an essay now.'",
            options: [
              { text: "A) I told her that I was writing an essay then.", isCorrect: true },
              { text: "B) I told her that I am writing an essay then.", isCorrect: false },
              { text: "C) I told her that I was writing an essay now.", isCorrect: false },
              { text: "D) I told to her that I was writing an essay then.", isCorrect: false }
            ]
          },
          {
            questionText: "Rearrange the letters: ‘T A L E",
            options: [
              { text: "A) TALER", isCorrect: false },
              { text: "B) RATLE", isCorrect: false },
              { text: "C) ALERT", isCorrect: true },
              { text: "D) LATER", isCorrect: false }
            ]
          },
          {
            questionText: "Hello, I'd like to change some dollars into Indian rupees.",
            options: [
              { text: "A) Getting money out.", isCorrect: false },
              { text: "B) Asking a friend for money.", isCorrect: false },
              { text: "C) Getting change.", isCorrect: false },
              { text: "D) Changing currency.", isCorrect: true }
            ]
          },
          {
            questionText: "__________yoga is a means of remaining calm even in disturbing situations.",
            options: [
              { text: "A) Practise", isCorrect: false },
              { text: "B) To practice", isCorrect: false },
              { text: "C) Practising", isCorrect: true },
              { text: "D) Having practiced", isCorrect: false }
            ]
          },
          {
            questionText: "Which word does NOT belong in the group?",
            options: [
              { text: "A) Table", isCorrect: false },
              { text: "B) Chair", isCorrect: false },
              { text: "C) Refrigerator", isCorrect: true },
              { text: "D) Sofa", isCorrect: false }
            ]
          },
          {
            questionText: "Do you drive on_________ right or on _________left in the USA?",
            options: [
              { text: "A) the, a", isCorrect: false },
              { text: "B) a, a", isCorrect: false },
              { text: "C) no article required, no article required", isCorrect: true },
              { text: "D) the, the", isCorrect: false }
            ]
          },
          {
            questionText: "confuse | it | with | often effect green | house | people",
            options: [
              { text: "A) Greenhouse effect often people confuse with it.", isCorrect: false },
              { text: "B) People often confuse it with greenhouse effect.", isCorrect: true },
              { text: "C) Confuse it with greenhouse effect often people.", isCorrect: false },
              { text: "D) Green house is often effect confuse with people.", isCorrect: false }
            ]
          }

          
      ],
    },

    2: {
  "title": "Numerical Reasoning",
  "questions": [
    {
      questionText: "Which one of the following statement is false?",
      options: [
        { "text": "A) One of every three consecutive positive integer is divisible by 3", "isCorrect": false },
        { "text": "B) One of the every three consecutive positive integer is divisible by 5", "isCorrect": true },
        { "text": "C) The product of two consecutive integers is divisible by 2", "isCorrect": false },
        { "text": "D) The product of two consecutive integer may or may not be divisible by 2", "isCorrect": false }
      ]
    },
    {
      questionText: "If x= 5+√24 find the value of (x²+ 1/x²)",
      options: [
        { "text": "A) 100", "isCorrect": false },
        { "text": "B) 24", "isCorrect": false },
        { "text": "C) 98", "isCorrect": true },
        { "text": "D) 25", "isCorrect": false }
      ]
    },
    { 
      questionText: "Find the greatest number which divides 1531 and 1222 leaving remainder 5 and 7 respectively.",
      options: [
        { "text": "A) 45", "isCorrect": true },
        { "text": "B) 35", "isCorrect": false },
        { "text": "C) 55", "isCorrect": false },
        { "text": "D) 90", "isCorrect": false }
      ]
    },
    {
      questionText: "The product of two consecutive positive integers is divisible by 2'.",
      options: [
        { "text": "A) True", "isCorrect": true },
        { "text": "B) False", "isCorrect": false },
        { "text": "C) Can't say", "isCorrect": false },
        { "text": "D) Partially True/False", "isCorrect": false }
      ]
    },
    {
      questionText: "HCF of 96 and 404 is equal to ..........",
      options: [
        { "text": "A) 2", "isCorrect": false },
        { "text": "B) 3", "isCorrect": false },
        { "text": "C) 4", "isCorrect": true },
        { "text": "D) 5", "isCorrect": false }
      ]
    },
    {
      questionText: "The cubic equation whose three roots are -3, 5, 8 is given by:",
      options: [
        { "text": "A)", "isCorrect": false },
        { "text": "B)", "isCorrect": false },
        { "text": "C)", "isCorrect": true },
        { "text": "D)", "isCorrect": false }
      ]
    },
    {
      questionText: "In figure, the graph of a polynomial p(x) is shown. Find the number of zeroes of p(x).",
      options: [
        { "text": "A) 4", "isCorrect": false },
        { "text": "B) 1", "isCorrect": true },
        { "text": "C) 2", "isCorrect": false },
        { "text": "D) 3", "isCorrect": false }
      ]
    },
    {
      questionText: "Joseph has a garment factory where the shirts and trousers are made. He got an order from a school to prepare the uniform for the children of the school. He found that 2 men and 5 boys can finish the lot in 4 days, while 3 men and 6 boys can finish the same lot in 3 days. In how many days can one man alone finish the lot?",
      options: [
        { "text": "A) 18 days", "isCorrect": true },
        { "text": "B) 36 days", "isCorrect": false },
        { "text": "C) 20 days", "isCorrect": false },
        { "text": "D) 60 days", "isCorrect": false }
      ]
    },
    {
      questionText: "A manufacturer of laptop produced 6000 units in 3rd year and 7000 units in the 7th year. Assuming that production increases uniformly by a fixed number every year, find the production in the 5th year.",
      options: [
        { "text": "A) 6500 units", "isCorrect": true },
        { "text": "B) 5000 units", "isCorrect": false },
        { "text": "C) 6000 units", "isCorrect": false },
        { "text": "D) 8000 units", "isCorrect": false }
      ]
    },
    {
      questionText: "The perimeters of two similar triangles are 42 cm and 63 cm respectively. If one side of the first triangle is 12 cm, then find the corresponding side of the other triangle.",
      options: [
        { "text": "A) 12cm", "isCorrect": false },
        { "text": "B) 16cm", "isCorrect": false },
        { "text": "C) 18cm", "isCorrect": true },
        { "text": "D) 9cm", "isCorrect": false }
      ]
    },
    {
      questionText: "Two ships are sailing in the sea on the two sides of a lighthouse. The angle of elevation of the top of the lighthouse is observed from the ships are 300 and 450 respectively. If the lighthouse is 100 m high, the distance between the two ships is:",
      options: [
        { "text": "A. 173 m", "isCorrect": false },
        { "text": "B. 200 m", "isCorrect": false },
        { "text": "C. 273 m", "isCorrect": true },
        { "text": "D. 300 m", "isCorrect": false }
      ]
    },
    {
      questionText: "The value of sin 18° is given by:",
      options: [
        { "text": "A)", "isCorrect": true },
        { "text": "B)", "isCorrect": false },
        { "text": "C)", "isCorrect": false },
        { "text": "D)", "isCorrect": false }
      ]
    },
    {
      questionText: "A 24 m tall tree was cut to a height from the ground. The top of the tree touching the ground makes an angle 30° with the ground. At what height from the ground was the tree cut?",
      options: [
        { "text": "A) 4 m", "isCorrect": false },
        { "text": "B) 8 m", "isCorrect": true },
        { "text": "C) 10 m", "isCorrect": false },
        { "text": "D) 6 m", "isCorrect": false }
      ]
    },
    {
      questionText: "Rohit has a certain average for 9 innings. In the tenth innings, he scores 100 runs thereby increasing his average by 8 runs. His new average is:",
      options: [
        { "text": "A. 20", "isCorrect": false },
        { "text": "B. 21", "isCorrect": false },
        { "text": "C. 28", "isCorrect": true },
        { "text": "D. 32", "isCorrect": false }
      ]
    },
    {
      questionText: "The difference between the circumference and radius of a circle is 37 m. Find the circumference of the circle.",
      options: [
        { "text": "A) 7m", "isCorrect": false },
        { "text": "B) 44m", "isCorrect": true },
        { "text": "C) 154 m", "isCorrect": false },
        { "text": "D) 186m", "isCorrect": false }
      ]
    },
    {
      questionText: "A cuboidal metal of dimensions 44 cm × 30 cm × 15 cm was melted and cast into a cylinder of height 28 cm. Find its radius.",
      options: [
        { "text": "A) 20cm", "isCorrect": false },
        { "text": "B) 15cm", "isCorrect": true },
        { "text": "C) 10cm", "isCorrect": false },
        { "text": "D) 18cm", "isCorrect": false }
      ]
    },
    {
      questionText: "In a shower, 10 cm of rain falls. What will be the volume of water that falls on 1 hectare area of ground?",
      options: [
        { "text": "A) 500 m3", "isCorrect": false },
        { "text": "B) 650 m3", "isCorrect": false },
        { "text": "C) 1000 m3", "isCorrect": true },
        { "text": "D) 750 m3", "isCorrect": false }
      ]
    },
    {
      questionText: "There are two examinations rooms A and B. If 10 students are sent from A to B, then the number of students in each room is the same. If 20 candidates are sent from B to A, then the number of students in A is double the number of students in B. The number of students in room A is:",
      options: [
        { "text": "A. 20", "isCorrect": false },
        { "text": "B. 80", "isCorrect": false },
        { "text": "C. 100", "isCorrect": true },
        { "text": "D. 200", "isCorrect": false }
      ]
    },
    {
      questionText: "Following are the runs scored by seven batsmen in a calendar year in the test match played against different countries. The runs are 320, 310, 300, 240, 210, 150, 340. Find the mean deviation about the median for the above data.",
      options: [
        { "text": "A) 52.86", "isCorrect": true },
        { "text": "B) 46.9", "isCorrect": false },
        { "text": "C) 48.65", "isCorrect": false },
        { "text": "D) 50.25", "isCorrect": false }
      ]
    },
    {
      questionText: "A reduction of 20% in the price of sugar enables a housewife to purchase 6 kg more for Rs. 240. What is the original price per kg of sugar.",
      options: [
        { "text": "A. Rs. 10 per Kg", "isCorrect": true },
        { "text": "B. Rs. 8 per Kg", "isCorrect": false },
        { "text": "C. Rs. 6 per Kg", "isCorrect": false },
        { "text": "D. Rs. 5 per Kg", "isCorrect": false }
      ]
    }
  ]
},

 3: {
  title: "Mechanical Reasoning",
  questions: [
    {
      questionText: "1. Which simple machine is used to lift heavy objects using a rope over a pulley?",
      options: [
        { text: "A) Lever", isCorrect: false },
        { text: "B) Wheel and Axle", isCorrect: false },
        { text: "C) Pulley", isCorrect: true },
        { text: "D) Inclined Plane", isCorrect: false }
      ]
    },
    {
      questionText: "2. In which direction does the orange gear rotate?",
      options: [
        { text: "A) Clockwise", isCorrect: false },
        { text: "B) Anticlockwise", isCorrect: true },
        { text: "C) No rotation", isCorrect: false }
      ],
      imageUrl: mechimg1,
    },
    {
      questionText: "3. What type of energy does a wound-up spring in a mechanical toy have?",
      options: [
        { text: "A) Potential Energy", isCorrect: true },
        { text: "B) Kinetic Energy", isCorrect: false },
        { text: "C) Thermal Energy", isCorrect: false },
        { text: "D) Chemical Energy", isCorrect: false }
      ]
    },
    {
      questionText: "4. Which type of lever has the fulcrum located between the effort and the load?",
      options: [
        { text: "A) First-Class Lever", isCorrect: true },
        { text: "B) Second-Class Lever", isCorrect: false },
        { text: "C) Third-Class Lever", isCorrect: false },
        { text: "D) None of the above", isCorrect: false }
      ]
    },
    {
      questionText: "5. What mechanical advantage does an inclined plane provide?",
      options: [
        { text: "A) Less effort over a longer distance", isCorrect: false },
        { text: "B) Less effort over a shorter distance", isCorrect: true },
        { text: "C) More effort over a longer distance", isCorrect: false },
        { text: "D) More effort over a shorter distance", isCorrect: false }
      ]
    },
    {
      questionText: "6. What mechanical device is used to transmit rotary motion between two shafts?",
      options: [
        { text: "A) Pulley", isCorrect: false },
        { text: "B) Screw", isCorrect: false },
        { text: "C) Gear", isCorrect: true },
        { text: "D) Lever", isCorrect: false }
      ]
    },
    {
      questionText: "7. Which simple machine is commonly used in door hinges?",
      options: [
        { text: "A) Pulley", isCorrect: false },
        { text: "B) Screw", isCorrect: false },
        { text: "C) Lever", isCorrect: true },
        { text: "D) Wheel and Axle", isCorrect: false }
      ]
    },
    {
      questionText: "8. What weight does the blue box have to be in order for the seesaw to be in equilibrium (balanced)?",
      options: [
        { text: "A. 10 kg", isCorrect: false },
        { text: "B. 15 kg", isCorrect: false },
        { text: "C. 20 kg", isCorrect: false },
        { text: "D. 25 kg", isCorrect: true }
      ],
      imageUrl : mechimg2,
    },
    {
      questionText: "9. What is the purpose of a bearing in machinery?",
      options: [
        { text: "A) To increase friction", isCorrect: false },
        { text: "B", isCorrect: false },
        { text: "C) To transmit motion", isCorrect: false },
        { text: "D) To reduce friction between moving parts", isCorrect: true }
      ]
    },
    {
      questionText: "10. In a second-class lever, where is the load located in relation to the fulcrum and the effort?",
      options: [
        { text: "A) Between the fulcrum and the effort", isCorrect: true },
        { text: "B) At the same point as the fulcrum", isCorrect: false },
        { text: "C) At the same point as the effort", isCorrect: false },
        { text: "D) Opposite to the effort and away from the fulcrum", isCorrect: false }
      ]
    },
    {
      questionText: "11. Which type of energy is associated with the motion of an object?",
      options: [
        { text: "A) Thermal Energy", isCorrect: false },
        { text: "B) Potential Energy", isCorrect: false },
        { text: "C) Mechanical Energy", isCorrect: true },
        { text: "D) Chemical Energy", isCorrect: false }
      ]
    },
    {
      questionText: "12. What type of lever has the effort located between the fulcrum and the load?",
      options: [
        { text: "A) First-Class Lever", isCorrect: false },
        { text: "B) Second-Class Lever", isCorrect: false },
        { text: "C) Third-Class Lever", isCorrect: true },
        { text: "D) Fourth-Class Lever", isCorrect: false }
      ]
    },
    {
      questionText: "13. How many pulleys are turning clockwise?",
      options: [
        { text: "A. 0", isCorrect: false },
        { text: "B. 4", isCorrect: false },
        { text: "C. 6", isCorrect: false },
        { text: "D. 8", isCorrect: true }
      ],
      imageUrl:  "../../images/mechimg3.png",
    },
    {
      questionText: "14. What is the purpose of a flywheel in a machine?",
      options: [
        { text: "A) To transmit motion", isCorrect: false },
        { text: "B) To change the direction of motion", isCorrect: false },
        { text: "C) To store energy and provide smooth and continuous motion", isCorrect: true },
        { text: "D) To lift heavy loads", isCorrect: false }
      ]
    },
    {
      questionText: "15. What is the advantage of using a screw mechanism?",
      options: [
        { text: "A) It provides linear motion", isCorrect: false },
        { text: "B) It transmits rotary motion", isCorrect: false },
        { text: "C) It provides a mechanical advantage", isCorrect: true },
        { text: "D) It reduces friction", isCorrect: false }
      ]
    },
    {
      questionText: "16. What is the primary function of a gear train?",
      options: [
        { text: "A) To provide mechanical advantage", isCorrect: false },
        { text: "B) To change the direction of motion", isCorrect: false },
        { text: "C) To transmit motion between parallel shafts", isCorrect: true },
        { text: "D) To generate electricity", isCorrect: false }
      ]
    },
    {
      questionText: "17. In a wheel and axle, where is the effort applied in relation to the fulcrum?",
      options: [
        { text: "A) At the same point as the fulcrum", isCorrect: false },
        { text: "B) Opposite to the fulcrum and away from the axle", isCorrect: false },
        { text: "C) Opposite to the axle and away from the fulcrum", isCorrect: true },
        { text: "D) At the center of the axle", isCorrect: false }
      ]
    },
    {
      questionText: "18. What type of lever is a broom used to sweep the floor?",
      options: [
        { text: "A) First-Class Lever", isCorrect: false },
        { text: "B) Second-Class Lever", isCorrect: false },
        { text: "C) Third-Class Lever", isCorrect: true },
        { text: "D) Fourth-Class Lever", isCorrect: false }
      ]
    },
    {
      questionText: "19. Which of the following is an example of a non-contact force?",
      options: [
        { text: "A) Friction", isCorrect: false },
        { text: "B) Gravity", isCorrect: false },
        { text: "C) Magnetism", isCorrect: true },
        { text: "D) Normal Force", isCorrect: false }
      ]
    },
    {
      questionText: "20. What is the role of lubricants in machinery?",
      options: [
        { text: "A) To increase friction", isCorrect: false },
        { text: "B) To decrease mechanical advantage", isCorrect: false },
        { text: "C) To increase wear and tear", isCorrect: false },
        { text: "D) To reduce friction and prevent wear and tear", isCorrect: true }
      ]
    }
  ]
},

4:{
  title:"Abstract Reasoning",
  questions:[
    {
      questionText: "1. Which figure completed the series?",
      options: [
        { text: "A" , isCorrect: false },
        { text: "B", isCorrect: false },
        { text: "C", isCorrect: true },
        { text: "D", isCorrect: false }
      ],
      imageUrl: abst1,
    },
    {
      questionText: "2. Which figure is the odd one out?",
      options: [
        { text: "A", isCorrect: false },
        { text: "B", isCorrect: true },
        { text: "C", isCorrect: false },
        { text: "D", isCorrect: false }
      ],
      imageUrl: abst2,
    },
    {
      questionText: "3. Which figure is next in the series?",
      options: [
        { text: "A", isCorrect: false },
        { text: "B", isCorrect: true },
        { text: "C", isCorrect: false },
        { text: "D", isCorrect: false }
      ],
      imageUrl: abst3,
    },
    {
      questionText: "4. Which figure completes the statement?",
      options: [
        { text: "A", isCorrect: false },
        { text: "B", isCorrect: false },
        { text: "C", isCorrect: false },
        { text: "D", isCorrect: true }
      ],
      imageUrl: abst4,
    },
    {
      questionText: "5. Which figure belongs in neither group?",
      options: [
        { text: "A", isCorrect: false },
        { text: "B", isCorrect: false },
        { text: "C", isCorrect: false },
        { text: "D", isCorrect: true }
      ],
      imageUrl: abst5,
    },
    {
      questionText: "6. Which is the next logical image?",
      options: [
        { text: "A", isCorrect: false },
        { text: "B", isCorrect: true },
        { text: "C", isCorrect: false },
        { text: "D", isCorrect: false }
      ],
      imageUrl: abst6,
    },
    {
      questionText: "7. Which of the following best matches the relationship between the shapes in the image?",
      options: [
        { text: "A", isCorrect: false },
        { text: "B", isCorrect: false },
        { text: "C", isCorrect: false },
        { text: "D", isCorrect: true }
      ],
      imageUrl: abst7,
    },
    {
      questionText: "8. Which domino comes next in the sequence?",
      options: [
        { text: "A", isCorrect: true },
        { text: "B", isCorrect: false },
        { text: "C", isCorrect: false },
        { text: "D", isCorrect: false }
      ],
      imageUrl: abst8,
    },
    {
      questionText: "9. Which figure completes the grid?",
      options: [
        { text: "A", isCorrect: false },
        { text: "B", isCorrect: false },
        { text: "C", isCorrect: true },
        { text: "D", isCorrect: false }
      ],
      imageUrl: abst9,
    },
    {
      questionText: "10. In the given figure, if the centres of all the circles are joined by horizontal and vertical lines, then find the number of squares that can be formed.",
      options: [
        { text: "A", isCorrect: false },
        { text: "B", isCorrect: false },
        { text: "C", isCorrect: true },
        { text: "D", isCorrect: false }
      ],
      imageUrl: abst10,
    },
    {
      questionText: "11. Which shape comes next in the sequence?",
      options: [
        { text: "A" , isCorrect: false },
        { text: "B", isCorrect: false },
        { text: "C", isCorrect: false },
        { text: "D", isCorrect: false },
        { text: "E", isCorrect: true }
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
        { text: "E", isCorrect: false }
      ],
      imageUrl: abst12,
    },
    {
      questionText: "13. Complete the sequence.",
      options: [
        { text: "A", isCorrect: false },
        { text: "B", isCorrect: true },
        { text: "C", isCorrect: false },
        { text: "D", isCorrect: false }
      ],
      imageUrl: abst13,
    },
    {
      questionText: "14. Identify the number of squares in the figure given.",
      options: [
        { text: "A", isCorrect: false },
        { text: "B", isCorrect: true },
        { text: "C", isCorrect: false },
        { text: "D", isCorrect: false }
      ],
      imageUrl: abst14,
    },
    {
      questionText: "15. Identify the number of triangles in the figure given.",
      options: [
        { text: "A", isCorrect: false },
        { text: "B", isCorrect: false },
        { text: "C", isCorrect: false },
        { text: "D", isCorrect: true }
      ],
      imageUrl: abst15,
    },
    {
      questionText: "16. Count the number of cubes in the figure given.",
      options: [
        { text: "A", isCorrect: true },
        { text: "B", isCorrect: false },
        { text: "C", isCorrect: false },
        { text: "D", isCorrect: false }
      ],
      imageUrl: abst16,
    },
    {
      questionText: "17. Find the number of rectangles in the given figure.",
      options: [
        { text: "A", isCorrect: true },
        { text: "B", isCorrect: false },
        { text: "C", isCorrect: false },
        { text: "D", isCorrect: false }
      ],
      imageUrl: abst17,
    },
    {
      questionText: "18. Find the number of parallelograms contained in the following figure",
      options: [
        { text: "A", isCorrect: false },
        { text: "B", isCorrect: false },
        { text: "C", isCorrect: true },
        { text: "D", isCorrect: false }
      ],
      imageUrl: abst18,
    },
    {
      questionText: "19. What is the minimum number of different colours required to paint the figure given above such that no two adjacent regions have the same colour?",
      options: [
        { text: "A", isCorrect: true },
        { text: "B", isCorrect: false },
        { text: "C", isCorrect: false },
        { text: "D", isCorrect: false }
      ],
      imageUrl: abst19,
    },
    {
      questionText: "Find the minimum number of straight lines required to make the given figures.",
      options: [
        { text: "A", isCorrect: true },
        { text: "B", isCorrect: false },
        { text: "C", isCorrect: false },
        { text: "D", isCorrect: false }
      ],
      imageUrl: abst20,
    }
  ]
}
  };

  const subtestIdInt = parseInt(subtestId);
  const subtest = tests[subtestIdInt];

  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showScore, setShowScore] = useState(false);

  const handleOptionChange = (optionIndex) => {
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

  const totalScore = subtest.questions.reduce((acc, question, index) => {
    const isCorrect = selectedOption === question.options.findIndex((option) => option.isCorrect);
    return isCorrect ? acc + 1 : acc;
  }, 0);

  const subCategory = tests[subtestId] ? tests[subtestId].title : "Unknown";
  const testType = "Aptitude Test";
  const score = totalScore;

  const sendTestDataToServer = async () => {
    try {
      const authtoken = localStorage.getItem("authtoken");
      const response = await fetch(
        "http://localhost:8001/user/testResultToAPI",
        {
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
        }
      );

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
    <div className="container bg-white min-h-screen ">
         <img src={Ellipse1} alt="business" className="absolute top-0 left-6 mb-20" height="100px"></img>
      <img src={Ellipse2} alt="business" width="700px" height="400px" className="absolute top-0 left-80" style={{marginBottom: 40}}></img>
      <img src={Ellipse3} alt="bbbnn" width="1600px" height="400px"></img>
      <div className="ml-6">
      <h2 className=" text-left">Assessment Rating Criteria: </h2>
      {/* Rating criteria text here */}
      
      <h1 className="text-2xl font-bold mb-4 text-white">{subtest.title}</h1>
      {showScore ? (
        <div >
          <p>Total Score: {totalScore}</p>
        </div>
      ) : (
        <div className="mb-4">
          <p className="text-lg mb-2 text-left ">
            {subtest.questions[questionIndex].questionText}
          </p>
          <div className="mt-2 text-left">
            {subtest.questions[questionIndex].options.map((option, optionIndex) => (
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
                  <span className="ml-3 bg-gray-300 p-3 block" style={{width:"300px"}}>{option.text}</span>
                </label>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center text-right">
            {
              subtest.questions[questionIndex].imageUrl && (
          
                <img
                  src={subtest.questions[questionIndex].imageUrl}
                  alt="Question Image"
                />
              )
            }
            </div>
           {showScore && (
            <p className="text-white">
              {selectedOption ===
              subtest.questions[questionIndex].options.findIndex((option) => option.isCorrect)
                ? "Correct! You earned 1 point."
                : "Incorrect. You earned 0 points."}
            </p>
          )}
          <div className="mt-4">
            {questionIndex === subtest.questions.length - 1 ? (
              <button
                onClick={sendTestDataToServer}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 p-2 rounded-full font-semibold text-xl"
              >
                Submit Test Data
              </button>
            ) : (
              <button
                className="bg-gradient-to-r from-orange-500 to-yellow-500 p-2 rounded-full font-semibold text-xl"
                onClick={handleNextQuestion}
              >
                Next Question {">"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
    </div>
  );
}


export default TestQuestionsPattern12;
