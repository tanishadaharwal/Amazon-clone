import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"
import {useRouter} from "next/router";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import {useSelector} from "react-redux";
import {selectItems} from "../slices/basketSlice"
const Header = () => {
    const {data : session } = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);

    return (
        <header>
            <div className="flex items-center p-2 gap-3 flex-grow bg-amazon_blue py-1 ">
                <div className="mt-2  flex items-center flex-grow sm:flex-grow-0">
                    <Image onClick={() => router.push('/')}className="cursor-pointer pt-2" alt="" src="https://links.papareact.com/f90" width={130} height={120} />
                </div>

                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 ">
                    <input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
                    placeholder="Search for products, brands and more"
                    />
                    <SearchIcon className="h-12 p-4"/>
                </div>

                <div className="flex items-center gap-5 text-sm  mx-6 whitespace-nowrap">
                    <div onClick={!session ? signIn : signOut}className="text-white cursor-pointer">
                        <p  className="hover:underline">{session ?  `Hello, ${session.user.name}` : "Sign In"}</p>
                        <p className="font-bold ">Account & Lists</p>
                    </div> 
                    
                    <div className="text-white cursor-pointer hover:underline">
                        <p>Returns</p>
                        <p onClick={() => router.push("/orders")}className="font-bold">& Orders</p>

                    </div>

                    <div onClick={() => router.push('/checkout')}className="relative flexflex-col items-center text-white cursor-pointer hover:underline ">
                        <div className="absolute  ml-5  items-center justify-center text-center rounded-full w-5 h-5  bg-yellow-400 text-black font-bold">{items.length}</div>
                        <ShoppingCartIcon className="h-10" />
                        <p className="ml-1 hidden md:inline font-bold mt-5">Cart</p>

                </div>


            </div>
                
            </div> 
            <div className="flex items-center gap-3 text-white bg-amazon_blue-light">
                <p className="flex cursor pointer p-2 items-center"><MenuIcon className="h-6 mr-2 text-white" />
                All
                </p>
                <p >Prime Video</p>
                <p >Amazon Business</p>
                <p >Todays Deals</p>
                <p className="hidden md:inline">Electronics</p>
                <p className="hidden md:inline">Personal Care</p>
                <p className="hidden md:inline">Fashion</p>
                
            </div> 
            

        </header>
    )
}
export default Header;