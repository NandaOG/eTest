"use client";

import Image from "next/image";
import Button from "../../ui/Button";

interface HeroServicesProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function HeroServices({
  title,
  description,
  imageSrc,
  imageAlt = "Service Image",
  buttonText = "Learn More",
  buttonLink = "/",
}: HeroServicesProps) {
  return (
    <section className="2*h-screen py-40 md:py-0 md:h-screen flex flex-col md:mt-[50px]  md:flex-row items-center justify-center text-center bg-gradient-to-br from-[#BF4000] via-[#002440] to-white text-white p-10 md:p-20">
      
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl max-w-xl">
          {description}
        </p>

        {buttonText && buttonLink && (
          <div className="">
            <Button text={buttonText} href={buttonLink} aria-label={buttonText} />
          </div>
        )}
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center mt-5 md:mt-0">
        <div className="   bg-[url('/backgrounds/diagonalLines.svg')] rounded-br-[50px] rounded-tl-[50px]  border-[#FFFFFF78
]">
            <Image
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={400}
            loading="lazy"
            className="rounded-br-[50px] mb-6 mt-6 rounded-tl-[50px] object-cover"
            />
        </div>
      </div>
    </section>
  );
}
