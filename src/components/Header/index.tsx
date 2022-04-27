import styles from './styles.module.scss';
import { Link } from 'react-router-dom';


export function Header() {

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <nav>
                    <Link className='' to='/'>Home</Link>
                    <Link className='' to='/game'>Game</Link>
                </nav>

                <label>Total Amount: $420,000</label>
            </div>
        </header>
    );
}