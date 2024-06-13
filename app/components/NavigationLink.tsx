import React from 'react';

export interface NavigationLinkProps {
  name: string;
  path: string;
  isActive: boolean;
}

const NavigationLink = ({ name, path, isActive }: NavigationLinkProps) => {
  return (
    <a
      href={path}
      className={'block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 '.concat(
        isActive ? '' : 'no'
      )}
    >
      {name}
    </a>
  );
};

export default NavigationLink;
