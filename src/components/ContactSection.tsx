import { profile } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MessageCircle, Copy, Check } from "lucide-react";
import { useState } from "react";

const contactItems = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: "LinkedIn", value: profile.linkedin, href: profile.linkedin },
  { icon: Github, label: "GitHub", value: profile.github, href: profile.github },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat on WhatsApp", href: profile.whatsapp },
];

const ContactSection = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading title="Contact" subtitle="Send a raven — or an email" />
      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {contactItems.map((item, idx) => (
          <motion.div
            key={item.label}
            className="glass-glow rounded-xl p-5 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <item.icon size={20} className="text-primary shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground hover:text-primary transition-colors truncate block"
                >
                  {item.value}
                </a>
              </div>
              <button
                onClick={() => copyToClipboard(item.value, item.label)}
                className="text-muted-foreground hover:text-primary transition-colors shrink-0"
                title="Copy"
              >
                {copied === item.label ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-20 text-center border-t border-border/30 pt-8">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} <span className="text-gradient-accent font-cinzel">{profile.name}</span>. All rights reserved.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
