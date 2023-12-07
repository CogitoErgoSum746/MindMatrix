import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const TestPage = () => {
  const { testAlias } = useParams();

  const testAliasToName = {
    TMP: "Time Management and Procrastination",
    CM: "Concentration and Memory",
    CANT: "Study Aids and Note-Taking",
    TSTA: "Test Strategies and Test Anxiety",
    OPI: "Organizing and Processing Information",
    MA: "Motivation and Attitude",
    RSM: "Reading and Selecting the Main Idea",
    Writing: "Writing",
  };

  const testName = testAliasToName[testAlias];

  

  

  // if (!testName) {
  //   return <div className="text-red-500">Test not found</div>;
  // }

  const tests = {
    'Time Management and Procrastination': {
      questions: [
        {
          questionText: "1.I'm always on time for classes and assemblies.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "2.I devote sufficient study time to each course.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "3.I plan study times with clear goals.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "4.I prepare a “to-do” list daily.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "5.I avoid things that mess up my planned schedule.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "6.I schedule my study sessions during my optimal alertness periods.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "7.At the beginning of the term itself I set daily plans for activities and studying.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "8.I proactively tackle significant course projects well before the deadline. ",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        
      ],
    },
    'Concentration and Memory': {
      questions: [
        {
          questionText: "1.I make it a habit to study in a specific place at a set time.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "2.My study place is free from auditory and visual distractions.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "3.I can focus for at least 20 minutes without getting distracted.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "4.I am confident with the level of concentration I am able to maintain.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "5.I fully grasp the material I wish to remember.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "6.I study with the intention of remembering what I learn.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "7.I reinforce my learning by speaking the learning materials aloud.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "8.I can easily remember the things I've studied.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
       
      ],
    },
    'Study Aids and Note-Taking': {
      questions: [
        {
          questionText: "1.I plan ahead for the utilization of my notes while I'm in the process of taking them.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "2.I grasp the lecture and class discussion and jot down notes.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "3.I arrange my notes in a meaningful way, like making an outline.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "4.I review and enhance my notes systematically.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "5.I take notes on additional readings.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "6.I have a method for marking my textbooks.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "7.While reading, I underline important parts.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "8.I write notes directly in my book while reading.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        
      ],
    },
    'Test Strategies and Test Anxiety': {
      questions: [
        {
          questionText: "1.I find out what the exam will cover and how it's graded.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "2.I feel prepared and confident for the exam.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "3.In my exam preparation, I make an effort to imagine possible test questions ",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "4.I make sure to understand exam questions before answering.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "5.I carefully follow instructions during exams.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "6.I get a good night's sleep before scheduled exams.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "7.I stay calm and remember what I know during exams.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "8.I know how to prepare for different types of tests.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
       
      ],
    },
    'Organizing and Processing Information': {
      questions: [
        {
          questionText: "1.During my reading, I possess the ability to easily differentiate between important and unimportant points.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "2.I divide assignments into smaller, doable tasks.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "3.I think critically while studying, not just accepting information.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "4.I connect what I learn in different courses.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "5.I organize facts systematically for better understanding.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "6.I use questions to help me understand what I'm studying.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "7.I try to find the best method to complete tasks.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "8.I focus on the main point to solve problems.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
       
      ],
    },
    'Motivation and Attitude': {
      questions: [
        {
          questionText: "1.If the opportunity arises, I choose to occupy a seat near the front of the classroom.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "2.I am attentive during classes.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "3.I ask the teacher questions when I need to understand better.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "4.I offer answers when the teacher asks questions in class.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "5.I participate in meaningful class discussions.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "6.I attend class regularly.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "7.I take the lead in group activities.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "8.I use study techniques that make the material to be studied interesting to me.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
       
      ],
    },
    'Reading and Selecting the Main Idea': {
      questions: [
        {
          questionText: "1.I review each chapter before I begin reading.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "2.I stick to the author's structure to understand better.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "3.I review reading material multiple times during a semester.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "4.When studying a topic, I summarize it in my own words.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "5.I am confident in my reading speed.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "6.I search for meanings of unfamiliar parts.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "7.I am content with my reading skills.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "8.I concentrate on the main point while reading.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
       
      ],
    },
    'Writing': {
      questions: [
        {
          questionText: "1.I am able to effectively communicate my thoughts in writing.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "2.I quickly and spontaneously write drafts from my notes.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "3.I give myself a day's break from a written assignment and then rewrite it.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "4.I check for grammatical errors.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "5.I seek feedback for better writing.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "6.I am comfortable using library resources for research.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "7.I am able to narrow a topic for an essay, research paper, etc.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
        {
          questionText: "8.I allocate ample time for research and writing.",
          options: ['Never', 'Sometimes', 'Usually', 'Always'],
          optionWeightage: [1, 2, 3, 4],
        },
       
      ],
    },

  };

  const currentTest = tests[testName];
  const [userResponses, setUserResponses] = useState(new Array(currentTest.questions.length).fill(''));

  const calculateMarks = () => {
    const marksPerQuestion = [];

    for (let i = 0; i < currentTest.questions.length; i++) {
      const options = currentTest.questions[i].options;
      const optionWeightage = currentTest.questions[i].optionWeightage;

      const selectedOptionIndex = options.findIndex(
        (option) => option === userResponses[i]
      );

      if (selectedOptionIndex !== -1) {
        const weightage = optionWeightage[selectedOptionIndex];
        marksPerQuestion.push(weightage);
      } else {
        marksPerQuestion.push(0);
      }
    }

    return marksPerQuestion;
  };

  // const handleSaveTestResults = async () => {
  //   try {
  //     const totalScore = calculateMarks(testAlias);

  //     const response = await fetch(`http://localhost:5000/user/${testAlias}`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ totalScore }),
  //     });

  //     if (response.ok) {
  //       console.log('Test results saved successfully.');
  //     } else {
  //       console.error('Failed to save test results:', response.statusText);
  //     }
  //   } catch (error) {
  //     console.error('Error while saving test results:', error);
  //   }
  // };

  const marks = calculateMarks();

  return (
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">{testName}</h1>
    {currentTest.questions.map((question, index) => (
      <div key={index} className="mb-4 ml-20">
        <p className="text-lg mb-2 text-left">{question.questionText}</p>
        <div className="mt-2 flex">
          {question.options.map((option, optionIndex) => (
            <label key={optionIndex} className="mr-10">
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                checked={userResponses[index] === option}
                onChange={(e) => {
                  const newUserResponses = [...userResponses];
                  newUserResponses[index] = e.target.value;
                  setUserResponses(newUserResponses);
                }}
              />
              <span className="ml-1">{option}</span>
            </label>
          ))}
        </div>
      </div>
    ))}
    <p className="text-xl font-bold mt-4">
      Total Marks: {marks.reduce((a, b) => a + b, 0)}
    </p>

    <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Submit
      </button>
  </div>
  );
};

export default TestPage;
