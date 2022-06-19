import Head from 'next/head';
import Link from 'next/link';
export default function Index() {
  return (
    <>
      <Head>
        <title>home@kamalkashyap</title>
      </Head>
      <div>
        <p>Graphical version of my site is under construction </p>
        <br />
        <Link href="/terminal">
          <button className="border-2 border-light-blue rounded-md bg-light-blue">visit terminal version</button>
        </Link>
      </div>
    </>
  );
}
