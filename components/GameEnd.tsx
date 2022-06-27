import classNames from 'classnames';

import { allPlayTypes, PlayerState, playsLabels } from '../hooks/useGameState';
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
        {winner.name}
      </h1>
      <div className="border rounded px-2 overflow-y-auto">
        <table className="w-full">
          <thead className="border-b">
            <tr>
              <th className="text-center"></th>
              {playersState.map((playerState, index) => (
                <th key={index} className="text-center">
                  {playerState.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allPlayTypes.map((playType) => (
              <tr key={playType}>
                <td>{playsLabels[playType]}</td>
                {playersState.map((playerState, index) => (
                  <td key={index} className="text-center">
                    {playerState.plays[playType]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Button onClick={onPlayAgain}>Jogar novamente</Button>
    </div>
  );
}
