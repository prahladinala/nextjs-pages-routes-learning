import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { myProducts } from '@/data/products'
import Link from 'next/link'

export async function getServerSideProps({ params }) { // params - { id :  1}
    // This code runs on  the server
    const { id } = params;
    // Fitering Product
    const item = myProducts.filter(product => {
        if (product.id === parseInt(id)) {
            return true;
        } else {
            return false;
        }
    })[0]
    // Check
    // console.log(id)
    // console.log(typeof parseInt(id))
    // console.log(typeof myProducts[0].id)
    // console.log(item)
    // console.log(myProducts)
    return {
        props: {
            item
        }
    }
}

const ProductDetailsPage = ({ item }) => {

    return (
        <>
            <Navbar />
            <header className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
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
                                {item.brand}
                            </span>
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

                    </div>
                </div>

            </header>
            <Footer />
        </>
    )
}
export default ProductDetailsPage