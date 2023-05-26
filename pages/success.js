import { CheckCircleIcon } from "@heroicons/react/solid";
import {useRouter} from "next/router";
import Header from "../components/header"

const Success =  () => {
    const router = useRouter();
    return (
        <div className="bg-gray-100 h-screen">
            <Header />

            <main className="flex flex-col items-center max-w-screen-lg mx-auto">
                <div className="flex flex-col p-10 bg-white">
                    <div className="flex items-center gap-2 mb-5">
                        <CheckCircleIcon className="text-green-500 h-10 " />
                        <h1 className="text-4xl font-medium">Thank you, your order was confirmed !</h1>
                        
                    </div>
                    <div className="flex flex-col mt-5 items-center">
                            <p>Thankyou for shopping with us. You can check your order details and status by clicking the button below.</p>
                            <button onClick={() => router.push("/orders")}className="  button bg-gradient-to-t from-yellow-400 to-yellow-200 p-2 mt-5 rounded-lg focus:ring-yellow-500 active:from-yellow-400 focus:outline-none ">My Orders</button>
                        </div>
                </div>
            </main>
        </div>
    )
}

export default Success;