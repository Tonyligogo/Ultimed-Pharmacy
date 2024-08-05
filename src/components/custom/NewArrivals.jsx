import ProductCard2 from "./ProductCard2";
import Prod1 from '../../assets/Vitamin-C.jpg'
import Prod2 from '../../assets/VitaminB12.jpg'
import Prod3 from '../../assets/VitaminC20.jpg'
import Prod4 from '../../assets/Omega3.jpg'

function NewArrivals() {
    const products = [
      {id: 1, name: 'Vitamin C with zinc - 30 Tablets', img: Prod1},
      {id: 2, name: 'VitaminB12 1000mcg', img: Prod2},
      {id: 3, name: 'Vitamin C - 20 Effervescent Tablets', img: Prod3},
      {id: 4, name: 'Health Nurture Fish Oil Omega 3', img: Prod4},
    ]

  return (
    <div className="px-[80px]">
        <h2 className="text-2xl font-semibold">New Arrivals</h2>
    <div className="flex justify-center gap-4 mt-4">
        {products.map((product,index)=>(
            <ProductCard2 key={index} product={product}/>
        ))}
    </div>
    </div>
  )
}

export default NewArrivals