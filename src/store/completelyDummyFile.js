import iotCourseImage from "../assests/courses/images/IOT.png";

const courseObj = {
  courseId: "c1",
  courseName: "IOT(Internet Of Things)",
  courseDesc:
    "Welcome to the IOT(Internet of Things) space, a new revolution, \
      which will have 212 Billion Installed things, 30 Billion autonomously\
      connected things, 3 Million Peta Bytes off Embedded Systems Data by 2020,\
      spanning across all verticals estimated at a value of $8.9 trillion.\
      The focus in this course it to enable and equip the audience to \
      immediately start building IOT products. We touch all the necessary\
      software, hardware, platform, protocols, everything in between to the\
      point it is required. Additional study material is provided for a deep dive.",

  overView: {
    highLights: [
      "Learn how to Independently Design, Code and Build IOT products.",
      "Learn to code using Arduino IDE from basics",
      "Learn how to connect to cloud IOT Platforms, Persist Data and more",
      "Learn Designing, Casing, Soldering and more",
      "Learn PCB designing using Fritzing",
      "Learn how to use Ethernet and Wifi shields",
    ],
    requirements: ["Desktop/ Laptop", "Internet connectivity min 2 Mbps"],
    targetAudience: [
      "IoT Engineer",
      "Embedded System Engineer",
      "Network Engineer",
      "Firmware Developer",
      "Software Engineer",
    ],
  },
  image: iotCourseImage,
  actualPrice: 250000,
  netPrice: 240000,
  duration: "6 Months",
  enrolled: 232323,
  language: "English, Hindi",
  skill: "All Level",
  certificate: "Yes",

  curriculum: [
    {
      heading: "Introduction to Embedded System and IOT",
      keyFeatures: [
        "Introduction",
        "Downloading the software and using Arduino",
        " Getting started with Proteus",
        "Extension to Proteus Blinking Example",
      ],
    },
    {
      heading: "Getting Started with Embedded system",
      keyFeatures: [
        "Electronic Component With Ardino",
        "Working and Interfacing Using Ardino",
        "OLED Interfacing Controlling",
      ],
    },
    {
      heading: "Introductin to Embedded System and IOT",
      keyFeatures: [
        "Introduction",
        "Downloading the software and using Arduino",
        " Getting started with Proteus",
        "Extension to Proteus Blinking Example",
      ],
    },
    {
      heading: "Motors",
      keyFeatures: [
        "Generating Output using PWM",
        "Motors with Ardino",
        "Hardware Communication Protocols",
        "Reading & Manipulating Analog input",
        "Interfacing different types of sensors with Arduino",
        "DHT11 sensor with Arduino",
      ],
    },

    {
      heading: "Getting Started with Internet of things",
      keyFeatures: [
        "Basics of communication protocols",
        "Programming of NODEMCU",
        "Interfacing GSM module",
      ],
    },
  ],

  faq: [
    {
      question: "What are the prerequisites?",
      answer:
        "This course does not require any prior expertise but we need a passionate mind that wants to learn and experience things with us.",
    },
    {
      question: "What is the mode of content delivery?",
      answer: "The course delivered will be completely online.",
    },
    {
      question: "Is the course recorded or live?",
      answer:
        "The course will be delivered in hybrid mode, which means our trainers will be taking sessions online along with recorded lectures on our platform.",
    },
  ],

  instructor: [{ name: "" }],
};

export default courseObj;
