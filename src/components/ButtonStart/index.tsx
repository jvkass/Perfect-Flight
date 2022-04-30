import styles from './styles.module.scss';

interface ButtonStartProps{
    IsClick:() => void;
}

export function ButtonStart({IsClick}:ButtonStartProps) {

    return (
            <div className={styles.Container}>
                <button onClick={IsClick}>Start Round</button>
            </div>
    );
}