import React from "react";
import { Medal } from "lucide-react";

const certifications = [
  {
    image:
      "https://images.unsplash.com/photo-1523289333742-be1143f6b766?w=800&auto=format&fit=crop&q=60",
    name: "AWS Solutions Architect",
    date: "2024",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60",
    name: "Google Cloud Professional",
    date: "2023",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60",
    name: "Microsoft Azure Expert",
    date: "2023",
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60",
    name: "Data Science Specialization",
    date: "2024",
  },
];

function Certifications() {
  return (
    <div className="min-h-screen text-white">
      <section className="container mx-auto px-4 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-[#112240] rounded-lg overflow-hidden h-[300px]">
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute cursor-pointer inset-0 bg-[#112240]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-xl mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-[#8892b0] text-sm">{cert.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Certifications;
