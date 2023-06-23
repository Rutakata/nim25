import styles from './Modes.module.css';
import ModesButton from './ModesButton';


const Modes = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.container__header}>Nim25 Game</h2>
            <ModesButton path='/game' text='Player takes first' />
            <ModesButton path='/game' text='Bot takes first' />
        </div>
    )
}

export default Modes;