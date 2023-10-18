/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Priyanshu Singh",
  title: "Hi all, I'm Priyanshu",
  subTitle: emoji(
    "A passionate Front-end Developer 🚀 having 2+ Years experience of building Web applications with JavaScript / Reactjs / Nextjs / HTML / CSS / Material-UI / Chakra-UI and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1bxgqHCqK5zAwkkmKX90RltnFyH1BVEuv/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Priyanshu0713",
  linkedin: "https://www.linkedin.com/in/priyanshu-kumar-singh-ba551b24b/",
  gmail: "713priyanshu@gmail.com",
  medium: "https://mrpriyanshu.hashnode.dev/",
  fiverr: "https://www.fiverr.com/priyanshu0713",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal "),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [

    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nextjs",
      fontAwesomeClassname: "fab fa-reacteurope"
      // fontAwesomeClassname: "fa-brands fa-js"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    // {
    //   skillName: "ExpressJs(Basic)",
    //   fontAwesomeClassname: "fas fa-server"
    // },
    // {
    //   skillName: "MongoDB(Basic)",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    {
      skillName: "Html",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Css",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Slack",
      fontAwesomeClassname: "fab fa-slack"
    },
    {
      skillName: "VScode",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Redux",
      fontAwesomeClassname: "fab fa-gripfire"
    },
    {
      skillName: "Material-UI",
      fontAwesomeClassname: "fas fa-book-open"
    },
    {
      skillName: "Chakra-UI",
      fontAwesomeClassname: "fas fa-cut"
    },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    // {
    //   schoolName: "Madhav Institute Of Technology And Science (MITS) Gwalior",
    //   logo: require("./assets/images/mitslogo.jpg"),
    //   subHeader: "Master of Computer Application",
    //   duration: "May 2021 - April 2023",
    //   desc: "Skills :",
    //   descBullets: [
    //     "React.js · Next.js · Cascading Style Sheets (CSS) · Hyper Text Markup Language (HTML) · C (Programming Language)",
    //   ]
    // },
    {
      schoolName: "Medicaps University Indore",
      logo: require("./assets/images/medicapslogo.png"),
      subHeader: "Bachelor of Computer Application",
      duration: "April 2018 - April 2021",
      desc: "Skills :",
      descBullets: [
        "Frontend - React.js · Next.js · javaScript · Cascading Style Sheets (CSS) · Hyper Text Markup Language (HTML)",
        "Software Programming/ Packages -  C · Visual Studio Code · Slack",
        "Version control - Github",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "20%"
    },
    {
      Stack: "Programming",
      progressPercentage: "30%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    // {
    //   role: "Software Engineer",
    //   company: "Facebook",
    //   companylogo: require("./assets/images/facebookLogo.png"),
    //   date: "June 2018 – Present",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   ]
    // },
    {
      role: "Front-End Developer",
      company: "Hashtag 404",
      companylogo: require("./assets/images/hashtag404.png"),
      date: "Jan 2023 – Present",
      desc: "I work as a Front-end Developer at Hashtag 404, specializing in React.js, Next.js, and javaScript. I'm also proficient in using  GitHub,  CSS, and  HTML.My primary goal was designing seamless user interfaces and visually captivating layouts, with the aim of providing outstanding web experiences. I'm thrilled about the prospect of collaborating on creative projects that not only meet but exceed expectations. Let's team up and bring innovation to life!"
    },
    {
      role: "Technical Blogger",
      company: "Hashnode",
      companylogo: require("./assets/images/hashnode.jpg"),
      date: "July 2023 - Present",
      desc: "I've just embarked on my freelancing adventure on Hashnode.com, where I delve into cutting-edge technologies, explore the latest AI tools, discuss cybersecurity trends, and dive deep into various development languages. Join me on a journey to discover the ever-evolving world of tech, as we explore, learn, and innovate together. Stay informed and inspired with my regular updates!"
    },
    {
      role: "Jr. Software Developer",
      company: "Onisol Systems",
      companylogo: require("./assets/images/onisol.jpg"),
      date: "Oct 2021 - Dec 2022",
      desc: "As a Jr Software Developer at Onisol Systems, I had the opportunity to contribute my skills and expertise to a dynamic and innovative company. My role primarily revolved around working with React JS, a cutting-edge technology for building interactive and responsive user interfaces. During my time at Onisol Systems, I was responsible for a range of critical tasks, including troubleshooting and redesigning frontend projects."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/hashtag404.png"),
      projectName: "Hashtag 404",
      projectDesc: "The hashtag404 website is a harmonious blend of web development technologies . React.js and Next.js grace the front-end with their magic , conjuring a responsive and dynamic user interface . On the flip side, Node.js and Express.js orchestrate the backend with finesse , handling server-side requests and API integrations like seasoned maestros.",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "http://Hashtag404.com/"
        // }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Capture.JPG"),
      projectName: "Tryp",
      projectDesc: "My latest project—a captivating landing page crafted with the magic of React.js, HTML, and CSS. This creation combines the power of modern web development technologies to conjure an engaging and user-friendly online experience .This React.js landing page serves as a testament to the endless possibilities of modern web development. .",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "https://github.com/Priyanshu0713/tryp_landingPage"
        // }
        //  you can add extra buttons here.
      ]
    },
  ],

  display: true // Set false to hide this section, defaults to true
};
const upcommingProjects = {
  // title: "Upcomming Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/myhelper.png"),
      projectName: "MyHelper",
      projectDesc: "The MyHelper project aims to connect users with local service providers via a user-friendly interface. It was built with HTML, CSS, React.js, JavaScript for a visually pleasing and efficient platform. The project's robust back end efficiently handles user requests and worker profiles, ensuring users find the help they need precisely when and where they need it.",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "https://quiz-app-alpha-ebon.vercel.app"
        // }
      ]
    },
    {
      image: require("./assets/images/cwh_2.JPG"),
      projectName: "CodeWithHarry",
      projectDesc: "In my React.js practice, I undertook a remarkable project: cloning the CodeWithHarry.com website. What sets this project apart is that I ensured the design was fully responsive, catering to users on any device! This endeavor was not for a company, but it served as a pivotal learning experience. With each line of code, I crafted a seamless user experience across a wide range of devices.",
      footerLink: [
        // {
        //   name: "Visit Website",
        //   url: "https://github.com/Priyanshu0713/clone_codeWithHarry"
        // }
      ]
    },
  ],

  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    // {
    //   title: "Google Code-In Finalist",
    //   subtitle:
    //     "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //   image: require("./assets/images/codeInLogo.webp"),
    //   imageAlt: "Google Code-In Logo",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
    //     },
    //     {
    //       name: "Award Letter",
    //       url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
    //     },
    //     {
    //       name: "Google Code-in Blog",
    //       url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
    //     }
    //   ]
    // },
    {
      title: "TCS iON Career Edge - Young Professional",
      subtitle:
        "Got my Certificate of Achievement for successfully completing online course TCS iON Career Edge-Young Professional",
      image: require("./assets/images/tcs.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certificate",
          // url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "React JS Web Development - The Essentials Bootcamp by Udemy",
      subtitle: "Completed Certifcation from Udemy for React JS Web Development",
      image: require("./assets/images/udemy.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          // url: "https://drive.google.com/file/d/1Lr-2eXt1rzwhtyqy_XcEL_gYZdH_FlDL/view?usp=sharing"
        },
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://mrpriyanshu.hashnode.dev/exploring-the-web-development-universe-javascript-reactjs-and-the-latest-tech-trends",
      title: "🚀 Exploring the Web Development Universe: JavaScript, ReactJS, and the Latest Tech Trends! 🌐",
      description:
        "👋 Welcome to my corner of the web, where we embark on a thrilling journey through the ever-expanding cosmos of web development! 🚀💻"
    },
    {
      url: "https://mrpriyanshu.hashnode.dev/exciting-news-in-ai-audio-generation",
      title: "🔊 Exciting News in AI Audio Generation!",
      description:
        "Introducing 'Stable Audio' by Stability AI 🎶, a cutting-edge latent diffusion model. This breakthrough promises to reshape the world of generative AI, and here's why ?"
    },
    {
      url: "https://mrpriyanshu.hashnode.dev/the-react-revolution-from-birth-to-dominance-part-1",
      title: "🚀 The React Revolution: From Birth to Dominance",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8982188518",
  email_address: "priyanshusingh8518@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  upcommingProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
