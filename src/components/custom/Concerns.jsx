import Concern1 from '../../assets/concern1.jpg';
import Concern2 from '../../assets/concern2.jpg';
import Concern3 from '../../assets/concern3.jpg';
import Concern4 from '../../assets/concern4.jpg';
function Concerns() {
  return (
    <div className='p-[80px]'>
        <h2 className="text-2xl font-semibold">Shop by Health Concerns</h2>
        <div className="flex gap-4 mt-4">
            <div className='relative'>
            <img src={Concern1} alt="concern" />
                <div className='absolute top-3 left-3 flex flex-col gap-1'>
                    <span className='text-xl font-semibold'>Depression</span>
                    <small className='font-semibold w-fit border-b-0 border-[#31bce8] cursor-pointer hover:border-b text-[#31bce8]'>SHOP NOW</small>
                </div>
            </div>
            <div className='relative'>
            <img src={Concern3} alt="concern" />
                <div className='absolute top-3 left-3 flex flex-col gap-1'>
                    <span className='text-xl font-semibold'>Headache</span>
                    <small className='font-semibold w-fit border-b-0 border-[#31bce8] cursor-pointer hover:border-b text-[#31bce8]'>SHOP NOW</small>
                </div>
            </div>
            <div className='relative'>
            <img src={Concern4} alt="concern" />
                <div className='absolute top-3 left-3 flex flex-col gap-1'>
                    <span className='text-xl font-semibold'>Stomach Pain</span>
                    <small className='font-semibold w-fit border-b-0 border-[#31bce8] cursor-pointer hover:border-b text-[#31bce8]'>SHOP NOW</small>
                </div>
            </div>
            <div className='relative'>
            <img src={Concern2} alt="concern" />
                <div className='absolute top-3 left-3 flex flex-col gap-1'>
                    <span className='text-xl font-semibold'>Hair Loss</span>
                    <small className='font-semibold w-fit border-b-0 border-[#31bce8] cursor-pointer hover:border-b text-[#31bce8]'>SHOP NOW</small>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Concerns