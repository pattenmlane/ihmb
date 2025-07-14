export default function Hero() {
    return (
      // Centered text is perfect for a hero section
      <section className="flex flex-col items-center justify-center gap-6 py-24 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
          {/* New Headline: Bold, direct, and empowering */}
          Discreet Connections.
          <br />
          <span className="text-pink-500">Your Rules.</span>
        </h1>
        <p className="max-w-xl text-lg text-gray-300">
          {/* New Sub-headline: Reinforces privacy and the core user benefit */}
          The women-first platform for exploring new relationships with total
          anonymity and control. Your privacy is our only priority.
        </p>
      </section>
    );
  }