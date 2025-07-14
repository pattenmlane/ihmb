const steps = [
    {
      step: 1,
      title: "Create Your Profile",
      description: "Sign up anonymously with just an email or phone number. Your real name is never required or displayed.",
    },
    {
      step: 2,
      title: "Set Your Boundaries",
      description: "Use our smart filters to define your ideal connection, from distance and age to your desired level of discretion.",
    },
    {
      step: 3,
      title: "Connect Privately",
      description: "Swipe and match with confidence. Your profile remains blurred until you say so. All chats are end-to-end encrypted.",
    },
  ];
  
  export default function HowItWorks() {
    return (
      <section id="how-it-works" className="py-20 text-center">
        <h2 className="text-4xl font-bold text-white">Simple, Safe, and Secure</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
          Start your discreet journey in three simple steps.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((item) => (
            <div key={item.step} className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-pink-500 bg-pink-500/10 text-xl font-bold text-pink-400">
                {item.step}
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }