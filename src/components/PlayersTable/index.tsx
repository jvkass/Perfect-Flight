import styles from './styles.module.scss';

interface Player {
    id: number;
    name: string;
    amount: number;
}

interface PlayersTableProps{
    players: Player[];
}

export function PlayersTable({players}:PlayersTableProps) {


    return (
        <div className={styles.heroTableContainer}>
            <table>
                <thead>
                    <tr>
                        <th>Players in Game</th>
                        <th>Total Amount</th>
                    </tr>
                </thead>

                <tbody>
                    {players.map(player => (
                        <tr key={player.id}>
                            <td className="name">{player.name}</td>
                            <td className="amount">{
                                new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'USD'
                                }).format(player.amount)
                            }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}