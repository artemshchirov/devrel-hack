import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}

const CustomLink = ({
  href,
  children,
  className,
  activeClassName,
}: CustomLinkProps): JSX.Element => {
  if (href.startsWith('http')) {
    return (
      <>
        <a href={href} className={className} target="_blank" rel="noreferrer">
          {children}
        </a>
      </>
    );
  }

  if (href.startsWith('#')) {
    return (
      <>
        <a className={className} href={href}>
          {children}
        </a>
      </>
    );
  }

  if (activeClassName) {
    return (
      <>
        <NavLink
          to={href}
          className={({ isActive }) =>
            `${className} ${isActive ? activeClassName : ''}`
          }
        >
          {children}
        </NavLink>
      </>
    );
  }

  return (
    <>
      <Link to={href} className={className}>
        {children}
      </Link>
    </>
  );
};

export default CustomLink;
