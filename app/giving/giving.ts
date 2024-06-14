import { Metadata } from 'next';
import { Page } from '../shared/interfaces/page_interface';
import { pages } from './../components/Navigation';

export const metadata: Metadata = {
  title: pages[2].title,
};

const page = () => {
  return <div>page</div>;
};

export default page;
