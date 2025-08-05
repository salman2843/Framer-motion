import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 text-gray-800"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have questions or want to learn more? We'd love to hear from you.
        </motion.p>

        <motion.form
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="col-span-1 md:col-span-2 p-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="col-span-1 md:col-span-2 p-3 border rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="col-span-1 md:col-span-2 p-3 border rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition col-span-1 md:col-span-2"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
