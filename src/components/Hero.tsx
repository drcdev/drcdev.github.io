import { AsciiBox } from "./ui";

export function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <AsciiBox variant="subtle" padding="lg" className="max-w-2xl">
          <div className="space-y-4">
            <p className="text-gray-500 text-sm">
              <span className="text-accent-500">$</span> whoami
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-100">
              Project Showcase
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              A collection of applications, tools, and experiments.
              <br />
              <span className="text-gray-500">
                Built with curiosity and code.
              </span>
            </p>
            <div className="pt-4">
              <p className="text-gray-600 text-xs">
                {"// scroll down to explore"}
              </p>
            </div>
          </div>
        </AsciiBox>
      </div>
    </section>
  );
}
