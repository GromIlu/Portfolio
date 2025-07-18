import React, { useState } from "react";

const certificates = [
  {
    title: "NC II Computer Systems Servicing",
    issuer: "TESDA",
    date: "June 21, 2025",
    image: "/certificates/1stcert.JPG",
    description: "National Certificate II in CSS, issued by TESDA.",
    Location: "The Big Five San Pablo City, Laguna",
  },
  {
    title: "City Management Information System Internship",
    issuer: "City MIS",
    date: "June 4, 2025",
    image: "/certificates/2ndcert.jpg",
    description: "Completed internship at City Management Information System.",
    Location: "OneStop City Hall, San Pablo City, Laguna",
  },
  {
    title: "1st Isite National Conference",
    issuer: "Integrated Society of Information Technology Enthusiasts (iSITE inc.)",
    date: "November 29, 2023",
    image: "/certificates/3rdcert.JPG",
    description: "Attending the 1st Isite National Conference with the theme AI Tools in Education.",
    Location: "University of Perpetual help-Molino Campus, Cavite",
  },
  {
    title: "2nd Isite National Conference",
    issuer: "Integrated Society of Information Technology Enthusiasts (iSITE inc.)",
    date: "April 5, 2024",
    image: "/certificates/4thcert.jpg",
    description: "Hands-on training in version control using Git and GitHub.",
    Location: "University of Cordilleras Theatre, UC main Campus, Gov.Pack Road, Baguio City",
  },
  {
    title: "Digital Imaging 101",
    issuer: "San Pablo Colleges",
    date: "April 15, 2023",
    image: "/certificates/5thcert.png",
    description: "Associating Digital Animation with Advertising Webinar",
  },
  {
    title: "Digital Portfolio",
    issuer: "San Pablo Colleges",
    date: "April 29, 2023",
    image: "/certificates/6thcert.png",
    description: "E-ffort: Put Forth a Successful Digital Portfolio",
  },
];

export default function Certificate() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-gray-950 text-white px-4 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-400 mb-10">My Certificates</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="w-full h-72 perspective cursor-pointer"
              onClick={() => handleFlip(idx)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${
                  flippedIndex === idx ? "rotate-y-180" : ""
                }`}
              >
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg group">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-800 text-white rounded-xl p-4 flex flex-col justify-center items-center shadow-lg">
                  <h3 className="text-xl font-semibold text-indigo-300 mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-400">{cert.issuer}</p>
                  <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
                  <p className="text-sm text-gray-300">{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
