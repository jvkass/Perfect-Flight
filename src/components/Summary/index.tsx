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
                    <p>Number of rounds played</p>
                </header>
                <strong>{IsRoundsPlayed}</strong>
            </div>
            <div>                
                <header>
                    <p>Number of endgame votes from the previous round</p>
                </header>
                <strong>{IsVotesFinished}</strong>
            </div>
        </div>
    );
};
