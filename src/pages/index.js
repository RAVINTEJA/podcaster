import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/index/Navbar'
import Hero from '@/components/index/Hero'
import Explore from '@/components/index/Explore'
import PodcastCategories from '@/components/index/PodcastCategories'
import Plans from '@/components/index/Plans'
import Footer from '@/components/index/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='p-8 pt-4'>
      <Navbar />
      <div className="bg-secondary rounded-3xl p-4 m-2 flex flex-col ">
        {/* <!-- Child divs go here --> */}
        <Hero />
        <Explore />
        <PodcastCategories />
        <Plans />
      </div>
      <Footer />
    </main>
  )
}
