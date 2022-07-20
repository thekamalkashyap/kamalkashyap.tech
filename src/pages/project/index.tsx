import projectsData from './projectsData.json';
import Navbar from '../../components/navbar';
import Layout from '../../components/layout';
import Link from 'next/link';
import Image from 'next/image';
export default function Projects() {
  return (
    <>
      <Layout>
        <Navbar />
        <div className="space-y-5 px-10 pt-6 pb-8 md:space-y-5 max-w-4xl m-auto">
          <h1 className=" m-0 text-3xl font-extrabold leading-9 tracking-tight text-black dark:text-[#08fdd8] sm:text-4xl sm:leading-10 md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7">
            Projects i made while sitting for hours
          </p>
        </div>
        <div className="container p-10 max-w-4xl m-auto flex flex-wrap">
          {projectsData.map(({ title, description, imgSrc, href }) => (
            <div
              key={title}
              className=" container max-w-[20rem] sm:my-2 md:my-6 lg:my-9 text-base my-3 mx-auto p-4 overflow-hidden rounded-md border-2 border-black border-opacity-60 dark:border-blue "
              data-aos="fade-up"
            >
              <div className=" flex flex-col relative h-full m-auto">
                {imgSrc &&
                  (href ? (
                    <Link href={href} aria-label={`Link to ${title}`}>
                      <Image
                        alt={title}
                        src={imgSrc}
                        className="object-cover h-full rounded-lg object-center md:h-36 lg:h-48"
                        width={544}
                        height={306}
                      />
                    </Link>
                  ) : (
                    <Image
                      alt={title}
                      src={imgSrc}
                      className="object-cover h-full rounded-lg object-center md:h-36 lg:h-48"
                      width={544}
                      height={306}
                    />
                  ))}
                <div className="my-auto py-2 px-5 ">
                  <h2 className="mb-3 mt-0 text-2xl font-bold leading-8 tracking-tight transition-all ease-out duration-700 hover:text-blue">
                    {href ? (
                      <Link href={href} aria-label={`Link to ${title}`}>
                        {title}
                      </Link>
                    ) : (
                      title
                    )}
                  </h2>
                  <p className="mb-4">{description}</p>
                  {href && (
                    <Link
                      href={href}
                      className="text-base font-medium leading-6"
                      aria-label={`Link to ${title}`}
                    >
                      <span className="border flex justify-center  rounded-md px-2 hover:opacity-60 cursor-pointer">
                        Demo
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}
