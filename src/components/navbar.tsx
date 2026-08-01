'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => {
          const active = pathname === item.href;

          return (
            <li className="navbar-item" key={item.href}>
              <Link className={`navbar-link ${active ? 'active' : ''}`} href={item.href}>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}