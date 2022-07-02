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

export interface ScoreboardProps extends React.ComponentPropsWithoutRef<'div'> {
  playersState: PlayerState[];
}

export default function Scoreboard({
  className,
  playersState,
  ...rest
}: ScoreboardProps) {
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
      className={classNames(className, 'border rounded px-2 overflow-y-auto')}
      {...rest}
    >
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
              (playerState) => sumScore(playerState.plays) + playerState.bonus,
            ),
          )}
        </tbody>
      </table>
    </div>
  );
}
