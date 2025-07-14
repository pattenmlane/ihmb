const faqItems = [
    {
        q: "How do you protect my identity?",
        a: "We never ask for your real name, use end-to-end encryption for all chats, and ensure your profile photos are only seen by people you explicitly match with. Your privacy is technically enforced at every level."
    },
    // --- This is the updated part ---
    {
        q: "Can my partner find out?",
        a: "We've engineered the app for maximum discretion. Sign-up is anonymous, and your profile is invisible and blurred to everyone until you choose to match. All conversations happen in a secure vault, giving you full control over who sees you."
    },
    // --- The rest of the questions remain the same ---
    {
        q: "How do you verify users are real?",
        a: "We use phone verification for all users at sign-up to prevent bots. We also offer an optional, more robust ID verification that earns you a 'Verified' badge on your profile."
    },
    {
        q: "Can I permanently delete my data?",
        a: "Yes. You can request full data deletion at any time from your account settings. Once requested, your profile and all associated data are permanently and irretrievably erased from our servers."
    }
]

export default function FAQ() {
  return (
    <section className="py-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white">Frequently Asked Questions</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
          Your peace of mind is our priority. Here are some common questions.
        </p>
      </div>
      <div className="mx-auto mt-12 max-w-3xl space-y-6">
        {faqItems.map((item) => (
            <div key={item.q} className="rounded-xl bg-zinc-900 p-6">
                <h3 className="font-semibold text-white text-lg">{item.q}</h3>
                <p className="text-gray-400 mt-2">{item.a}</p>
            </div>
        ))}
      </div>
    </section>
  );
}