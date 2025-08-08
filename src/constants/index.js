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
import mitll from '../assets/mitll.png'

export { linkedin };

export { threejs, python, postgresql }

export { git };

export const experiences = [
  {
    title: "Computer Vision Research Assistant",
    company_name: "University of Notre Dame",
    icon: nd,
    iconBg: "#383E56",
    date: "Aug 2025 - Present",
    points: [
      "Implementing SAM 2-based label-propagation for real-time medical object detection under Dr. Danny Chen",
    ],
  },
  {
    title: "Artificial Intelligence Engineer Intern",
    company_name: "MIT Lincoln Laboratory",
    icon: mitll,
    iconBg: "#383E56",
    date: "May 2025 - Aug 2025",
    points: [
      "Overhauled ML pipeline by refactoring data splits, features, and model architecture, reducing target-metric error by 75%",
      "Engineered a scalable industrial building classification pipeline from OpenStreetMap data, achieving 87% F1-Score on a >150k sample test set, reducing error in target predictions by 50%",
      "Architected novel neural network-based graph transformer architecture for intuitive model understanding of building classification, improving recall on minority classes by 25% from 60% to ~75%",
      "Automated monthly retraining workflows on MITLL’s supercomputing GPU cluster, ensuring continuous global performance"
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Rappo",
    icon: rappo,
    iconBg: "#383E56",
    date: "Oct 2024 - May 2025",
    points: [
      "Containerized microservices with Docker and deployed via AWS EC2 Auto Scaling, achieving 99.9% production uptime",
      "Developed an end-to-end ML pipeline for prospect mining, feature engineering, and Siamese neural network training, reducing outreach time by 80%",
      "Automated data ingestion and model retraining schedules for weakly refreshes using cron jobs and Python scripting"
    ],
  },
  {
    title: "Machine Learning Research Assistant",
    company_name: "University of Notre Dame",
    icon: nd,
    iconBg: "#383E56",
    date: "Aug 2024 - Jan 2025",
    points: [
      "Designed machine learning algorithms for chemistry using PyTorch, TensorFlow, yielding accuracy scores exceeding 90%",
      "Co-authored an open-source book, Hands-on Data Science for Chemists, with Dr. Xiangliang Zhang",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "University of Notre Dame",
    icon: nd,
    iconBg: "#383E56",
    date: "May 2024 - Aug 2024",
    points: [
      "Deployed a Flask-based AI-powered SQL search engine integrated with OpenAI’s GPT-4o, cutting runtime by 97%",
      "Created normalized PostgreSQL databases for over 400,000 individuals, writing efficient PostgreSQL schema and queries to support data retrieval and manipulation, ensuring accurate and efficient performance",
      "Optimized backend search API using NLP techniques (word embeddings, entity recognition) to optimize query relevance",
      "Enhanced JavaScript frontend to optimize user experience and functionality, integrated with Jenkins for seamless CI/CD",
      "Automated testing and debugging framework with Java scripts to reduce troubleshooting by 30%",
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
        "Oversaw a team of 5 students to rebuild ADEC’s website, redesigning frontend UX using JavaScript, HTML, and CSS"
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
        "Created a Python script that parsed weather data and calculated balloon trajectory, improving prediction accuracy by over 20%. Led UI development to process balloon data at runtime, showcased to NASA for project demos"
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