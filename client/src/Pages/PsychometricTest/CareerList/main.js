import React, { useState } from 'react';

const Homepage = () => {
  let dictionary = {
    'Priority1': ['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5', 'Value 6', 'Value 7', 'Value 8', 'Value 9', 'Value 10'],
    'Priority2': ['Value 11', 'Value 12', 'Value 13', 'Value 14', 'Value 15', 'Value 16', 'Value 17', 'Value 18', 'Value 19', 'Value 20'],
    // Add more lists as needed
  };

  // Convert the dictionary into an array of objects for easier mapping
  let lists = Object.entries(dictionary).map(([listName, values]) => ({ listName, values }));

  let [selectedValues, setSelectedValues] = useState([]);
  let [otherValue, setOtherValue] = useState('');

  const handleButtonClick = (value, listName, isSelected) => {
    if (isSelected) {
      setSelectedValues((prevValues) =>
        prevValues.filter((item) => item.listName !== listName || item.listValue !== value)
      );

      dictionary[listName].push(value);
    } else {
      setSelectedValues((prevValues) => [...prevValues, { listName, listValue: value }]);

      dictionary[listName] = dictionary[listName].filter((item) => item !== value);
    }
  };

  const handleOtherInputChange = (event) => {
    setOtherValue(event.target.value);
  };

  const handleSubmit = () => {
    // Display the latest selected values and the other value
    alert(
      `Latest Selected Values: ${selectedValues.map(({ listValue }) => listValue).join(', ')}\nOther Value: ${otherValue}`
    );
  };

  return (
    <div className='flex h-screen relative'>
      <div className='p-20 border-r-4 border-blue-500 pr-8'>
        <h2 className="text-xl font-bold mb-4">Selected Values:</h2>
        {selectedValues.length > 0 && (
          <div className="space-y-4">
            {selectedValues.map(({ listName, listValue }, index) => (
              <div key={index} className="flex items-center space-x-2">
                <button
                  className="bg-red-500 text-white p-2 rounded-full cursor-pointer transition-transform transform hover:scale-105"
                >
                  {listValue}
                </button>
                <span
                  className="text-red-500 cursor-pointer text-3xl"
                  onClick={() => handleButtonClick(listValue, listName, true)}
                >
                  ×
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='flex-1 flex flex-col p-20'>
        {lists.map((list, listIndex) => (
          <div key={listIndex} className='mb-4 text-left'>
            <h3 className="text-lg font-bold mb-2">{list.listName}</h3>
            {list.values
              .filter((value) => !selectedValues.find((item) => item.listName === list.listName && item.listValue === value))
              .map((value, index) => (
                <button
                  key={index}
                  className="bg-blue-500 text-white p-2 rounded-full cursor-pointer transition-transform transform hover:scale-105 mb-2 px-4 ml-2"
                  onClick={() => handleButtonClick(value, list.listName, false)}
                >
                  {value}
                </button>
              ))}
          </div>
        ))}
      </div>
      <div className="absolute bottom-10 right-20">
        <div className="mt-4">
          <label className="block text-left text-lg font-bold mb-2">Other:</label>
          <input
            type="text"
            value={otherValue}
            onChange={handleOtherInputChange}
            className="border border-gray-400 p-2 rounded w-full"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white p-2 rounded-full cursor-pointer transition-transform transform hover:scale-105 mt-4"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Homepage;





// import React, { useEffect, useState } from "react";
// import { API_BASE_URL } from "../../config";
// import { Link } from "react-router-dom";

// function CareerOptions() {
//   const [sortedNames, setSortedNames] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [selectedOption, setSelectedOption] = useState("");
//   const [careerOptions, setCareerOptions] = useState([]);
//   const [selectedPriorities, setSelectedPriorities] = useState([]);
//   const [selectedPriority, setSelectedPriority] = useState("");
//   const [availablePriorities, setAvailablePriorities] = useState([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
//   ]);
//   const authtoken = localStorage.getItem("authtoken");

  // const simulatedCareerOptions = {
  //   Naturalistic: [
  //     "Botanist",
  //     "Ecologist",
  //     "Environmental Scientist",
  //     "Zoologist",
  //     "Wildlife Biologist",
  //     "Marine Biologist",
  //     "Geologist",
  //     "Meteorologist",
  //     "Environmental Educator",
  //     "Conservation Scientist",
  //     "Park Ranger",
  //     "Geographic Information Systems (GIS) Analyst",
  //     "Forester",
  //     "Natural Resource Manager",
  //     "Geographic Cartographer",
  //     "Geomorphologist",
  //     "Paleontologist",
  //     "Environmental Planner",
  //     "Climate Change Analyst",
  //     "Entomologist",
  //     "Herpetologist",
  //     "Ornithologist",
  //     "Environmental Consultant",
  //     "Horticulturist",
  //     "Landscape Architect",
  //     "Arborist",
  //     "Soil Scientist",
  //     "Wildlife Rehabilitator",
  //     "Aquatic Biologist",
  //     "Ethnobotanist",
  //     "Environmental Policy Analyst",
  //     "Oceanographer",
  //     "Permaculturist",
  //     "Animal Behaviorist",
  //     "Nature Photographer",
  //     "Land Conservation Specialist",
  //     "Wetland Scientist",
  //     "Environmental Economist",
  //     "Hydrologist",
  //     "Environmental Health Specialist",
  //     "Wildlife Photographer",
  //     "Archeologist",
  //     "Volcanologist",
  //     "Geographic Information Systems (GIS) Manager",
  //     "Naturalist Guide",
  //     "Remote Sensing Specialist",
  //     "Nature Interpreter",
  //     "Forest Firefighter",
  //     "Soil Conservationist",
  //     "Glaciologist",
  //     "Environmental Journalist",
  //     "Marine Conservationist",
  //     "Pollution Control Technician",
  //     "Environmental Impact Assessment Specialist",
  //     "Park Naturalist",
  //     "Plant Geneticist",
  //     "Landscape Ecologist",
  //     "Green Building Architect",
  //     "Biological Illustrator",
  //     "Seed Bank Manager",
  //     "Environmental Lawyer",
  //     "Ocean Engineer",
  //     "Natural Resource Economist",
  //     "Climate Scientist",
  //     "Environmental Educator",
  //     "Fisheries Biologist",
  //     "Mountain Guide",
  //     "Wildlife Filmmaker",
  //     "Environmental Compliance Officer",
  //     "Arctic/Antarctic Researcher",
  //     "Land Use Planner",
  //     "Bioremediation Specialist",
  //     "Eco-Tour Guide",
  //     "Park Manager",
  //     "Environmental Chemist",
  //     "Forest Ecologist",
  //     "Sustainable Agriculture Specialist",
  //     "Green Energy Engineer",
  //     "Mycologist",
  //     "Urban Planner",
  //     "Natural Resource Planner",
  //     "Environmental Artist",
  //     "Aquatic Ecologist",
  //     "Restoration Ecologist",
  //     "Geomancer",
  //     "Earth Scientist",
  //     "Biodynamic Farmer",
  //     "Natural Resource Economist",
  //     "Biomimicry Designer",
  //     "Watershed Scientist",
  //     "Environmental Sociologist",
  //     "Eco-Fashion Designer",
  //     "Green Building Consultant",
  //     "Environmental Philosopher",
  //     "Wetland Biologist",
  //     "Ecotherapy Practitioner",
  //     "Bioinformatics Specialist",
  //     "Water Quality Analyst",
  //     "Environmental Compliance Auditor",
  //     "Permaculture Designer",
  //   ],
  //   Intrapersonal: [
  //     "Psychologist",
  //     "Therapist/Counselor",
  //     "Life Coach",
  //     "Philosopher",
  //     "Spiritual Leader",
  //     "Self-Help Author",
  //     "Meditation Instructor",
  //     "Motivational Speaker",
  //     "Personal Development Trainer",
  //     "Career Counselor",
  //     "Executive Coach",
  //     "Health and Wellness Coach",
  //     "Emotional Intelligence Trainer",
  //     "Mindfulness Coach",
  //     "Self-Care Advocate",
  //     "Personal Branding Consultant",
  //     "Personal Finance Coach",
  //     "Art Therapist",
  //     "Holistic Healer",
  //     "Grief Counselor",
  //     "Astrologer",
  //     "Life Planner",
  //     "Positive Psychology Coach",
  //     "Motivational Writer",
  //     "Yoga Instructor",
  //     "Artistic Therapist",
  //     "Empowerment Coach",
  //     "Hypnotherapist",
  //     "Intuitive Counselor",
  //     "Narrative Therapist",
  //     "Wellness Blogger/Vlogger",
  //     "Dream Analyst",
  //     "Personal Stylist",
  //     "Confidence Coach",
  //     "Mind-Body Wellness Practitioner",
  //     "Energy Healer",
  //     "Mindful Eating Coach",
  //     "Personality Assessor",
  //     "Journaling Instructor",
  //     "Inner Child Therapist",
  //     "Transformational Coach",
  //     "Personal Reflection Workshop Facilitator",
  //     "Assertiveness Trainer",
  //     "Personal Image Consultant",
  //     "Values-Based Coach",
  //     "Ethics Consultant",
  //     "Self-Care Blogger",
  //     "Inner Peace Advocate",
  //     "Personal Growth Blogger",
  //     "Mindful Parenting Coach",
  //     "Emotional Wellness Speaker",
  //     "Journal Therapy Practitioner",
  //     "Dream Coach",
  //     "Mindful Leadership Trainer",
  //     "Personal Empowerment Workshop Leader",
  //     "Resilience Coach",
  //     "Narrative Coach",
  //     "Personal Vision Facilitator",
  //     "Crisis Intervention Counselor",
  //     "Self-Discovery Workshop Facilitator",
  //     "Mindful Communication Trainer",
  //     "Personal Achievement Coach",
  //     "Empathy Educator",
  //     "Mindful Aging Consultant",
  //     "Self-Compassion Coach",
  //     "Introspective Writing Instructor",
  //     "Body Image Coach",
  //     "Holistic Life Planner",
  //     "Personal Renewal Facilitator",
  //     "Inner Alignment Guide",
  //     "Emotion Regulation Coach",
  //     "Mindful Technology Consultant",
  //     "Self-Compassion Workshop Leader",
  //     "Mindful Productivity Coach",
  //     "Reflective Writing Coach",
  //     "Values Exploration Facilitator",
  //     "Personal Transformation Blogger",
  //     "Resilience Workshop Facilitator",
  //     "Self-Discovery Retreat Leader",
  //     "Empowerment Workshop Facilitator",
  //     "Mindful Art Therapy Practitioner",
  //     "Inner Wisdom Mentor",
  //     "Reflective Journaling Facilitator",
  //     "Mindful Well-Being Speaker",
  //     "Personal Reflection Journal Designer",
  //     "Self-Discovery Podcast Host",
  //     "Mindful Self-Care Workshop Leader",
  //     "Personal Values Coach",
  //     "Mindful Living Advocate",
  //     "Emotion Management Workshop Facilitator",
  //     "Mindful Self-Compassion Trainer",
  //     "Mindful Reflection Retreat Organizer",
  //     "Inner Transformation Speaker",
  //     "Mindful Self-Exploration Guide",
  //     "Values-Based Leadership Coach",
  //     "Mindful Healing Practitioner",
  //     "Self-Awareness Workshop Facilitator",
  //     "Mindful Career Coach",
  //     "Holistic Self-Care Blogger",
  //     "Mindful Reflection App Developer",
  //   ],
  //   Linguistic: [
  //     "Writer",
  //     "Journalist",
  //     "Editor",
  //     "Blogger",
  //     "Copywriter",
  //     "Technical Writer",
  //     "Content Creator",
  //     "Speechwriter",
  //     "Novelist",
  //     "Poet",
  //     "Literary Critic",
  //     "Screenwriter",
  //     "Public Relations Specialist",
  //     "Public Speaker",
  //     "Translator/Interpreter",
  //     "Foreign Correspondent",
  //     "Script Supervisor (Film/TV)",
  //     "Grant Writer",
  //     "Book Reviewer",
  //     "Travel Writer",
  //     "Curriculum Developer",
  //     "Storyteller",
  //     "Playwright",
  //     "Radio Host/Podcaster",
  //     "Video Scriptwriter",
  //     "Librarian",
  //     "Language Teacher",
  //     "ESL Teacher",
  //     "Linguist",
  //     "Crossword Puzzle Writer",
  //     "Technical Documentation Writer",
  //     "Magazine Editor",
  //     "Grant Proposal Writer",
  //     "Proofreader",
  //     "Subtitle Translator",
  //     "Literary Agent",
  //     "Speech Therapist",
  //     "Online Course Creator",
  //     "Media Critic",
  //     "Communications Specialist",
  //     "Editorial Assistant",
  //     "Ghostwriter",
  //     "Creative Writing Instructor",
  //     "Content Strategist",
  //     "Copy Editor",
  //     "Legal Writer",
  //     "Researcher",
  //     "Biographer",
  //     "Columnist",
  //     "Song Lyricist",
  //     "Play-by-Play Announcer",
  //     "Interactive Fiction Writer",
  //     "Marketing Copywriter",
  //     "Press Release Writer",
  //     "Blogger Outreach Coordinator",
  //     "Magazine Journalist",
  //     "Social Media Manager",
  //     "Podcast Producer",
  //     "Video Game Writer",
  //     "Historical Document Analyst",
  //     "Academic Researcher",
  //     "Educational Content Developer",
  //     "Ethnographer",
  //     "Magazine Columnist",
  //     "Literature Professor",
  //     "Literary Magazine Editor",
  //     "Speech Pathologist",
  //     "Language Coach",
  //     "Braille Translator",
  //     "Content Marketing Manager",
  //     "Media Relations Specialist",
  //     "Copywriting Trainer",
  //     "Communications Manager",
  //     "Narrator (Audiobooks, Voiceovers)",
  //     "Caption Writer",
  //     "Ghost Blogger",
  //     "Content Editor",
  //     "Screenplay Analyst",
  //     "Online Magazine Editor",
  //     "SEO Content Writer",
  //     "Poetry Slam Performer",
  //     "Technical Communicator",
  //     "News Anchor",
  //     "Epistolary Novelist (Letter-Based)",
  //     "Language Tester/Assessor",
  //     "Ad Copywriter",
  //     "Educational Game Designer",
  //     "Word Puzzle Designer",
  //     "Magazine Copy Editor",
  //     "Speech and Debate Coach",
  //     "Copy Chief",
  //     "Literary Translator",
  //     "Radio Play Writer",
  //     "Legal Proofreader",
  //     "News Editor",
  //     "Lexicographer (Dictionary Compiler)",
  //     "Social Media Copywriter",
  //     "Storyboard Writer",
  //     "Literary Event Organizer",
  //     "Communications Consultant",
  //   ],
  //   Logical: [
  //     "Mathematician",
  //     "Statistician",
  //     "Computer Scientist",
  //     "Data Scientist",
  //     "Actuary",
  //     "Financial Analyst",
  //     "Economist",
  //     "Research Scientist",
  //     "Operations Research Analyst",
  //     "Quantitative Analyst (Quant)",
  //     "Astronomer",
  //     "Physicist",
  //     "Chemist",
  //     "Biostatistician",
  //     "Cryptographer",
  //     "Math Educator",
  //     "Software Developer",
  //     "Engineer (Various Fields)",
  //     "Mechanical Engineer",
  //     "Civil Engineer",
  //     "Electrical Engineer",
  //     "Software Engineer",
  //     "Chemical Engineer",
  //     "Industrial Engineer",
  //     "Systems Analyst",
  //     "Quality Control Analyst",
  //     "Market Research Analyst",
  //     "Logistician",
  //     "Environmental Scientist",
  //     "Doctor",
  //     "Pharmaceutical Research Scientist",
  //     "Forensic Scientist",
  //     "Meteorologist",
  //     "Geologist",
  //     "Urban Planner",
  //     "Geophysicist",
  //     "Physiologist",
  //     "Research Biologist",
  //     "Healthcare Analyst",
  //     "Robotics Engineer",
  //     "Mathematical Modeler",
  //     "Healthcare Data Scientist",
  //     "Business Analyst",
  //     "Supply Chain Analyst",
  //     "Quantitative Researcher",
  //     "Network Engineer",
  //     "Mathematical Illustrator",
  //     "Software Tester",
  //     "Risk Analyst",
  //     "Math Curriculum Developer",
  //     "Game Developer",
  //     "Physics Educator",
  //     "Chemistry Educator",
  //     "Engineering Manager",
  //     "Mathematical Consultant",
  //     "Physics Researcher",
  //     "Computer Hardware Engineer",
  //     "Mathematical Biologist",
  //     "Operations Manager",
  //     "Pharmaceutical Statistician",
  //     "Mechanical Design Engineer",
  //     "Mathematical Physicist",
  //     "Quantitative Psychologist",
  //     "Nuclear Engineer",
  //     "Mathematical Economist",
  //     "Software Architect",
  //     "Healthcare Systems Analyst",
  //     "Research Analyst (Various Fields)",
  //     "Cryptocurrency Analyst",
  //     "Bioinformatics Scientist",
  //     "Data Engineer",
  //     "Environmental Engineer",
  //     "Process Engineer",
  //     "Algorithm Developer",
  //     "Cryptocurrency Developer",
  //     "Materials Scientist",
  //     "Healthcare Informatics Analyst",
  //     "Digital Analyst",
  //     "Logistics Analyst",
  //     "Research Data Analyst",
  //     "Mathematical Illustrator",
  //     "Physics Educator",
  //     "Chemistry Educator",
  //     "Engineering Manager",
  //     "Mathematical Consultant",
  //     "Physics Researcher",
  //     "Computer Hardware Engineer",
  //     "Mathematical Biologist",
  //     "Operations Manager",
  //     "Pharmaceutical Statistician",
  //     "Mechanical Design Engineer",
  //     "Mathematical Physicist",
  //   ],
  //   Musical: [
  //     "Musician",
  //     "Composer",
  //     "Music Producer",
  //     "Singer/Vocalist",
  //     "Conductor",
  //     "Music Teacher/Instructor",
  //     "Music Arranger",
  //     "Sound Engineer",
  //     "Music Therapist",
  //     "Music Director",
  //     "Musicologist",
  //     "Music Librarian",
  //     "Songwriter",
  //     "Music Critic",
  //     "Instrument Maker/Luthier",
  //     "Sound Designer",
  //     "Recording Engineer",
  //     "Music Copyist",
  //     "Music Retailer",
  //     "Music Blogger/Reviewer",
  //     "Music Attorney",
  //     "Music Event Planner",
  //     "Music Journalist",
  //     "A&R (Artists and Repertoire) Representative",
  //     "Music Publisher",
  //     "Tour Manager",
  //     "Music Educator",
  //     "Choir Director",
  //     "Music Blogger/Influencer",
  //     "Music Software Developer",
  //     "Music Retail Manager",
  //     "Music Video Director",
  //     "Music App Developer",
  //     "Music Consultant",
  //     "Music Venue Manager",
  //     "Music Photographer",
  //     "Music Archivist",
  //     "Music Promoter",
  //     "Music Analyst",
  //     "Music Technology Specialist",
  //     "Music Copyright Specialist",
  //     "Music Business Manager",
  //     "Music App Tester",
  //     "Jingle Writer",
  //     "Music Radio Host/DJ",
  //     "Music Researcher",
  //     "Music Retail Sales Associate",
  //     "Music Web Developer",
  //     "Music Cataloger",
  //     "Music Retail Buyer",
  //     "Music App Support Specialist",
  //     "Music Blogger/YouTuber",
  //     "Music Venue Sound Technician",
  //     "Music Research Assistant",
  //     "Music App User Interface (UI) Designer",
  //     "Music Event Coordinator",
  //     "Music Licensing Coordinator",
  //     "Music Historian",
  //     "Music Curriculum Developer",
  //     "Music Librarian Assistant",
  //     "Music Business Consultant",
  //     "Music Copyright Researcher",
  //     "Music Podcast Host/Producer",
  //     "Music Tour Booking Agent",
  //     "Music Venue Promoter",
  //     "Music Streaming Platform Curator",
  //     "Music Notation Software Support",
  //     "Music Educator Trainer",
  //     "Music Festival Coordinator",
  //     "Music App User Experience (UX) Designer",
  //     "Music Research Project Manager",
  //     "Music Studio Manager",
  //     "Music Retail Marketing Specialist",
  //     "Music Education Administrator",
  //     "Music Venue Operations Manager",
  //     "Music Streaming Platform Analyst",
  //     "Music App Marketing Manager",
  //     "Music Therapy Clinic Director",
  //     "Music Festival Production Manager",
  //     "Music Branding Specialist",
  //     "Music Technology Educator",
  //     "Music Data Analyst",
  //     "Music Venue Marketing Coordinator",
  //     "Music Copyright Enforcement Agent",
  //     "Music Streaming Platform Customer Support",
  //     "Music Education Researcher",
  //     "Music Festival Sponsorship Coordinator",
  //     "Music App Product Manager",
  //     "Music Clinic Coordinator",
  //     "Music Festival Talent Booker",
  //     "Music App Quality Assurance (QA) Tester",
  //     "Music Education Curriculum Specialist",
  //     "Music Venue Event Planner",
  //     "Music Licensing Administrator",
  //     "Music Festival Volunteer Coordinator",
  //     "Music App User Support Specialist",
  //     "Music Education Technology Specialist",
  //     "Music Venue Hospitality Manager",
  //     "Music Festival Sustainability Coordinator",
  //     "Music App Community Manager",
  //   ],
  //   Interpersonal: [
  //     "Counselor/Psychologist",
  //     "Social Worker",
  //     "Human Resources Specialist/Manager",
  //     "Teacher/Educator",
  //     "Life Coach",
  //     "Therapist",
  //     "Mediator",
  //     "Salesperson",
  //     "Customer Service Representative",
  //     "Public Relations Specialist",
  //     "Event Planner",
  //     "Social Entrepreneur",
  //     "Politician/Political Campaign Manager",
  //     "Healthcare Professional",
  //     "Religious Leader/Spiritual Counselor",
  //     "Community Organizer",
  //     "Leadership Coach",
  //     "Conflict Resolution Specialist",
  //     "Family Therapist",
  //     "Negotiation Consultant",
  //     "HR Consultant",
  //     "Social Services Manager",
  //     "Relationship Coach",
  //     "Speech Pathologist",
  //     "Marriage Counselor",
  //     "Team Building Facilitator",
  //     "Child and Family Social Worker",
  //     "Rehabilitation Counselor",
  //     "Career Counselor",
  //     "Community Outreach Coordinator",
  //     "Public Speaking Coach",
  //     "Volunteer Coordinator",
  //     "Nonprofit Director",
  //     "Victim Advocate",
  //     "Humanitarian Aid Worker",
  //     "Geriatric Social Worker",
  //     "Youth Mentor",
  //     "Child Life Specialist",
  //     "Veterans Support Counselor",
  //     "Speech Coach",
  //     "Diversity and Inclusion Specialist",
  //     "Elder Care Coordinator",
  //     "Patient Advocate",
  //     "Social Media Community Manager",
  //     "School Counselor",
  //     "Victim Services Coordinator",
  //     "Addiction Counselor",
  //     "Mental Health Advocate",
  //     "Case Manager",
  //     "Behavioral Therapist",
  //     "Chaplain",
  //     "Adoption Counselor",
  //     "Cross-Cultural Trainer",
  //     "Community Health Worker",
  //     "Victim Support Specialist",
  //     "Career Development Specialist",
  //     "Conflict Mediator",
  //     "Social Policy Analyst",
  //     "Recreation Therapist",
  //     "Support Group Facilitator",
  //     "Community Development Coordinator",
  //     "Patient Navigator",
  //     "Family Support Worker",
  //     "Clinical Supervisor",
  //     "College Advisor",
  //     "Art Therapist",
  //     "Residential Counselor",
  //     "Parent Educator",
  //     "Career Transition Coach",
  //     "Conflict Analyst",
  //     "Family Mediator",
  //     "Community Liaison Officer",
  //     "Organizational Development Consultant",
  //     "Community Health Educator",
  //     "Charity Fundraiser",
  //     "Patient Experience Coordinator",
  //     "Community Outreach Specialist",
  //     "Aged Care Worker",
  //     "Behavioral Interventionist",
  //     "Health Educator",
  //     "Domestic Violence Advocate",
  //     "Child Advocate",
  //     "Group Therapist",
  //     "Parent Coordinator",
  //     "Veterans Outreach Coordinator",
  //     "International Aid Worker",
  //     "School Psychologist",
  //     "Reentry Coordinator",
  //     "Community Mediator",
  //     "Health Advocate",
  //     "Disability Services Coordinator",
  //     "Clinical Social Worker",
  //     "Patient Liaison",
  //     "Community Relations Specialist",
  //     "Youth Program Coordinator",
  //     "Homeless Shelter Worker",
  //     "Inclusion Coordinator",
  //     "Elder Abuse Advocate",
  //     "Family Services Manager",
  //     "Advocacy Campaign Manager",
  //   ],
  //   Spatial: [
  //     "Graphic Designer",
  //     "Architect",
  //     "Interior Designer",
  //     "Animator",
  //     "Photographer",
  //     "Industrial Designer",
  //     "Fashion Designer",
  //     "Game Designer",
  //     "Illustrator",
  //     "Art Director",
  //     "Film Director",
  //     "Cinematographer",
  //     "Visual Effects (VFX) Artist",
  //     "Cartographer",
  //     "Web Designer",
  //     "Storyboard Artist",
  //     "Set Designer",
  //     "Model Maker",
  //     "Museum Exhibit Designer",
  //     "Sculptor",
  //     "Visual Merchandiser",
  //     "Video Game Artist",
  //     "Medical Illustrator",
  //     "Urban Planner",
  //     "Landscape Architect",
  //     "Virtual Reality (VR) Designer",
  //     "Augmented Reality (AR) Designer",
  //     "Scientific Illustrator",
  //     "Technical Illustrator",
  //     "Storyboard Illustrator",
  //     "Product Photographer",
  //     "Package Designer",
  //     "3D Modeler",
  //     "Visual Journalist",
  //     "Fine Artist",
  //     "Graphic Novel Artist",
  //     "Exhibition Designer",
  //     "Fashion Illustrator",
  //     "Medical Animator",
  //     "User Experience (UX) Designer",
  //     "User Interface (UI) Designer",
  //     "Textile Designer",
  //     "Concept Artist",
  //     "Comics Artist",
  //     "Storyboard Supervisor",
  //     "Garden Designer",
  //     "Car Designer",
  //     "Retail Space Designer",
  //     "Visual Storyteller",
  //     "Street Artist",
  //     "Forensic Artist",
  //     "Visual Anthropologist",
  //     "Children's Book Illustrator",
  //     "Exterior Designer (Architecture)",
  //     "Floral Designer",
  //     "Jewelry Designer",
  //     "Theatrical Makeup Artist",
  //     "Pattern Designer",
  //     "Display Artist",
  //     "Character Designer",
  //     "Experiential Designer",
  //     "Visual Arts Educator",
  //     "Illustration Agent",
  //     "Nature Photographer",
  //     "Scientific Visualization Specialist",
  //     "Furniture Designer",
  //     "Dressmaker",
  //     "Cosmetic Makeup Artist",
  //     "Visual Educator",
  //     "Stage Designer",
  //     "Visual Effects Supervisor",
  //     "Exhibition Curator",
  //     "Medical Imaging Specialist",
  //     "Digital Painter",
  //     "Storyboard Coordinator",
  //     "Portrait Artist",
  //     "Laser Light Show Designer",
  //     "Visual Restoration Specialist",
  //     "Art Conservator",
  //     "Exhibition Preparator",
  //     "Visualization Engineer",
  //     "Cinematic Artist",
  //     "Theme Park Designer",
  //     "Visual Anthropologist",
  //     "Forensic Artist",
  //     "Visual Arts Therapist",
  //     "Visual Merchandising Coordinator",
  //     "Mural Artist",
  //     "Art Auctioneer",
  //     "Visual Ethnographer",
  //     "Marine Photographer",
  //     "Gallery Director",
  //     "Nature Illustrator",
  //     "Architectural Renderer",
  //     "Scientific Photographer",
  //     "Museum Photographer",
  //     "Visual Stylist",
  //     "Visual Branding Consultant",
  //   ],
  //   Kinesthetic: [
  //     "Athlete",
  //     "Dancer",
  //     "Actor/Actress",
  //     "Surgeon",
  //     "Physical Therapist",
  //     "Carpenter",
  //     "Chef",
  //     "Fashion Designer",
  //     "Mechanic",
  //     "Circus Performer",
  //     "Yoga Instructor",
  //     "Choreographer",
  //     "Professional Athlete Coach",
  //     "Physical Education Teacher",
  //     "Sculptor",
  //     "Massage Therapist",
  //     "Stunt Performer",
  //     "Fitness Trainer",
  //     "Professional Diver",
  //     "Cirque du Soleil Performer",
  //     "Physical Education Curriculum Developer",
  //     "Sports Coach",
  //     "Recreational Therapist",
  //     "Martial Arts Instructor",
  //     "Ski Instructor",
  //     "Professional Ballet Dancer",
  //     "Orthopedic Surgeon",
  //     "Personal Trainer",
  //     "Climbing Instructor",
  //     "Physical Education Coordinator",
  //     "Casting Director",
  //     "Industrial Designer",
  //     "Chiropractor",
  //     "Dance Therapist",
  //     "Gymnastics Coach",
  //     "Architect",
  //     "Parkour Instructor",
  //     "Fitness Class Instructor",
  //     "Physical Education Curriculum Consultant",
  //     "Stunt Coordinator",
  //     "Professional Surfer",
  //     "Casting Agent",
  //     "Rehabilitation Specialist",
  //     "Trampoline Park Attendant",
  //     "Athletic Trainer",
  //     "Furniture Maker",
  //     "Dance Studio Owner",
  //     "Physical Education Researcher",
  //     "Climbing Gym Manager",
  //     "Art Restoration Specialist",
  //     "Gymnastics Choreographer",
  //     "Physical Therapy Assistant",
  //     "Dance Company Director",
  //     "Motorcycle Mechanic",
  //     "Sports Event Coordinator",
  //     "Bodywork Therapist",
  //     "Golf Instructor",
  //     "Artisan Baker",
  //     "Fitness Equipment Designer",
  //     "Athletic Director",
  //     "Ergonomics Consultant",
  //     "Marine Biologist",
  //     "Stage Combat Choreographer",
  //     "Circus Arts Instructor",
  //     "Kinesiologist",
  //     "Sports Photographer",
  //     "Acrobatics Coach",
  //     "Dance Movement Therapist",
  //     "Physiotherapist",
  //     "Park Ranger",
  //     "Sports Nutritionist",
  //     "Artistic Gymnastics Judge",
  //     "Personal Fitness Chef",
  //     "Circus Rigging Specialist",
  //     "Strength and Conditioning Coach",
  //     "Zoologist",
  //     "Ski Resort Manager",
  //     "Physical Education Program Evaluator",
  //     "Theater Fight Director",
  //     "Ski Patrol Member",
  //     "Ergonomic Furniture Designer",
  //     "Bodywork Practitioner",
  //     "Stunt Performer Trainer",
  //     "Skateboarding Instructor",
  //     "Ergonomics Specialist",
  //     "Recreational Sports Coordinator",
  //     "Physical Education Technology Developer",
  //     "Outdoor Adventure Guide",
  //     "Martial Arts School Owner",
  //     "Ski Equipment Technician",
  //     "Ergonomics Trainer",
  //     "Dance Costume Designer",
  //     "Physical Education Curriculum Writer",
  //     "Casting Coordinator",
  //     "Professional Diver Instructor",
  //     "Architectural Model Maker",
  //     "Yoga Studio Owner",
  //     "Motion Capture Artist",
  //     "Ergonomics Consultant",
  //     "Recreational Therapy Director",
  //   ],
  // };

//   const handleCategoryChange = (e) => {
//     const category = e.target.value;
//     setSelectedCategory(category);
//     setSelectedOption("");
//     setCareerOptions(simulatedCareerOptions[category]);
//   };

//   const handleOptionChange = () => {
//     if (selectedCategory && selectedOption) {
//       const existingOptionIndex = selectedPriorities.findIndex(
//         (item) => item.option === selectedOption
//       );
  
//       if (existingOptionIndex !== -1) {
//         const oldPriority = selectedPriorities[existingOptionIndex].priority;
//         const updatedAvailablePriorities = [
//           ...availablePriorities,
//           oldPriority,
//         ].sort((a, b) => a - b);
  
//         // Update the priority for the existing option
//         const updatedPriorities = selectedPriorities
//           .filter((_, index) => index !== existingOptionIndex) // Remove the old priority
//           .map((item) => ({ ...item }));
  
//         // Add the new priority
//         updatedPriorities.push({
//           option: selectedOption,
//           priority: parseInt(selectedPriority, 10),
//         });
  
//         setSelectedPriorities([...updatedPriorities]);
//         setAvailablePriorities(updatedAvailablePriorities.filter((value) => value !== parseInt(selectedPriority, 10)));
//       } else {
//         if (selectedPriorities.length < 10) {
//           const priorityValue = parseInt(selectedPriority, 10);
//           const updatedPriorities = [
//             ...selectedPriorities,
//             { option: selectedOption, priority: priorityValue },
//           ];
  
//           setSelectedPriorities([...updatedPriorities]); // Create a new array
  
//           const updatedAvailablePriorities = availablePriorities.filter(
//             (value) => value !== priorityValue
//           );
//           setAvailablePriorities(updatedAvailablePriorities);
//         } else {
//           alert('You can only select 10 career options.');
//         }
//       }
  
//       setSelectedOption('');
//       setSelectedPriority(''); // Reset the selected priority
//     }
//   };


//   const handleRemoveOption = (index) => {
//     const removedOption = selectedPriorities[index];
//     const updatedAvailablePriorities = [
//       ...availablePriorities,
//       removedOption.priority
//     ].sort((a, b) => a - b);

//     setAvailablePriorities(updatedAvailablePriorities);

//     const updatedPriorities = [...selectedPriorities];
//     updatedPriorities.splice(index, 1);
//     setSelectedPriorities(updatedPriorities);
//   };


//   const sendCareerOptionsToBackend = () => {
//     const careerOptions = selectedPriorities
//       .sort((a, b) => a.priority - b.priority)
//       .map((option) => option.option);

//     console.log(careerOptions)
//     fetch(`${API_BASE_URL}/user/carreerOptions`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         authtoken: authtoken,
//       },
//       body: JSON.stringify({ careerOptions }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           alert("Career options sent to the backend successfully");
//         } else {
//           alert("Failed to send career options to the backend");
//         }
//       })
//       .catch((error) => {
//         console.error("Error sending career options:", error);
//       });
//   };

//   useEffect(() => {
//     fetch(`${API_BASE_URL}/user/multilpleIRank`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         authtoken: authtoken,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.sortedNames) {
//           setSortedNames(data.sortedNames);
//           setLoading(false);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//       <div className="bg-white p-20 rounded-lg shadow-lg max-w-screen-xl mx-auto sm:w-700 h-auto mt-5">
//         <div className="sm:flex items-center justify-center">
//     <div className="sm:w-2/3 sm:p-8">
//           <h1 className="text-3xl font-bold mb-4 sm:mb-8">
//             Instructions for Choosing a Career
//           </h1>

//           <p className="mb-4 text-left">
//             Your intelligences listed from top to down, you have to choose 10
//             career options of your most interest from the lists.
//           </p>

//           <ol className="list-decimal pl-6 mb-6 text-left">
//             <li className="mb-2">Select a category from top to down.</li>
//             <li className="mb-2">
//               Select your career option jobs from the list that align with your
//               interests.
//             </li>
//             <li className="mb-2">Select a priority number for each job.</li>
//             <li className="mb-2">Add Career Option your choices for each job.</li>
//             <li className="mb-2">Finally, submit the career option.</li>
//           </ol>
//         </div>

//         <div className="sm:w-1/2 sm:ml-4 mt-4 sm:mt-0">
//         {loading ? (
//           <p>Loading...</p>
//         ) : sortedNames.length === 0 ? (
//           <p>No data available</p>
//         ) : (
//           <div className="p-4">
//             <h2 className="text-2xl font-bold mb-4">Sorted Subcategories</h2>
//             <div className="flex flex-col space-y-4">
//             <select
//               className="w-full p-2 border border-gray-300 rounded-md"
//               value={selectedCategory}
//               onChange={handleCategoryChange}
//             >
//               <option value="">Select a category</option>
//               {sortedNames.map((name, index) => (
//                 <option key={index} value={name}>
//                   {name}
//                 </option>
//               ))}
//             </select>

//             {selectedCategory && (
//               <div className="flex flex-col space-y-4">
//                 <h2 className="text-2xl font-bold">
//                   Selected Category: {selectedCategory}
//                 </h2>
//                 <select
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   value={selectedOption}
//                   onChange={(e) => setSelectedOption(e.target.value)}
//                 >
//                   <option value="">Select a career option</option>
//                   {careerOptions.map((option, index) => (
//                     <option key={index} value={option}>
//                       {option}
//                     </option>
//                   ))}
//                 </select>
//                 <select
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                   value={selectedPriority}
//                   onChange={(e) => setSelectedPriority(e.target.value)}
//                 >
//                   <option value="">Select a priority</option>
//                   {availablePriorities.map((value, index) => (
//                     <option key={index} value={value.toString()}>
//                       {value}
//                     </option>
//                   ))}
//                 </select>
//                 <button
//                   onClick={handleOptionChange}
//                   className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-2 rounded-md mt-4"
//                 >
//                   Add Career Option
//                 </button>

//                 {selectedPriorities.length === 10 && (
//                   <Link to="/test">
//                     <button
//                       onClick={sendCareerOptionsToBackend}
//                       className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-2 rounded-md mt-4"
//                     >
//                       Submit Career Options
//                     </button>
//                   </Link>
//                 )}
//               </div>
//             )}

//             {selectedPriorities.length > 0 && (
//               <div className="mt-8">
//                 <h2 className="text-2xl font-bold mb-4">Selected Career Options</h2>
//                 <div className="grid grid-cols-3 gap-4 pl-6">
//                   <div className="font-semibold">Name</div>
//                   <div className="font-semibold">Priority</div>
//                   <div className="font-semibold">Actions</div>
//                   {selectedPriorities
//                     .sort((a, b) => a.priority - b.priority) // Sort by priority
//                     .map((item, index) => (
//                       <React.Fragment key={index}>
//                         <div>{item.option}</div>
//                         <div>
//                           {item.priority}
//                         </div>
//                         <div>
//                           <button
//                             onClick={() => handleRemoveOption(index)}
//                             className="text-red-500 hover:text-red-700"
//                           >
//                             Remove
//                           </button>
//                         </div>
//                       </React.Fragment>
//                     ))}
//                 </div>
//               </div>
//             )}


//           </div>
//         </div>
//       )}
//       </div>
//       </div>
//     </div>
//   );
// }

// export default CareerOptions;