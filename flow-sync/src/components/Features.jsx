import { motion } from "framer-motion";

const features = [
  {
    title: "Smart Task Automation",
    description:
      "Automate repetitive tasks with our AI engine and focus on what matters.",
    icon: "⚙️",
  },
  {
    title: "Team Collaboration",
    description:
      "Collaborate in real time with shared boards and live updates.",
    icon: "🤝",
  },
  {
    title: "Real-time Insights",
    description: "Get performance insights and recommendations instantly.",
    icon: "📊",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
