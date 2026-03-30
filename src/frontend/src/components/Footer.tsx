import { Zap } from "lucide-react";
import { SiInstagram, SiYoutube } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative"
      style={{
        borderTop: "1px solid rgba(0,229,255,0.12)",
        background: "rgba(5,5,16,0.95)",
      }}
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(0,229,255,0.5) 30%, rgba(155,89,255,0.5) 70%, transparent 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #00E5FF, #9B59FF)",
                  boxShadow: "0 0 14px rgba(0,229,255,0.35)",
                  color: "#050510",
                }}
              >
                <Zap size={16} strokeWidth={2.5} />
              </div>
              <span
                className="font-bold text-lg"
                style={{ color: "oklch(0.97 0.01 264)" }}
              >
                Qubit <span style={{ color: "#00E5FF" }}>Forge</span>
              </span>
            </div>
            <p className="text-xs" style={{ color: "oklch(0.55 0.02 264)" }}>
              Forging Intelligence into Every Build.
            </p>
          </div>

          {/* Right: Social + Copyright */}
          <div className="flex flex-col items-center sm:items-end gap-4">
            <div className="flex items-center gap-3">
              {[
                {
                  icon: SiInstagram,
                  href: "https://instagram.com/qubitforges",
                  label: "Instagram",
                },
                {
                  icon: SiYoutube,
                  href: "https://youtube.com/@qubitforges?si=AW8YPqV8B7fXOcb0",
                  label: "YouTube",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  data-ocid="footer.link"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "rgba(26,35,64,0.5)",
                    border: "1px solid rgba(26,35,64,0.8)",
                    color: "oklch(0.73 0.025 264)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(0,229,255,0.3)";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#00E5FF";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                      "0 0 10px rgba(0,229,255,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(26,35,64,0.8)";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "oklch(0.73 0.025 264)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                      "none";
                  }}
                >
                  <social.icon size={15} />
                </a>
              ))}
            </div>
            <div className="flex flex-col items-center sm:items-end gap-1">
              <p className="text-xs" style={{ color: "oklch(0.45 0.015 264)" }}>
                © {year} Qubit Forge. All rights reserved.
              </p>
              <p className="text-xs" style={{ color: "oklch(0.4 0.012 264)" }}>
                Built by Pratik Srivastava
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
