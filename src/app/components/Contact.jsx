"use client";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      id="contact"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] bg-purple-900 rounded-full h-80 w-80 z-0 blur-lg absolute top-48 -left-4 transform -translate-x-1/2 -translate-1/2 overflow-hidden hidden md:block sm:block"></div>
      
      <div className="z-10">
        <h5 className="text-2xl font-bold text-white my-2 text-center md:text-left">Let's Connect</h5>
        
        <p className="text-[#b4bdc5] mb-4 max-w-md text-justify">
          Feel free to reach out for collaborations, project discussions, or just to say hello! I'm currently exploring new opportunities and am eager to connect with like-minded individuals and teams. Whether it's a question about my work, an exciting new idea, or a potential collaboration, I look forward to hearing from you. Let's create something amazing together!
        </p>
      
      </div>

      <div>
        <form className="flex flex-col w-full">
          <div className="mb-6 w-full">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="Your Email"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5"
              required
            />
          </div>

          <div className="mb-6 w-full">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              placeholder="Subject of Email"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5"
              required
            />
          </div>

          <div className="mb-6 w-full">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5"
            />
          </div>

          <div className="w-full">
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>

          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
