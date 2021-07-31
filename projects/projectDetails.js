const projectDetails = [
  {
    title: "Where-To-Mug",
    description:
      "Ever wonder which tutorial room is free* and which is not? 🤨 This tool could help you find out your dream tutorial room 🥳",
    imageUrl:
      "https://raw.githubusercontent.com/OkkarMin/where-to-mug/main/doc/where-to-mug-demo.gif",
    language: "Typescript",
    technology: ["React", "NextJS", "ChakraUI", "API", "CSV"],
    links: {
      GitHub: "https://github.com/OkkarMin/where-to-mug",
      App: "https://wheretomug.ml",
    },
  },
  {
    title: "Smiley LCD Display IoT",
    description:
      "Collaborated with Darren, my mechanical engineering friend. In the standby state, LCD displays the current date and time. Upon sending a message from the mobile phone app, the text is sent to Blynk(managed service) and is pushed to the IoT device to display on the LCD module. The intended receiver then acknowledges the message by pressing a physical button and that puts it back in the standby state.",
    imageUrl: "/static/images/projects/smileylcd.gif",
    language: "C",
    technology: ["Arduino", "ESP32", "Hardware", "Blynk", "3D Printing"],
    links: {
      Darren: "https://www.linkedin.com/in/darren-cheong",
      GitHub: "https://github.com/OkkarMin/smiley-lcd",
      LinkedInVideo:
        "https://www.linkedin.com/posts/okarmin_iot-electronics-3dmodeling-activity-6811527034943221760-XLq5",
    },
  },
  {
    title: "TrashHeroes",
    description:
      "Automated waste sorter that utilizes artificial intelligence to significantly reduce contamination of recyclables",
    imageUrl: "/static/images/projects/trashheroes.gif",
    language: "Python",
    technology: [
      "Raspberry Pi",
      "Tensorflow",
      "Hardware",
      "Machine Learning",
      "Hackathon",
    ],
    links: {
      GitHub: "https://github.com/OkkarMin/okkar-blog-url-shortner",
      Youtube: "https://www.youtube.com/watch?v=vrjFZZSnsug",
    },
  },
  {
    title: "LinkedIn Connections Analyzer",
    description:
      "Hey hey 👋 , welcome to my LinkedIn connections analyzer. I recently found out that LinkedIn allow you to export your connections data in CSV format. I got curious and downloaded a copy for myself found out it contains informations that is publicly available to LinkedIn users. Data you are seeing now is my (Okkar Min's) connections data. If you would like to see your own data, just upload your Connections.csv obtained from LinkedIn using the uploader box",
    imageUrl: "/static/images/projects/linkedin_analyzer.gif",
    language: "Python",
    technology: ["Pandas", "Streamlit", "Plotly", "LinkedIn", "Data Analysis"],
    links: {
      GitHub: "https://github.com/OkkarMin/linkedin-connections-analyzer",
      App: "https://okkarm.in/linkedin-connections-analyzer",
    },
  },
  {
    title: "OkkarM.in",
    description:
      "Personal portfolio site built using NextJS. Showcase of my projects, a place for me to jot down my thoughts and also act as URL shortener",
    imageUrl: "/static/images/projects/personal_site.png",
    language: "JavaScript",
    technology: ["NextJS", "Vercel", "Serverless", "CI/CD", "Frontend Design"],
    links: {
      GitHub: "https://github.com/OkkarMin/okkar-blog-url-shortner",
      App: "https://okkarm.in",
    },
  },
  {
    title: "Crisis Management System",
    description:
      "Crisis Management System which aims to allow seamless collaboration between government agencies in times of emergency. In addition, the Prime Minister, cabinet ministers and government agency key decision makers shall monitor the crisis situation through the CMS. Our system can handle emergency situations like Fire, Terrorist, Gas Leak and Car Accident",
    imageUrl:
      "https://okkarmin.github.io/CMSAPI.github.io/static/COViewMap.png",
    language: "Python",
    technology: [
      "Django",
      "Realtime",
      "Firebase",
      "HTML/CSS/JS",
      "Documentation",
    ],
    links: {
      Documentation: "https://okkarmin.github.io/CMSAPI.github.io",
    },
  },
];

export default projectDetails;
