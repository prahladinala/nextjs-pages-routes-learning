import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <header className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 " src="https://toolmate.co.in/assets/img/Memoji%20Profile%20Picture.svg" alt="ToolMate Brand Logo" />
        <h1 className='text-3xl'>Welcome to ToolMate</h1>
      </header>
      <Footer />
    </>
  )
}
