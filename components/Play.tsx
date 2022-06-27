import classNames from 'classnames';

import {
  CombinationPlayType,
  PlayType,
  ValuePlayType,
} from '../hooks/useGameState';

export interface PlayProps extends React.ComponentPropsWithoutRef<'button'> {
  playType: PlayType;
  playerScore?: number;
  potentialScore: number;
  selected: boolean;
}

const labels = {
  [ValuePlayType.one]: 'Um',
  [ValuePlayType.two]: 'Dois',
  [ValuePlayType.three]: 'Três',
  [ValuePlayType.four]: 'Quatro',
  [ValuePlayType.five]: 'Cinco',
  [ValuePlayType.six]: 'Seis',
  [CombinationPlayType.threeOfAKind]: 'Trinca',
  [CombinationPlayType.fourOfAKind]: 'Quadra',
  [CombinationPlayType.fullHouse]: 'Full House',
  [CombinationPlayType.smallStraight]: 'Sequência menor',
  [CombinationPlayType.largeStraight]: 'Sequência maior',
  [CombinationPlayType.general]: 'General',
  [CombinationPlayType.chance]: 'Chance',
};

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
      <div className="flex-1">{labels[playType]}</div>
      <div className="font-bold">{playerScore ?? potentialScore}</div>
    </button>
  );
}
