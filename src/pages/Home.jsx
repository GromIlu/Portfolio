import reactLogo from '../assets/react.png';
import viteLogo from '../assets/vite.png';
import tailwindLogo from '../assets/tailwind.png';
import laravelLogo from '../assets/laravel.png';
import railsLogo from '../assets/rails.png';
import phpLogo from '../assets/php.png';
import jsLogo from '../assets/javascript.png';
import csharpLogo from '../assets/csharp.png';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';

const techLogos = [
  reactLogo, viteLogo, tailwindLogo,
  laravelLogo, railsLogo, phpLogo,
  jsLogo, csharpLogo,htmlLogo, cssLogo,
];

export default function Home() {
  return (
    <section className="min-h-screen bg-gray-950 text-white px-6 py-16 flex flex-col md:flex-row items-center justify-center gap-12">
      
      <div className="text-left max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-indigo-400">Ilustre, Gerome L.</span>
        </h1>
        <p className="text-xl text-gray-400 mb-6">
I'm a BSIT student passionate about gaining knowledge and improving my skills in the ever-evolving world of technology. I believe that consistent practice is key to enhancing my programming abilities. Currently, I’m focused on building modern web applications using React, Vite, and Tailwind CSS for the front end, while actively learning backend like Laravel, Ruby on Rails, PHP, JavaScript, and C#. I also use HTML, CSS, and Tailwind for additional UI design and styling. I’m eager to keep exploring, learning, and growing within the information technology industry.        </p>
        <a
          href="contact"
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-md font-medium transition duration-300 ease-in-out"
        >
          Contact Me
          </a>

      </div>

      <div className="grid grid-cols-3 gap-6 max-w-md w-full animate-float-grid perspective">
        {techLogos.map((logo, idx) => (
          <div
            key={idx}
            className="w-25 h-25 md:w-25 md:h-25 bg-gray-800 backdrop-blur rounded-xl flex items-center justify-center transform-style preserve-3d shadow-lg hover:scale-110 transition duration-300 rotate-3d"
            style={{ animationDelay: `${idx * 0.15}s` }}
          >
            <img src={logo} alt={`tech-logo-${idx}`} className="w-20 h-20 object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}
