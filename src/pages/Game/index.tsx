import { ButtonStart } from "components/ButtonStart";
import { Header } from "components/Header";
import { PlayersTable } from "components/PlayersTable";
import { PlayersTableEliminated } from "components/PlayersTableEliminated";
import { Summary } from "components/Summary";
import React, { useState } from "react";
import jsonPlayers from '../../database/players.json';

export const Game: React.FC = () => {
    const [fund, setFund] = useState(0);
    const [votesFinished, setVotesFinished] = useState(0);

    const [roundsPlayed,setRoundsPlayed] = useState(0);
      
    const [players, setPlayers] = useState(jsonPlayers)
    const [playersEliminated, setPlayersEliminated] = useState([])
  
    function handleStartButton(){
        

        setFund(0);
        setVotesFinished(0);

        setRoundsPlayed(0);

        setPlayers([]);
        setPlayersEliminated([]);
    }

    return (
        <>
            <Header IsFund={fund}/>
            <Summary IsVotesFinished={votesFinished} IsRoundsPlayed = {roundsPlayed}/>
            <ButtonStart IsClick={handleStartButton}/>
            <PlayersTable players={players} />
            <PlayersTableEliminated players={playersEliminated}/>
        </>
    );
};
