import { ButtonStart } from "components/ButtonStart";
import { Header } from "components/Header";
import { PlayersTable } from "components/PlayersTable";
import { PlayersTableEliminated } from "components/PlayersTableEliminated";
import { Summary } from "components/Summary";
import React, { useState } from "react";
import jsonPlayers from '../../database/players.json';

interface Player {
    id: number;
    name: string;
    amount: number;
}

export const Game: React.FC = () => {
    const [fund, setFund] = useState(0);
    const [votesFinished, setVotesFinished] = useState(0);

    const [roundsPlayed, setRoundsPlayed] = useState(0);

    const [players, setPlayers] = useState<Player[]>(jsonPlayers)
    const [playersEliminated, setPlayersEliminated] = useState<Player[]>([]);

    function handleStartButton() {
        //  Calculando possível eliminado
        players.forEach((player, i) => {
            const percentageEliminated = Math.random();

            if (percentageEliminated <= 0.42) {
                
                var listPlayers = players;

                listPlayers.splice(i,1);

                setPlayers(() => {
                    return [...listPlayers];
                });;
                setPlayersEliminated((prev) => {
                    return [...prev, player];
                });
            }
        });



        setFund(0);

        console.log(roundsPlayed);
        let rodadaAtual = roundsPlayed;

        rodadaAtual +=1;

        setRoundsPlayed(rodadaAtual);
        setVotesFinished(0);

    }

    return (
        <>
            <Header IsFund={fund} />
            <Summary IsVotesFinished={votesFinished} IsRoundsPlayed={roundsPlayed} />
            <ButtonStart IsClick={handleStartButton} />
            <PlayersTable players={players} />
            <PlayersTableEliminated players={playersEliminated} />
        </>
    );
};
