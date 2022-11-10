import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Experienced Front-End Developer with solid programming knowledge and
          proven experience in delivering robust, scalable, and responsive
          front-end solutions. Solid understanding of Object-Oriented
          Programming (OOP), design patterns, and Agile/Scrum Development. ·
          Skills Highlight: HTML, CSS, SCSS, JavaScript, DOM APIs, Express,
          React.js, Node.js, MySQL, EmailJS, Chart.JS, Git Bash, GitHub, Ajax,
          JSON, JIRA, Visual Studio, RESTful APIs, MS Office. · High technical
          aptitude with the ability to quickly ramp up against a high learning
          curve. · Excellent communication & interpersonal skills with proven
          ability to work with cross-functional teams.
        </p>

        <br />
      </div>
    </div>
  );
};

export default About;
