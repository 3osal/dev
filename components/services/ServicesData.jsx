import { LuBox } from "react-icons/lu";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { SiSpeedtest } from "react-icons/si";
import { FiDatabase } from "react-icons/fi";

export const SERVICES_DATA = [
  {
    id: 0,
    icon: <LuBox />,
    title: "ui/ux",
    desc: "Providing an attractive and easy-to-use visual interface, with a smooth and comfortable user experience to ensure smooth interaction with the website or application.",
  },
  {
    id: 1,
    icon: <MdOutlineScreenshotMonitor />,
    title: "Responsive Design",
    desc: "Ensure that the design works efficiently on all different devices and screens phones, tablets, and computers.",
  },
  {
    id: 2,
    icon: <SiSpeedtest />,
    title: "Performance",
    desc: "Improve site loading speed and interactivity to provide a fast and efficient user experience.",
  },
  {
    id: 3,
    icon: <FiDatabase />,
    title: "APIs",
    desc: "Manage data and connect to the back-end to dynamically update and display content based on server response.",
  },
];
