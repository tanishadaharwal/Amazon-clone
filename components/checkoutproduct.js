import Image from "next/image"
import { StarIcon } from "@heroicons/react/solid";
import {useDispatch} from "react-redux";
import {addToBasket, removeFromBasket} from "../slices/basketSlice"
const CheckoutProducts = ({id, title, rating, price, description, category, image, hasPrime}) => {
   const dispatch = useDispatch();
    const addItemtoBasket = () => {
        const product = {
            id, title, rating, hasPrime, price, description, category, image,
            };
            dispatch(addToBasket(product));
        };
    const removeItemfromBasket = () => {
       
            dispatch(removeFromBasket({id}));
        };
 
    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200}width={200} />
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                
                <div className="flex">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-400" />
                    ))}
                </div>
                <p className="text-sm mt-2 mb-2 line-clamp-5">{description}</p>
                <div className="my-3">${price}</div>
                {hasPrime && (
                    <div className="flex items-center gap-2">
                    <img src="amazon.png" height={30} width={30} alt=""/>
                    <p className="mb-2 text-sm text-gray-500">FREE Next-day Delivery</p>
                </div>
                )}

            </div>
            <div className="flex flex-col justify-self-end my-auto gap-5">
            <button onClick={addItemtoBasket}className="bg-gradient-to-t border-yellow-300 from-yellow-400 to-yellow-200 focus:ring-yellow-500 active:from-yellow-400 p-2 rounded-lg focus:outline-none  mt-auto">Add to Cart</button>
            <button onClick={removeItemfromBasket}className="bg-gradient-to-t border-yellow-300 from-yellow-400 to-yellow-200 focus:ring-yellow-500 active:from-yellow-400 p-2 rounded-lg focus:outline-none  mt-auto">Remove from Cart</button>
            </div>
            
        </div>
    )
};
export default CheckoutProducts;