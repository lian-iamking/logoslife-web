import Link from 'next/link';
import React from 'react';
import { Page } from '../shared/interfaces/page_interface';

export interface NavigationLinkProps extends Page {}

const NavigationLink = ({
  id,
  title,
  path,
  showOnNavMenu,
  isHighlighted,
}: NavigationLinkProps) => {
  return (
    <Link
      id={'nav-link-'.concat(id.toString())}
      href={path}
      className={'block mt-4 mx-5 lg:inline-block lg:mt-0 hover:drop-shadow-md '.concat(
        isHighlighted ? 'text-red-900 ' : 'text-slate-900 '
      )}
    >
      {title.toUpperCase()}
    </Link>
  );
};

export default NavigationLink;
