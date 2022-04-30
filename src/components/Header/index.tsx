import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

interface HeaderProps {
    IsFund:number;
}

export function Header({IsFund}:HeaderProps) {

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <nav>
                    <Link className='' to='/'>Home</Link>
                    <Link className='' to='/game'>Game</Link>
                </nav>

                <label>Prize fund: 
                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'USD'
                                }).format(IsFund)}</label>
            </div>
        </header>
    );
}