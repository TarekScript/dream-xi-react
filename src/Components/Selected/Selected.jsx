import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const Selected = ({ selectedPlayer, handleToggole, handleRemovePlayer }) => {
    return (
        <div className='mb-4 mx-16 mt-4'>
            {/* section header  */}
            <div className='flex items-center justify-between my-6'>
                <div>
                    <h2 className='text-2xl font-bold'>Selected Players ({selectedPlayer.length}/6)</h2>
                </div>
                <div>
                    <button onClick={() => handleToggole(true)} className='btn bg-[#E7FE29]  p-2 rounded-tl-lg rounded-bl-lg border border-[#E7FE29] font-bold'>Avilable</button>
                    <button onClick={() => handleToggole(false)} className='btn p-2 rounded-tr-lg rounded-br-lg border border-gray-300'>Selected({selectedPlayer.length})</button>
                </div>
            </div>
            {/* section body  */}
            {
                selectedPlayer.map((selectedPlayerData, idx) => <SelectedPlayer
                    key={idx}
                    handleRemovePlayer={handleRemovePlayer}
                    selectedPlayerData={selectedPlayerData}
                ></SelectedPlayer>)
            }
            <div className='border border-gray-400 rounded-lg w-48 '>
                <button onClick={() => handleToggole(true)} className="btn bg-[#E7FE29] m-2 rounded-lg px-4 py-2 font-medium">Add More Player</button>
            </div>
        </div>
    );
};

export default Selected;