import Brand1 from '../../assets/panadol.avif'
import Brand2 from '../../assets/sensodyne.png'
import Brand3 from '../../assets/sun.jpg'
import Brand4 from '../../assets/glenmark.png'
import Brand5 from '../../assets/cipla.png'
import Brand6 from '../../assets/nivea.png'
function Brands() {
    const brands = [
      {id: 1, name: 'Panadol', img: Brand1},
      {id: 2, name: 'Sensodyne', img: Brand2},
      {id: 3, name: 'Sun Pharmaceuticals', img: Brand3},
      {id: 4, name: 'GlenMark', img: Brand4},
      {id: 5, name: 'Cipla', img: Brand5},
      {id: 6, name: 'Nivea', img: Brand6},
    ]

  return (
    <div className="px-[80px] mt-10">
    <h2 className="text-2xl font-semibold">Our Top Brands</h2>
<div className="flex justify-between gap-4 mt-4">
    {brands.map((brand)=>(
        <div key={brand.id} className='flex flex-col items-center gap-2'>
            <img src={brand.img} alt="brand image" className='size-[150px] object-cover object-center rounded-full'/>
            <span>{brand.name}</span>
        </div>
    ))}
</div>
</div>
  )
}

export default Brands