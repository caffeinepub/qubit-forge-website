import { CheckCircle2, Loader2, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { SiInstagram, SiYoutube } from "react-icons/si";
import { toast } from "sonner";
import { useSubmitContact } from "../hooks/useQueries";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { mutateAsync, isPending, isSuccess } = useSubmitContact();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutateAsync(form);
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  const inputStyle = {
    background: "rgba(11,16,34,0.9)",
    border: "1px solid rgba(26,35,64,0.9)",
    color: "oklch(0.97 0.01 264)",
    borderRadius: "0.75rem",
    padding: "0.75rem 1rem",
    width: "100%",
    fontSize: "0.875rem",
    transition: "border-color 0.2s, box-shadow 0.2s",
    outline: "none",
  };

  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.currentTarget.style.borderColor = "rgba(0,229,255,0.5)";
    e.currentTarget.style.boxShadow =
      "0 0 0 2px rgba(0,229,255,0.15), 0 0 12px rgba(0,229,255,0.1)";
  };
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.currentTarget.style.borderColor = "rgba(26,35,64,0.9)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <section id="contact" className="py-28 relative">
      <div
        className="absolute left-0 top-1/3 w-[400px] h-[400px] pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
              background: "rgba(0,229,255,0.08)",
              border: "1px solid rgba(0,229,255,0.25)",
              color: "#00E5FF",
            }}
          >
            Contact
          </div>
          <h2
            className="text-4xl sm:text-5xl font-extrabold"
            style={{ color: "oklch(0.97 0.01 264)" }}
          >
            Let's build something{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00E5FF 0%, #9B59FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              powerful
            </span>{" "}
            together.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl"
            style={{
              background: "rgba(11,16,34,0.8)",
              border: "1px solid rgba(26,35,64,0.9)",
              boxShadow: "0 0 0 1px rgba(0,229,255,0.06)",
            }}
          >
            {isSuccess ? (
              <div
                data-ocid="contact.success_state"
                className="flex flex-col items-center justify-center gap-4 py-12"
              >
                <CheckCircle2 size={48} style={{ color: "#00E5FF" }} />
                <p
                  className="text-lg font-semibold"
                  style={{ color: "oklch(0.97 0.01 264)" }}
                >
                  Message sent!
                </p>
                <p
                  className="text-sm text-center"
                  style={{ color: "oklch(0.73 0.025 264)" }}
                >
                  We'll get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => window.location.reload()}
                  className="mt-2 text-sm"
                  style={{ color: "#00E5FF" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold mb-2 tracking-wider uppercase"
                    style={{ color: "oklch(0.73 0.025 264)" }}
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    style={inputStyle}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold mb-2 tracking-wider uppercase"
                    style={{ color: "oklch(0.73 0.025 264)" }}
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    style={inputStyle}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold mb-2 tracking-wider uppercase"
                    style={{ color: "oklch(0.73 0.025 264)" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    data-ocid="contact.textarea"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isPending}
                  data-ocid="contact.submit_button"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: "linear-gradient(135deg, #00E5FF, #00BFFF)",
                    color: "#050510",
                    boxShadow:
                      "0 0 16px rgba(0,229,255,0.4), 0 0 40px rgba(0,229,255,0.2)",
                  }}
                >
                  {isPending ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-8 justify-center"
          >
            <div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: "oklch(0.97 0.01 264)" }}
              >
                Reach us directly
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "oklch(0.73 0.025 264)" }}
              >
                Have a project in mind or just want to explore possibilities?
                We'd love to hear from you. Our team responds within 24 hours.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-3">
              {[
                {
                  icon: SiInstagram,
                  label: "Instagram",
                  handle: "@qubitforges",
                  href: "https://instagram.com/qubitforges",
                  color: "#E1306C",
                },
                {
                  icon: SiYoutube,
                  label: "YouTube",
                  handle: "@qubitforges",
                  href: "https://youtube.com/@qubitforges?si=AW8YPqV8B7fXOcb0",
                  color: "#FF0000",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.link"
                  className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-300"
                  style={{
                    background: "rgba(11,16,34,0.6)",
                    border: "1px solid rgba(26,35,64,0.8)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(0,229,255,0.25)";
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(11,16,34,0.9)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(26,35,64,0.8)";
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(11,16,34,0.6)";
                  }}
                >
                  <social.icon size={20} style={{ color: social.color }} />
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "oklch(0.97 0.01 264)" }}
                    >
                      {social.label}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "oklch(0.73 0.025 264)" }}
                    >
                      {social.handle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
