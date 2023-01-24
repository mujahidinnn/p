import emailjs from "emailjs-com";
import React, { useEffect, useRef, useState } from "react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  // Popup timeout
  const [showPopUp, setShowPopUp] = useState(false);
  const showPopupHandler = () => setShowPopUp(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopUp(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [showPopUp]);
  let popup = null;
  if (showPopUp) {
    popup = (
      <div
        className="fixed inset-0 top-16 z-50 mt-10 flex justify-center bg-black/20"
        onClick={() => setShowPopUp(false)}
      >
        <div className="box-border flex h-[100px] w-[300px] items-center justify-center rounded border-t-[6px] border-cyan-400 bg-white px-[6px]">
          <p className="text-xl text-black">The message has been sent!</p>
        </div>
      </div>
    );
  }

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

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_ewyatnw",
        "template_1ytbic5",
        form.current,
        "NlbR2hBkr47mAH7Xd"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setLoading(false);
          showPopupHandler();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen py-10 text-white">
      {popup}
      <div className="mt-8 text-center">
        <h3 className="mt-4 text-xl font-semibold md:text-5xl">
          Contact{" "}
          <span className="bg-gradient-to-r  from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Me
          </span>
        </h3>
        <p className="mt-3 text-sm text-gray-400 md:text-lg">Get in touch</p>

        <div
          className="mx-2 mt-16 flex max-w-5xl flex-col
         gap-6 rounded-lg bg-[#051D2C]/60 p-2 md:mx-auto md:flex-row md:p-6"
          data-aos="zoom-in-down"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-1 flex-col gap-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="text-sm md:text-base"
              name="name"
              required
            />
            <input
              type="Email"
              placeholder="Your Email Address"
              className="text-sm md:text-base"
              name="email"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={10}
              className="text-sm md:text-base"
              name="message"
              required
            ></textarea>

            {loading ? (
              <button
                type="submit"
                className="flex w-fit rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-3"
              >
                <svg
                  className="mr-2 h-5 w-5 animate-spin rounded-full border-b-2 border-r-2 border-white"
                  viewBox="0 0 24 24"
                ></svg>
                Sending . . .
              </button>
            ) : (
              <button
                type="submit"
                className="w-fit rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-3"
              >
                Send Message
              </button>
            )}
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
