import React from "react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  const contact_info = [
    {
      logo: <FiMail />,
      link: "mailto:mujahidin28394@gmail.com",
      text: "mujahidin28394@gmail.com",
    },
    {
      logo: <FaTelegramPlane />,
      link: "https://telegram.me/muja_18",
      text: "62 859 250 006 62",
    },
    {
      logo: <FaWhatsapp />,
      link: "https://wa.me/6285925000662",
      text: "62 859 250 006 62",
    },
  ];
  return (
    <section id="contact" className="min-h-screen py-10 text-white">
      <div className="mt-8 text-center">
        <div className="h-1 w-[60%] bg-gradient-to-r from-cyan-500 to-blue-500 " />
        <h3 className="mt-4 text-xl font-semibold md:text-5xl">
          Contact{" "}
          <span className="bg-gradient-to-r  from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Me
          </span>
        </h3>
        <p className="mt-3 text-sm text-gray-400 md:text-lg">Get in touch</p>

        <div
          className="mx-auto mt-16 flex max-w-5xl
         flex-col gap-6 rounded-lg bg-gray-800 p-2 md:flex-row md:p-6"
          data-aos="zoom-in-down"
        >
          <form className="flex flex-1 flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="text-sm md:text-base"
            />
            <input
              type="Email"
              placeholder="Your Email Address"
              className="text-sm md:text-base"
            />
            <textarea
              placeholder="Your Message"
              rows={10}
              className="text-sm md:text-base"
            ></textarea>
            <button className="btn-primary w-fit bg-gradient-to-r from-cyan-500 to-blue-500">
              Send Message
            </button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  flex-wrap items-center gap-4 text-left"
              >
                <div className="flex  min-h-[3.5rem] min-w-[3.5rem] cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-3xl text-white">
                  <span>
                    <a
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contact.logo}
                    </a>
                  </span>
                </div>
                <p className="break-words text-sm  text-white/60 md:text-base">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
