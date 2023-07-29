import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { myProducts } from '@/data/products'
import Link from 'next/link';
import React from 'react'

function products() {
    const data = myProducts
    return (
        <>
            <Navbar />
            <header className=' py-3'>
                <div className="text-center">
                <h1 className='text-3xl py-2'>Products of ToolMate</h1>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {data.map((item) => (
                        <div className="w-[300px] rounded-md border bg-white">
                            <img
                                src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                                alt="Laptop"
                                className="h-[200px] w-full rounded-md object-cover"
                            />
                            <div className="p-4">
                                <h1 className="text-lg font-semibold text-black">{item.name}</h1>
                                <p className="mt-3 text-sm text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                                    debitis?
                                </p>
                                <div className="mt-4">
                                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                        #{item.category}
                                    </span>
                                    <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                        Stock: {item.stock}
                                    </span>

                                </div>
                                <h1 className="text-xl font-semibold text-black">
                                    <span className='line-through'>₹{item.actualPrice}</span> &nbsp;
                                    ₹{item.discountPrice}
                                </h1>
                                <Link href={"products/"+(item.id).toString()}>
                                <button
                                    type="button"
                                    className="mt-4 rounded-sm bg-black px-3 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    View Details
                                </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </header>
            <Footer />
        </>
    )
}

export default products