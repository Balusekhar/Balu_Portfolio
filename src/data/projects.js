import mocky from "../assets/mocky.png";
import byteshare from "../assets/byteshare.png";
import simplestorage from "../assets/simplestorage.png";

const projects = [
  {
    id: 1,
    name: "Mocky",
    description: "Mocky is an AI-powered mock interview platform designed to help users prepare for technical interviews. It allows users to select a technical topic, role, duration, and experience level to simulate a realistic interview experience. ",
    image: mocky,
    tags: ["Gemini API", "Next.js 15", "TypeScript", "neondb", "Prisma"],
    website: "https://mocky-chi.vercel.app/",
    source: "https://github.com/Balusekhar/mocky",
  },
  {
    id: 2,
    name: "Byteshare",
    description: "ByteShare is a simple and fast file-sharing web application built with modern web technologies like Next.js 15, typescript and AWS S3. No login required",
    image: byteshare,
    tags: ["Next.js", "TypeScript", "AWS S3", "TailwindCSS", "Shadcn UI"],
    website: "https://byteshare-ecru.vercel.app/",
    source: "https://github.com/Balusekhar/byteshare",
  },
  {
    id: 3,
    name: "SimpleStorage",
    description:
      "SimpleStorage is a cloud storage platform powered by AWS S3, offering seamless file uploads, efficient organization through sorting, and accelerated retrieval with CloudFront CDN for a faster and more reliable experience.",
    image: simplestorage,
    tags: ["Next.js", "Aws S3", "Typescript", "TailwindCSS", "Next Auth"],
    website: "https://simplestorage-omega.vercel.app/",
    source: "https://github.com/Balusekhar/simplestorage",
  },
];

export default projects;
