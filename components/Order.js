import moment from "moment";
import Image from "next/image";
const Order = ({id, amount, amountShipping, items, timestamp, images}) => {
    return (
        <div className="relative border rounded-md">
            <div className="flex items-center gap-10 p-5 text-gray-600  bg-gray-100">
                <div>
                    <p className="font-bold text-xs">ORDER PLACED</p>
                    <p>{moment.unix(timestamp).format("DD-MM-YYYY")}</p>
                </div>
                <div>
                    <p className="text-xs font-bold">TOTAL</p>
                    <p>${amount} - Next Day Delivery ${amountShipping}</p>

                </div>

                <p className="text-sm flex-1 text-right whitespace-nowrap mt-4 text-blue-500">{items.length} items</p>
                <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-sm whitespace-nowrap">ORDER # {id}</p>
            </div>
            <div>
                <div className="flex gap-10 p-5 ml-3 overflow-x-auto">
                    {images.map(({image, key}) => (
                        
                        <Image key={key} alt="" src={image} width={100} height={100}></Image>
                        
                    ))}

                
                </div>

            </div>
        </div>
    )
}

export default Order;