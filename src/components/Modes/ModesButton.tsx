import { Link } from "react-router-dom";
import styles from './Modes.module.css';


type Props = {
    path: string,
    text: string,
}

const ModesButton = ({path, text}: Props) => {
    return (
        <Link to={path} className={styles.container__link}><div className={styles.container__button}>{text}</div></Link>
    )
}

export default ModesButton;