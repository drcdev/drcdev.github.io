"use client";

import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  children: string;
  className?: string;
}

export function Markdown({ children, className = "" }: MarkdownProps) {
  return (
    <div className={`prose prose-invert prose-gray max-w-none ${className}`}>
      <ReactMarkdown
        components={{
        h2: ({ children }) => (
          <h2 className="text-lg font-bold text-sage-400 mt-6 mb-3 first:mt-0">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-base font-bold text-lavender-400 mt-4 mb-2">
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <p className="text-mauve-400 mb-4 leading-relaxed">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="list-none space-y-2 mb-4 pl-0">{children}</ul>
        ),
        li: ({ children }) => (
          <li className="text-mauve-400 flex gap-2">
            <span className="text-rust-500 shrink-0">-</span>
            <span>{children}</span>
          </li>
        ),
        strong: ({ children }) => (
          <strong className="text-mist-200 font-semibold">{children}</strong>
        ),
        code: ({ children, className }) => {
          const isBlock = className?.includes("language-");
          if (isBlock) {
            return (
              <code className="block bg-dusk-900 border border-sand-800 p-4 text-sm text-mist-300 overflow-x-auto">
                {children}
              </code>
            );
          }
          return (
            <code className="bg-dusk-800 px-1.5 py-0.5 text-sm text-rust-400 border border-sand-700">
              {children}
            </code>
          );
        },
        pre: ({ children }) => (
          <pre className="bg-transparent p-0 mb-4">{children}</pre>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            className="text-rust-500 hover:text-rust-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        ),
      }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
