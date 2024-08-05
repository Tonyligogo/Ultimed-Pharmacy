
function Newsletter() {
  return (
    <div className='bg-[#eff4f8] my-[80px] mx-[80px] rounded-lg'>
        <form className='flex justify-center items-center flex-col gap-4 w-[600px] mx-auto p-6'>
            <h2 className='text-3xl font-semibold'>Subscribe to our newsletter</h2>
            <p>Join our newsletter and get 30% discount for your next order. </p>
            <input type='email' placeholder='Enter your email address' className='border rounded-full border-gray-400 p-3 w-full'/>
            <button type='submit' className='bg-[#31bce8] text-white p-3 w-full rounded-full'>Subscribe</button>
        </form>
    </div>
  )
}

export default Newsletter