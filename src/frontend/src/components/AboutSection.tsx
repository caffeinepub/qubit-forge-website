import { Brain, Server, Sparkles, User } from "lucide-react";
import { motion } from "motion/react";

const FEATURE_CARDS = [
  {
    icon: Brain,
    title: "Intelligent Development",
    description:
      "We integrate AI and smart logic into every app we build, creating software that learns and adapts.",
    color: "#00E5FF",
    glow: "rgba(0,229,255,0.25)",
  },
  {
    icon: Server,
    title: "Scalable Systems",
    description:
      "Architecture designed to grow with your business needs — from startup to enterprise, without compromise.",
    color: "#9B59FF",
    glow: "rgba(155,89,255,0.25)",
  },
  {
    icon: Sparkles,
    title: "Clean & Modern Design",
    description:
      "Pixel-perfect interfaces inspired by the world's best products. Every detail crafted with precision.",
    color: "#00BFFF",
    glow: "rgba(0,191,255,0.25)",
  },
];

const TEAM = [
  {
    name: "Pratik Srivastava",
    role: "Developer — Building the future, one app at a time.",
    badge: "Founder",
  },
  {
    name: "Piyush Karan",
    role: "Designer — Crafting pixel-perfect experiences.",
    badge: "Founder",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-28 relative">
      {/* Subtle background accent */}
      <div
        className="absolute right-0 top-1/4 w-[500px] h-[500px] pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(155,89,255,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{
              background: "rgba(155,89,255,0.08)",
              border: "1px solid rgba(155,89,255,0.25)",
              color: "#9B59FF",
            }}
          >
            Who We Are
          </div>
          <h2
            className="text-4xl sm:text-5xl font-extrabold mb-6"
            style={{ color: "oklch(0.97 0.01 264)" }}
          >
            About{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00E5FF 0%, #9B59FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Us
            </span>
          </h2>
          <p
            className="text-base leading-relaxed max-w-2xl mx-auto"
            style={{ color: "oklch(0.73 0.025 264)" }}
          >
            Qubit Forge is a premium software development company focused on
            building smart, scalable, and high-performance applications. We
            combine cutting-edge technology with clean design to deliver digital
            products that stand out in a crowded world.
          </p>
        </motion.div>

        {/* Team Highlight */}
        <div className="mb-16 flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-1"
            >
              <div
                className="flex items-center gap-4 p-5 rounded-2xl h-full"
                style={{
                  background: "rgba(11,16,34,0.8)",
                  border: "1px solid rgba(0,229,255,0.15)",
                  boxShadow: "0 0 24px rgba(0,229,255,0.05)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,229,255,0.2), rgba(155,89,255,0.2))",
                    border: "1px solid rgba(0,229,255,0.3)",
                  }}
                >
                  <User size={22} style={{ color: "#00E5FF" }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-sm font-bold"
                    style={{ color: "oklch(0.97 0.01 264)" }}
                  >
                    {member.name}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "oklch(0.73 0.025 264)" }}
                  >
                    {member.role}
                  </p>
                </div>
                <div
                  className="ml-auto text-xs px-2.5 py-1 rounded-full font-medium flex-shrink-0"
                  style={{
                    background: "rgba(0,229,255,0.08)",
                    border: "1px solid rgba(0,229,255,0.2)",
                    color: "#00E5FF",
                  }}
                >
                  {member.badge}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURE_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-ocid={`about.card.${i + 1}`}
              className="group p-7 rounded-2xl cursor-default transition-all duration-400 relative overflow-hidden"
              style={{
                background: "rgba(11,16,34,0.9)",
                border: "1px solid rgba(26,35,64,0.8)",
                boxShadow:
                  "0 0 0 1px rgba(0,229,255,0.06), 0 0 20px rgba(155,89,255,0.05)",
              }}
              whileHover={{
                y: -6,
                boxShadow: `0 0 0 1px ${card.color}55, 0 0 30px ${card.glow}`,
                borderColor: `${card.color}40`,
              }}
            >
              {/* Top gradient line */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${card.color}60, transparent)`,
                }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: `rgba(${card.color === "#00E5FF" ? "0,229,255" : card.color === "#9B59FF" ? "155,89,255" : "0,191,255"}, 0.1)`,
                  border: `1px solid ${card.color}30`,
                }}
              >
                <card.icon
                  size={22}
                  style={{ color: card.color }}
                  strokeWidth={1.5}
                />
              </div>

              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "oklch(0.97 0.01 264)" }}
              >
                {card.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "oklch(0.73 0.025 264)" }}
              >
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
