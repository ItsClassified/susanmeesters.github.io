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
  title: "Passie voor het vak",
  subTitle1: 
    "Mensen zijn niet perfect. Soms gaat er iets mis. "
  ,
  subTitle2: 
    "Ik sta honderd procent achter het feit dat iedereen een tweede kans verdient. Iedereen verdient een plek in onze maatschappij. Sommige hebben daar extra ondersteuning bij nodig, die kunnen het niet alleen. Deze mensen wil ik graag helpen. Ik wil ze ondersteunen om te leren omgaan met hun diagnose en te werken aan herstel en terugkeer in de maatschappij. Het kunnen werken aan doelen vind ik daarbij prettig."
  ,
  subTitle3: 
    "Ik vind het ontzettend belangrijk om te werken vanuit de krachten van een cliënt. Woorden als empowerment en zelfredzaamheid staan hoog in het vaandel. Ik denk dat het welzijn van de cliënt op deze manier wordt vergroot. Daarnaast zorgt dit voor een verhoogd zelfvertrouwen en leren ze sneller om dingen zelf aan te pakken."
  ,
  subTitle4: 
    "Maar wie ben ik dan als sociaal werker?"
  ,
  subTitle5: 
    "Als je deze vraag zou stellen aan mijn collega's op de werkvloer zal je te horen krijgen dat mijn krachten liggen bij de rust bewaren, dat ik écht luister naar de cliënten, kijk naar wat zij willen en dat ik durf te ondernemen en handelen. Ik signaleer, ik overleg en ik werk samen."
  ,
  subTitle6: 
    "Ik wil mijzelf neerzetten als een sociaal werker die naast de cliënt staat. Iemand die er voor de cliënt is in de moeilijkste periode van zijn of haar leven. Ik wil een glimlach op het gezicht brengen."
  ,
  resumeLink:
    "https://drive.google.com/file/d/1K9-znGQkf8UWK2862Jme3w9XP91Kb9bL/view?usp=sharing", 
  displayGreeting: true 
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/susan-meesters-a15560208",
  gmail: "smeesters@ribwbrabant.nl",
  facebook: "https://www.facebook.com/susanmeesters",
  instagram: "https://www.instagram.com/suusmeesters",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "De aanleiding",
  subTitle: "Toen ik 3 jaar oud was werd mijn broertje Marijn geboren. Alles leek in orde tot hij een epileptische aanval kreeg. Hier kwam hij niet uit. Marijn lag in kritieke toestand in het ziekenhuis. Gelukkig kreeg Marijn nog een kans, echter was dit helaas niet zonder letsel. Marijn had herstenletsel (cerebrale parese) wat zorgde voor een meervoudige beperking. Marijn heeft bij alledaagse dingen hulp en ondersteuning nodig. Dit heb ik, samen met mijn ouders en zus, dus ook altijd voor Marijn gedaan. Zorgen is iets wat in mij zit.",
  skills: [
    emoji(
      "Door de jaren heen heb ik door deze situatie veel met zorg- en hulpverlening te maken gehad en heb ik geleerd hoe belangrijk de rol van hulpverleners kunnen zijn voor mensen. Ik zag bij de hulpverleners enthousiasme, voldoening en vooral veel liefde naar de medemens."
    ),
    emoji("Toen wist ik het zeker: dit wil ik ook! Ik ga mensen helpen. Ik ga de zorg in! 🚀"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    
  ],
  display: true // Set false to hide this section, defaults to true
};

const skillsSectionR = {
  title: "De psychiatrie",
  subTitle: "Dat ik in de zorg wilde werken was zeker. Maar met welke doelgroep?",
  skills: [
    emoji(
      "Mijn interesse in de psychatrie werd geprikkeld door mijn stage plek op de medisch psychiatrische unit in het Twee Steden ziekenhuis. Hier heb ik mensen ontmoet die in het dagelijks leven veel last ervaren van hun psychische kwetsbaarheid. De oorzaak van deze kwetsbaarheid sprak mij aan, waar komt dit vandaan? En hoe kunnen we er samen voor zorgen dat je ondanks deze kwetsbaarheid kan meefunctioneren in onze maatschappij? "
    ),
    emoji("Deze interesse leidde mij naar mijn huidige werkplek bij RIBW Brabant. 😃 Hier heb ik het onwijs naar mij zin en ik ben voorlopig nog niet van plan hier weg te gaan. Bij het RIBW werken wij deels ambulant. De ontwikkelingen en verschuivingen van intramuraal werken naar ambulant spreken mij aan."),
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
  title: emoji("Stuur mij een mailtje! 📧"),
  subtitle:
    "Wil je graag meer over mij weten, of gewoon even een praatje maken? Stuur mij dan zeker een berichtje!",
  
  email_address: "smeesters@ribwbrabant.nl"
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
