import React, { ReactNode } from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subTitle: string;
  image: StaticImport;
  imageAlt?: string;
  buttonTitle: string;
  buttonLink: string;
}

const HeroSection = ({
  title,
  image,
  subTitle,
  buttonTitle,
  buttonLink,
}: HeroProps) => {
  return (
    <div className="relative text-white overflow-hidden md:rounded-md p-10">
      <div className="absolute inset-0">
        <Image
          className="object-cover object-center w-full h-full"
          width={'1260'}
          height={'750'}
          src={image}
          alt={'Hero'}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Welcome to <br />
          {title}
        </h1>
        <p className="text-lg text-gray-300 mb-8">{subTitle}</p>
        {buttonTitle != '' && buttonLink != '' ? (
          <Link
            className={
              'bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'
            }
            href={buttonLink}
          >
            {buttonTitle}
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
