import { Link } from 'react-router-dom';
import styles from './Modes.module.css';


const Modes = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.container__header}>Nim25 Game</h2>
            <div className={styles.container__button}><Link to='/game'>Player takes first</Link></div>
            <div className={styles.container__button}><Link to='/game'>Bot takes first</Link></div>
        </div>
    )
}

export default Modes;