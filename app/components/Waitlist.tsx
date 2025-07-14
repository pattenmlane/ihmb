export default function Waitlist() {
    return (
      <section className="py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-white">Get Early Access</h2>
          <p className="mt-4 text-lg text-gray-400">
            The app isn't public yet. Join the waitlist to be the first to know when we launch and secure your spot.
          </p>
          <form className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-full border border-zinc-700 bg-zinc-900 px-6 py-3 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 sm:w-auto"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto rounded-full bg-pink-600 px-8 py-3 text-lg font-semibold text-white transition hover:bg-pink-700"
            >
              Join Waitlist
            </button>
          </form>
        </div>
      </section>
    );
  }