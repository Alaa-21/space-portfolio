import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 z-40"
      id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <Link href="https://shade.vercel.app/" target="_blank">
          <ProjectCard
            src="/shade.png"
            title="Shade"
            description="chat support made with html,tailwindcss,js "
          />
        </Link>
        <Link href="https://car-black.vercel.app/" target="_blank">
          <ProjectCard
            src="/cars.png"
            title="Car Hub"
            description="car models website made with Next.js, tailwindcss"
          />
        </Link>
        <Link href="https://jsm-rosy.vercel.app/" target="_blank">
          <ProjectCard
            src="/jsm.png"
            title="Js Mastery"
            description="filtering website made with nextjs, tailwindcss, sanityio"
          />
        </Link>
        <Link href="https://landing-page-black-psi.vercel.app/" target="_blank">
          <ProjectCard
            src="/landing.png"
            title="landing page"
            description="landing page website made with html and css"
          />
        </Link>
      </div>
    </div>
  );
};
export default Projects;
