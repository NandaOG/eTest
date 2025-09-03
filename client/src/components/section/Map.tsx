import React from "react";

const Map: React.FC = () => {
  return (
    <section className="relative w-full py-16 bg-gradient-to-br from-white to-gray-100 overflow-hidden">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 relative inline-block">
          📍 Our Location
          <span className="block w-10 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></span>
        </h2>
        <p className="text-gray-500 mt-2">
          Drop by for a coffee or collaboration!
        </p>
      </div>

      {/* Map Card */}
      <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-xl backdrop-blur-md bg-white/70 border border-gray-200">
        {/* Floating Pin */}
        <div className="absolute z-10 top-[-20px] left-1/2 transform -translate-x-1/2">
          <div className="bg-blue-500 p-3 rounded-full shadow-lg text-white text-xl animate-bounce">
            📌
          </div>
        </div>

        {/* Map Embed */}
        <div className="w-full h-[300px] md:h-[450px] transition-transform duration-300 hover:scale-[1.01]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1791924515086!2d-122.41941548468142!3d37.77492927975986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7e3cd9e5%3A0xf2c0f0f3ef6d6b6b!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1616161616161"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;
