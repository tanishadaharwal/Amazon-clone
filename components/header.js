import Image from "next/image";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
const Header = () => {
    return (
        <header>
            <div className="flex items-center p-2 gap-3 flex-grow bg-amazon_blue py-1 ">
                <div className="mt-2  flex items-center flex-grow sm:flex-grow-0">
                    <Image className="cursor-pointer pt-2" alt="" src="https://links.papareact.com/f90" width={130} height={120} />
                </div>

                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 ">
                    <input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
                    placeholder="Search for products, brands and more"
                    />
                    <SearchIcon className="h-12 p-4"/>
                </div>

                <div className="flex items-center gap-5 text-sm  mx-6 whitespace-nowrap">
                    <div className="text-white cursor-pointer hover:underline">
                        <p>Hello, Tanisha!</p>
                        <p className="font-bold ">Account & Lists</p>
                    </div> 
                    
                    <div className="text-white cursor-pointer hover:underline">
                        <p>Returns</p>
                        <p className="font-bold">& Orders</p>

                    </div>

                    <div className="relative flex text-white items-center text-center cursor-pointer hover:underline">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-5 pb-5 items-center text-center rounded-full bg-yellow-400 text-black font-bold">0</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-bold mt-5">Cart</p>

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