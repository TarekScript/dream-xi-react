
const Newsletter = () => {
    return (
        <div className='bg-[#FFFFFF26] p-4 rounded-lg relative top-28 z-10 mx-20'>
            <div className='h-80 bg-[url("https://i.ibb.co.com/6J4nthRT/bg-shadow.png")] space-y-5 flex flex-col justify-center items-center bg-[#FFFFFF80] border border-gray-300 bg-cover rounded-2xl opacity-100 '>
                <h3 className='text-3xl font-bold text-center'>Subscribe to our Newsletter</h3>
                <p className='font-medium text-lg text-gray-700 text-center'>Get the latest updates and news right in your inbox!</p>
                <div>
                    <input className='border p-2 rounded-lg  border-gray-300' type="text" name="" id="" placeholder='Enter Your Email' />
                    <button className="btn bg-gradient-to-r from-violet-500 to-yellow-400 px-4 py-2 text-white ml-8 rounded-lg font-medium">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;