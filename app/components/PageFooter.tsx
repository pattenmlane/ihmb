import Link from 'next/link';

export default function PageFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row">
        <div className="text-sm text-gray-500">
          &copy; {currentYear} IHMB, Inc. All Rights Reserved.
        </div>
        <nav className="flex gap-6">
          <Link href="/terms" className="text-sm text-gray-400 hover:text-white">Terms</Link>
          <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy</Link>
          <Link href="#safety" className="text-sm text-gray-400 hover:text-white">Safety</Link>
          <Link href="/contact" className="text-sm text-gray-400 hover:text-white">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}