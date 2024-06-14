import React from 'react';
import NavigationLink, { NavigationLinkProps } from './NavigationLink';
import NavigationMenuButton from './NavigationMenuButton';

const pages: NavigationLinkProps[] = [
  { id: 1, name: "About", path: "/about", isActive: true },
  { id: 2, name: "Contact", path: "/contact", isActive: true },
  { id: 3, name: "Giving", path: "/giving", isActive: true, highlight: true},
  { id: 4, name: "Sermons", path: "/sermons", isActive: false }
];

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white py-4 shadow-lg">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="font-semibold text-xl tracking-tight">
          Logos Life
        </span>
      </div>
      <div className="block lg:hidden">
        <NavigationMenuButton />
      </div>
      <div className="w-full block flex-grow text-center lg:flex lg:w-auto">
        <div className="text-md lg:flex-grow">
          {pages.map((page) => (
              page.isActive ? <NavigationLink key={page.id}
              id={page.id}
              name={page.name}
              path={page.path}
              isActive={page.isActive}
              highlight={page.highlight}
            /> : <></>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
