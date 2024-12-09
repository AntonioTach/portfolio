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
  astro,
  ceti,
  aswisciv,
  udb,
  consultores,
  neufeld,
  fisweb,
  activatee,
  datacode,
  crucigrama,
  maphop,
  dental,
  guaycuras,
  optocenter,
  museum,
  jomers,
  cine,
  hipotk,
  financepro,
} from "../assets";

export const iconEnum = {
  GITHUB: "GITHUB",
  LINK: "LINK"
}

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
    id: "projects",
    title: "Projects",
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
    title: "Freelancer",
    company_name: "UDigital Business",
    icon: udigital,
    iconBg: "#FFFFFF",
    date: "May 2024 - Present",
    points: [
      "Developed a custom CRM system to streamline client operations, with integrations for analytics and automation.",
      "Built responsive, high-conversion landing pages using A/B testing and best UX practices across devices using Figma and Astro.",
      "Utilized Angular, React, Node.js, and NestJS for modular, scalable CRM architecture with seamless system integration.",
      "Optimized deployments with Docker and CI/CD pipelines for consistent and efficient updates.",
      "Managed secure AWS backend with EC2, S3, and IAM, ensuring data integrity and high availability."
    ]
  },
  {
    title: "Fullstack Web Developer",
    company_name: "MeWithYouIt",
    icon: meWithYou,
    iconBg: "#FFFFFF",
    date: "June 2023 - May 2024",
    points: [
      "Actively managed and coded for multiple projects, balancing project leadership with hands-on programming. Demonstrated adaptability and technical proficiency in both managerial and development.",
      "Spearheaded the development and ongoing maintenance of responsive web and mobile applications. Utilized a robust tech stack including NestJS, Angular, Node.js, and Ionic.",
      "Designed and implemented Docker architecture for projects, enhancing deployment efficiency and scalability.",
      "I specialize in developing high-performance mobile apps for festivals and large events using the Ionic framework with Angular.",
      "AWS managed and optimized services, including EC2 instances, Lambda functions, RDS databases, IAM Security policies and S3 buckets. Developed and deployed scalable secure to ensure high availability cloud infrastructure security."
    ],
  },
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
    title: "Student",
    company_name: "School CETI & CUCEI",
    icon: ceti,
    iconBg: "#FFFFFF",
    date: "March 2016 - June 2022",
    points: [
      "Started my software development journey, focusing on programming logic and foundational skills.",
      "Developed a strong understanding of programming logic and problem-solving techniques.",
      "Gained experience with web projects, building interactive and responsive applications.",
      "Committed to continuous learning, staying updated on the latest web and mobile development technologies."
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

const projects = [
  {
    name: "ASWISC-IV",
    description:
      "Automated Solution WISC-IV, is a progressive web application that streamlines the WISC-IV test for psychologists while providing additional functionalities for managing their patients, and more.",
    tags: [
      {
        name: "skill-icons:angular-dark",
      },
      {
        name: "skill-icons:nodejs-dark",
      },
      {
        name: "skill-icons:expressjs-dark",
      },
      {
        name: "skill-icons:mysql-dark",
      },
      {
        name: "skill-icons:mongodb",
      },
      {
        name: "skill-icons:javascript",
      },
      {
        name: "skill-icons:docker",
      },
      {
        name: "skill-icons:aws-dark",
      }
    ],
    image: aswisciv,
    source_code: [
      {
        source_code_link: "https://github.com/AntonioTach/Frontend-ASWISC-IV",
        icon: iconEnum.GITHUB
      },
      {
        source_code_link: "https://github.com/AntonioTach/server-ASWISC-IV",
        icon: iconEnum.GITHUB
      }
    ],
  },
  {
    name: "Consultores Occidente CRM",
    description:
      "Consultores de Occidente was one of my largest projects, which was a custom CRM that encompassed all the company processes as well as client relationships.",
    tags: [
      {
        name: "skill-icons:angular-dark",
      },
      {
        name: "skill-icons:nestjs-dark",
      },
      {
        name: "skill-icons:prisma",
      },
      {
        name: "skill-icons:mysql-dark",
      },
      {
        name: "skill-icons:mongodb",
      },
      {
        name: "skill-icons:docker",
      },
      {
        name: "skill-icons:aws-dark",
      },
      {
        name: "skill-icons:typescript",
      }
    ],
    image: consultores,
    source_code: [
      {
        source_code_link: "https://consultores-landing-demo.web.app/",
        icon: iconEnum.LINK
      }
    ],
  },
  {
    name: "Finance Pro",
    description:
      "Finance Pro is a finance management app with modern banking platform. Connecting all your accounts, cards, and bills in one place, it provides a comprehensive overview of your financial health and helps you make informed decisions.",
    tags: [
      {
        name: "skill-icons:react-dark",
      },
      {
        name: "skill-icons:expressjs-dark",
      },
      {
        name: "skill-icons:tailwindcss-dark",
      },
      {
        name: "skill-icons:mongodb",
      },
      {
        name: "skill-icons:typescript",
      }
    ],
    image: financepro,
    source_code: [
      {
        source_code_link: "https://github.com/AntonioTach/finance-pro",
        icon: iconEnum.GITHUB,
      },
    ],
  },
  {
    name: "Neufeld Marketplace & CRM",
    description:
      "This marketplace is seamlessly connected to a CRM. It provides a comprehensive admin panel for managing orders, tracking sales, and overseeing inventory, offering an integrated and efficient experience for both the store's administrators and customers.",
    tags: [
      {
        name: "skill-icons:laravel-dark",
      },
      {
        name: "skill-icons:azure-dark",
      },
      {
        name: "skill-icons:dotnet",
      },
      {
        name: "skill-icons:mysql-dark",
      },
      {
        name: "skill-icons:mongodb",
      },
      {
        name: "skill-icons:php-dark",
      }
    ],
    image: neufeld,
    source_code: [
      {
        source_code_link: "https://neufeld.com.mx/",
        icon: iconEnum.LINK,
      },
      {
        source_code_link: "https://portalfacturacionneufeld.azurewebsites.net/",
        icon: iconEnum.LINK
      }
    ],
  },
  {
    name: "Fiscalia Web",
    description:
      "This was the project for the Baja California Prosecutor’s Office that I worked on as a product owner, where we migrated an obsolete system to new technologies and implementations to cover the entire criminal system. Note: The platform cannot be accessed as it is for internal use only.",
    tags: [
      {
        name: "skill-icons:angular-dark",
      },
      {
        name: "skill-icons:nestjs-dark",
      },
      {
        name: "skill-icons:prisma",
      },
      {
        name: "skill-icons:aws-dark",
      },
      {
        name: "skill-icons:mysql-dark",
      },
      {
        name: "skill-icons:docker",
      },
      {
        name: "skill-icons:mongodb",
      },
      {
        name: "skill-icons:typescript",
      }
    ],
    image: fisweb,
    source_code: [

    ],
  },
  // {
  //   name: "IPH",
  //   description:
  //     "A comprehensive project that manages the tracking of individual identification, cases, and documents for law enforcement. It provides an extensive platform to streamline and organize case handling, offering efficient document management and case monitoring for improved investigative workflows.",
  //   tags: [
  //     {
  //       name: "Angular",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "Node.js & Express.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code: [
  //     {
  //       source_code_link: "https://github.com/AntonioTach/Frontend-ASWISC-IV",
  //       icon: iconEnum.GITHUB
  //     },
  //     {
  //       source_code_link: "https://github.com/AntonioTach/server-ASWISC-IV",
  //       icon: iconEnum.GITHUB
  //     }
  //   ],
  // },
  {
    name: "Activatee Plus",
    description:
      "This mobile app, designed for a church, offers an intuitive platform for accessing Bible information. It provides easy navigation, allowing users to explore scriptures and gain insights seamlessly, making it an essential resource for church members seeking spiritual growth and understanding.",
    tags: [
      {
        name: "skill-icons:react-dark",
      },
      {
        name: "skill-icons:androidstudio-dark",
      },
      {
        name: "skill-icons:mongodb"
      },
      {
        name: "skill-icons:javascript",
      }
    ],
    image: activatee,
    source_code: [
      {
        source_code_link: "https://play.google.com/store/apps/details?id=com.activateeplus&hl=es_MX",
        icon: iconEnum.LINK
      },
      {
        source_code_link: "https://apps.apple.com/mx/app/activatee-plus/id6449203156?l=en-GB",
        icon: iconEnum.LINK
      }
    ],
  },
  {
    name: "Guaycuras Travel",
    description:
      "This custom CRM, created for a travel agency called Guaycuras Travel, streamlines the management of flights, trips, clients, and prospects. Tailored to the agency's specific needs, it offers an intuitive platform to oversee bookings, track customer journeys, and nurture prospects, delivering a comprehensive solution to enhance client satisfaction and operational efficiency.",
    tags: [
      {
        name: "skill-icons:angular-dark",
      },
      {
        name: "skill-icons:nestjs-dark",
      },
      {
        name: "skill-icons:prisma",
      },
      {
        name: "skill-icons:mysql-dark",
      },
      {
        name: "skill-icons:mongodb",
      },
      {
        name: "skill-icons:docker",
      },
      {
        name: "skill-icons:aws-dark",
      },
      {
        name: "skill-icons:typescript",
      },
      {
        name: "skill-icons:figma-dark",
      },
      {
        name: "skill-icons:tailwindcss-dark",
      }
    ],
    image: guaycuras,
    source_code: [

    ],
  },
  {
    name: "Hipotk",
    description:
      "A web and mobile application for mortgage sales for Hir Casa, a real estate company, which also includes a calculator to determine credit capacity through with a friendly chat.",
    tags: [
      {
        name: "skill-icons:angular-dark",
      },
      {
        name: "skill-icons:nodejs-dark",
      },
      {
        name: "skill-icons:mysql-dark",
      },
      {
        name: "skill-icons:mongodb",
      },
      {
        name: "skill-icons:docker",
      },
      {
        name: "skill-icons:aws-dark",
      },
      {
        name: "skill-icons:typescript",
      },
    ],
    image: hipotk,
    source_code: [
      {
        source_code_link: "https://www.hipotk.com/",
        icon: iconEnum.LINK
      }
    ],
  },
  {
    name: "UDigital Business",
    description:
      "The Udigital Business landing page provides a clear and engaging overview of the company's services, emphasizing its digital expertise. With a modern design, it showcases the firm's innovative solutions and success stories, creating a compelling first impression that helps visitors understand Udigital Business's value proposition and unique offerings.",
    tags: [
      {
        name: "skill-icons:astro",
      },
      {
        name: "skill-icons:tailwindcss-dark",
      },
      {
        name: "skill-icons:figma-dark",
      }
    ],
    image: udb,
    source_code: [
      {
        source_code_link: "https://udigitalbusiness.com/",
        icon: iconEnum.LINK
      },
    ],
  },
  {
    name: "Datacode",
    description:
      "Datacode is a beautiful landing page for a Enterprise used the best technologies to make it more efficient and user-friendly.",
    tags: [
      {
        name: "skill-icons:astro",
      },
      {
        name: "skill-icons:tailwindcss-dark",
      },
      {
        name: "skill-icons:figma-dark",
      },
    ],
    image: datacode,
    source_code: [
      {
        source_code_link: "https://datacodemex.com/",
        icon: iconEnum.LINK
      },
    ],
  },
  {
    name: "Map Hop",
    description:
      "MapHop is a system dedicated to connect citizenship with a better way of living in your city, creating reports of certain problems that affect every person into Guadalajara, ease the process for the institutions responsible for solving the problem.",
    tags: [
      {
        name: "skill-icons:angular-dark",
      },
      {
        name: "skill-icons:nodejs-dark",
      },
      {
        name: "skill-icons:expressjs-dark",
      },
      {
        name: "skill-icons:mongodb",
      },
      {
        name: "skill-icons:mysql-dark",
      },
      {
        name: "skill-icons:docker",
      },
      {
        name: "skill-icons:javascript",
      },
    ],
    image: maphop,
    source_code: [
      {
        source_code_link: "https://pwa-maphop.web.app/",
        icon: iconEnum.LINK
      },
    ],
  },
  {
    name: "Crucigrama Deportivo",
    description:
      "A client who is a sports commentator hired me to create a sports-themed crossword app with real rewards for users. The app will include crosswords on teams, players, and sports moments, along with a system for players to earn prizes by completing puzzles.",
    tags: [
      {
        name: "skill-icons:angular-dark",
      },
      {
        name: "skill-icons:nestjs-dark",
      },
      {
        name: "skill-icons:aws-dark",
      },
      {
        name: "skill-icons:mongodb",
      },
      {
        name: "skill-icons:postgresql-dark",
      },
      {
        name: "skill-icons:docker",
      },
      {
        name: "skill-icons:typescript",
      },
      {
        name: "skill-icons:figma-dark",
      },
      {
        name: "skill-icons:astro"
      },
      {
        name: "skill-icons:tailwindcss-dark"
      },
      {

      }

    ],
    image: crucigrama,
    source_code: [
      {
        source_code_link: "https://crucigramadeportivo.app/",
        icon: iconEnum.LINK
      },
      {
        source_code_link: "https://crucigramadeportivo.site/",
        icon: iconEnum.LINK
      }
    ],
  },
  {
    name: "Dental Integralia",
    description:
      "A dental office wanted to become better known in the digital world, so a design and website were created that captured the essence of their brand.",
    tags: [
      {
        name: "skill-icons:astro",
      },
      {
        name: "skill-icons:tailwindcss-dark",
      },
      {
        name: "skill-icons:figma-dark",
      },
      {
        name: "skill-icons:sass"
      }
    ],
    image: dental,
    source_code: [
      {
        source_code_link: "https://consultorio-dental-integral.web.app/",
        icon: iconEnum.LINK
      },
    ],
  },
  {
    name: "Optocenter",
    description:
      "An optical office wanted to become better known in the digital world, so a design and website were created that captured the essence of their brand.",
    tags: [
      {
        name: "skill-icons:astro",
      },
      {
        name: "skill-icons:tailwindcss-dark",
      },
      {
        name: "skill-icons:figma-dark",
      },
      {
        name: "skill-icons:sass"
      }
    ],
    image: optocenter,
    source_code: [
      {
        source_code_link: "https://www.optocenter.com.mx/",
        icon: iconEnum.LINK
      },
    ],
  },
  {
    name: "Torture Museum",
    description:
      "An Torture museum wanted to increase its digital presence, so a website was created that captures the immersive, atmospheric experience of the exhibits, inviting users to explore its unique collections online.",
    tags: [
      {
        name: "skill-icons:astro",
      },
      {
        name: "skill-icons:tailwindcss-dark",
      },
      {
        name: "skill-icons:figma-dark",
      },
      {
        name: "skill-icons:sass"
      }
    ],
    image: museum,
    source_code: [
      {
        source_code_link: "https://museodelatortura.com.mx/",
        icon: iconEnum.LINK
      },
    ],
  },
  {
    name: "Marketplace & CRM Jomers",
    description:
      "Jomers, clothing store, wants a CRM and Marketplace to enhance customer experience. The CRM enables personalized interactions, while the Marketplace provides a user-friendly platform for browsing collections and making quick, tailored purchases.",
      tags: [
        {
          name: "skill-icons:angular-dark",
        },
        {
          name: "skill-icons:nestjs-dark",
        },
        {
          name: "skill-icons:prisma",
        },
        {
          name: "skill-icons:mysql-dark",
        },
        {
          name: "skill-icons:mongodb",
        },
        {
          name: "skill-icons:docker",
        },
        {
          name: "skill-icons:aws-dark",
        },
        {
          name: "skill-icons:typescript",
        }
      ],
    image: jomers,
    source_code: [
    ],
  },
  {
    name: "Cinema Lago",
    description:
      "I developed a system for a cinema that includes a ticketing marketplace and a CRM. The marketplace lets users easily browse showtimes and purchase tickets, while the CRM manages personalized communication, sending offers and recommendations based on movie preferences and purchase history.",
      tags: [
        {
          name: "skill-icons:angular-dark",
        },
        {
          name: "skill-icons:nestjs-dark",
        },
        {
          name: "skill-icons:prisma",
        },
        {
          name: "skill-icons:mysql-dark",
        },
        {
          name: "skill-icons:mongodb",
        },
        {
          name: "skill-icons:docker",
        },
        {
          name: "skill-icons:aws-dark",
        },
        {
          name: "skill-icons:typescript",
        }
      ],
    image: cine,
    source_code: [
    ],
  },
];



export { services, technologies, experiences, testimonials, projects };