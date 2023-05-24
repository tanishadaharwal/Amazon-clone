import Image from "next/image";
import {useState} from "react";
import {StarIcon} from "@heroicons/react/solid";
import {useDispatch} from "react-redux";
import { addToBasket } from "../slices/basketSlice";
const Product = ({id, title, price, description, category, image}) => {
    const dispatch = useDispatch();
    const rating = Math.floor(Math.random()*(4) + 1);
    const [hasPrime] = useState(Math.random() < 0.5)
    const addItemtoBasket = () => {
        const product = {
        id, title, rating, hasPrime, price, description, category, image,
        };
        dispatch(addToBasket(product));
    };
    


    return (
        <div className="rounded-lg flex flex-col m-5 bg-white z-30 p-10">
            <p className="top-2 right-2 text-sx italic text-gray-400">{category}</p>
            <Image src={image} height={200} width={200} alt="" className="mx-auto hover:scale-105"></Image> 
            <h4 className="my-3 font-medium">{title}</h4>
            <div className="flex">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-400" />
                    ))}
                </div>
            
            <div className="text-xs my-2 line-clamp-5">{description}</div>
            <div className="my-3">${price}</div>
            
            {hasPrime && (
                <div className="flex items-center gap-2">
                    <img src="amazon.png" height={30} width={30} alt=""/>
                    <p className="mb-2 text-sm text-gray-500">FREE Next-day Delivery</p>
                </div>
            )}
            <button onClick={addItemtoBasket}className="bg-gradient-to-t border-yellow-300 from-yellow-400 to-yellow-200 focus:ring-yellow-500 active:from-yellow-400 p-2 rounded-lg focus:outline-none  mt-auto">Add to Cart</button>
        </div>
    )
}
export default Product;