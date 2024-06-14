import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 py-24 gap-4" id="con">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say Hi, I'll try my best
          to get back to you.
        </p>

        <div className="socials flex flex-row gap-2">
          <Link
            href="https://www.github.com/Mahak008"
            target="_blank"
            alt="Github"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mahakgarg"
            target="_blank"
            alt="Linkedin"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>

      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block-w-full p-2.5"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>

            <input
              type="text"
              id="subject"
              placeholder="Subject of Email"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block-w-full p-2.5"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea name="message" id="message" placeholder="Your Message" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block-w-full p-2.5" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
