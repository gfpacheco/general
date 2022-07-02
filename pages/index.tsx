import type { NextPage } from 'next';

import Game from '../components/Game';
import GameEnd from '../components/GameEnd';
import NewGame from '../components/NewGame';
import useAppState from '../hooks/useAppState';

const Home: NextPage = () => {
  const { startGame, gameState, endGame, playersState, restartGame } =
    useAppState();

  return (
    <div className="h-full sm:p-4 flex flex-col items-center justify-center">
      <div className="w-full max-h-full max-w-md sm:border rounded bg-white p-4 flex flex-col">
        {playersState ? (
          <GameEnd playersState={playersState} restartGame={restartGame} />
        ) : gameState ? (
          <Game
            gameState={gameState}
            endGame={endGame}
            restartGame={restartGame}
          />
        ) : (
          <NewGame onStartGame={startGame} />
        )}
      </div>
    </div>
  );
};

export default Home;

export interface GameProps extends React.ComponentPropsWithoutRef<'div'> {}
