import { FaBootstrap, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoReact, IoLogoSass } from "react-icons/io5";
import { SiNextdotjs, SiTailwindcss, SiPhp } from "react-icons/si";

const Data = [
  {
    name: "Javascript",
    logo: <IoLogoJavascript />,
    border: "border-yellow-400",
    color: "text-yellow-400",
  },
  {
    name: "Git",
    logo: <FaGitAlt />,
    border: "border-orange-600",
    color: "text-orange-600",
  },
  {
    name: "ReactJS",
    logo: <IoLogoReact />,
    border: "border-cyan-600",
    color: "text-cyan-600",
  },
  {
    name: "NextJS",
    logo: <SiNextdotjs />,
    border: "border-white",
    color: "text-white",
  },
  {
    name: "Sass",
    logo: <IoLogoSass />,
    border: "border-pink-600",
    color: "text-pink-600",
  },
  {
    name: "Bootstrap",
    logo: <FaBootstrap />,
    border: "border-purple-600",
    color: "text-purple-600",
  },
  {
    name: "Tailwind",
    logo: <SiTailwindcss />,
    border: "border-blue-400",
    color: "text-blue-400",
  },
  {
    name: "PHP",
    logo: <SiPhp />,
    border: "border-blue-600",
    color: "text-blue-600",
  },
];

export default Data;