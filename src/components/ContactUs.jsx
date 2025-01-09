import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaBusinessTime } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function ContactUs() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the section is visible
  });

  const cardVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "bottom" ? 100 : 0,
    }),
    show: (direction) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: "spring", duration: 1, delay: 1 },
    }),
  };

  return (
    <div ref={ref} className="h-screen w-screen flex items-center justify-center bg-slate-100 pt-20">
      <section className="w-full max-w-6xl px-4">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          custom="bottom"
          className="text-center mb-8"
        >
          <h2 className="mb-3 text-3xl font-bold text-slate-800">Contact Us</h2>
          <p className="text-gray-600">Have Questions? We’re Here to Help!</p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between">
          {/* Form Section */}
          <motion.form
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            custom="left"
            className="mb-12 w-full md:w-5/12 lg:px-6"
          >
            <div className="mb-3 w-full">
              <label className="block font-medium mb-[2px] text-slate-800" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                className="px-2 py-2 border w-full outline-none rounded-md"
                id="name"
                placeholder="Name"
              />
            </div>

            <div className="mb-3 w-full">
              <label className="block font-medium mb-[2px] text-slate-800" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className="px-2 py-2 border w-full outline-none rounded-md"
                id="email"
                placeholder="Enter your email address"
              />
            </div>

            <div className="mb-3 w-full">
              <label className="block font-medium mb-[2px] text-slate-800" htmlFor="message">
                Message
              </label>
              <textarea
                className="px-2 py-2 border rounded-[5px] w-full outline-none"
                id="message"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
  onClick={(e) => {
    e.preventDefault(); // Prevent the form from submitting
    alert("Thank you for your message! We'll get back to you soon.");
  }}
  className="group w-full relative inline-flex h-12 items-center border-none justify-center overflow-hidden rounded-xl bg-slate-800 px-6 font-medium text-neutral-200"
>
  <span>Send</span>
  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
    <div className="relative h-full w-8 bg-white/20"></div>
  </div>
</button>

          </motion.form>

          {/* Contact Info Section */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            custom="right"
            className="flex flex-col md:flex-row gap-10 items-start justify-center md:w-7/12 mt-5 px-4 md:px-0"
          >
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-3">
                <MdOutlineEmail className="text-4xl text-slate-800" />
                <div className="flex flex-col">
                  <p className="font-bold text-slate-800">Email Address</p>
                  <a href="mailto:support@example.com" className="text-gray-500">
                    BookLibrary@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MdOutlinePhoneCallback className="text-4xl text-slate-800" />
                <div className="flex flex-col">
                  <p className="font-bold text-slate-800">Phone Number</p>
                  <a href="tel:+212123456789" className="text-gray-500">+212 123 456 789</a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-3">
                <IoLocationOutline className="text-4xl text-slate-800" />
                <div className="flex flex-col">
                  <p className="font-bold text-slate-800">Address</p>
                  <p className="text-gray-500">123 Main Street, Rabat, Morocco</p>
                </div>
              </div>
              <div className="flex items-center gap-3 ">
                <FaBusinessTime className="text-4xl text-slate-800" />
                <div className="flex flex-col">
                  <p className="font-bold text-slate-800">Business Hours</p>
                  <p className="text-gray-500">Mon-Fri, 9 AM - 6 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
