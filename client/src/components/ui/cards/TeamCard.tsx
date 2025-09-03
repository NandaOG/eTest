"use client";
import Image from "next/image";

interface Team {
    name: string;
    role: string;
    bio: string;
    image: string;
    social?: [];
}

export default function TeamCard({ team }: { team: Team }) {
    return (
        <div className="bg-transparent w-full flex flex-col items-center">
            {/* Image Container */}
            <div className="w-[150px] md:w-[200px] rounded-full overflow-hidden z-10 mx-auto">
                <Image
                    src={team.image ? team.image : "/images/sample.jpeg"}
                    alt={team.name}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full rounded-full  border-white"
                />
            </div>
            {/* Card Content */}
            <div className="border-2 mt-[-65px] pt-[75px] md:mt-[-95px] md:pt-[105px] border-white px-5 pb-5 rounded-br-3xl rounded-tl-3xl w-full text-center z-0">
                <h3 className="text-xl font-bold">{team.name}</h3>
                <p className="text-lg ">{team.role}</p>
                <p className="text-sm">{team.bio}</p>
            </div>
        </div>

    );
}
