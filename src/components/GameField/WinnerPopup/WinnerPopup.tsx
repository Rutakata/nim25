import styles from './WinnerPopup.module.css';
import { VscDebugRestart } from 'react-icons/vsc';
import { AiFillHome } from 'react-icons/ai';


type Props = {
    isWinnerShown: boolean,
    winner: string,
    restartGame: () => void,
    navigateToMainScreen: () => void
}

const WinnerPopup = ({isWinnerShown, winner, restartGame, navigateToMainScreen}: Props) => {
    return (
        <div className={styles.wrapper} style={{display: isWinnerShown ? 'block': 'none'}}>
            <div className={styles.container}>
                <h1 className={styles.container__header}>The winner is {winner}</h1>
                <div className={styles.container__buttonsWrapper}>
                    <div onClick={restartGame}><VscDebugRestart size={35} /></div>
                    <div onClick={navigateToMainScreen}><AiFillHome size={35} /></div>
                </div>
            </div>
        </div>
    )
}

export default WinnerPopup;