export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#151516] border-t border-gray-200 dark:border-white/10 mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-gray-400 dark:text-gray-500">
          &copy; 2026 Junhao Zhao
        </p>
        <nav className="flex items-center gap-5" aria-label="Footer links">
          <a
            href="https://www.linkedin.com/in/junhao-zhao/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 dark:text-gray-500 hover:text-[#2196F3] dark:hover:text-[#2196F3] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jzhao234"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 dark:text-gray-500 hover:text-[#2196F3] dark:hover:text-[#2196F3] transition-colors"
          >
            GitHub
          </a>
          <a
            href="/files/resume.pdf"
            download="ZhaoJunhaoResume.pdf"
            className="text-xs text-gray-400 dark:text-gray-500 hover:text-[#2196F3] dark:hover:text-[#2196F3] transition-colors"
          >
            Resume
          </a>
        </nav>
      </div>
    </footer>
  );
}
