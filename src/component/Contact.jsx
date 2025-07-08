import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { AiOutlinePhone } from 'react-icons/ai';
import { BsSendFill } from 'react-icons/bs';
import Social from './Social'; // ✅ Make sure path is correct

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_2y74twn',     // ✅ Replace with your actual service ID
        'template_w2gscco',    // ✅ Replace with your actual template ID
        form.current,
        'u_qbfkKQt2fvSj-hs'    // ✅ Your provided public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          form.current.reset();
          setTimeout(() => setIsSent(false), 4000);
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-[#0f0f0f] to-[#1a1a1a] text-white px-6 py-16 flex justify-center items-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* LEFT PANEL */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold mb-4">📬 Contact Me</h2>

          <div className="flex items-center gap-3 text-lg">
            <BsSendFill className="text-zinc-500 text-2xl animate-bounce-slow" />
            <span>vikasmadhukar1430@gmail.com</span>
          </div>

          <div className="flex items-center gap-3 text-lg">
            <AiOutlinePhone className="text-zinc-500 text-2xl animate-pulse" />
            <span>7999063330</span>
          </div>

          {/* ✅ Replacing social icons with your component */}
          <div className="pt-4 pr-50 md:pr-84 flex items-center justify-center ">
            <Social />
          </div>

          {/* DOWNLOAD CV */}
          <a
            href="/resume.pdf"
            download
            className="inline-block mt-6 px-6 py-3 border border-zinc-400 rounded-full text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-black transition-all shadow-lg"
          >
            Download CV
          </a>

          {/* SUCCESS MESSAGE */}
          {isSent && (
            <p className="text-green-400 mt-4 animate-pulse">
              ✅ Message sent successfully!
            </p>
          )}
        </div>

        {/* RIGHT PANEL - FORM */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full backdrop-blur-lg  p-8 rounded-lg shadow-lg space-y-6 border border-white/10" style={{
        backgroundImage: "linear-gradient(-120deg, #211c31 , #000 )",
      }}
        >
          <input
            type="text"
            placeholder="Your Name"
            name="user_name"
            required
            className="w-full p-3 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-zinc-400 placeholder:text-gray-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            name="user_email"
            required
            className="w-full p-3 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-zinc-400 placeholder:text-gray-400"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            name="message"
            required
            className="w-full p-3 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-zinc-400 placeholder:text-gray-400"
          ></textarea>
          <button
            type="submit"
            className=" text-white px-6 py-3 rounded-full hover:scale-105 transition-all shadow-lg" style={{
        backgroundImage: "linear-gradient(-120deg, #211c31 , #000 )",
      }}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
