import { Metadata } from 'next';
import React from 'react';
import { pages } from './../components/Navigation';

export const metadata: Metadata = {
  title: pages[2].title,
  description: pages[2].description,
};

const page = () => {
  return <div>page</div>;
};

export default page;
