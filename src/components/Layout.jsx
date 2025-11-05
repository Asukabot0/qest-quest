import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/news', label: 'News' },
  { to: '/activities', label: 'Activities' },
  { to: '/team', label: 'Team' },
  { to: '/links', label: 'Links' },
  { to: '/contact', label: 'Contact' }
];

export default function Layout() {
  return (
    <div>
      <header className="site-header">
        <nav>
          <NavLink to="/" className="brand">
            Q/est Quest
          </NavLink>
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => (isActive ? 'active' : undefined)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Q/est Quest — Designing quantum internet futures.</p>
      </footer>
    </div>
  );
}
