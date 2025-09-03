"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import Title from "../ui/Title";

const clients = [
    {
        id: 1,
        name: 'Client One',
        logo: '/images/client/W.png',
    },
    {
        id: 2,
        name: 'Client Two',
        logo: '/images/client/adi.png',
    },
    {
        id: 3,
        name: 'Client Three',
        logo: '/images/client/aliqua.png',
    },
    {
        id: 4,
        name: 'Client Four',
        logo: '/images/client/crown.png',
    },
    {
        id: 5,
        name: 'Client Five',
        logo: '/images/client/dynamic.png',
    },
    {
        id: 6,
        name: 'Client Five',
        logo: '/images/client/labore.png',
    },
    {
        id: 7,
        name: 'Client Five',
        logo: '/images/client/minagod.png',
    },
    {
        id: 8,
        name: 'Client Five',
        logo: '/images/client/vegan.png',
    },
];

const testimonials = [
    {
        id: 1,
        name: 'Isabella Martinez',
        position: 'Fashion Blogger',
        photo: '/images/client/avatar-f1.png',
        quote: 'Luxe Apparel has completely transformed my wardrobe. The quality is exceptional and the designs are absolutely stunning. Every piece feels like a work of art.',
    },
    {
        id: 2,
        name: 'James Wellington',
        position: 'Business Executive',
        photo: '/images/client/avatar-m1.png',
        quote: 'The custom tailoring service is impeccable. My suits fit perfectly and the attention to detail is remarkable. Truly premium quality.',
    },
    {
        id: 3,
        name: 'Sophia Chen',
        position: 'Fashion Designer',
        photo: '/images/client/avatar-f2.png',
        quote: 'As a designer myself, I appreciate the craftsmanship and attention to detail in every piece. Luxe Apparel sets the standard for luxury fashion.',
    },

];
type props = {
    gradientColors?: string;
};

// const Testimonial = ({gradientColors}: props) => {
const Testimonial: React.FC<props> = ({
    gradientColors = "bg-gradient-to-br from-[#BF4000] via-[#002440] to-white",
}) => {
    return (
        <section className={`w-full py-20 px-10 md:px-20 ${gradientColors}`}>
            <Title title="Clients" />
            <div className="container mx-auto mt-15">
                <div className="flex bg-[url('/backgrounds/grid.svg')] flex-col md:flex-row items-center justify-between w-full border-2 border-white my-10 p-10 rounded-3xl gap-5">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-5xl text-white"><b>Fashion enthusiasts</b> who love our luxury collections</h2>
                    </div>
                    <div className="w-full md:w-1/2">
                        <p className="text-lg md:text-3xl text-white">We create exceptional fashion experiences for our customers by delivering premium quality, timeless designs, and personalized service.</p>
                    </div>
                </div>

                {/* Client Logos */}
                <div className="my-20">
                    <div className="flex flex-wrap justify-between items-center gap-8">
                        {clients.map((client, index) => (
                            <motion.div
                                key={client.id}
                                className="md:w-1/5 flex justify-center items-center shadow-sm rounded-tl-3xl rounded-br-3xl
                                      bg-white/10 border border-white/20"
                                // whileHover={{ scale: 1.1 }}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >

                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div>
                    <div className="flex bg-[url('/backgrounds/grid.svg')] flex-col md:flex-row items-center justify-between w-full border-2 border-white my-10 p-10 rounded-3xl gap-5">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-5xl text-white"><b>What our customers say</b> about our luxury fashion</h2>
                        </div>
                        <div className="w-full md:w-1/2">
                            <p className="text-lg md:text-3xl text-white">We're passionate about fashion excellence, and our customers' words reflect the quality and style of our luxury collections.</p>
                        </div>
                    </div>
                    <div className="flex mt-20 flex-wrap justify-between items-stretch gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                className="max-w-sm border-2 border-white shadow-md rounded-tl-3xl rounded-br-3xl p-6 text-center"
                                // whileHover={{ scale: 1.05 }}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <FaQuoteLeft className="text-4xl text-gray-300 mb-4 mx-auto" />
                                <p className="text-white mb-4">{testimonial.quote}</p>
                                <img
                                    src={testimonial.photo}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover mx-auto mb-2"
                                />
                                <h3 className="text-lg text-[#002440] font-semibold">{testimonial.name}</h3>
                                <p className="text-sm text-white">{testimonial.position}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
