import { CiBitcoin } from "react-icons/ci";
const Header = () => {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <div>
                    <img src='https://i.ibb.co.com/99pHjHWC/logo.png' alt="" />
                </div>
                <div className='flex gap-6 items-center'>
                    <div>
                        <ul className='flex items-center gap-4 text-xl'>
                            <li>Home</li>
                            <li>Fixture</li>
                            <li>Teams</li>
                            <li>Schedules</li>
                        </ul>
                    </div>
                    <div>
                        <button className='border border-[#1313131A] p-2 rounded-lg flex items-center gap-1'><span>0</span> Coins <span className='text-yellow-500 font-bold text-3xl'><CiBitcoin /></span>
                        </button>
                    </div>
                </div>
            </div>
            {/* hero section  */}
            <div className='bg-[url("https://i.ibb.co.com/6J4nthRT/bg-shadow.png")] w-full bg-[#131313]  bg-cover  py-10 rounded-lg mt-8 space-y-4'>
                <img className='mx-auto' src="https://i.ibb.co.com/4nRkgMPp/banner-main.png" alt="" />
                <h1 className='text-5xl text-center font-bold text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <h3 className='text-gray-400 font-medium text-center text-xl'>Beyond Boundaries Beyond Limits</h3>
                <button className='bg-[#E7FE29] p-2 rounded-lg border border-[#E7FE29] m-2 flex font-medium mx-auto'>Claim Free Credit</button>
            </div>
        </div >
    );
};

export default Header;