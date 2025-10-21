import React from "react";
import Image from "next/image";
import Link from "next/link";

const countries: string[] = [
  "USA",
  "South Korea",
  "Qatar",
  "Oman",
  "India",
  "Thailand",
  "Australia",
  "Saudi Arabia",
  "Russia",
  "Canada",
  "Turkey",
  "Spain",
];

const AboutUs: React.FC = () => {
  return (
    <section
      id="about"
      itemScope
      itemType="https://schema.org/Organization"
      className="w-full bg-white"
    >
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <header className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-gray-900">
            ABOUT THE SCRAP WORLD
          </h2>
          <div className="mt-3 h-[3px] w-16 bg-gray-800/80" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Text content */}
          <article className="lg:col-span-7 text-gray-700 leading-relaxed" itemProp="description">
            <p className="mb-4">
              Scrap World, our company is no new to introduction in the UAE market as we have
              been in the business since <strong>1983</strong>.
            </p>
            <p className="mb-4">
              Being in the business for more than 2 decades, we have never compromised on the
              quality of our work, relation with the company, as well as the labors and most
              important of all nature.
            </p>
            <p className="mb-6">
              We hold a clear record of providing the official requirement like laborers pass,
              transportation and loading equipment measures on time.
              <Link href="/about-us" className="ml-2 text-[#2474A5] hover:underline font-semibold">
                Read more
              </Link>
            </p>
          </article>

          {/* Right image */}
          <figure className="lg:col-span-5">
            <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden border border-gray-200">
              <Image
                src="/banner-contact.jpg"
                alt="Scrap handling equipment and operations representing Scrap World"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
                priority={false}
              />
            </div>
          </figure>
        </div>

        {/* Countries list */}
        <section aria-labelledby="countries-heading" className="mt-14 rounded-md bg-gray-50 py-10">
          <div className="px-4">
            <h3 id="countries-heading" className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900">
              COUNTRIES WE DEAL IN APART FROM UAE
            </h3>
            <div className="mx-auto mt-3 h-[3px] w-12 bg-gray-700" />

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-8 text-gray-800">
              {countries.map((country) => (
                <li key={country} className="flex items-start gap-2">
                  <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-gray-500" />
                  <span className="font-medium">{country}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutUs;