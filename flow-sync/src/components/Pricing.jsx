import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$0",
    features: ["1 project", "Basic analytics", "Email support"],
  },
  {
    name: "Pro",
    price: "$19/mo",
    features: ["10 projects", "Advanced analytics", "Priority support"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$49/mo",
    features: ["Unlimited projects", "Custom reports", "Dedicated manager"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">
          Flexible Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-2xl border hover:scale-105 transition-transform shadow-md hover:shadow-xl ${
                plan.highlight ? "bg-blue-50 border-blue-600" : "bg-gray-50"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
              }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                {plan.name}
              </h3>
              <p className="text-3xl font-extrabold text-blue-600 mb-4">
                {plan.price}
              </p>
              <ul className="text-sm text-gray-700 mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i}>✅ {feature}</li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold text-white ${
                  plan.highlight
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-600 hover:bg-gray-700"
                }`}
              >
                {plan.highlight ? "Start Free Trial" : "Choose Plan"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
