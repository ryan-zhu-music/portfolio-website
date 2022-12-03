import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [{ name, email, message }, setState] = useState(initialState);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [messageInvalid, setMessageInvalid] = useState(false);
  const [failed, setFailed] = useState(false);
  const [submitLabel, setSubmitLabel] = useState("Send");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailInvalid(true);
      return;
    }
    setEmailInvalid(false);
    if (message.trim().length === 0) {
      setMessageInvalid(true);
      return;
    }
    setMessageInvalid(false);
    setSubmitLabel("Sending...");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      .then((result) => {
        clearState();
        setFailed(false);
        setSubmitLabel("Sent!");
        console.log(result);
      })
      .catch((error) => {
        setFailed(true);
        setSubmitLabel("Send");
        console.log("error:", error);
      });
  };

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  };

  return (
    <main
      id="contact"
      className="w-screen py-32 grid grid-cols-1 md:grid-cols-2 px-10 md:px-20 lg:px-48 z-0"
    >
      <div className="flex flex-col items-start justify-start h-full">
        <h2
          className="text-2xl md:text-3xl lg:text-5xl drop-shadow-lg text-white text-center uppercase tracking-[0.3em]"
          data-aos="fade-right"
        >
          Contact
        </h2>
        <p
          className="text-white font-montserrat tracking-[0.05em] text-sm md:text-base my-5 font-normal pr-8"
          data-aos="fade-right"
          date-aos-delay={200}
        >
          Let's get in touch! Fill out the form, and I&apos;ll get back to you!
        </p>
        <p
          className="text-white font-montserrat tracking-[0.05em] text-sm md:text-base font-normal"
          data-aos="fade-right"
          date-aos-delay={400}
        >
          Feel free to contact me about anything!
        </p>
        <div className="w-full flex flex-col justify-start items-start">
          <a
            href="mailto:rz.ryanzhu@gmail.com"
            className="text-white font-montserrat tracking-[0.05em] text-sm md:text-base my-3 font-normal"
            data-aos="fade-right"
            date-aos-delay={800}
          >
            <FaEnvelope className="inline-block mr-4" />
            rz.ryanzhu@gmail.com
          </a>
          <div
            className="text-white font-montserrat tracking-[0.05em] text-sm md:text-base font-normal"
            data-aos="fade-right"
            date-aos-delay={900}
          >
            <FaPhoneAlt className="inline-block mr-4" />
            (437) 776-1039
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="gradient-mauve w-full h-full p-5 mt-5"
        name="form"
        autoComplete="off"
        data-aos="fade-left"
      >
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className="w-full h-12 p-5 mb-5 duration-500 ease-in-out focus:outline-none ring-purple-200/10 ring-1 focus:ring-white hover:ring-mauve bg-purple-200/10  placeholder:text-mauve-light text-white"
          required
          onChange={handleChange}
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="w-full h-12 p-5 mb-5 duration-500 ease-in-out focus:outline-none ring-purple-200/10 ring-1 focus:ring-white hover:ring-mauve bg-purple-200/10 placeholder:text-mauve-light text-white"
          required
          onChange={handleChange}
        />
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          rows={6}
          className="w-full h-32 p-5 mb-5 duration-500 ease-in-out focus:outline-none ring-purple-200/10 ring-1 focus:ring-white hover:ring-mauve bg-purple-200/10 placeholder:text-mauve-light text-white"
          required
          onChange={handleChange}
        />
        <button
          type="submit"
          className={
            "h-12 px-10 mb-5 duration-500 ease-in-out font-bold font-montserrat tracking-[0.05em] text-base md:text-lg " +
            (submitLabel === "Sent!"
              ? "bg-transparent border-2 border-white text-white"
              : submitLabel === "Sending..."
              ? "bg-white text-mauve-darker"
              : "bg-white opacity-70 hover:opacity-100 text-mauve-darker ")
          }
          disabled={submitLabel != "Send"}
        >
          {submitLabel}
        </button>
        <div className="h-6">
          {emailInvalid && (
            <p className="text-red-500 text-sm font-semibold">
              Please enter a valid email address.
            </p>
          )}
          {messageInvalid && (
            <p className="text-red-500 text-sm font-semibold">
              Please enter a message.
            </p>
          )}
          {failed && (
            <p className="text-red-500 text-sm font-semibold">
              Something went wrong. Please try again.
            </p>
          )}
          {submitLabel === "Sent!" && (
            <p className="text-white text-sm font-semibold">
              Looking forward to connecting with you!
            </p>
          )}
        </div>
      </form>
    </main>
  );
}
