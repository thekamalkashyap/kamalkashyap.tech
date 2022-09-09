import Image from 'next/image';
import avatar from '../../public/avatar.jpg';
import Navbar from '../components/navbar';
import Layout from '../components/layout';
import { Canvas } from '@react-three/fiber';
import { lazy, Suspense } from 'react';
const Computer = lazy(() => import('../components/Computer'));
export default function About() {
  return (
    <>
      <Layout>
        <Navbar />
        <div className=" h-screen w-screen fixed top-0 -z-30 opacity-60">
          <Canvas>
            <ambientLight />
            <directionalLight position={[-4, 3, 5]} />
            <Suspense fallback={null}>
              <Computer />
            </Suspense>
          </Canvas>
        </div>
        <div className="px-10 sm:px-10 lg:px-16 py-10 text-lg max-w-4xl m-auto mb-10">
          <div className="flex items-end mb-10" data-aos="fade-left">
            <div className="relative h-20 w-16 mr-5">
              <Image src={avatar} alt="avatar" layout="fill" />
            </div>
            <div>
              <h1 className="text-[#08fdd8] font-bold text-xl m-0">
                Kamal Kashap
              </h1>
              <h2 className=" text-gray-600 m-0">Creative developer</h2>
            </div>
          </div>
          <p className="mb-10">
            The name is kamal (which is short for kamal kumar or kamal kashyap,
            depending on where you know me from). I am a 17-year-old North
            Indian with a tech sort of background and a lot to say about the
            trends and direction of the scientific world.
          </p>
          <p>
            I&#39;m very dedicated to learn new things and to truly belive that
            you should never stop learning. I enjoy creating different things,
            whether that be websites, application or even non technical stuff
            like paintings and sketches.
          </p>
        </div>
      </Layout>
    </>
  );
}
