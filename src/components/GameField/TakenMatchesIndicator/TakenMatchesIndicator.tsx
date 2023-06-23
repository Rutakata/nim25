import styles from './TakenMatchesIndicator.module.css';


type Props = {
    lastTake: number,
    isOdd: () => boolean
}

const TakenMatchesIndicator = ({lastTake, isOdd}: Props) => {
    return (
        <div className={isOdd() ? styles.indicator_up : styles.indicator_down}>
            +{lastTake}
        </div>
    )
}

export default TakenMatchesIndicator;