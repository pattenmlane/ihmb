import Link from "next/link";

// Using an SVG for the logo is a great idea as mentioned in your checklist.
// For now, we'll use text. You can replace it with an <Image> component.
const Logo = () => (
  <Link href="/" className="text-2xl font-bold text-white hover:text-pink-400">
    IHMB
  </Link>
);

export default function TopNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#how-it-works" className="text-sm text-gray-300 hover:text-white">
            How It Works
          </Link>
          <Link href="#safety" className="text-sm text-gray-300 hover:text-white">
            Safety
          </Link>
          <Link href="/login" className="text-sm text-gray-300 hover:text-white">
            Login
          </Link>
        </nav>
        <Link
          href="/signup"
          className="rounded-full bg-pink-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-pink-700"
        >
          Join Free
        </Link>
      </div>
    </header>
  );
}