import { Link } from "react-router-dom";
import styles from './GameField.module.css';
import MatchesPickButton from "./MatchesPickButton";
import WinnerPopup from "./WinnerPopup/WinnerPopup";


type Props = {
    totalMatchesCount: number,
    isWinnerShown: boolean,
    takeMatches: (count: number) => void,
    isOdd: () => boolean,
    isButtonDisabled: (numberOfMatches: number) => boolean,
    restartGame: () => void,
    navigateToMainScreen: () => void
}

const GameField = ({totalMatchesCount, isWinnerShown, takeMatches, isOdd, isButtonDisabled, restartGame, navigateToMainScreen}: Props) => {
    return (
        <div className={styles.container}>
            <h2>Game Field</h2>
            <h2>{totalMatchesCount}</h2>
            <h2>{isOdd() ? "It's your turn" : "It's bot's turn"}</h2>
            <div className={styles.container__buttonsContainer}>
                {[1, 2, 3].map((numberOfMatches: number) => (
                    <MatchesPickButton numberOfMatches={numberOfMatches} 
                                       takeMatches={takeMatches} 
                                       isDisabled={isButtonDisabled(numberOfMatches)} />
                ))}
            </div>
            <div><Link to='/'>Go home</Link></div>
            <WinnerPopup isWinnerShown={isWinnerShown}
                         restartGame={restartGame}
                         navigateToMainScreen={navigateToMainScreen} />
        </div>
    )
}

export default GameField;