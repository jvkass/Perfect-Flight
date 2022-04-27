import { geradorNome } from 'gerador-nome';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
//import { v4 as uuidv4 } from 'uuid';

interface Player {
    id: number;
    name: string;
    amount: number;
}

export function PlayersTable() {

    const [players, setPlayers] = useState<Player[]>([]);

    useEffect(() => {

            const player: Player = {
                id: 1,
                name: geradorNome(),
                amount: 0
            };

            setPlayers([
                ...players, player
            ]);
    }, [])

    // function handleStart() {

    // }

    return (
        <div className={styles.heroTableContainer}>
            <table>
                <thead>
                    <tr>
                        <th>Player in Game</th>
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