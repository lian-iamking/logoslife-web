import { Metadata } from 'next';
import React from 'react';
import { Page } from '../shared/interfaces/page_interface';
import { pages } from './../components/Navigation';

export const metadata: Metadata = {
  title: pages[1].title,
  description: pages[1].description,
};

const page = () => {
  return <div></div>;
};

export default page;
