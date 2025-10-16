import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const SERVICE_ID = "your_service_id";
const TEMPLATE_ID = "your_template_id";
const PUBLIC_KEY = "your_public_key";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus("Message sent ");
        formRef.current?.reset();
      })
      .catch(() => setStatus("Something went wrong "));
  };

  return (
    <section id="contact" className="py-14 px-6 bg-[#071026]">
      <div className="max-w-lg mx-auto text-center">
        <motion.h3
          className="text-3xl font-bold text-[#00ADB5] mb-6"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Get in Touch
        </motion.h3>

        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4 text-left">
          <input
            type="text"
            name="from_name"
            required
            placeholder="Your Name"
            className="p-3 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:border-[#00ADB5] text-gray-200"
          />
          <input
            type="email"
            name="from_email"
            required
            placeholder="Your Email"
            className="p-3 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:border-[#00ADB5] text-gray-200"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={4}
            className="p-3 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:border-[#00ADB5] text-gray-200"
          />
          <button
            type="submit"
            className="py-3 rounded-md bg-[#00ADB5] text-black font-semibold hover:bg-[#00FFD1] transition"
          >
            Send Message
          </button>
          {status && <p className="text-sm text-[#00FFD1] mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
