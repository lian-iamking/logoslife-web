import React from 'react';

export interface NavigationLinkProps {
  id: number;
  name: string;
  path: string;
  isActive: boolean;
  highlight?: boolean;
}

const NavigationLink = ({ id, name, path, isActive, highlight }: NavigationLinkProps) => {
  return (
    <a id={"nav-link-".concat(id.toString())}
      href={path}
      className={'block mt-4 mx-5 lg:inline-block lg:mt-0 '.concat(
        isActive ? "" : ""
      ).concat(highlight ? "text-red-400 " : "text-slate-900 ")}
    >
      {name.toUpperCase()}
    </a>
  );
};

export default NavigationLink;
