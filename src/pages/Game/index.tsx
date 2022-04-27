import { Header } from "components/Header";
import { PlayersTable } from "components/PlayersTable";
import { PlayersTableEliminated } from "components/PlayersTableEliminated";
import { Summary } from "components/Summary";
import React from "react";

export const Game: React.FC = () => {


    return (
        <>
            <Header/>
            <Summary/>
            <PlayersTable/>
            <PlayersTableEliminated/>
        </>
    );
};
