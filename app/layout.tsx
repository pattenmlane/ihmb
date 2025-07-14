import "./globals.css";

export const metadata = {
  // Updated Title - Professional and Clear
  title: "I Hate My Boyfriend – Discreet Connections for Women",
  // Updated Description - Emphasizes safety and the target user
  description: "A women-first dating app for exploring discreet affairs safely and anonymously. We prioritize your privacy with end-to-end encryption and female-centric controls.",
  // Add Open Graph tags for better social sharing
  openGraph: {
    title: "I Hate My Boyfriend – Discreet Connections for Women",
    description: "Your secret is safe. Explore connections with total privacy.",
    // You'll need to create and add an image to your /public folder
    images: ['/og-image.png'], 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* The classNames here are fine, the dark theme works perfectly for this concept */}
      <body className="min-h-screen bg-black text-foreground">{children}</body>
    </html>
  );
}
