import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}
const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border h-[23rem] border-[#2a0e61]">
      <Image
        src={src}
        alt={title}
        width={400}
        height={400}
        className="w-full object-cover"
      />

      <div className="relative -top- p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
