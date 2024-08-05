import { Heart } from 'lucide-react'
function ProductCard({product}) {
  return (
    <div className='border rounded-lg p-3 relative'>
        <small className='rounded-full px-2 bg-[#31bce8] text-white'>Popular</small>
        <img src={product.img} alt="Vitamin D3" className='mt-4'/>
        <ul className='mt-4'>
            <li className='text-xs text-gray-400'>Health Care</li>
            <li>{product.name}</li>
            <li className='flex items-center gap-2'><b className='text-[#ef4281]'>Ksh 1200</b> <s className='text-sm text-gray-400'>Ksh 1450</s></li>
            <li className='flex justify-between items-center'>
                <span className='bg-[#31bce8] cursor-pointer w-fit rounded-full text-white px-3 py-1 mt-2'>Add to cart</span>
                <Heart className='hover:text-[#31bce8] cursor-pointer '/>
            </li>
        </ul>
    </div>
  )
}

export default ProductCard