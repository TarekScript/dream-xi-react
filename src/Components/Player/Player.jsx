import { IoPersonCircleOutline } from "react-icons/io5";
import { IoFlagOutline } from "react-icons/io5";

const Player = ({ player, handleSelectedPlayer }) => {
    const { img, name, country, position, bowling_style, batting_style, price, id } = player;
    return (
        <div className='space-y-3 rounded-lg p-4 border border-gray-300'>
            <img className='w-full h-[250px] rounded-lg' src={img} alt="" />
            <div className='flex items-center gap-4'>
                <span className='text-3xl'><IoPersonCircleOutline />
                </span>
                <h2 className='text-xl font-bold'>{name}</h2>
            </div>
            <div className='flex justify-between'>
                <div className='flex items-center gap-4'>
                    <span>
                        <IoFlagOutline />
                    </span>
                    <h3>{country}</h3>
                </div>
                <button className='btn bg-gray-200 border border-gray-300 p-2 rounded-lg'>{position}</button>
            </div>
            <hr />
            <h2 className='text-lg font-bold'>Rating</h2>
            <div className='flex justify-between'>
                <h3 className='text-lg'>{bowling_style}</h3>
                <h3 className='text-lg text-gray-400'>{batting_style}</h3>
            </div>
            <div className='flex justify-between'>
                <h3>Price: {price}$</h3>
                <button onClick={() => handleSelectedPlayer(id, price)} className="btn border border-gray-300 p-2 rounded-lg">Choose Player</button>
            </div>
        </div>
    );
};

export default Player;