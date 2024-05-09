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
  docker,
  meta,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  staff,
  meWithYou,
  angular,
  aws,
  csharp,
  sql,
  nestjs,
  mysql,
  udigital,
  astro
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
  {
    // id: "language",
    // title: "Language",
    // image: "../assets/logoTach.png"
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: backend,
  },
  {
    title: "React Native / Ionic Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
  {
    title: 'Project Manager',
    icon: mobile,
  },
  {
    title: "AWS",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Nest JS",
    icon: nestjs,
  },
  {
    name: "Astro",
    icon: astro,
  },
];

const experiences = [
  {
    title: "Fullstack Web Developer",
    company_name: "Grupo Staff",
    icon: staff,
    iconBg: "#FFFFFF",
    date: "March 2022 - June 2023",
    points: [
      "Implemented web solutions for SAT 4.0 billing, with Angular for frontend interactions, NodeJS for backend services and C# for business logic and system integrations.",
      "Using Azure DevOps for end-to-end software lifecycle management, including agile planning, version control with Git and deploying Node.js projects to Azure Cloud Services.",
      "Creating mobile applications using the latest in technology frameworks, Ionic and React. Our mastery of Ionic enables us to deliver versatile hybrid apps that seamlessly blend the best of web and native functionalities, offering a consistent user experience across both Android and iOS platforms and the projects are for México Billing & schools.",
    ],
  },
  {
    title: "Fullstack Web Developer",
    company_name: "MeWithYouIt",
    icon: meWithYou,
    iconBg: "#FFFFFF",
    date: "June 2023 - Present",
    points: [
      "Actively managed and coded for multiple projects, balancing project leadership with hands-on programming. Demonstrated adaptability and technical proficiency in both managerial and development.",
      "Spearheaded the development and ongoing maintenance of responsive web and mobile applications. Utilized a robust tech stack including NestJS, Angular, Node.js, and Ionic.",
      "Designed and implemented Docker architecture for projects, enhancing deployment efficiency and scalability.",
      "I specialize in developing high-performance mobile apps for festivals and large events using the Ionic framework with Angular.",
      "AWS managed and optimized services, including EC2 instances, Lambda functions, RDS databases, IAM Security policies and S3 buckets. Developed and deployed scalable secure to ensure high availability cloud infrastructure security."
    ],
  },
  {
    title: "Founder UDigital Business",
    company_name: "UDigital Business",
    icon: udigital,
    iconBg: "#FFFFFF",
    date: "Jan 2024 - Present",
    points: [
      "As the founder of a thriving software development company, I have successfully spearheaded the delivery of multiple innovative projects that have significantly impacted various industries. With a hands-on approach to every facet of the business, I have played a pivotal role in all phases of development—from ideation and coding to deployment. Beyond the technical aspects, my role is multifaceted, encompassing critical business functions such as marketing and sales.",
    ],
  }
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

const projects = [
  {
    name: "ASWISC-IV",
    description:
      "Automated Solution WISC-IV, is a progressive web application that streamlines the WISC-IV test for psychologists while providing additional functionalities for managing their patients, and more.",
    tags: [
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js & Express.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Neufeld Marketplace & CRM",
    description:
      "This marketplace is seamlessly connected to a CRM. It provides a comprehensive admin panel for managing orders, tracking sales, and overseeing inventory, offering an integrated and efficient experience for both the store's administrators and customers.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Fiscalia Web",
    description:
      "A comprehensive project that manages the tracking of individual identification, cases, and documents for law enforcement. It provides an extensive platform to streamline and organize case handling, offering efficient document management and case monitoring for improved investigative workflows.",
    tags: [
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
      {
        name: "NestJS",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Activatee Plus",
    description:
      "This mobile app, designed for a church, offers an intuitive platform for accessing Bible information. It provides easy navigation, allowing users to explore scriptures and gain insights seamlessly, making it an essential resource for church members seeking spiritual growth and understanding.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Guaycuras Travel",
    description:
      "This custom CRM, created for a travel agency called Guaycuras Travel, streamlines the management of flights, trips, clients, and prospects. Tailored to the agency's specific needs, it offers an intuitive platform to oversee bookings, track customer journeys, and nurture prospects, delivering a comprehensive solution to enhance client satisfaction and operational efficiency.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "NestJS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Banking web app ",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "UDigital Business",
    description:
      "The Udigital Business landing page provides a clear and engaging overview of the company's services, emphasizing its digital expertise. With a modern design, it showcases the firm's innovative solutions and success stories, creating a compelling first impression that helps visitors understand Udigital Business's value proposition and unique offerings.",
    tags: [
      {
        name: "Astro",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };