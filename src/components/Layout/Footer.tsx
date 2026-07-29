const footerLinks = [
  { href: "https://www.linkedin.com/in/junhao-zhao/", label: "LinkedIn" },
  { href: "https://github.com/jzhao234", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="mt-auto">
      {/* Signature motif: the page's closing edge */}
      <div className="signal-rule-reverse" aria-hidden="true" />
      <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-[12px] text-subtle">&copy; 2026 Junhao Zhao</p>
        <nav className="flex items-center gap-5" aria-label="Footer links">
          {footerLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-subtle hover:text-accent transition-colors cursor-pointer"
            >
              {label}
            </a>
          ))}
          <a
            href="/files/Junhao_Zhao_Resume.pdf"
            download="ZhaoJunhaoResume.pdf"
            className="text-[13px] text-subtle hover:text-accent transition-colors cursor-pointer"
          >
            Resume
          </a>
        </nav>
      </div>
    </footer>
  );
}
