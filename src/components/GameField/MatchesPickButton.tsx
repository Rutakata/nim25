import styles from './GameField.module.css';


type Props = {
    numberOfMatches: number,
    isDisabled: boolean,
    takeMatches: (count: number) => void
}

const MatchesPickButton = ({numberOfMatches, isDisabled, takeMatches}: Props) => {
    return (
        <button className={isDisabled ? styles.container__buttonsContainer__button_disabled :  styles.container__buttonsContainer__button} 
                onClick={() => takeMatches(numberOfMatches)}
                disabled={isDisabled}>
            {numberOfMatches}
        </button>
    )
}

export default MatchesPickButton;