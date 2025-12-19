import { AsciiBox } from "./ui";

export function Hero() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <AsciiBox variant="subtle" padding="lg">
          <div className="space-y-6">
            <p className="text-mauve-500 text-sm">
              <span className="text-rust-500">$</span> whoami
            </p>
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold text-mist-100">
                Don Coleman
              </h1>
              <p className="text-rust-500 text-lg">
                Cloud Architect & Systems Leader
              </p>
            </div>
            <p className="text-mauve-400 text-lg leading-relaxed max-w-4xl">
              Exploring the intersection of technology, leadership, and complex
              systems. Building tools that bridge ideas with practical
              application.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-mauve-500">
              <span className="text-sage-300">
                <span className="text-rust-600">//</span> curiosity
              </span>
              <span className="text-sage-300">
                <span className="text-rust-600">//</span> systems leadership
              </span>
              <span className="text-sage-300">
                <span className="text-rust-600">//</span> exploration
              </span>
            </div>
          </div>
        </AsciiBox>
      </div>
    </section>
  );
}
