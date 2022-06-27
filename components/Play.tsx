import classNames from 'classnames';

import { playsLabels, PlayType } from '../hooks/useGameState';

export interface PlayProps extends React.ComponentPropsWithoutRef<'button'> {
  playType: PlayType;
  playerScore?: number;
  potentialScore: number;
  selected: boolean;
}

export default function Play({
  className,
  playType,
  playerScore,
  potentialScore,
  selected,
  ...rest
}: PlayProps) {
  const isAvailable = playerScore === undefined;

  return (
    <button
      type="button"
      className={classNames(
        className,
        'px-4 py-1 border rounded flex text-left',
        selected && 'bg-blue-200',
        !isAvailable && 'bg-gray-200',
      )}
      {...rest}
    >
      <div className="flex-1">{playsLabels[playType]}</div>
      <div className="font-bold">{playerScore ?? potentialScore}</div>
    </button>
  );
}
