import React from "react";
import styles from "./styles.module.scss"

export const Summary: React.FC = () => {

    return (
        <div className={styles.summaryContainer}>
            <div>
                <header>
                    <p>Número de rodadas jogadas</p>
                </header>
                <strong>15</strong>
            </div>
            <div>                
                <header>
                    <p>Número de votos pelo fim do jogo da rodada anterior</p>
                </header>
                <strong>10</strong>
            </div>
        </div>
    );
};
