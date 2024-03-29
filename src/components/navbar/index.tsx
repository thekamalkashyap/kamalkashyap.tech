import navLinks from './navLinks.json';
import Link from 'next/link';
import ThemeToggle from '../themeToggle';
export default function Navbar() {
  return (
    <>
      <header>
        <button
          id="hamBurger"
          className="md:hidden dark:bg-[#a9b8b338] bg-[#373d3b25] before:bg-black dark:before:bg-white after:bg-black dark:after:bg-white"
          onClick={(e) => {
            document.getElementById('hamBurger').classList.toggle('active');
            document.getElementById('navLinks').classList.toggle('active');
            document.body.classList.toggle('overflow-hidden');
            e.preventDefault();
          }}
        ></button>
        {/* <ThemeToggle /> */}
      </header>
      <nav
        id="navLinks"
        className="text-black dark:text-white dark:bg-black md:dark:bg-transparent bg-light"
        role="navigation"
      >
        <ul>
          {navLinks.map((e) => (
            <li
              className="md:p-2 text-lg md:text-[1.1rem]  lg:text-2xl"
              key={e.href}
              onClick={(e) => {
                document.getElementById('hamBurger').classList.remove('active');
                document.getElementById('navLinks').classList.remove('active');
                document.body.classList.remove('overflow-hidden');
                e.preventDefault();
              }}
            >
              <Link href={e.href} scroll={false}>
                {e.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
