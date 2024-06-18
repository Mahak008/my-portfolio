"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>Tailwind</li>
        <li>Javascript</li>
        <li>React</li>
        <li>MySQL</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "cert",
    content: (
      <ul className="list-disc pl-2">
        <li>Web Development Training by Internshala.</li>
        <li>Responsive Web Design Developer Certification by freeCodeCamp.</li>
        <li>HTML, CSS and Javascript for Web Developers by Coursera.</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full mb-2">
          <h2 className="text-4xl font-bold text-white mb-4 text-center md:text-left">About Me</h2>

          <p className="text-base lg:text-lg text-justify">
            As a passionate Frontend Developer, I excel in crafting intuitive
            and engaging user experiences. I transform ideas into responsive and
            visually appealing web applications. With a keen eye for detail, I
            strive to create seamless digital experiences that delight users and
            drive business success. My goal is to blend creativity and
            functionality in every project.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("cert")}
              active={tab === "cert"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>

          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="About"
        />
      </div>
    </section>
  );
};

export default About;
