import styles from "./styles.module.scss"

interface SummaryProps{
    IsRoundsPlayed:number;
    IsVotesFinished:number;
}

export function Summary({IsRoundsPlayed,IsVotesFinished}:SummaryProps) {

    return (
        <div className={styles.summaryContainer}>
            <div>
                <header>
                    <p>Número de rodadas jogadas</p>
                </header>
                <strong>{IsRoundsPlayed}</strong>
            </div>
            <div>                
                <header>
                    <p>Número de votos pelo fim do jogo da rodada anterior</p>
                </header>
                <strong>{IsVotesFinished}</strong>
            </div>
        </div>
    );
};
