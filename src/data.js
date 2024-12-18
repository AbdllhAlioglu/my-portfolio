import {
  faReact,
  faHtml5,
  faJs,
  faPython,
  faJava,
} from "@fortawesome/free-brands-svg-icons";

import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export const projectsData = [
  {
    name: "Date Counter",
    description:
      "A tool to calculate and display the difference between dates.",
    photoName: "/images/date-counter.png",
    url: "https://abdllhalioglu.github.io/date-counter/",
    source: "https://github.com/AbdllhAlioglu/date-counter",
  },
  {
    name: "UsePopCorn",
    description:
      "A movie database app using the OMDb API for fetching details.",
    photoName: "/images/usePopCorn.png",
    url: "https://abdllhalioglu.github.io/usePopCorn",
    source: "https://github.com/AbdllhAlioglu/usePopCorn",
  },
  {
    name: "Fikirtepe",
    description: "A web app showcasing construction projects with summaries.",
    photoName: "/images/Fikirtepe.png",
    url: "https://abdllhalioglu.github.io/Fikirtepe/",
    source: "https://github.com/AbdllhAlioglu/Fikirtepe",
  },
  {
    name: "Pizza-Menu",
    description: "An interactive menu displaying various pizzas with details.",
    photoName: "/images/Pizza.png",
    url: "https://abdllhalioglu.github.io/pizza-menu/",
    source: "https://github.com/AbdllhAlioglu/pizza-menu",
  },
  {
    name: "Javascript Quiz",
    description:
      "A quiz application that tests your knowledge of JavaScript concepts and syntax.",
    photoName: "/images/quiz.png",
    url: "https://javascript-quiz-psi.vercel.app/",
    source: "https://github.com/AbdllhAlioglu/Javascript-Quiz",
  },
  {
    name: "Electro Shop",
    description: "A simple e-commerce app built with React and Redux.",
    photoName: "/images/Electro.png",
    url: "https://electro-shop-cyan.vercel.app/",
    source: "https://github.com/AbdllhAlioglu/electro-shop",
  },
];

export const skillsData = [
  {
    name: "React",
    description:
      "Proficient in building modern, responsive, and user-friendly web applications with React.",
    icon: faReact,
  },
  {
    name: "HTML & CSS",
    description:
      "Skilled in building responsive layouts and designing user interfaces using HTML5 and CSS3.",
    icon: faHtml5,
  },
  {
    name: "JavaScript",
    description:
      "Experienced in writing clean, modular, and efficient code using JavaScript for front-end and back-end development.",
    icon: faJs,
  },
  {
    name: "Python",
    description:
      "Experienced in writing clean and efficient code for various applications and automations using Python.",
    icon: faPython,
  },
  {
    name: "Java",
    description:
      "Proficient in Java programming for building robust and scalable applications.",
    icon: faJava,
  },
  {
    name: "SQL",
    description:
      "Experienced in querying and managing databases efficiently using SQL for data-driven applications.",
    icon: faDatabase,
  },
];

export const certificationsData = [
  {
    title: "Introduction to Programming with Java",
    institution: "BTK Akademi",
    date: "September 2022",
    description:
      "Gained foundational knowledge in Java programming and object-oriented concepts.",
    pdf: "/pdfs/Java.pdf", // PDF'nin yolu
  },

  {
    title: "Git Github Workshop",
    institution: "techcareer",
    date: "August 2024",
    description:
      "Introduced version control with Git and collaboration through GitHub, covering key concepts like branching and merging.",
    pdf: "/pdfs/Git.pdf",
  },
  {
    title: "Version Controls: Git ve GitHub",
    institution: "BTK Akademi",
    date: "July 2024",
    description:
      "Learned the fundamentals of version control using Git and collaborative workflows with GitHub.",
    pdf: "/pdfs/Gitbtk.pdf",
  },

  {
    title: "Complete Java Developer Course",
    institution: "Udemy",
    date: "March 2022",
    description:
      "Covered Java programming fundamentals, object-oriented principles, and application development best practices.",
    pdf: "/pdfs/JavaUdemy.pdf",
  },
];
