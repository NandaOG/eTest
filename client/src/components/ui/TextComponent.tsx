"use client";
import React from "react";

type ClientImpactSectionProps = {
  title?: string;
  description?: string;
};

const defaultProps: Required<ClientImpactSectionProps> = {
  title: "<b>Admired clients</b> who’re enjoying the (re)action of our full-fledged services",
  description:
    "We create a positive impact for our clients by resolving issues and optimizing performance to enhance their small and large-scale software development initiatives.",
};

const TextComponent: React.FC<ClientImpactSectionProps> = ({
  title = defaultProps.title,
  description = defaultProps.description,
}) => {
  return (
    <div className="flex bg-[url('/backgrounds/grid.svg')] flex-col md:flex-row items-center justify-between w-full border-2 border-white my-10 p-10 rounded-3xl gap-5">
      <div className="w-full md:w-1/2">
        <h2
          className="text-3xl md:text-5xl text-white"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
      <div className="w-full md:w-1/2">
        <p className="text-lg md:text-3xl text-white">{description}</p>
      </div>
    </div>
  );
};

export default TextComponent;
