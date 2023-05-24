import Image from "next/image";
import {useState} from "react";
import {StarIcon} from "@heroicons/react/solid";


const Product = ({id, title, price, description, category, image}) => {
    const MAX_RATING = 5;
    const MIN_RATING = 1;

    
    const [hasPrime] = useState(Math.random() < 0.5)
    return (
        <div className="rounded-lg flex flex-col m-5 bg-white z-30 p-10">
            <p className="top-2 right-2 text-sx italic text-gray-400">{category}</p>
            <Image src={image} height={200} width={200} alt="" className="mx-auto hover:scale-105"></Image> 
            <h4 className="my-3 font-medium">{title}</h4>
            <div className="flex">
                
                    <StarIcon className="h-5 text-yellow-400 "/>
                    <StarIcon className="h-5 text-yellow-400 "/>
                    <StarIcon className="h-5 text-yellow-400 "/>
                    <StarIcon className="h-5 text-yellow-400 "/>
              
            </div>
            
            <div className="text-xs my-2 ">{description}</div>
            <div className="my-3">${price}</div>
            
            {hasPrime && (
                <div className="flex items-center gap-2">
                    <img src="amazon.png" height={30} width={30} alt=""/>
                    <p className="mb-2 text-sm text-gray-500">FREE Next-day Delivery</p>
                </div>
            )}
            <button className="bg-gradient-to-t border-yellow-300 from-yellow-400 to-yellow-200 focus:ring-yellow-500 active:from-yellow-400 p-2 rounded-lg focus:outline-none  mt-auto">Add to Cart</button>
        </div>
    )
}
export default Product;