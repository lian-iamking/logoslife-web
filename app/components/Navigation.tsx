import React from 'react';
import NavigationLink, { NavigationLinkProps } from './NavigationLink';
import NavigationMenuButton from './NavigationMenuButton';
import Logo from './../../public/static/images/LogosLife-Logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Page } from '../shared/interfaces/page_interface';

export const pages: Page[] = [
  { id: 1, title: 'Home', description: '', path: '/', showOnNavMenu: false },
  {
    id: 2,
    title: 'About',
    description: '',
    path: '/about',
    showOnNavMenu: true,
  },
  {
    id: 3,
    title: 'Contact',
    description: '',
    path: '/contact',
    showOnNavMenu: true,
  },
  {
    id: 4,
    title: 'Giving',
    description: '',
    path: '/giving',
    showOnNavMenu: true,
    isHighlighted: true,
  },
  {
    id: 5,
    title: 'Sermons',
    description: '',
    path: '/sermons',
    showOnNavMenu: false,
  },
];

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white py-4 shadow-lg">
      <div className="flex items-center flex-shrink-0 text-white mx-6">
        <Link href="/" className="">
          <Image width="25" src={Logo} alt={'Logos Life logo'}></Image>
        </Link>
      </div>
      <div className="block lg:hidden">
        <NavigationMenuButton />
      </div>
      <div
        id="nav-menu"
        className="hidden w-full lg:flex lg:w-auto text-center"
      >
        <div className="text-md lg:flex-grow">
          {pages.map((page, i) =>
            page.showOnNavMenu ? (
              <NavigationLink
                key={i}
                id={page.id}
                title={page.title}
                description={page.description}
                path={page.path}
                showOnNavMenu={page.showOnNavMenu}
                isHighlighted={page.isHighlighted}
              />
            ) : (
              <></>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
