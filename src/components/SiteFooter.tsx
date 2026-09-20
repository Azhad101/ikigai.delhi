import React from 'react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const InstagramIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="4.3" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="17.35" cy="6.65" r="1.15" fill="currentColor" />
  </svg>
);

const DiscordIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.5 4.7c2.3-.55 4.7-.55 7 0l.35.85c1.9.6 3.35 1.75 4.05 3.4.75 1.75 1.1 4.5.95 8.3-1.55 1.15-3.35 1.9-5.25 2.15l-.7-1.35c.7-.25 1.35-.6 1.95-1.05-.15-.1-.3-.2-.45-.3-3.65 1.65-7.85 1.65-11.5 0-.15.1-.3.2-.45.3.6.45 1.25.8 1.95 1.05l-.7 1.35c-1.9-.25-3.7-1-5.25-2.15-.15-3.8.2-6.55.95-8.3.7-1.65 2.15-2.8 4.05-3.4l.35-.85Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <circle cx="9" cy="13.2" r="1.35" fill="currentColor" />
    <circle cx="15" cy="13.2" r="1.35" fill="currentColor" />
  </svg>
);

const WhatsappIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.2 21 7.4 16.9C6.35 15.35 5.8 13.6 5.8 11.8 5.8 6.98 9.78 3 14.6 3S23.4 6.98 23.4 11.8 19.42 20.6 14.6 20.6c-1.65 0-3.2-.45-4.55-1.25L6.2 21Z"
      transform="translate(-1.4 -0.4)"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <path
      d="M9.9 9.4c.2-.45.4-.45.6-.46h.5c.16 0 .38-.06.6.46.22.53.75 1.83.82 1.96.07.14.11.3.02.48-.09.18-.14.29-.27.44-.14.16-.28.35-.4.47-.14.13-.28.28-.12.55.16.27.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.2.68-.79.86-1.06.18-.27.36-.22.6-.13.25.09 1.56.74 1.83.87.27.13.45.2.51.31.07.11.07.63-.15 1.24-.22.6-1.28 1.19-1.77 1.23-.45.05-1.01.07-1.63-.1-.37-.1-.85-.27-1.46-.53-2.57-1.1-4.24-3.7-4.37-3.88-.13-.18-1.05-1.39-1.05-2.66 0-1.26.66-1.88.9-2.13Z"
      fill="currentColor"
    />
  </svg>
);

const SOCIALS: SocialLink[] = [
  { name: 'Instagram', url: 'https://www.instagram.com/ikigai.delhi', icon: <InstagramIcon /> },
  { name: 'Discord', url: 'https://discord.com/invite/FSwKpqHP4R', icon: <DiscordIcon /> },
  { name: 'WhatsApp', url: 'https://chat.whatsapp.com/C89H6vaI9iD4rw0JieNUdk', icon: <WhatsappIcon /> },
];

export const SiteFooter: React.FC = () => {
  return (
    <footer className="relative bg-[#1A1817] text-[#F4E7C6] px-6 md:px-16 lg:px-24 py-10 md:py-12 overflow-hidden">
      {/* Corner Crop Marks */}
      <div className="absolute top-6 left-6 font-mono text-xs text-[#F4E7C6]/30 select-none pointer-events-none">
        ⌜ 28.6139° N
      </div>
      <div className="absolute top-6 right-6 font-mono text-xs text-[#F4E7C6]/30 select-none pointer-events-none">
        77.2090° E ⌝
      </div>

      <div data-reveal className="relative z-10 flex flex-col items-center gap-6 max-w-6xl mx-auto">
        <span className="font-mono text-[10px] tracking-[0.3em] text-[#F4E7C6]/60 uppercase">
          FOLLOW THE SIGNAL
        </span>

        {/* Social Logos */}
        <div className="flex items-center gap-5">
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="w-11 h-11 flex items-center justify-center border border-[#F4E7C6]/25 text-[#F4E7C6] hover:text-[#A3262A] hover:border-[#F4E7C6] transition-colors duration-300"
            >
              <span className="w-5 h-5">{social.icon}</span>
            </a>
          ))}
        </div>

        <div className="w-full pt-6 border-t border-[#F4E7C6]/15 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[9px] tracking-[0.2em] text-[#F4E7C6]/50 uppercase text-center">
          <span>IKIGAI.DELHI · 生き甲斐</span>
          <span>© 2026 · DELHI, INDIA</span>
        </div>
      </div>
    </footer>
  );
};
