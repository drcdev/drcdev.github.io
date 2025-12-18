export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 mt-auto">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            <span className="text-gray-600">{"/*"}</span> {year} Don Coleman{" "}
            <span className="text-gray-600">{"*/"}</span>
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://doncoleman.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-accent-500 transition-colors text-sm"
            >
              [blog]
            </a>
            <a
              href="https://github.com/drcdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-accent-500 transition-colors text-sm"
            >
              [github]
            </a>
            <a
              href="https://www.linkedin.com/in/drcdev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-accent-500 transition-colors text-sm"
            >
              [linkedin]
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
