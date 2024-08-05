import Banner from '../../assets/SunscreenHolding.webp'
import Med from '../../assets/drugs2.jpg'
import Vit from '../../assets/vits2.jpg'
import Skin from '../../assets/skinCare2.jpg'
import HealthCare from '../../assets/healthCare1.jpg'
function Hero() {
  return (
    <div className='h-[calc(100vh-20px)] space-y-5'>
        <img src={Banner} alt="Banner" className='max-h-[55%] w-full object-cover'/>
        <div className='flex justify-center gap-4'>
            <div className='relative'>
                <div className='overlay rounded-lg'></div>
                <img src={Med} alt="" className='object-cover w-full h-full rounded-lg'/>
                <div className='flex flex-col justify-center items-center absolute top-3/4 left-1/2 -translate-y-3/4 -translate-x-1/2 border border-gray-400 rounded-lg w-[70%] h-[50%] p-5 text-white'>
                <span className='font-semibold text-xl'>Medicines</span>
                <small className='text-base underline underline-offset-2'>View More</small>
                </div>
            </div>
            <div className='relative'>
                <div className='overlay rounded-lg'></div>
                <img src={Vit} alt="" className='object-cover w-full h-full rounded-lg'/>
                <div className='flex flex-col justify-center items-center absolute top-3/4 left-1/2 -translate-y-3/4 -translate-x-1/2 border border-gray-400 rounded-lg w-[70%] h-[50%] p-5 text-white'>
                <span className='font-semibold text-xl'>Vitamins</span>
                <small className='text-base underline underline-offset-2'>View More</small>
                </div>
            </div>
            <div className='relative'>
                <div className='overlay rounded-lg'></div>
                <img src={Skin} alt="" className='object-cover w-full h-full rounded-lg'/>
                <div className='flex flex-col justify-center items-center absolute top-3/4 left-1/2 -translate-y-3/4 -translate-x-1/2 border border-gray-400 rounded-lg w-[70%] h-[50%] p-5 text-white'>
                <span className='font-semibold text-xl'>Skin Care</span>
                <small className='text-base underline underline-offset-2'>View More</small>
                </div>
            </div>
            <div className='relative'>
                <div className='overlay rounded-lg'></div>
                <img src={HealthCare} alt="" className='object-cover w-full h-full rounded-lg'/>
                <div className='flex flex-col justify-center items-center absolute top-3/4 left-1/2 -translate-y-3/4 -translate-x-1/2 border border-gray-400 rounded-lg w-[70%] h-[50%] p-5 text-white'>
                <span className='font-semibold text-xl'>Personal Care</span>
                <small className='text-base underline underline-offset-2'>View More</small>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero