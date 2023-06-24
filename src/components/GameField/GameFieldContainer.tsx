import { useState, useEffect } from "react";
import GameField from "./GameField";
import { useLocation, useNavigate } from "react-router-dom";


const GameFieldContainer = () => {
    let { state } = useLocation();
    const [totalMatchesCount, setTotalMatchesCount] = useState<number>(25);
    const [playerMatchesCount, setPlayerMatchesCount] = useState<number>(0);
    const [botMatchesCount, setBotMatchesCount] = useState<number>(0);
    const [turn, setTurn] = useState<number>(1);
    const [lastTake, setLastTake] = useState<number>(0);
    const [isWinnerShow, setIsWinnerShown] = useState<boolean>(false);
    const navigate = useNavigate();

    const isTurnOdd = () => {
        return turn % 2 ? true : false;
    }

    const isButtonDisabled = (numberOfMatches: number) => {
        if (!isTurnOdd() || numberOfMatches > totalMatchesCount) {
            return true;
        }else {
            return false;
        }
    }

    const takeMatches = (count?: number) => {
        if (isTurnOdd() && count) {
            setPlayerMatchesCount(playerMatchesCount+count);
            setTotalMatchesCount(totalMatchesCount-count);
            setLastTake(count);
            setTurn(turn+1);
        }else {
            let matchesToTake: number = 0;
            let module: number = totalMatchesCount % 4;

            if (totalMatchesCount % 2 === 0) {
                matchesToTake = 1;
            } else {
                switch(module) {
                    case 0:
                        matchesToTake = 3;
                        break;
                    case 1:
                    case 2:
                        matchesToTake = 1;
                        break;
                    case 3:
                        matchesToTake = 2;
                        break;
                    default:
                }
            }

            setBotMatchesCount(botMatchesCount+matchesToTake);
            setTotalMatchesCount(totalMatchesCount-matchesToTake);
            setLastTake(matchesToTake);
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
        setTurn(state.firstTurn);
    }, [state])

    useEffect(() => {
        if (!isTurnOdd() && totalMatchesCount > 0) {
            setTimeout(() => takeMatches(), 1000);
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
                   isTurnOdd={isTurnOdd} 
                   isButtonDisabled={isButtonDisabled}
                   restartGame={restartGame}
                   navigateToMainScreen={navigateToMainScreen} />
    )
}

export default GameFieldContainer;