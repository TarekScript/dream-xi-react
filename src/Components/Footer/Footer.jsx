
const Footer = () => {
    return (
        <div className='bg-[#06091A] p-20 text-white'>
            <img className='flex mx-auto h-36 w-36 mt-16' src="https://i.ibb.co.com/99pHjHWC/logo.png" alt="" />
            <div className='grid grid-cols-3 justify-evenly gap-8 items-center mb-4'>
                <div>
                    <h3 className='font-bold text-lg'>About Us</h3>
                    <p>We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>
                <div className='text-center space-y-3'>
                    <h2 className='font-bold text-lg'>Quick Links</h2>
                    <ul className='space-y-2'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <input className='border p-2 rounded-lg  border-gray-300' type="text" name="" id="" placeholder='Enter Your Email' />
                    <button className="btn bg-gradient-to-r from-violet-500 to-yellow-400 px-4 py-2 text-white ml-8 rounded-lg font-medium">Subscribe</button>
                </div>
            </div>
            <hr />
            <p className='font-medium text-center mt-4'>@2024 Your Company All Rights Reserved.</p>
        </div>
    );
};

export default Footer;