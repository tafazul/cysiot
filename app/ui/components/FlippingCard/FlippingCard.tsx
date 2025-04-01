import React, { useState } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

const services = [

  {
    step: "01",
    name: "IT Security Solutions",
    imageUrl: "/assets/itsecurity.png",
    description: "IT security solutions include SOC automation, threat detection, APT hunting, and security testing for proactive cyber defense.",
  },
  {
    step: "02",
    name: "Strategic Resourcing",
    imageUrl: "/assets/strategic.png",
    description: "We provide inclusive, role-relevant, and responsive technical resourcing services tailored to meet our clients' specific needs.",
  },
  {
    step: "03",
    name: "Application Development",
    imageUrl: "/assets/img4.png",
    description: "We offer mobile app development, web development, and cross-platform solutions, delivering high-quality applications.",
  },
  {
    step: "04",
    name: "SAP Solutions",
    imageUrl: "/assets/img3.png",
    description: "SAP solutions streamline business processes, enhance efficiency, and drive growth with innovative technologies.",
  },
  {
    step: "05",
    name: "IOT Solutions",
    imageUrl: "/assets/img2.png",
    description: "IoT consulting, tailored platform development, and app development ensure enhanced connectivity",
  },
  {
    step: "06",
    name: "Cloud Solutions",
    imageUrl: "/assets/img1.png",
    description: "Cloud innovation, smooth migration, and AWS expertise empower agility, security, and seamless transformation",
  }
];

const FlippingCard = () => {

  return (

    <section className="mx-auto">

      <div className="mx-auto flex justify-center object-center px-4 py-8 lg:max-w-7xl">

        <div className="flex justify-center object-center flex-col gap-12 sm:gap-16">

          <div className="mx-auto grid gap-12 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-3">

            {services.map((service) => (

              <div key={service.name} className={`group h-96 ${styles['w-20rem']} [perspective:1000px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]`}>

                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                  {/* Front Face  */}

                  <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden]">

                    {service.imageUrl && (

                      <Image

                        className="object-cover cursor-pointer object-left h-full w-full rounded-xl"

                        src={service.imageUrl}

                        alt={service.name}

                        layout='fill'
    objectFit='contain'

                      />

                    )}

                    <p className="md:my-6 text-2xl text-center">{service.name}</p>

                  </div>

                   {/* Back Face  */}

                  <div className="absolute inset-0 h-full w-full rounded-xl bg-white px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">

                    <div className="flex min-h-full flex-col items-center justify-center">

                      <h2 className="text-2xl font-bold mb-4 text-[#293d61]">{service.name}</h2>

                      <p className="text-lg text-pretty text-center mb-4 text-[#293d61]">

                        {service.description}

                      </p>

                      <a href="tel:555-555-5555" className="inline-flex">

                        <button className="mt-6 flex items-center gap-2 bg-[#12124D] text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-[#0E0E3A] transition">

                          <span>Learn More -{'>'}</span>



                        </button>

                      </a>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

};



export default FlippingCard;
