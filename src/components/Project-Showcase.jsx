import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectShowcase() {
  return (
    <section className="projects container mx-auto px-4 pt-24 grid grid-cols-1 md:grid-cols-[1fr,2fr,1fr] gap-8 items-start">
      <div>
        <h2 className="text-4xl  text-white md:text-5xl font-normal mb-4">
          Web Design
        </h2>
        <span className="text-primary text-lg">01 /</span>
      </div>

      {/* Middle Column */}
      <div className="space-y-8">
        <p className="text-xl text-white leading-relaxed">
          At Refokus, web design is where creativity meets functionality. We
          craft visually striking and emotionally engaging websites that capture
          your brand's essence. Our designs blend beauty with seamless
          navigation, enhanced by micro-interactions and Lottie animations.
          Every detail, from concept to pixel, aligns with your vision and
          business goals.
        </p>

        <Link
          to="/"
          className="group inline-flex items-center border-b border-black pb-1 hover:border-purple-500 transition-colors">
          <span className="mr-2 text-white">Learn more</span>
          <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Right Column - Decorative Image */}
      <div className="relative opacity-90 border border-white h-56 bg-primary rounded-3xl overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={mocky}
          alt="Mocky"
        />
      </div>
    </section>
  );
}
