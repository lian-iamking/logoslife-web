import { Metadata } from 'next';
import heroImage from './../public/static/images/hero-img.webp';
import HeroSection from './components/HeroSection';
import { pages } from './components/Navigation';

export const metadata: Metadata = {
  title: pages[0].title,
  description: pages[0].description,
};

export default function Home() {
  return (
    <HeroSection
      title={'Logos Life Pentecostal Church'}
      subTitle={'Topa Hoih Hi'}
      image={heroImage}
      imageAlt={''}
      buttonTitle={''}
      buttonLink={''}
    />
  );
}
