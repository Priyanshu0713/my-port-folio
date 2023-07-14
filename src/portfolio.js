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
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nextjs / Nodejs / HTML / CSS  and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1RyBKw4GZf5rny7BLg-R4nK5qFP35_oCg/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Priyanshu0713",
  linkedin: "https://www.linkedin.com/in/priyanshu-kumar-singh-ba551b24b/",
  gmail: "priyanshusingh8518@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@713priyanshusingh",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
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
      skillName: "NodeJs(Basic)",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "ExpressJs(Basic)",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "MongoDB(Basic)",
      fontAwesomeClassname: "fas fa-database"
    },
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
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
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
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
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
    {
      schoolName: "Madhav Institute Of Technology And Science (MITS) Gwalior",
      logo: require("./assets/images/mitslogo.jpg"),
      subHeader: "Master of Computer Application",
      duration: "May 2021 - April 2023",
      desc: "Skills :",
      descBullets: [
        "React.js · Next.js · Cascading Style Sheets (CSS) · Hyper Text Markup Language (HTML) · C (Programming Language)",
        "MySQL · Database Management System (DBMS)"
      ]
    },
    {
      schoolName: "Medicaps University Indore",
      logo: require("./assets/images/medicapslogo.png"),
      subHeader: "Bachelor of Computer Application",
      duration: "April 2018 - April 2021",
      desc: "Skills :",
      descBullets: [
        "Visual Studio · Microsoft Word · Microsoft PowerPoint · Microsoft Excel · Microsoft Office",
        "· Event Planning · Event Management "
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
      desc: "I am a web developer at Hashtag 404, specializing in React.js, Next.js, Node.js(Basic), MongoDB, Github, CSS, and HTML. With a focus on creating seamless user interfaces and visually appealing designs, I strive to deliver exceptional web experiences. Let's collaborate on innovative projects that exceed expectations."
    },
    {
      role: "Trainee",
      company: "Simplilearn",
      companylogo: require("./assets/images/simplilearn.png"),
      date: "Jan 2019 - Apr 2019",
      desc: "As a graduate of Simplilearn's C Programming training course, I have a strong foundation in the C programming language. Through the course, I gained hands-on experience with fundamental programming concepts, including data types, operators, control structures, functions, arrays, and pointers."
    }
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
      projectDesc: "Innovative web development company specializing in React.js, Next.js, Node.js, CSS, and HTML, delivering exceptional digital experiences.",
      footerLink: [
        {
          name: "Visit Website",
          // url: "http://Hashtag404.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Quiz-app.png"),
      projectName: "Quiz",
      projectDesc: "Developed a React.js quiz app with multiple-choice questions that tests user's knowledge and displays their marks.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://quiz-app-alpha-ebon.vercel.app"
        }
      ]
    },
  ],

  display: true // Set false to hide this section, defaults to true
};
const upcommingProjects = {
  title: "Upcomming Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Recipe-app.png"),
      projectName: "Recipe Share",
      projectDesc: "Recipe Share: A React.js app enabling users to share and discover delicious recipes, fostering culinary inspiration and community.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://Hashtag404.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/myhelper.png"),
      projectName: "MyHelper",
      projectDesc: "An app connecting users with local service providers, facilitating efficient hiring of plumbers, mechanics, and drivers based on location.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://MyHelper.com/"
      //   }
      // ]
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
      title: "Web Developer",
      subtitle: "Completed Certifcation from Hashtag 404 for Web Development",
      image: require("./assets/images/hashtag404.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1Lr-2eXt1rzwhtyqy_XcEL_gYZdH_FlDL/view?usp=sharing" },
        {
          name: "Final Project",
          // url: "https://pakistan-olx-1.firebaseapp.com/"
        }
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
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
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
