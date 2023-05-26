import Product from "./Product"
const ProductFeed =({products}) => {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52">
            
            
            {products?.slice(0,4)
            .map(({id, title, price, description, category, image}) => (
                <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                />
            ))}
        
            <img src="https://links.papareact.com/dyz" alt="" className="md:col-span-full"></img>
            {products?.slice(4,8)
            .map(({id, title, price, description, category, image}) => (
                <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                />
            ))}
            <img src="banner6.jpg" alt="" className="md:col-span-full"></img>

            {products?.slice(8,16)
            .map(({id, title, price, description, category, image}) => (
                <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                />
            ))}
            <img src="banner8.jpg" alt="" className="md:col-span-full"></img>
            {products?.slice(16,20)
            .map(({id, title, price, description, category, image}) => (
                <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                />
            ))}
            <img src="top_banner.jpg" alt="" className="md:col-span-full"></img>
        </div>
    )
}
export default ProductFeed;