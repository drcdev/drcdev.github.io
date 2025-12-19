import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-sand-800 bg-dusk-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="text-rust-500 font-bold text-lg hover:text-rust-400 transition-colors"
          >
            {">"} drc.dev
          </Link>
          <div className="flex items-center gap-6">
            <a
              href="https://doncoleman.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mauve-400 hover:text-mist-200 transition-colors text-sm"
            >
              [blog]
            </a>
            <a
              href="https://www.linkedin.com/in/drcdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mauve-400 hover:text-mist-200 transition-colors text-sm"
            >
              [linkedin]
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
