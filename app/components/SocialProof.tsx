export default function SocialProof() {
    return (
      <section className="py-20 text-center">
        <div className="mx-auto max-w-3xl">
          {/* FIX: Added text-zinc-800 dark:text-white to make it visible on all backgrounds */}
          <h2 className="text-3xl font-semibold italic text-zinc-800 dark:text-white">
            “Finally, an app where I actually control who sees me. The photo vault is a game-changer.”
          </h2>
          <p className="mt-6 text-pink-400">- A.L., 29, New York, NY</p>
          
          {/* REPLACEMENT: A single, more impressive counter instead of the two stats */}
          <div className="mt-16">
            <p className="text-6xl font-bold text-black dark:text-white sm:text-7xl">
              {/* Updated to reflect waitlist sign-ups and changed color to black for visibility */}
              1,204,573
            </p>
            <p className="mt-2 text-lg text-gray-400">People on the Waitlist</p>
          </div>
        </div>
      </section>
    );
  }