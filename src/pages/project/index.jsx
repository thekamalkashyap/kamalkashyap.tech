import Image from 'next/image';
import paragraphs from './data.json';
import { useEffect } from 'react';
import useWindowSize from '../../utils/useWindowSize';
import Link from 'next/link';
import Navbar from '../../components/navbar';
import Layout from '../../components/layout';

const Index = () => {
  const { height } = useWindowSize();

  useEffect(() => {
    const slideGallery = document.querySelector('.slides');
    const slides = slideGallery.querySelectorAll('.image');

    document.querySelector('.thumbnails').innerHTML += [...slides]
      .map(
        (slide, i) =>
          `<img src="${slide.querySelector('img').src}" data-id="${i}">`,
      )
      .join('');
  }, []);

  useEffect(() => {
    const slideGallery = document.querySelector('.slides');

    const scrollToElement = (el) => {
      const index = parseInt(el.dataset.id, 10);
      slideGallery.scrollTo(0, index * height);
    };

    document.querySelectorAll('.thumbnails img').forEach((el) => {
      el.addEventListener('click', () => scrollToElement(el));
    });
  }, [height]);
  return (
    <Layout>
      <Navbar />
      <div className="relative max-w-4xl m-auto ">
        <div className="flex justify-center items-center">
          <div className="thumbnails"></div>
          <div className="slides">
            {paragraphs.map((e, i) => (
              <div
                className=" slide relative flex items-center justify-center"
                key={i}
              >
                <div className="card">
                  <div className="flex space-x-4 text-overlay">
                    <Link href={e.code}>
                      <svg
                        className="cursor-pointer"
                        width="20"
                        height="20"
                        fill="#fff"
                        viewBox="0 0 16 16"
                      >
                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                        <path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z" />
                      </svg>
                    </Link>
                    <Link href={e.link}>
                      <svg
                        className="cursor-pointer"
                        width="25"
                        height="25"
                        fill="#fff"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                      </svg>
                    </Link>
                  </div>
                  <div className="image bg-dark flex justify-center items-center">
                    <img alt={e.header} src={e.image} />
                  </div>
                  <h3>{e.header}</h3>
                  <div className="focus-content">
                    <p>{e.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
