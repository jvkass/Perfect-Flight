import { ButtonStart } from "components/ButtonStart";
import { Header } from "components/Header";
import { PlayersTable } from "components/PlayersTable";
import { PlayersTableEliminated } from "components/PlayersTableEliminated";
import { Summary } from "components/Summary";
import React, { useState } from "react";
import jsonPlayers from '../../database/players.json';

export const Game: React.FC = () => {
    const [players, setPlayers] = useState(jsonPlayers)
    const [playersEliminated, setPlayersEliminated] = useState([])

    function handleStartButton(){
        setPlayers([]);
        setPlayersEliminated([]);
    }

    return (
        <>
            <Header/>
            <Summary/>
            <ButtonStart IsClick={handleStartButton}/>
            <PlayersTable players={players} />
            <PlayersTableEliminated players={playersEliminated}/>
        </>
    );
};
