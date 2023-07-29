import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FC } from 'react'
const inter = Inter({ subsets: ['latin'] })

interface pageProps {
    params: { id: number }
}

const Products: FC<pageProps> = ({ params }) => {

    return (
        <>
            <Navbar />
            <header className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <h1>Product {params.id}</h1>

                <div className="w-[300px] rounded-md border bg-white">
                    <img
                        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                        alt="Laptop"
                        className="h-[200px] w-full rounded-md object-cover"
                    />
                    <div className="p-4">
                        <h1 className="text-lg font-semibold text-black">About Macbook</h1>
                        <p className="mt-3 text-sm text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                            debitis?
                        </p>
                        <button
                            type="button"
                            className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>

            </header>
            <Footer />
        </>
    )
}
export default Products