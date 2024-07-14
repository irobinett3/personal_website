import cinepolis from '../assets/cinepolis.jpg'
import django from '../assets/django.png'
import nd from '../assets/nd.png'
import oaks from '../assets/oaks.jpg'
import adec from '../assets/adec.png'
import aws from '../assets/aws.png'
import c from '../assets/c.png'
import flask from '../assets/flask.png'
import git from '../assets/git.png'
import html from '../assets/html.png'
import irishsat from '../assets/irishsat.png'
import javascript from '../assets/javascript.png'
import linux from '../assets/linux.jpg'
import nodejs from '../assets/nodejs.png'
import pytorch from '../assets/pytorch.png'
import react from '../assets/react.png'
import threejs from '../assets/threejs.png'
import python from '../assets/python.jpg'
import ndlug from '../assets/ndlug.jpg'
import postgresql from '../assets/postgresql.png'
import chatbot from '../assets/chatbot.png'
import linkedin from '../assets/linked.webp'
import tensorflow from '../assets/tensorflow.png'
export { linkedin };

export { threejs, python, postgresql }

export { git };

export const experiences = [
  {
    title: "Undergraduate Research Assistant",
    company_name: "University of Notre Dame",
    icon: nd,
    iconBg: "#383E56",
    date: "May 2024 - Aug 2024",
    points: [
      "Working closely with Natural Language Processing specialist Dr. Collin McMillan to produce a Flask app that searches databases for job search companies based on natural language queries",
      "Created and manipulated several different databases in PostgreSQL to manage sensitive data for hundreds of thousands of individuals",
      "Developed word embeddings for each person’s data as well as each given query, and differentiated good results for a query based on the cosine similarity for each person’s word embedding",
      "Used the OpenAI API to parse out factors from every query such as the location, revenue, and employee range",
      "Generated a search algorithm that sorted based on a variety of factors including cosine similarity, location, revenue range, and company",
      "Developed a flask application that took a query, parsed a SQL database, and performed search to display relevant results to the query and offer Excel download with necessary information",
    ],
  },
  {
    title: "Food Server",
    company_name: "Cinepolis Luxury Cinemas",
    icon: cinepolis,
    iconBg: "#E6DEDD",
    date: "May 2023 - Aug 2023",
    points: [
      "Managed hundreds of customers daily, while offering stellar service and satisfaction in a luxury restaurant and movie theater environment",
      "Strong interpersonal skills for interacting with guests, employees, and management, while ensuring an indulging experience to return customers and receiving a 95% customer satisfaction rating",
      "Worked with Vista Point of Sale System, in addition to having strong mathematical, analytical, and problem-solving skills",
    ],
  },
  {
    title: "Peer Tutor",
    company_name: "Oaks Christian School",
    icon: oaks,
    iconBg: "#383E56",
    date: "Nov 2019 - May 2022",
    points: [
      "Provided comprehensive tutoring services to students in STEM subjects",
      "Tutored students whose first language was not English and fostered their academic growth",
    ],
  },
];



  export const technologies = [
    {
      name: "Django",
      icon: django,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Linux",
      icon: linux,
    },
    {
      name: "NodeJS",
      icon: nodejs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "PyTorch",
      icon: pytorch,
    },
    {
      name: "React",
      icon: react,
    },
    {
      name: "Threejs",
      icon: threejs,
    },
    {
      name: "PostgreSQL",
      icon: postgresql
    }
  ];
  
  
  export const campus_involvement = [
    {
      name: "ADEC Website Development",
      description:
        "Assembled Notre Dame students to remodel the website of ADEC, a company managing adults with disabilities",
      tags: [
        {
          name: "Project Leadership",
          color: "blue-text-gradient",
        },
        {
          name: "Web Development",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: adec,
      source_code_link: "https://github.com/",
    },
    {
      name: "IrishSAT Iris Project",
      description:
        "Wrote thousands of lines of Python code to generate balloon trajectory. Developed several UIs for ease of use",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "gui",
          color: "green-text-gradient",
        },
        {
          name: "tkinter",
          color: "pink-text-gradient",
        },
      ],
      image: irishsat,
      source_code_link: "https://github.com/",
    },
    {
      name: "Notre Dame Linux Users Group",
      description:
        "Engaged in meetings for Notre Dame Linux Users Group, aimed at developing the skills of young Computer Science Students at Notre Dame",
      tags: [
        {
          name: "Linux",
          color: "blue-text-gradient",
        },
        {
          name: "Visual Studio Code",
          color: "green-text-gradient",
        },
        {
          name: "Open Source Text Editors",
          color: "pink-text-gradient",
        },
      ],
      image: ndlug,
      source_code_link: "https://github.com/",
    },
  ];
  
  export const projects = [
    {
      name: "Premier League Fantasy Football App",
      description:
        "Developed application allowing users create their own fantasy premier league teams",
      tags: [
        {
          name: "aws",
          color: "orange-text-gradient",
        },
        {
          name: "sql",
          color: "blue-text-gradient",
        },
        {
          name: "springboot",
          color: "green-text-gradient",
        },
      ],
      image: aws,
      source_code_link: "https://github.com/",
    },
    {
      name: "Chess Machine Learning Model",
      description:
        "Produced machine learning model that predicts the outcome of chess games",
      tags: [
        {
          name: "tensorflow",
          color: "red-text-gradient",
        },
        {
          name: "databases",
          color: "green-text-gradient",
        },
        {
          name: "sql",
          color: "pink-text-gradient",
        },
      ],
      image: tensorflow,
      source_code_link: "https://github.com/",
    },
    {
      name: "NodeJS Chat Bot",
      description:
        "Used the OpenAI API to create a chatbot hosted on NodeJS.",
      tags: [
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "back-end",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "orange-text-gradient",
        },
      ],
      image: nodejs,
      source_code_link: "https://github.com/",
    },
  ];
  
  export const services = [
    {
      title: "Artificial Intelligence Engineer",
      icon: pytorch,
    },
    {
      title: "Software Developer",
      icon: react,
    },
    {
      title: "Backend Developer",
      icon: nodejs,
    },
  ];

  export const navLinks = [
    {
      id: "Intro",
      title: "Intro",
    },
    {
      id: "Chatbot",
      title: "Chatbot",
    },
    {
      id: "Timeline",
      title: "Experience",
    },
    {
      id: "Projects",
      title: "Projects",
    },
    {
      id: "CampusInvolvement",
      title: "Campus Involvement"
    },
    {
      id: "Skills",
      title: "Skills",
    },
    {
      id: "Contact",
      title: "Contact",
    },

  ];