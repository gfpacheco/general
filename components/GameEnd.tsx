import classNames from 'classnames';

import {
  allCombinationPlayTypes,
  allValuePlayTypes,
  CombinationPlayType,
  PlayerState,
  playsLabels,
  PlayType,
  sumScore,
  ValuePlayType,
} from '../hooks/useGameState';
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
  const playersScores = playersState.map(
    (playerState) =>
      Object.values(playerState.plays).reduce((acc, score) => acc + score, 0) +
      playerState.bonus,
  );
  const highScore = Math.max(...playersScores);
  const [winner, ...otherWinners] = playersState.filter(
    (_, index) => playersScores[index] === highScore,
  );

  function renderPlayType(playType: PlayType) {
    return (
      <tr key={playType}>
        <td>{playsLabels[playType]}</td>
        {playersState.map((playerState, index) => (
          <td key={index} className="text-center">
            {playerState.plays[playType]}
          </td>
        ))}
      </tr>
    );
  }

  function renderRow(label: string, scores: number[]) {
    return (
      <tr>
        <td className="font-bold">{label}</td>
        {scores.map((score, index) => (
          <td key={index} className="text-center font-bold">
            {score}
          </td>
        ))}
      </tr>
    );
  }

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
            {allValuePlayTypes.map(renderPlayType)}
            {renderRow(
              'Subtotal',
              playersState.map((playerState) =>
                sumScore(playerState.plays, ValuePlayType),
              ),
            )}
            {renderRow(
              'Bônus',
              playersState.map((playerState) => playerState.bonus),
            )}
            {allCombinationPlayTypes.map(renderPlayType)}
            {renderRow(
              'Subtotal',
              playersState.map((playerState) =>
                sumScore(playerState.plays, CombinationPlayType),
              ),
            )}
            {renderRow(
              'Total',
              playersState.map(
                (playerState) =>
                  sumScore(playerState.plays) + playerState.bonus,
              ),
            )}
          </tbody>
        </table>
      </div>
      <Button onClick={onPlayAgain}>Jogar novamente</Button>
    </div>
  );
}
