import config from '../../config.json';
import Link from 'next/link';
export default function Navbar() {
  return (
    <>
      <header>
        <button
          id="hamBurger"
          onClick={(e) => {
            document.getElementById('hamBurger').classList.toggle('active');
            document.getElementById('navLinks').classList.toggle('active');
            document.querySelector('main').classList.toggle('bg_blur');
            document.body.classList.toggle('overflow-hidden');
            e.preventDefault();
          }}
        ></button>
        <span id="author">
          <Link href="/">{config.name}</Link>
        </span>
      </header>
      <nav id="navLinks" role="navigation">
        <ul>
          {config.navLinks.map((e) => (
            <li key={e.href}>
              <Link href={e.href}>{e.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
