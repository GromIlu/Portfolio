const projects = [
  {
    title: "Smart Piggery System",
    description: "IoT-enabled pig farm monitoring using PHP, MySQL, and Twilio.",
    tech: ["PHP", "MySQL", "Twilio"],
  },
  {
    title: "React E-commerce",
    description: "Responsive web app with Stripe and Firebase auth.",
    tech: ["React", "Tailwind", "Firebase"],
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-900 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-indigo-400 mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl text-indigo-300 font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-300 mb-4">{p.description}</p>
              <div className="flex gap-2 flex-wrap">
                {p.tech.map((t, j) => (
                  <span key={j} className="bg-indigo-900 text-gray-100 px-3 py-1 rounded-full text-sm">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
