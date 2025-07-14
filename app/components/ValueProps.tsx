// New array of value propositions, based on your checklist
const valueProps = [
  {
    title: "Total Privacy",
    desc: "Communicate securely with end-to-end encrypted chat and keep your media safe in a Face ID-locked photo vault.",
  },
  {
    title: "Women-First Controls",
    desc: "Your profile is always blurred until you choose to match. Block users instantly and get screenshot detection alerts.",
  },
  {
    title: "A Curated Community",
    desc: "We focus on quality over quantity. Male user verification and proactive moderation ensure all profiles are authentic and intentional.",
  },
];

export default function ValueProps() {
  return (
    <section className="grid gap-6 py-16 sm:grid-cols-3">
      {valueProps.map((prop) => (
        // Using a slightly softer, rounded look as per your implementation tips
        <div key={prop.title} className="rounded-2xl bg-zinc-900 p-6">
          <h3 className="mb-2 text-xl font-bold text-pink-400">{prop.title}</h3>
          <p className="text-gray-400">{prop.desc}</p>
        </div>
      ))}
    </section>
  );
}
  