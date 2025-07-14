import Image from 'next/image';

// Placeholder images. Replace these with actual paths to your screenshots in /public/
const mockups = [
  { src: "/mockup-blurred.png", alt: "Screenshot of a blurred user profile grid, demonstrating privacy." },
  { src: "/mockup-chat.png", alt: "Screenshot of a secure chat vault with end-to-end encryption." },
  { src: "/mockup-panic.png", alt: "Screenshot of the one-tap panic hide feature." },
];

// Simple placeholder for images
const MockupImage = ({ src, alt }: { src: string; alt: string }) => (
    <div className="relative aspect-[9/19] w-full rounded-3xl border-4 border-zinc-700 bg-zinc-900 p-2">
         {/* You can use next/image here if your images are in /public */}
         {/* <Image src={src} alt={alt} layout="fill" objectFit="cover" className="rounded-2xl" /> */}
         <div className="h-full w-full rounded-2xl bg-zinc-800 flex items-center justify-center text-center text-zinc-500 p-4">
            <p>Your app screenshot for <br/> "{alt.split(' ')[2]}" will go here.</p>
         </div>
    </div>
);


export default function AppMockupCarousel() {
  return (
    <section className="py-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">Control at Your Fingertips</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
          From blurred profiles to a secure chat vault, every feature is designed for your peace of mind.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {mockups.map((mockup) => (
          <MockupImage key={mockup.src} src={mockup.src} alt={mockup.alt} />
        ))}
      </div>
    </section>
  );
}