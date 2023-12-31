import styles from './GameField.module.css';
import MatchesPickButton from "./MatchesPickButton";
import TakenMatchesIndicator from './TakenMatchesIndicator/TakenMatchesIndicator';
import WinnerPopup from "./WinnerPopup/WinnerPopup";


type Props = {
    botMatchesCount: number,
    playerMatchesCount: number,
    totalMatchesCount: number,
    isWinnerShown: boolean,
    lastTake: number,
    takeMatches: (count: number) => void,
    isTurnOdd: () => boolean,
    isButtonDisabled: (numberOfMatches: number) => boolean,
    restartGame: () => void,
    navigateToMainScreen: () => void
}

const GameField = ({totalMatchesCount, 
                    isWinnerShown,
                    playerMatchesCount,
                    botMatchesCount,
                    lastTake, 
                    takeMatches, 
                    isTurnOdd, 
                    isButtonDisabled, 
                    restartGame, 
                    navigateToMainScreen}: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.container__botInfo}>
                Bot 
                <span className={styles.container__botInfo__score}>{botMatchesCount}</span>
            </div>
            <div className={styles.container__gameInfo}>
                <h1 className={styles.container__gameInfo__leftMatches}>
                    {totalMatchesCount}
                </h1>

                <h2 className={styles.container__gameInfo__currentMove}>
                    {isTurnOdd() ? "It's your turn" : "It's bot's turn"}
                </h2>

                <div className={styles.container__buttonsContainer}>
                    {[1, 2, 3].map((numberOfMatches: number) => (
                        <MatchesPickButton numberOfMatches={numberOfMatches} 
                                        takeMatches={takeMatches} 
                                        isDisabled={isButtonDisabled(numberOfMatches)} />
                    ))}
                </div>
            </div>
            <div className={styles.container__playerInfo}>
                Player 
                <span className={styles.container__playerInfo__score}>{playerMatchesCount}</span>
            </div>
            {/* <div><Link to='/'>Go home</Link></div> */}
            <TakenMatchesIndicator lastTake={lastTake} isTurnOdd={isTurnOdd} />
            <WinnerPopup isWinnerShown={isWinnerShown}
                         winner={botMatchesCount % 2 === 1 ? 'player' : 'bot'}
                         restartGame={restartGame}
                         navigateToMainScreen={navigateToMainScreen} />
        </div>
    )
}

export default GameField;