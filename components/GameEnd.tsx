import classNames from 'classnames';

import { PlayerState } from '../hooks/useGameState';
import Button from './Button';

export interface GameEndProps extends React.ComponentPropsWithoutRef<'div'> {
  playersState: PlayerState[];
  onPlayAgain: () => void;
}

export default function GameEnd({
  className,
  playersState,
  onPlayAgain,
  ...rest
}: GameEndProps) {
  const playersScores = playersState.map((playerState) =>
    Object.values(playerState.plays).reduce((acc, score) => acc + score, 0),
  );
  const highScore = Math.max(...playersScores);
  const [winner, ...otherWinners] = playersState.filter(
    (_, index) => playersScores[index] === highScore,
  );

  return (
    <div
      className={classNames(className, 'grid grid-flow-row gap-4')}
      {...rest}
    >
      <h1 className="text-lg text-center font-bold">Fim de jogo</h1>
      <h2 className="text-center font-bold">
        Vencedor{otherWinners.length > 0 ? 's' : ''}:{' '}
        {otherWinners
          .map((playerState, index) => (
            <span key={index}>{playerState.name}</span>
          ))
          .join(', ')}{' '}
        {otherWinners.length > 0 ? 'e' : ''} {winner.name}
      </h2>
      <Button onClick={onPlayAgain}>Jogar novamente</Button>
    </div>
  );
}
