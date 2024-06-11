
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
  username: "Anjani Praneet",
  title: "Hi all, I'm Anjani Praneet Meruvu",
  subTitle: emoji(
    "Passionate Data Analyst 🚀 with experience in analyzing, interpreting, and visualizing data using tools such as Python, R, SQL, and Tableau. Skilled in transforming complex data into actionable insights."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Ruryy0frexpCU1WJ4TBo090QqzI7j9Aq/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/PraneetMeruvu",
  linkedin: "https://www.linkedin.com/in/praneetanjan/",
  gmail: "ameruvu@binghamton.edu",
  instagram: "https://www.instagram.com/jenko.27/",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE DATA ANALYST AND BUSINESS ANALYST EXPLORING DATA AND BUSINESS SOLUTIONS",
  skills: [
    emoji(
      "⚡ Analyze and interpret complex data to provide actionable business insights"
    ),
    emoji("⚡ Develop visualizations and dashboards using tools like Tableau and Power BI"),
    emoji(
      "⚡ Conduct statistical analysis and predictive modeling using Python and R"
    ),
    emoji(
      "⚡ Integration of data from various sources such as SQL databases and cloud services"
    ),
    emoji(
      "⚡ Assist in business process improvement and strategy development through data-driven insights"
    )
  ],
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "django",
      fontAwesomeClassname: "fab fa-python" // No specific FontAwesome icon for Django
    },
    {
      skillName: "postgres",
      fontAwesomeClassname: "fas fa-database" // No specific FontAwesome icon for PostgreSQL
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-leaf" // No specific FontAwesome icon for MongoDB
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: "fab fa-python" // No specific FontAwesome icon for TensorFlow
    },
    {
      skillName: "matplotlib",
      fontAwesomeClassname: "fas fa-chart-bar" // No specific FontAwesome icon for Matplotlib
    },
    {
      skillName: "scikit-learn",
      fontAwesomeClassname: "fas fa-brain" // No specific FontAwesome icon for Scikit-learn
    },
    {
      skillName: "pandas",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
  


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "State University of New York at Binghamton",
      logo: require("./assets/images/bu.png"),
      subHeader: "Master of Science in Information Systems",
      duration: "August 2023 - August 2025",
      desc: "President of Graduate Student Organization",
      descBullets: [
        "Led the Graduate Student Organization with numerous initiatives and events",
        "Organized workshops and seminars to enhance student engagement and professional development"
      ]
    },
    {
      schoolName: "Vellore Institute of Technology",
      logo: require("./assets/images/vit.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2016 - May 2020",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Data Mining, Data Analysis, and more.",
      descBullets: [
        "Engaged in projects involving data analysis and software development",
        "Participated in hackathons and coding competitions"
      ]
    }
  ]
};



// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analysis", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Business Analyst",
      company: "Zostel",
      companylogo: require("./assets/images/zostel.png"),
      date: "January 2021 – August 2023",
      desc: "Managed and analyzed large datasets to identify trends, patterns, and insights. Prepared and presented reports to stakeholders, informing strategic decision-making.",
      descBullets: [
        "Managed and analyzed large datasets to identify trends, patterns, and insights.",
        "Prepared and presented reports to stakeholders, informing strategic decision-making."
      ]
    },
    {
      role: "Data Analyst Intern",
      company: "Synaptics EHR Technologies",
      date: "May 2019 – Aug 2019",
      desc: "Conducted data cleaning, transformation, and analysis on healthcare datasets. Assisted in developing data visualization dashboards for client presentations.",
      descBullets: [
        "Performed data cleaning, transformation, and analysis on healthcare datasets.",
        "Assisted in the development of data visualization dashboards for client presentations."
      ]
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
      imageAlt: "Google Code-In Logo",
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
      imageAlt: "Google Assistant Action Logo",
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
      imageAlt: "PWA Logo",
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

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 607-205-6696",
  email_address: "ameruvu@binghamton.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
