import { useEffect, useState } from "react";
import Player from "../Player/Player";


const Players = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('player.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])
    return (
        <div className='mb-4 mx-16 mt-4'>
            <div className='flex items-center justify-between my-6'>
                <div>
                    <h2 className='text-2xl font-bold'>Avilable Players</h2>
                </div>
                <div>
                    <button className='btn bg-[#E7FE29]  p-2 rounded-tl-lg rounded-bl-lg border border-[#E7FE29] font-bold'>Avilable</button>
                    <button className='btn p-2 rounded-tr-lg rounded-br-lg border border-gray-300'>Selected</button>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-6'>
                {
                    players.map((player, idx) => <Player
                        key={idx}
                        player={player}
                    ></Player>)
                }
            </div>
        </div>
    );
};

export default Players;