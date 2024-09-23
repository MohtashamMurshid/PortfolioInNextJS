"use client";
import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const names = ["محتشم", "Моһташам", "莫塔沙姆", "モタシャム", "Мохташам", "Mohtasham"];

const Page = () => {
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

    const interval = setInterval(() => {
      changeName();
    }, hovered ? 300 : 1000); // Faster on hover

    return () => clearInterval(interval);
  }, [hovered]);

  return (
    <div className="flex flex-col lg:flex-row gap-10 mt-2 px-4 lg:px-0">
      {/* Introduction Section */}
      <div className="w-full lg:w-1/2 text-justify tracking-tighter flex flex-col">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">
          Hi, I&apos;m{" "}
          <span
            className={`transition-transform duration-300 ${hovered ? 'scale-105' : 'scale-100'} inline-block`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {currentName}
          </span>
          ,
        </h1>
        <p className="text-sm md:text-base">
          a dedicated Computer Science enthusiast with a passion for
          transforming complex problems into elegant solutions. With a robust
          foundation in full-stack development and a deep focus on Java
          programming, I have honed my skills in building scalable and
          high-performance applications. My expertise extends beyond web
          development to the realm of artificial intelligence, where I
          specialize in designing and implementing advanced machine learning
          models, particularly Convolutional Neural Networks (CNNs). Currently
          pursuing a Bachelor’s in Computer Science, I am eager to apply my
          knowledge and skills to cutting-edge projects in machine learning,
          computer vision, and Java-based development. I am always on the
          lookout for opportunities that challenge me to think creatively and
          leverage technology to make a meaningful impact. Explore my portfolio
          to learn more about my projects, technical expertise, and how I can
          contribute to your team or project. Whether it’s architecting complex
          Java applications, developing intuitive user interfaces, or deploying
          state-of-the-art AI models, I am ready to take on challenges that
          drive innovation. Let’s build something amazing together!
        </p>
        <div className="flex flex-row gap-6 justify-center items-center mt-5">
          <Link href="/contact">
            <Button className="bg-gray-800/50 hover:bg-white hover:text-black font-semibold transition-colors">
              Contact Me
            </Button>
          </Link>
          <a href="/assets/Profile.pdf" download>
            <Button className="bg-gray-800/50 hover:bg-white hover:text-black font-semibold">
              Resume
            </Button>
          </a>
        </div>
      </div>

      {/* Accordion and Education Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4 mt-8 lg:mt-0">
        <div className="rounded-xl p-6 md:p-9 flex-1 bg-gray-800/30">
          <h1 className="text-xl md:text-2xl font-semibold mb-4">FAQ</h1>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Where do I want to work?</AccordionTrigger>
              <AccordionContent>
                I aim to work in a dynamic tech company on challenging projects
                that drive innovation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Do I take freelance jobs?</AccordionTrigger>
              <AccordionContent>
                Yes, I occasionally take freelance projects to explore diverse
                technologies.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How do I tackle problems?</AccordionTrigger>
              <AccordionContent>
                I break down problems, research solutions, and seek
                collaboration when needed.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Education Card with Timeline */}
        <Card className="text-white border-none bg-gray-800/30">
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-white/50">
            <div className="flex flex-col gap-4">
              <div className="relative pl-8 mb-4">
                <div className="absolute left-0 top-0 h-full w-1 bg-gray-500"></div>
                <div className="absolute left-[-5px] top-0 h-2 w-2 rounded-full bg-gray-500"></div>
                <div>
                  <strong>Bachelors in Computer Science (Ongoing)</strong>
                  <p>Taylors University, Sunway City, Malaysia</p>
                </div>
              </div>
              <div className="relative pl-8 mb-4">
                <div className="absolute left-0 top-0 h-full w-1 bg-gray-500"></div>
                <div className="absolute left-[-5px] top-0 h-2 w-2 rounded-full bg-gray-500"></div>
                <div>
                  <strong>Tyndale Biscoe and Mallinson School (2021)</strong>
                  <p>Srinagar, Kashmir (High School)</p>
                </div>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 h-full w-1 bg-gray-500"></div>
                <div className="absolute left-[-5px] top-0 h-2 w-2 rounded-full bg-gray-500"></div>
                <div>
                  <strong>Kashmir Valley School (2019)</strong>
                  <p>Srinagar, Kashmir (10th grade)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Page;
