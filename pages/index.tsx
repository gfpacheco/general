import type { NextPage } from 'next';
import { useState } from 'react';

import Game from '../components/Game';
import GameEnd from '../components/GameEnd';
import NewGame from '../components/NewGame';
import { PlayerState } from '../hooks/useGameState';

const Home: NextPage = () => {
  const [names, setNames] = useState<string[] | undefined>();
  const [playersState, setPlayersState] = useState<PlayerState[] | undefined>();

  function handleStartGame(names: string[]) {
    setNames(names);
  }

  function handlePlayAgain() {
    setNames(undefined);
    setPlayersState(undefined);
  }

  return (
    <div className="h-full sm:p-4 flex flex-col items-center justify-center">
      <div className="w-full max-h-full max-w-md sm:border rounded bg-white p-4 flex flex-col">
        {playersState ? (
          <GameEnd playersState={playersState} onPlayAgain={handlePlayAgain} />
        ) : names ? (
          <Game names={names} onGameEnd={setPlayersState} />
        ) : (
          <NewGame onStartGame={handleStartGame} />
        )}
      </div>
    </div>
  );
};

export default Home;

export interface GameProps extends React.ComponentPropsWithoutRef<'div'> {}
