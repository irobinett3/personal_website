import cinepolis from '../assets/cinepolis.jpg'
import django from '../assets/django.png'
import rappo from '../assets/rappo.jpg'
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
import oigetit from '../assets/oigetit.jpg'
export { linkedin };

export { threejs, python, postgresql }

export { git };

export const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Rappo",
    icon: rappo,
    iconBg: "#383E56",
    date: "May 2024 - Aug 2024",
    points: [
      "Enhanced Rappo’s scraping and data preprocessing algorithms, boosting data generation efficiency by 23%",
	    "Architecting and fine-tuning PyTorch CNNs using hyperparameter tuning and loss function optimization to rank engineering champions and match them with startup founders",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "University of Notre Dame",
    icon: nd,
    iconBg: "#383E56",
    date: "Aug 2024 - Present",
    points: [
      "Optimized machine learning algorithms for molecular classification using PyTorch and TensorFlow, achieving 90%+ accuracy",
	    "Co-authoring an open-source book Hands-on Data Science for Chemists with Dr. Xiangliang Zhang",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Oigetit.ai",
    icon: oigetit,
    iconBg: "#383E56",
    date: "Oct 2024 - Nov 2024",
    points: [
      "Developing unit tests for distributed, multi-tiered systems, improving QA efficiency and ensuring reliable CI/CD deployments",
	    "Collaborating with cross-disciplinary teams to optimize the software development lifecycle, leveraging Agile methodologies",
    ],
  },
  {
    title: "Software Developer",
    company_name: "University of Notre Dame",
    icon: nd,
    iconBg: "#383E56",
    date: "May 2024 - Aug 2024",
    points: [
      "Deployed a Flask-based AI-driven SQL search engine integrated with OpenAI’s GPT-4o that cut processing time by 97%",
      "Normalized relational databases in PostgreSQL for over 400,000 individuals, wrote efficient SQL queries for data manipulation",
	    "Optimized backend REST API using natural language processing to analyze a variety of factors including location and company, dynamically generating word embeddings for improved results",
	    "Enhanced JavaScript frontend to optimize user interface performance and interactivity for data-intensive user workflows",
      "Built an automated testing and debugging framework using Java and Jenkins pipelines, reducing troubleshooting time by 30% and ensuring robust CI/CD deployment for AI-driven applications",
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
      name: "React AI Website Generator",
      description:
        "Developing application that uses artifical intelligence to create react websites for users",
      tags: [
        {
          name: "aws",
          color: "orange-text-gradient",
        },
        {
          name: "cloud_computing",
          color: "blue-text-gradient",
        },
        {
          name: "django",
          color: "green-text-gradient",
        },
      ],
      image: aws,
      source_code_link: "https://github.com/irobinett3/website_developer",
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
      source_code_link: "https://github.com/irobinett3/chess_model",
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
      source_code_link: "https://github.com/irobinett3/nodejs_chat_bot",
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