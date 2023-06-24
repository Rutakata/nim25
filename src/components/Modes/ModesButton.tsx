import { Link } from "react-router-dom";
import styles from './Modes.module.css';


type Props = {
    path: string,
    text: string,
    firstTurn: number
}

const ModesButton = ({path, text, firstTurn}: Props) => {
    return (
        <Link to={path} className={styles.container__link} state={{firstTurn}}>
            <div className={styles.container__buttonsWrapper__button}>
                {text}
            </div>
        </Link>
    )
}

export default ModesButton;