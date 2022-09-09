import { useEffect } from 'react';
export default function Typer() {
  useEffect(() => {
    setTimeout(
      typer,
      700,
      0,
      document.getElementById('heroSpan2'),
      `I am Kamal Kashyap`,
    );
    setTimeout(
      typer,
      1000,
      0,
      document.getElementById('heroSpan3'),
      `A Creative Developer!`,
    );

    function typer(count: number, element: Element, data: string) {
      if (count < data.length) {
        element.innerHTML += data.charAt(count);
        count++;
        setTimeout(typer, 25, count, element, data);
      }
    }
  }, []);

  return (
    <>
      <span
        id="heroSpan2"
        className=" dark:text-transparent stroke  text-black font-bold text-2xl sm:text-4xl tracking-tighter mb-2"
      >
        {/* I am Kamal Kashyap */}
      </span>
      <br />
      <span id="heroSpan3" className="text-xl sm:text-2xl xl:text-3xl">
        {/* A Creative Developer! */}
      </span>
    </>
  );
}
