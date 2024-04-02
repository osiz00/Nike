import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"
function PopularProducts() {
  return (
    <section id="products"
    className="max-container
     max-sm:mt-12">
      < div className="flex 
      flex-col justify-start
      gap-5">
        <h2 className="text-4xl font-palanquin 
        font-bold"><span className="
        text-coral-red">Popular</span> Producsts</h2>
        <p className="lg:max-w-lg mt-2
        font-montserrat text-slate-gray">lorem ins ome randoem sfaf asdfa asdsasfafa
          agagaga gageaeajdjao  aoimaoinitve aoiwevtnaoi 
          itoitvwunr wnovien nwviotu inwvoit intrvoin
        </p>
      </div>
      <div className="mt-16 grid gird-cols-1
      sm:grid-cols-2 md:grid-cols-3 
      lg:grid-cols-4 sm:gap-6 gap-14">
          {products.map(product => (
            <PopularProductCard key={product.name}
            {...product} />
          ))}
      </div>
    </section>
  )
}

export default PopularProducts
