import { Gift, Lightbulb, Loader2, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitSuggestion } from "../hooks/useQueries";

export default function SuggestionsSection() {
  const [form, setForm] = useState({ name: "", email: "", appIdea: "" });
  const { mutateAsync, isPending, isSuccess, reset } = useSubmitSuggestion();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutateAsync(form);
      toast.success("Idea submitted!");
      setForm({ name: "", email: "", appIdea: "" });
    } catch {
      toast.error("Failed to submit. Please try again.");
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
    e.currentTarget.style.borderColor = "rgba(155,89,255,0.5)";
    e.currentTarget.style.boxShadow =
      "0 0 0 2px rgba(155,89,255,0.15), 0 0 12px rgba(155,89,255,0.1)";
  };
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.currentTarget.style.borderColor = "rgba(26,35,64,0.9)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <section id="suggestions" className="py-28 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(155,89,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-5">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(155,89,255,0.2), rgba(0,229,255,0.2))",
                border: "1px solid rgba(155,89,255,0.3)",
                boxShadow: "0 0 24px rgba(155,89,255,0.2)",
              }}
            >
              <Lightbulb size={26} style={{ color: "#9B59FF" }} />
            </div>
          </div>
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{
              background: "rgba(155,89,255,0.08)",
              border: "1px solid rgba(155,89,255,0.25)",
              color: "#9B59FF",
            }}
          >
            Ideas
          </div>
          <h2
            className="text-4xl sm:text-5xl font-extrabold mb-4"
            style={{ color: "oklch(0.97 0.01 264)" }}
          >
            Valuable{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #9B59FF 0%, #00E5FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Suggestion
            </span>
          </h2>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "oklch(0.73 0.025 264)" }}
          >
            Have an app idea? Share it with us. If we build your idea, you'll
            receive a special reward.
          </p>

          {/* Reward badge */}
          <div
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full text-xs font-semibold"
            style={{
              background: "rgba(255,179,0,0.08)",
              border: "1px solid rgba(255,179,0,0.25)",
              color: "#FFB300",
            }}
          >
            <Gift size={12} /> Selected ideas receive a special reward
          </div>
        </motion.div>

        {/* Success State */}
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              data-ocid="suggestions.success_state"
              className="p-10 rounded-2xl text-center"
              style={{
                background: "rgba(11,16,34,0.9)",
                border: "1px solid rgba(155,89,255,0.35)",
                boxShadow:
                  "0 0 40px rgba(155,89,255,0.15), 0 0 2px rgba(0,229,255,0.4)",
              }}
            >
              <div className="flex justify-center mb-5">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(155,89,255,0.3), rgba(0,229,255,0.3))",
                    boxShadow: "0 0 30px rgba(155,89,255,0.3)",
                  }}
                >
                  <Sparkles size={28} style={{ color: "#00E5FF" }} />
                </div>
              </div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: "oklch(0.97 0.01 264)" }}
              >
                Idea Received!
              </h3>
              <p
                className="text-sm leading-relaxed max-w-sm mx-auto mb-6"
                style={{ color: "oklch(0.73 0.025 264)" }}
              >
                Your idea has been received. If selected, we will contact you
                and reward you.
              </p>
              <button
                type="button"
                onClick={() => reset()}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                style={{
                  border: "1px solid rgba(155,89,255,0.4)",
                  color: "#9B59FF",
                }}
              >
                Submit another idea
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-2xl"
              style={{
                background: "rgba(11,16,34,0.8)",
                border: "1px solid rgba(26,35,64,0.9)",
                boxShadow: "0 0 0 1px rgba(155,89,255,0.06)",
              }}
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="idea-name"
                      className="block text-xs font-semibold mb-2 tracking-wider uppercase"
                      style={{ color: "oklch(0.73 0.025 264)" }}
                    >
                      Name
                    </label>
                    <input
                      id="idea-name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      data-ocid="suggestions.input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="idea-email"
                      className="block text-xs font-semibold mb-2 tracking-wider uppercase"
                      style={{ color: "oklch(0.73 0.025 264)" }}
                    >
                      Email
                    </label>
                    <input
                      id="idea-email"
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
                      data-ocid="suggestions.input"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="idea-idea"
                    className="block text-xs font-semibold mb-2 tracking-wider uppercase"
                    style={{ color: "oklch(0.73 0.025 264)" }}
                  >
                    App Idea
                  </label>
                  <textarea
                    id="idea-idea"
                    required
                    rows={6}
                    placeholder="Describe your app idea in detail — what problem does it solve? Who is it for? What makes it unique?"
                    value={form.appIdea}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, appIdea: e.target.value }))
                    }
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    data-ocid="suggestions.textarea"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isPending}
                  data-ocid="suggestions.submit_button"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: "linear-gradient(135deg, #9B59FF, #B44CFF)",
                    color: "#fff",
                    boxShadow:
                      "0 0 16px rgba(155,89,255,0.4), 0 0 40px rgba(155,89,255,0.2)",
                  }}
                >
                  {isPending ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />{" "}
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Lightbulb size={15} /> Submit Idea
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
