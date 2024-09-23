"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTypescript,
  SiSocketdotio,
  SiPython,
  SiMysql,
  SiNextdotjs,
} from "react-icons/si";
import { FaArrowRight } from "react-icons/fa"; // Import arrow icon
import { Button } from "@/components/ui/button";

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
    title: "Portfolio Website",
    image: "",
    description:
      "A personal portfolio website built with Next.js and TailwindCSS.",
    dateCreated: "2023-05-01",
    techUsed: ["Next.js", "TypeScript"],
  },
  {
    id: 2,
    title: "E-commerce Platform",
    image: "/images/ecommerce.png",
    description:
      "An e-commerce platform with a custom shopping cart and payment integration.",
    dateCreated: "2022-11-15",
    techUsed: ["React", "Node.js"],
  },
  {
    id: 3,
    title: "Chat Application",
    image: "/images/chatapp.png",
    description:
      "A real-time chat application with WebSocket and chat room features.",
    dateCreated: "2023-03-20",
    techUsed: ["React", "Socket.io", "Java"],
  },
];

// Names array for heading
const names = [
  "میرے پروجیکٹس",
  "Τα έργα μου",
  "我的项目",
  "私のプロジェクト",
  "Мои проекти",
  "My Projects",
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
    <div className="bg-[--background] p-6 mt-16 flex flex-col items-center gap-4">
      <h1
        className="text-white text-3xl font-semibold mb-6"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {currentName}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="border-none bg-transparent transition-transform transform hover:scale-105"
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
              <p className="text-gray-400 mt-2">{project.dateCreated}</p>
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
              <Link
                href={`/projects/${project.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                passHref
              >
                <Button className="flex items-center text-white mt-2">
                  View Project <FaArrowRight className="ml-1" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
