const projects = [
  {
    title: "GRM Smart Piggery Management System",
    description: "Piggery inventory and sales monitoring system.",
    image: "/projects/SmartPiggery.JPG", 
    github: "https://github.com/GromIlu/grmsystem",
    tech: ["PHP", "MySQL", "Tailwind", "HTML", "JavaScript"],
  },
  
  {
    title: "Portfolio Website",
    description: "My personal design portfolio website.",
    image: "/projects/port.JPG",
    github: "https://github.com/GromIlu/Portfolio",
    tech: ["React", "Tailwind", "Vite"],
  },

  {
    title: "Relaxxx Corolla Showroom",
    description: "A WordPress site for all types of Toyota Corolla showroom.",
    image: "/projects/Relaxxx.JPG",
    wordpress: "https://relaxxxgroom.wordpress.com/",
    tech: ["WordPress"],
  },

  
  {
    title: "Flutter Mobile App",
    description: "Develop To Be Soon!!.",
    image: "/projects/mobapp.jpg",
    github: "https://github.com/GromIlu",
    tech: ["Flutter", "Dart"],
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-900 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-indigo-400 mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-indigo-500/30 transition">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover rounded-md mb-4 hover:scale-105 transition duration-300"
              />
              <h3 className="text-xl text-indigo-300 font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-300 mb-4">{p.description}</p>

              <div className="flex gap-2 flex-wrap mb-4">
                {p.tech.map((t, j) => (
                  <span key={j} className="bg-indigo-900 text-gray-100 px-3 py-1 rounded-full text-sm">{t}</span>
                ))}
              </div>

              <div className="flex gap-4">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm transition"
                  >
                    View GitHub
                  </a>
                )}
                {p.wordpress && (
                  <a
                    href={p.wordpress}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition"
                  >
                    View WordPress
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
