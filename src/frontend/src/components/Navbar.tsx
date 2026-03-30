import { Menu, X, Zap } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Contact", id: "contact" },
  { label: "Suggestions", id: "suggestions" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(5, 5, 16, 0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(26, 35, 64, 0.8)",
      }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2.5 group"
            data-ocid="nav.link"
            aria-label="Qubit Forge home"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black"
              style={{
                background: "linear-gradient(135deg, #00E5FF, #9B59FF)",
                boxShadow: "0 0 16px rgba(0,229,255,0.4)",
                color: "#050510",
              }}
            >
              <Zap size={16} strokeWidth={2.5} />
            </div>
            <span
              className="font-bold text-lg tracking-tight"
              style={{ color: "oklch(0.97 0.01 264)" }}
            >
              Qubit <span style={{ color: "#00E5FF" }}>Forge</span>
            </span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => scrollTo(link.id)}
                data-ocid="nav.link"
                className="relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
                style={{
                  color:
                    activeSection === link.id
                      ? "#00E5FF"
                      : "oklch(0.73 0.025 264)",
                }}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: "rgba(0,229,255,0.08)",
                      border: "1px solid rgba(0,229,255,0.2)",
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              data-ocid="nav.primary_button"
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: "transparent",
                border: "1px solid #00E5FF",
                color: "#00E5FF",
                boxShadow:
                  "0 0 12px rgba(0,229,255,0.3), inset 0 0 8px rgba(0,229,255,0.05)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 0 20px rgba(0,229,255,0.5), inset 0 0 16px rgba(0,229,255,0.1)";
                (e.currentTarget as HTMLButtonElement).style.background =
                  "rgba(0,229,255,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 0 12px rgba(0,229,255,0.3), inset 0 0 8px rgba(0,229,255,0.05)";
                (e.currentTarget as HTMLButtonElement).style.background =
                  "transparent";
              }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg"
            style={{ color: "oklch(0.73 0.025 264)" }}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div
                className="pb-4 flex flex-col gap-1"
                style={{
                  borderTop: "1px solid rgba(26,35,64,0.8)",
                  marginTop: "0.5rem",
                  paddingTop: "0.75rem",
                }}
              >
                {NAV_LINKS.map((link) => (
                  <button
                    type="button"
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    data-ocid="nav.link"
                    className="text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                    style={{
                      color:
                        activeSection === link.id
                          ? "#00E5FF"
                          : "oklch(0.73 0.025 264)",
                      background:
                        activeSection === link.id
                          ? "rgba(0,229,255,0.06)"
                          : "transparent",
                    }}
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => scrollTo("contact")}
                  data-ocid="nav.primary_button"
                  className="mt-2 mx-4 py-2.5 rounded-full text-sm font-semibold"
                  style={{
                    border: "1px solid #00E5FF",
                    color: "#00E5FF",
                    boxShadow: "0 0 12px rgba(0,229,255,0.3)",
                  }}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
