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
 

export { chatbot };

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
      "Developing AI-powered job search technologies for job search companies.",
      "Consistently meeting with Dr. Collin McMillan to develop Flask application to be used to search unprocessed database by job search companies .",
      "Implementing word embeddings and other search techniques incoporating AI to process location, industry, and a variety of factors.",
      "Participating in code reviews and providing constructive feedback to my professor.",
    ],
  },
  {
    title: "Food Server",
    company_name: "Cinepolis Luxury Cinemas",
    icon: cinepolis,
    iconBg: "#E6DEDD",
    date: "May 2023 - Aug 2023",
    points: [
      "Managed hundreds of customers per day working as a server at a luxury restaurant and movie theater.",
      "Handled food and beverage orders from customers and cleaned theaters daily",
      "Collaborated with other servers to produce optimal customer experience",
    ],
  },
  {
    title: "Peer Tutor",
    company_name: "Oaks Christian School",
    icon: oaks,
    iconBg: "#383E56",
    date: "Nov 2019 - May 2022",
    points: [
      "Provided Tutoring for High School students in STEM subjects",
      "Assisted many students to whom English was not first language",
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
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "WordPress",
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
          name: "django",
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
        "Web-based platform athat allows users to create a Fantasy Premier League Team",
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
          name: "nodejs",
          color: "green-text-gradient",
        },
      ],
      image: aws,
      source_code_link: "https://github.com/",
    },
    {
      name: "Machine Learning ",
      description:
        "Produced machine learning model that predicted the results of chess games",
      tags: [
        {
          name: "pytorch",
          color: "red-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: pytorch,
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
          name: "reactjs",
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