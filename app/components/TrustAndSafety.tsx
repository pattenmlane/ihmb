export default function TrustAndSafety() {
    return (
      <section id="safety" className="rounded-2xl bg-zinc-900 py-12 px-8 my-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
              <h2 className="text-3xl font-bold text-white">Your Safety is Non-Negotiable</h2>
              <p className="text-gray-400 mt-4">We are committed to creating a secure environment with a zero-tolerance policy for harassment. Our platform is built on a foundation of cutting-edge security technology.</p>
          </div>
          <div className="border-l-2 border-pink-500 pl-6 text-gray-300 space-y-2">
              <p>✓ <span className="font-semibold">AES-256 Encryption</span> for all data, ensuring your information is always protected.</p>
              <p>✓ Routine <span className="font-semibold">Penetration Testing</span> to identify and fix vulnerabilities before they can be exploited.</p>
              <p>✓ <span className="font-semibold">Proactive Moderation</span> to maintain a respectful and safe community for everyone.</p>
              <p>✓ A dedicated <span className="font-semibold text-pink-400 hover:underline cursor-pointer">Safety & Trust Team</span> working around the clock to address concerns and enforce policies.</p>
          </div>
        </div>
      </section>
    );
  }