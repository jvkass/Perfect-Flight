import styles from './styles.module.scss';

interface Player {
    id: number;
    name: string;
    amount: number;
}

interface PlayersTableProps{
    players: Player[];
}

export function PlayersTableEliminated({players}:PlayersTableProps) {

    return (
        <div className={styles.heroTableContainer}>
            <table>
                <thead>
                    <tr>
                        <th>Players Eliminated</th>
                    </tr>
                </thead>

                <tbody>
                    {players.map(player => (
                        <tr key={player.id}>
                            <td className="name">{player.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}