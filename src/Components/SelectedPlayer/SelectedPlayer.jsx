import { TiDeleteOutline } from "react-icons/ti";

const SelectedPlayer = ({ selectedPlayerData, handleRemovePlayer }) => {
    const { img, name, position, id } = selectedPlayerData;
    return (
        <div className='flex items-center justify-between border border-gray-400 px-8 mb-4 rounded-xl'>
            <div className='flex items-center'>
                <div>
                    <img className='w-16 rounded-lg m-5 h-16' src={img} alt="" />
                </div>
                <div>
                    <h2 className='text-xl font-bold'>{name}</h2>
                    <h4 className=' text-gray-400'>{position}</h4>
                </div>
            </div>
            <div>
                <button onClick={() => handleRemovePlayer(id)} className='text-red-600 text-4xl'><TiDeleteOutline />
                </button>
            </div>
        </div>
    );
};

export default SelectedPlayer;