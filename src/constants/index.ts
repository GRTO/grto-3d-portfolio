import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  evolution,
  threejs,
  zoovu,
  ex2,
  mobx,
  tektonLabs,
  gnbit,
  zoovuProject,
  searchEngineProject,
  avatarLookingProject,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "3D Web Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Enthusiastic 3D Modeler",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Mobx",
    icon: mobx,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Senior frontend engineer",
    company_name: "Evoluion",
    icon: evolution,
    iconBg: "#383E56",
    date: "Sep 2023 - Until now",
    points: [
      "Developed new features for different variants of the Blackjack game.",
      "Animated 3D scenes for different casino brandings.",
      "Created scripts to reduce the size of 3D assets improving the loading game experience.",
      "Animated 3D scenes for different casino brandings.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Coordinated with the business manager and UX Designers to define new features.",
    ],
  },
  {
    title: "Senior Frontend Engineer | Freelance",
    company_name: "Zoovu",
    icon: zoovu,
    iconBg: "#E6DEDD",
    date: "Nov 2020 - Aug 2022",
    points: [
      "Responsible for creating the frontend architecture from scratch of the new reporting dashboard.",
      "Improved the architecture of the frontend side of the application by adding a mocked service layer that simulates the backend services, thus reducing the delivery time to the product manager and QA team by 60%, adding any possible feedback in the early stages of the project without having all backend services ready.",
    ],
  },
  {
    title: "Full stack Engineer",
    company_name: "EX2 Outcoding",
    icon: ex2,
    iconBg: "#383E56",
    date: "Dec 2019 - Aug 2022",
    points: [
      "Work as a consultant for SparkCognition (USA)",
      "Responsible for guiding the team into new features. Creating and integrating new micro-frontend.",
      "Reduced the time response of views with heavy charts by 99% by redesigning the service layer from scratch where we had been doing all the transformations..",
      "Incorporated unit tests guidelines and best practices in the Core UI library, thus reducing the boilerplate code by 60%, improving the onboarding process and test standards",
    ],
  },
  {
    title: "Frontend developer",
    company_name: "Tekton Labs",
    icon: tektonLabs,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - Dec 2019",
    points: [
      "Implemented an interactive form based on user needs, thus reducing the time spent by the user configuring the services by 99%, improving the user experience when filling out the services configuration form.",
      "Reduced the time to obtain information about the user's prescription by 80% by redesigning the web application following the UI/UX team requirements.",
      "Responsible for the integration of the Linux Foundation clients’ social media information with the existing platform",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Team Lead Frontend engineer",
    company_name: "GNBIT",
    icon: gnbit,
    iconBg: "#E6DEDD",
    date: "Aug 2017 - Jan 2019",
    points: [
      "Led the frontend team. Responsible for analyzing user requirements for the platform that manages the budget of the UNAM university.",
      "Improved the platform response time by 90% by restructuring the Redux state management of the web application and improving the way RxJs has been used.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export const blueGradientText = "bg-gradient-to-r from-blue-500 to-blue-400 text-transparent bg-clip-text";
export const greenGradientText = "bg-gradient-to-r from-green-500 to-green-400 text-transparent bg-clip-text";
export const pinkGradientText = "bg-gradient-to-r from-pink-500 to-pink-400 text-transparent bg-clip-text";

const projects = [
  {
    name: "Zoovu Challenge",
    description:
      "It is a mini game when we have a timer running a we need to drag and drop the 5 letters in order to form the word Zoovu.",
    tags: [
      {
        name: "react",
        color: blueGradientText,
      },
      {
        name: "mobx",
        color: greenGradientText,
      },
      {
        name: "styled-components",
        color: pinkGradientText,
      },
    ],
    image: zoovuProject,
    source_code_link: "https://github.com/GRTO/zoovu-challenge",
  },
  {
    name: "Search engine",
    description:
      "In this project I created a scalable search engine. It is using behind the scene some search engines like google and bing. I added a way to handle new services for search engines.",
    tags: [
      {
        name: "react",
        color: blueGradientText,
      },
      {
        name: "redux",
        color: greenGradientText,
      },
      {
        name: "material UI",
        color: pinkGradientText,
      },
    ],
    image: searchEngineProject,
    source_code_link: "https://github.com/GRTO/search-engine?tab=readme-ov-file",
  },
  {
    name: "Avatar Looking",
    description:
      "In this project I render particles using canvas api reacting to the mouse position. Also, I used ThreeJs to move the 3D model to follow the mouse's position",
    tags: [
      {
        name: "react",
        color: blueGradientText,
      },
      {
        name: "three js",
        color: greenGradientText,
      },
      {
        name: "canvas 2D",
        color: pinkGradientText,
      },
    ],
    image: avatarLookingProject,
    source_code_link: "https://github.com/GRTO/avatar-looking",
  },
];

export { services, technologies, experiences, testimonials, projects };
