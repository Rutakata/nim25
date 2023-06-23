import styles from './Modes.module.css';
import ModesButton from './ModesButton';


const Modes = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.container__header}>Nim25 Game</h2>
            <div className={styles.container__buttonsWrapper}>
                <ModesButton path='/game' text='Player takes first' />
                {/* <ModesButton path='/game' text='Bot takes first' /> */}
            </div>
        </div>
    )
}

export default Modes;