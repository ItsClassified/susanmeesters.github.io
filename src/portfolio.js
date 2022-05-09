/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true 
};

const greeting = {
  username: "Susan Meesters",
  title: "Hallo, ik ben Susan",
  subTitle: emoji(
    "Toen ik 3 jaar oud was werd mijn broertje marijn geboren. Alles leek in orde tot hij een epileptische aanval kreeg. Hier kwam hij niet uit. Marijn belandde hierdoor dus ook in het ziekenhuis. Gelukkig kreeg Marijn nog een kans, echter was dit helaas niet zonder letsel. Marijn kreeg hersenletsen (cerebrale parese) wat zorgde voor een meervoudige beperking. Marijn heeft bij alledaagse dingen hulp en ondersteuning nodig. Dit heb ik, samen met mijn ouders en zus, dus ook altijd voor Marijn gedaan.\nDoor de jaren heen heb ik door deze situatie veel met zorg- en hulpverlening te maken gehad en heb ik geleerd hoe belangrijk de rol van hulpverleners kunnen zijn voor mensen. Ik zag bij de hulpverleners enthousiasme, voldoening en vooral veel liefde naar de medemens.\nToen wist ik het zeker: dit wil ik ook! Ik ga mensen helpen. Ik ga de zorg in! 🚀 Dat ik mensen wou helpen stond voor mij vast. Maar waar lag dan mijn interesse? In de psychiatrie! Mijn interesse in de psychiatrie is gewerkt door mijn stage plek op de medisch psychiatrische unit in het Twee Steden Ziekenhuis in Tilburg. Hier leerde ik de mensen kennen die last hadden van hun psychische kwetsbaarheid. Mijn interesse in de oorzaak hiervan werd geprikkeld."
  ),
  resumeLink:
    "#", 
  displayGreeting: true 
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "#",
  gmail: "susanmeesters@gmail.com",
  facebook: "#",
  instagram: "#",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Een tweede kans",
  subTitle: "Mensen zijn niet perfect. Soms gaat er iets mis. Ik sta honder procent achter het feit dat iedereen een tweede kans verdient. Iedereen verdient een plek in onze maatschappij.",
  skills: [
    emoji(
      "Sommige hebben daar extra ondersteuning bij nodig, die kunnen het niet alleen. Deze mensen wil ik graag helpen. Ik wil ze ondersteunen om te leren omgaan met hun diagnose en te werken aan herstel en terugkeer in de maatschappij."
    ),
    emoji("Ik vind het ontzettend belangrijk om te werken vanuit de krachten van een cliënt. Woorden als empowerment en zelfredzaamheid staan hoog in het vaandel. Ik denk dat het welzijn van die cliënt op deze manier wordt vergroot. Daarnaast zorgt dit voor een verhoogd zelfvertrouwen en leren ze sneller om dingen zelf aan te pakken.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    
  ],
  display: true // Set false to hide this section, defaults to true
};

const skillsSectionR = {
  title: "Wie ben ik dan?",
  subTitle: "Maar wie ben ik dan als sociaal werker?",
  skills: [
    emoji(
      "Als ik deze vraag zou stellen aan mijn collega's op de werkvloer zal je te horen krijgen dat mijn krachten liggen bij de rust bewaren, dit ik écht luister naar de cliënten wat zij willen en dat ik durf te ondernemen en te handelen."
    ),
    emoji("Ik wil mijzelf echt neerzetetn als een sociaal werker die naast de cliënt staat. Iemand die er voor de cliënt is in de moeilijkste periode van zijn/haar leven. Ik wil een glimlach op het gezicht 😃"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Avans Hogeschool Breda",
      logo: require("./assets/images/avanspng.png"),
      subHeader: "Sociale work, uitstroomprofiel zorg",
      duration: "2018 - Heden",
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
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
  display: false, //Set it to true to show workExperiences Section
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
    "Wil je graag meer over mij weten, of gewoon even een praatje maken? Stuur mij dan zeker een berichtje!",
  number: "+316 12 34 56 78",
  email_address: "susanmeesters@hotmail.com"
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
