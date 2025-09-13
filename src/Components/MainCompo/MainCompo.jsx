import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Player from "../Player/Player";
import Players from "../Players/Players";
import Selected from "../Selected/Selected";
import { ToastContainer, toast } from 'react-toastify';

const MainCompo = () => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState([]);
    const [coins, setCoins] = useState(0);
    useEffect(() => {
        fetch('player.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])
    // toggole 
    const [toggole, setToggole] = useState(true);

    // claim coins 
    const handleClaimCoins = () => {
        setCoins(coins + 1200000)
    }
    const handleToggole = (booleanData) => {
        setToggole(booleanData)

    }
    // add player to selected player 
    const handleSelectedPlayer = (id, price) => {

        // validation
        if (coins <= 0) {
            toast("Please Claim coins first")
            return;
        }
        if (selectedPlayer.length >= 6) {
            toast('You Already added 6 players')
            return;
        }
        for (let player of selectedPlayer) {
            if (player.id == id) {
                toast('Player Already Added');
                return;
            }
        }

        players.filter(player => {

            if (player.id == id) {
                const newselectedPlayer = [...selectedPlayer, player]
                setSelectedPlayer(newselectedPlayer);
                setCoins(coins - price)
            }
        })
    }

    // remove player from selectedPlayer 
    const handleRemovePlayer = (id) => {
        const newselectedPlayer = selectedPlayer.filter(player => player.id !== id)
        setSelectedPlayer(newselectedPlayer)
    }
    return (
        <div>
            <Header
                coins={coins}
                handleClaimCoins={handleClaimCoins}
            ></Header>
            {toggole ?
                <Players
                    handleToggole={handleToggole}
                    handleSelectedPlayer={handleSelectedPlayer} selectedPlayer={selectedPlayer}
                    players={players}
                ></Players> :
                <Selected
                    handleToggole={handleToggole}
                    selectedPlayer={selectedPlayer}
                    handleRemovePlayer={handleRemovePlayer}
                ></Selected>
            }
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MainCompo;