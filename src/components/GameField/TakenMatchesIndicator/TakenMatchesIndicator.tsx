import styles from './TakenMatchesIndicator.module.css';


type Props = {
    lastTake: number,
    isTurnOdd: () => boolean
}

const TakenMatchesIndicator = ({lastTake, isTurnOdd}: Props) => {
    return (
        <div className={isTurnOdd() ? styles.indicator_up : styles.indicator_down}>
            +{lastTake}
        </div>
    )
}

export default TakenMatchesIndicator;