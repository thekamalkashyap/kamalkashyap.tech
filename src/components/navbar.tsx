import config from '../../config.json';
import Link from 'next/link';
export default function Navbar() {
  return (
    <>
      <header>
        <button
          id="hamBurger"
          className="md:hidden before:bg-black dark:before:bg-white after:bg-black dark:after:bg-white"
          onClick={(e) => {
            document.getElementById('hamBurger').classList.toggle('active');
            document.getElementById('navLinks').classList.toggle('active');
            document.querySelector('main').classList.toggle('bg_blur');
            document.body.classList.toggle('overflow-hidden');
            e.preventDefault();
          }}
        ></button>
      </header>
      <nav
        id="navLinks"
        className="text-black dark:text-white"
        role="navigation"
      >
        <ul>
          {config.navLinks.map((e) => (
            <li className="md:p-2 md:text-base lg:text-xl" key={e.href}>
              <Link href={e.href}>{e.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
