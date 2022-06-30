import config from '../../config.json';
import Link from 'next/link';
export default function Navbar() {
  return (
    <>
      <header>
        <button
          id="hamBurger"
          className="md:hidden"
          onClick={(e) => {
            document.getElementById('hamBurger').classList.toggle('active');
            document.getElementById('navLinks').classList.toggle('active');
            document.querySelector('main').classList.toggle('bg_blur');
            e.preventDefault();
          }}
        ></button>
      </header>
      <nav id="navLinks" role="navigation">
        <ul>
          {config.navLinks.map((e) => (
            <li className="md:p-2 md:text-lg lg:text-xl" key={e.href}>
              <Link href={e.href}>{e.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
