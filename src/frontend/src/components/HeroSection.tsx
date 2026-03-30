import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import QuantumOrb from "./QuantumOrb";

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial spotlight */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)",
          transform: "translateY(-30%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-3 flex flex-col gap-7">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 self-start"
            >
              <div
                className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{
                  background: "rgba(0,229,255,0.08)",
                  border: "1px solid rgba(0,229,255,0.25)",
                  color: "#00E5FF",
                  boxShadow: "0 0 12px rgba(0,229,255,0.1)",
                }}
              >
                Next-Gen App Development
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
              style={{ color: "oklch(0.97 0.01 264)" }}
            >
              Forging{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #00E5FF 0%, #9B59FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Intelligence
              </span>
              <br />
              into Every Build.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg leading-relaxed max-w-xl"
              style={{ color: "oklch(0.73 0.025 264)" }}
            >
              We design and build intelligent, scalable apps that shape the
              future. Precision engineering meets elegant design.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button
                type="button"
                onClick={scrollToContact}
                data-ocid="hero.primary_button"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #00E5FF, #00BFFF)",
                  color: "#050510",
                  boxShadow:
                    "0 0 16px rgba(0,229,255,0.5), 0 0 40px rgba(0,229,255,0.25)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 0 24px rgba(0,229,255,0.7), 0 0 60px rgba(0,229,255,0.35)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 0 16px rgba(0,229,255,0.5), 0 0 40px rgba(0,229,255,0.25)";
                }}
              >
                Get Started <ArrowRight size={15} strokeWidth={2.5} />
              </button>

              <button
                type="button"
                onClick={scrollToAbout}
                data-ocid="hero.secondary_button"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(155,89,255,0.6)",
                  color: "oklch(0.97 0.01 264)",
                  boxShadow: "0 0 12px rgba(155,89,255,0.2)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 0 20px rgba(155,89,255,0.4), inset 0 0 12px rgba(155,89,255,0.08)";
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(155,89,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 0 12px rgba(155,89,255,0.2)";
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "transparent";
                }}
              >
                Explore Work
              </button>
            </motion.div>
          </div>

          {/* Right: 3D Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-2 h-[420px] lg:h-[520px]"
          >
            <QuantumOrb />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center mt-12"
        >
          <button
            type="button"
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-1 group"
            aria-label="Scroll down"
          >
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: "oklch(0.5 0.02 264)" }}
            >
              Scroll
            </span>
            <ChevronDown
              size={18}
              className="animate-bounce"
              style={{ color: "oklch(0.5 0.02 264)" }}
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
