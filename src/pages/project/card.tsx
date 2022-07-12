import Link from 'next/link';
import Image from 'next/image';
const Card = ({ title, description, imgSrc, href }) => (
  <div className=" text-base mx-auto p-4 md:w-1/2 " data-aos="fade-up">
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-black border-opacity-60 dark:border-blue`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className=" py-2 px-5 ">
        <h2 className="mb-3 mt-0 text-2xl font-bold leading-8 tracking-tight hover:text-blue">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6"
            aria-label={`Link to ${title}`}
          >
            <span className="border rounded-md px-1 hover:opacity-60">
              Demo
            </span>
          </Link>
        )}
      </div>
    </div>
  </div>
);

export default Card;
