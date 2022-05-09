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
  username: "KM Development",
  title: "Hallo, ik ben Kars",
  subTitle: emoji(
    "Een gedreven Full Stack Software developer 🚀 met erg veel ervaring van het bouwen van Web en Mobile apps in PHP (Laravel) / JavaScript / Nodejs / VueJS en nog een hoop andere frameworks. Als ik niet achter een computer op de knoppen druk doe ik dit in een nachtclub of op een festival als freelance lightjockey of technicus."
  ),
  resumeLink:
    "#", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/itsclassified",
  linkedin: "https://www.linkedin.com/in/karsmiesen/",
  gmail: "miesenkars@gmail.com",
  gitlab: "https://gitlab.com/itsclassifiedx",
  facebook: "https://www.facebook.com/saad.pasta7",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Fullstack Webdeveloper!",
  subTitle: "Continue verdiepen in de nieuwste frameworks en technieken!",
  skills: [
    emoji(
      "⚡ Een interactieve Web/Mobile App van frontend tot backend?"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) voor elk platform?")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "Tailwind CSS",
      fontAwesomeClassname: "fa-solid fa-file-code"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "SQL-Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const skillsSectionR = {
  title: "Lightjockey / Technicus",
  subTitle: "Passie voor licht en special effects!",
  skills: [
    emoji(
      "⚡ Opbouwen van evenementen en uitdenken van stages"
    ),
    emoji("⚡ Programmeren van lichttafels en special effects"),
    emoji(
      "⚡ Bedienen van lichttafels tijdens evenementen"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Grand MA 3/2",
      fontAwesomeClassname: "fa-solid fa-keyboard"
    },
    {
      skillName: "Grand MA On PC",
      fontAwesomeClassname: "fa-solid fa-desktop"
    },
    {
      skillName: "Chimp 300",
      fontAwesomeClassname: "fa-solid fa-keyboard"
    },
    {
      skillName: "Special Effects",
      fontAwesomeClassname: "fa-solid fa-fire-burner"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Avans Hogeschool",
      logo: require("./assets/images/avanspng.png"),
      subHeader: "HBO Informatica",
      duration: "September 2017 - April 2022",
      desc: "Niet afgemaakt, wel P behaald.",
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Tailwind CSS: Frontend UI/Design", 
      progressPercentage: "90%" 
    },
    {
      Stack: "Laravel: API/Backend Development",
      progressPercentage: "85%"
    },
    {
      Stack: "Programmeren in andere frameworks",
      progressPercentage: "70%"
    },
    {
      Stack: "LightJockey / Technicus: Grand MA 2/3/On PC",
      progressPercentage: "55%"
    },
    {
      Stack: "Chimp 300: Programmeren, Bedienen",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Webdeveloper",
      company: "NetpointGroup BV",
      companylogo: require("./assets/images/netpoint.png"),
      date: "April 2020 – Heden",
      desc: "Factoring, Software & Diensten Voor tandartsen, orthodontisten, mondhygiënisten, CBT en alle andere disciplines in de mondzorg",
      descBullets: [
        "Factoring, facturatie voor tandartsen, orthodontisten, mondhygienisten, CBT en alle andere disciplines in de mondzorg",
        "Orthwin, OrthoTracing, Dentium, iOrtho: software voor orthodontisten",
      ]
    },
    {
      role: "Freelancer",
      company: "Perfect Effects",
      companylogo: require("./assets/images/perfect.png"),
      date: "Jan 2022 - Heden",
      desc: "Enorm geweldig bedrijf gespecialiseerd in het leven van special effects voor evenementen en speciale diensten",
      descBullets: [
        "Foute Feestje XXL - Goes",
        "Smerrig - Kingsday",
        "Elsom Open Air"
      ]
    },
    {
      role: "Freelance LightJockey / Technicus",
      company: "Cafe Philip",
      companylogo: require("./assets/images/cafe-philip.png"),
      date: "December 2019 – Heden",
      desc: "Club/Cafe in het centrum van Tilburg"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Stuur mij een berichtje! ☎️"),
  subtitle:
    "Heb je een opdracht of wil je meer informatie? Alles is welkom.",
  number: "+316 25 20 12 15",
  email_address: "karsmiesen@ziggo.nl"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  skillsSectionR,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
