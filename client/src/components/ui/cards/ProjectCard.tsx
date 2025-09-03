"use client";

import Image from "next/image";
import Button from "../Button";
interface Project {
    id: string;
    title: string;
    description: string;
    industry: string;
    type: string;
    date: string;
    image: string;
    link?:string
}

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="bg-transparent  md:w-[400px] flex flex-col">
            <div className="mx-5 bg-[#002440]   h-[180px] md:h-[230px] rounded-tl-3xl overflow-hidden z-10">
                <Image
                    src={project.image ? project.image : "/images/sample.jpeg"}
                    alt={project.title}
                    width={350}
                    height={230}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="border-2 mt-[-120px] md:mt-[-150px] pt-[130px] md:pt-[160px] border-white px-5 rounded-br-3xl z-0">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm mt-2">{project.description}</p>
                {!project.link? (
                <Button text="Know More" href={`/projects/${project.id}`} />
                ): (
                <Button text="Know More" href={project.link} target="_blank" />
                )}
            </div>
        </div>
    );
}
