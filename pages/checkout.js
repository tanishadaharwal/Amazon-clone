import Header from "../components/header"
import Image from "next/image"
import {useSelector} from "react-redux";
import {selectItems} from "../slices/basketSlice"
import CheckoutProducts from "@/components/checkoutproduct";
import { useSession, signIn, signOut } from "next-auth/react";
import { selectTotal } from "../slices/basketSlice";
function Checkout() {
    const items = useSelector(selectItems)
    const {data : session} = useSession()
    const total = useSelector(selectTotal)
    return (
        <div className="bg-gray-100">
            <Header />
            <main className="lg:flex max-w-screen-xl mx-auto">
                <div className="w-4/5 md:m-5 shadow-sm mx-auto">
                    <Image src="https://links.papareact.com/ikj" width={1020} height={250} />
                    <div className="flex flex-col p-5 gap-10 bg-white">
                        <h1 className="text-3xl font-semibold">{items.length === 0 ? "Your Cart is Empty" : "Your Shopping Cart"}</h1>

                        {items.map((item, i) => (
                            <CheckoutProducts key={i}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            description={item.description}
                            category={item.category}
                            image={item.image}
                            hasPrime={item.hasPrime}/>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col bg-gray-300 mx-auto w-4/5 md:w-1/4 rounded-lg items-center">
                    {items.length > 0 && (
                        <div className="mx-auto items-center">
                            <h2 className="text-xl font-bold">Subtotal ({items.length} items) :
                            ${total}
                             </h2>
                            <div className="md:ml-5 mx-auto">
                                <button className="p-2 ml-3 mt-4 mx-auto bg-gradient-to-t from-yellow-400 to-yellow-200 rounded-lg">
                                {!session ? 'Sign in to checkout' : "Proceed to checkout"}
                             </button>
                             </div>
                             
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}
export default Checkout;