import mocky from "../assets/mocky.png";
import byteshare from "../assets/byteshare.png";
import simplestorage from "../assets/simplestorage.png";

const projects = [
  {
    id: 1,
    name: "Mocky",
    description: "Mocky is a AI Mock interview platform built with Next.js 15.",
    image: mocky,
    tags: ["Gemini API", "Next.js 15", "TypeScript", "neondb", "Prisma"],
    website: "https://mocky-chi.vercel.app/",
    source: "https://github.com/Balusekhar/mocky",
  },
  {
    id: 2,
    name: "Byteshare",
    description: "Share files instantly with Byteshare. No login Required.",
    image: byteshare,
    tags: ["Next.js", "TypeScript", "AWS S3", "TailwindCSS", "Shadcn UI"],
    website: "https://byteshare-ecru.vercel.app/",
    source: "https://github.com/Balusekhar/byteshare",
  },
  {
    id: 3,
    name: "SimpleStorage",
    description:
      "Simple Storage is a cloud storage platform powered by aws s3.",
    image: simplestorage,
    tags: ["Next.js", "Aws S3", "Typescript", "TailwindCSS", "Next Auth"],
    website: "https://simplestorage-omega.vercel.app/",
    source: "https://github.com/Balusekhar/simplestorage",
  },
];

export default projects;
