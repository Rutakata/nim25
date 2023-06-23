import { useState, useEffect } from "react";
import GameField from "./GameField";
import { useNavigate } from "react-router-dom";

const GameFieldContainer = () => {
    const [totalMatchesCount, setTotalMatchesCount] = useState<number>(25);
    const [playerMatchesCount, setPlayerMatchesCount] = useState<number>(0);
    const [botMatchesCount, setBotMatchesCount] = useState<number>(0);
    const [turn, setTurn] = useState<number>(1);
    const [lastTake, setLastTake] = useState<number>(0);
    const [isWinnerShow, setIsWinnerShown] = useState<boolean>(false);
    const navigate = useNavigate();

    const isOdd = () => {
        return turn % 2 ? true : false;
    }

    const isButtonDisabled = (numberOfMatches: number) => {
        if (!isOdd() || numberOfMatches > totalMatchesCount) {
            return true;
        }else {
            return false;
        }
    }

    const takeMatches = (count: number) => {
        if (isOdd()) {
            setPlayerMatchesCount(playerMatchesCount+count);
            setTotalMatchesCount(totalMatchesCount-count);
            setLastTake(count);
            setTurn(turn+1);
        }else {
            setBotMatchesCount(botMatchesCount+(4-lastTake));
            setTotalMatchesCount(totalMatchesCount-(4-lastTake));
            setLastTake((4-lastTake));
            setTurn(turn+1);
        }
    }

    const restartGame = () => {
        setTotalMatchesCount(25);
        setPlayerMatchesCount(0);
        setBotMatchesCount(0);
        setLastTake(0);
        setTurn(1);
        setIsWinnerShown(false); 
    }

    const navigateToMainScreen = () => {
        setIsWinnerShown(false);
        navigate('/');
    }

    useEffect(() => {
        if (!isOdd() && totalMatchesCount > 0) {
            setTimeout(() => takeMatches(1), 1000);
        }
    }, [turn])

    useEffect(() => {
        if (totalMatchesCount === 0) {
            setIsWinnerShown(true);
        }
    }, [totalMatchesCount])

    return (
        <GameField isWinnerShown={isWinnerShow} 
                   totalMatchesCount={totalMatchesCount}
                   botMatchesCount={botMatchesCount}
                   playerMatchesCount={playerMatchesCount}
                   lastTake={lastTake}
                   takeMatches={takeMatches}
                   isOdd={isOdd} 
                   isButtonDisabled={isButtonDisabled}
                   restartGame={restartGame}
                   navigateToMainScreen={navigateToMainScreen} />
    )
}

export default GameFieldContainer;