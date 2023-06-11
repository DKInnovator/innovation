import electricalVehicleImage from "../assests/courses/images/electric-vehicle.jpg";
import embeddedSystemImage from "../assests/courses/images/embedded-system.jpg";
import iotMobileDevelopmentImage from "../assests/courses/images/iot-mobiledevelopment.jpg";
import iotWebDevelopmentImage from "../assests/courses/images/iot-webdevelopment.png";
import msExcelImage from "../assests/courses/images/ms-excel.png";
import msPowerPointImage from "../assests/courses/images/ms-powerpoint.png";
import msWordImage from "../assests/courses/images/ms-word.jpg";
import pcbImage from "../assests/courses/images/pcb.jpg";

import courseObj from "./completelyDummyFile";

const dummyCourses = [
  { ...courseObj },

  {
    ...courseObj,
    courseId: "c2",
    courseName: "Embeded System",
    image: embeddedSystemImage,
    actualPrice: 25000,
    netPrice: 20000,
    courseDesc:
      " Students will learn methodologies and practical knowledge regarding testing, creating, integrating, and implementing software for advanced embedded systems. Embedded System Course will provide you with real-world coding experience as well as hands-on project work with ARM-based microcontrollers.",
  },
  {
    ...courseObj,
    courseId: "c3",
    courseName: "PCB Designs",
    actualPrice: 1500,
    netPrice: 1000,
    image: pcbImage,
    courseDesc:
      " This introductory course focuses on front-end design concepts such as schematic capture, library parts creation, basic electrical engineering concepts, and documentation.",
  },
  {
    ...courseObj,
    courseId: "c4",
    courseName: "IOT Web Development",
    image: iotWebDevelopmentImage,
    actualPrice: 23400,
    netPrice: 12200,
    courseDesc:
      "Internet of things connects the devices & humans with the learning of innovation. Now, the IoT will be set up in a Web Development industry to make web architecture and User Interface's more creative and interactive. IoT will create advanced communication between website layouts and operational models.",
  },
  {
    ...courseObj,
    courseId: "c5",
    courseName: "IOT Mobile Development",
    image: iotMobileDevelopmentImage,
    actualPrice: 12100,
    netPrice: 11100,
    courseDesc:
      "IoT includes multiple devices with various interfaces created to interact with each other and with end-users. Taking this into account, the design for IoT apps requires a coherent approach to provide a seamless experience not only with the app but across the entire IoT ecosystem",
  },
  {
    ...courseObj,
    courseId: "c6",
    courseName: "Electric Vehicle",
    image: electricalVehicleImage,
    actualPrice: 43500,
    netPrice: 33400,
    courseDesc:
      "The E-Drive System for EV track gives you an understanding of power converter topologies, the design of power converters, and the use of MATLAB and Simulink in designing and simulating power components. You will also learn how to study the efficiency of these power components using software tools.",
  },

  {
    ...courseObj,
    courseId: "c7",
    courseName: "Basic Computer Skills",
    subCourses: [
      {
        ...courseObj,
        courseId: null,
        subCourseId: "s1",
        courseName: "MS Excel",
        image: msExcelImage,
        actualPrice: 1500,
        netPrice: 500,
        courseDesc:
          " This MS Excel course will help you acquire a comprehensive understanding of MS Excel as a tool and explore its numerous features and functions like sort, filter, import, etc.",
      },
      {
        ...courseObj,
        courseId: null,
        subCourseId: "s2",
        courseName: "MS Word",
        image: msWordImage,
        actualPrice: 5500,
        netPrice: 3400,
        courseDesc:
          "In this course we will be working with tables, columns, and other formatting features. Graphics, WordArt, charts, and text flow. Document templates. Advanced features including mail merge, macros, document versioning, and proofing tools.",
      },
      {
        ...courseObj,
        courseId: null,
        subCourseId: "s3",
        courseName: "MS Powerpoint",
        image: msPowerPointImage,
        actualPrice: 3500,
        netPrice: 2200,
        courseDesc:
          "This online PowerPoint courses will equip you with all the necessary skills to create high-quality presentations and slides.",
      },
    ],
  },
];

export default dummyCourses;
