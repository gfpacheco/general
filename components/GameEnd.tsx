import classNames from 'classnames';

import { PlayerState } from '../hooks/useGameState';
import Button from './Button';
import Scoreboard from './Scoreboard';

export interface GameEndProps extends React.ComponentPropsWithoutRef<'div'> {
  playersState: PlayerState[];
  restartGame: () => void;
}

export default function GameEnd({
  className,
  playersState,
  restartGame,
  ...rest
}: GameEndProps) {
  const playersScores = playersState.map(
    (playerState) =>
      Object.values(playerState.plays).reduce((acc, score) => acc + score, 0) +
      playerState.bonus,
  );
  const highScore = Math.max(...playersScores);
  const [winner, ...otherWinners] = playersState.filter(
    (_, index) => playersScores[index] === highScore,
  );

  return (
    <div
      className={classNames(className, 'min-h-0 grid grid-flow-row gap-4')}
      style={{
        gridTemplateRows: 'auto 1fr auto',
      }}
      {...rest}
    >
      <h1 className="text-lg text-center font-bold">
        Fim de jogo, vencedor{otherWinners.length > 0 ? 'es' : ''}:{' '}
        {otherWinners.map(({ name }) => name).join(', ')}
        {otherWinners.length > 0 ? ' e ' : ''}
        {winner.name} com {highScore} pontos
      </h1>
      <Scoreboard playersState={playersState} />
      <Button onClick={restartGame}>Jogar novamente</Button>
    </div>
  );
}
