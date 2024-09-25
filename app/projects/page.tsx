"use client";
import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaReact, FaNodeJs, FaArrowRight } from "react-icons/fa";
import {
  SiTypescript,
  SiSocketdotio,
  SiPython,
  SiMysql,
  SiNextdotjs,
} from "react-icons/si";

// Define project types and data
export type Project = {
  id: number;
  title: string;
  image: string;
  description: string;
  dateCreated: string;
  techUsed: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Question Answer form",
    image:
      "https://i.pinimg.com/564x/a5/60/4d/a5604d3390f5bacdd747e21591d4aa41.jpg",
    description:
      "This JavaFX project is a Question & Answer (Q&A) application with user and admin roles. It includes encryption for user/admin authentication and supports different types of questions.",
    dateCreated: "Jul 7, 2024",
    techUsed: ["Java", "JavaFx"],
  },
  {
    id: 2,
    title: "MarketPlace",
    image:
      "https://i.pinimg.com/564x/ea/8b/a5/ea8ba5de10b72d1b21c6d5ab1ab1808f.jpg",
    description:
      "A Flask-based marketplace application featuring item listings, purchase and sale functionalities, and user authentication. Designed with a modern, shopping cart, and secure checkout.",
    dateCreated: "Sep 13, 2024",
    techUsed: ["Flask", "HTML", "Bootstrap"],
  },
  {
    id: 3,
    title: "Flappy Bird",
    image:
      "https://i.pinimg.com/564x/1c/25/17/1c25175efa1882ce2b5071e6e9b1819e.jpg",
    description:
      "This project is a recreation of the original Flappy Bird game, developed using Java and Swing. It features realistic gravity effects, precise collision detection, and smooth gameplay mechanics, providing a challenging and nostalgic experience reminiscent of the original game.",
    dateCreated: "Sep 17, 2024",
    techUsed: ["Java", "Swing"],
  },
  {
    id: 4,
    title: "Bone Fracture Classification",
    image:
      "https://i.pinimg.com/564x/97/6d/12/976d127c800fa8ccff41ea330a0dea36.jpg",
    description:
      "This bone fracture classification project utilizes three models to analyze medical images, accurately identifying fractures through advanced machine learning techniques for enhanced diagnostic support.",
    dateCreated: "Sep 17, 2024",
    techUsed: ["Python", "Machine Learning"],
  },
  {
    id: 5,
    title: "ATM Machine",
    image:
      "https://i.pinimg.com/564x/5a/24/69/5a246963c2e166d1473636c3d3f29160.jpg",
    description:
      "This project is a simple ATM machine simulation built using Java. It allows users to log in with their account credentials, perform transactions such as deposits and withdrawals, and check balance, etc.",
    dateCreated: "Sep 17, 2024",
    techUsed: ["Java", "Swing"],
  },
  {
    id: 6,
    title: "Prediction Of Song Popularity",
    image:
      "https://i.pinimg.com/564x/3d/66/c9/3d66c9e73495c6ea40a224d00bf353e8.jpg",
    description:
      "This project predicts song popularity using machine learning models by analyzing features like tempo, energy, and danceability, helping forecast chart success and audience engagement.",
    dateCreated: "Sep 17, 2024",
    techUsed: ["Python", "Machine Learning"],
  },
];
// Tech icons mapping
const techIcons: { [key: string]: React.ReactNode } = {
  React: <FaReact />,
  "Node.js": <FaNodeJs />,
  TypeScript: <SiTypescript />,
  "Socket.io": <SiSocketdotio />,
  Python: <SiPython />,
  MySQL: <SiMysql />,
  "Next.js": <SiNextdotjs />,
};

// Names array for heading
const names = [
  "میرے پروجیکٹس",
  "Τα έργα μου",
  "我的项目",
  "私のプロジェクト",
  "Мои проекти",
  "My Projects",
];



const ProjectsPage: React.FC = () => {
  const [currentName, setCurrentName] = useState(names[0]);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let index = 0;
    const changeName = () => {
      setCurrentName(names[index]);
      index = (index + 1) % names.length;

      if (index === names.length - 1) {
        clearInterval(interval);
        setCurrentName(names[names.length - 1]);
      }
    };

    const interval = setInterval(
      () => {
        changeName();
      },
      hovered ? 300 : 1000
    );

    return () => clearInterval(interval);
  }, [hovered]);

  return (
    <div className="bg-[--background]  flex flex-col items-center gap-4">
      <h1
        className="text-white text-3xl font-semibold mb-6"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {currentName}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="border-none bg-transparent px-4 sm:max-w-sm"
          >
            <CardHeader>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="text-white text-lg font-bold mt-2">
                <span className="transition-transform transform hover:scale-105">
                  {project.title}
                </span>
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{project.description}</p>
              <p className="text-gray-400">{project.dateCreated}</p>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-2">
              <div className="flex space-x-2 flex-wrap">
                {project.techUsed.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-gray-300 transition-transform transform hover:scale-110"
                  >
                    {techIcons[tech] || tech}
                  </Badge>
                ))}
              </div>
              <a
                href={`https://github.com/MohtashamMurshid/${project.title.replace(
                  /\s+/g,
                  ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white mt-2 hover:bg-white hover:text-black p-2 rounded transition-colors"
              >
                Github <FaArrowRight className="ml-1" />
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
