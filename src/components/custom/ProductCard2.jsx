import { Eye, Heart, ShoppingCart } from 'lucide-react'
function ProductCard2({product}) {
  return (
    <div className='border rounded-lg p-3 relative'>
        <div className='absolute top-0 left-0 opacity-0 hover:opacity-100 transition bottom-0 w-full'>
           <ul className='absolute right-4 top-4 space-y-2'>
            <li className='bg-[#ffe8f1] p-2 rounded-full cursor-pointer'><Heart size={18}/></li>
            <li className='bg-[#ffe8f1] p-2 rounded-full cursor-pointer'><ShoppingCart size={18}/></li>
            <li className='bg-[#ffe8f1] p-2 rounded-full cursor-pointer'><Eye size={18}/></li>
           </ul> 
        </div>
        <small className='rounded-full px-2 bg-[#ef4281] text-white'>New</small>
        <img src={product.img} alt="Vitamin D3" className='mt-2'/>
        <ul className='mt-2'>
            <li className='text-xs text-gray-400'>Health Care</li>
            <li>{product.name}</li>
            <li className='flex items-center gap-2 font-semibold'>Ksh 900</li>
        </ul>
    </div>
  )
}

export default ProductCard2