import Link from "next/link";

export default function CTAButtons() {
  return (
    // Centering the buttons makes more sense than the previous flex-col layout
    <div className="flex flex-col items-center justify-center gap-4 py-8 sm:flex-row">
      {/* Primary CTA with more compelling text */}
      <Link
        href="/signup"
        className="rounded-full bg-pink-600 px-8 py-3 text-lg font-semibold text-white transition hover:bg-pink-700"
      >
        Create Your Free Profile
      </Link>
      {/* Secondary CTA */}
      <a
        href="#how-it-works" // This should link to the ID of your "How it works" section
        className="rounded-full border border-pink-400 px-8 py-3 text-lg text-pink-400 transition hover:bg-pink-400 hover:text-black"
      >
        Explore Features
      </a>
    </div>
  );
}