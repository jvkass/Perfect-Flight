import { geradorNome } from 'gerador-nome';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

interface Player {
    id: number;
    name: string;
    amount: number;
}

export function PlayersTableEliminated() {

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
                        <th>Player Eliminated</th>
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