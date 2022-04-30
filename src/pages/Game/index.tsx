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
        if (((players.length / 2) < votesFinished) || players.length === 0) {
            receavePerPlayers();
            return alert('Jogo Acabou');
        }
        //  Calculando possível eliminado e repassando os fundos
        players.forEach((player, i) => {
            const percentageEliminated = Math.random();

            if (percentageEliminated <= 0.42) {

                var listPlayers = players;

                listPlayers.splice(i, 1);

                setPlayers(() => {
                    return [...listPlayers];
                });;
                setPlayersEliminated((prev) => {
                    return [...prev, player];
                });
                setFund((prev) => {
                    let fundActual = prev + player.amount;
                    return fundActual;
                });
            }
        });


        let rodadaAtual = roundsPlayed + 1;

        setRoundsPlayed(rodadaAtual);
        //  Calculando votos para encerramento
        setVotesFinished(0);

        players.forEach(() => {
            const percentageVotesFinished = Math.random();

            if (percentageVotesFinished <= 0.30) {
                setVotesFinished((prev) => {
                    let VotesFinishedActual = prev + 1;
                    return VotesFinishedActual;
                });
            }

        });
    }

    function receavePerPlayers() {
        let receivePerPlayers = fund / players.length;

        players.forEach((_player, i) => {

            var listPlayers = players;

            listPlayers[i].amount = listPlayers[i].amount + receivePerPlayers;

            setPlayers(() => {
                return [...listPlayers];
            });;
            setFund((prev) => {
                let fundActual = prev - receivePerPlayers;
                return fundActual;
            });

        });
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
