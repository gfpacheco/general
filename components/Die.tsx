import classNames from 'classnames';

import useDieValue from '../hooks/useDieValue';
import { Die as DieType } from '../hooks/useGameState';
import Dot from './Dot';

export interface DieProps extends React.ComponentPropsWithoutRef<'button'> {
  currentRoll: number;
  die?: DieType;
}

export default function Die({
  className,
  currentRoll,
  die,
  ...rest
}: DieProps) {
  const value = useDieValue(currentRoll, die);

  return (
    <button
      className={classNames(
        className,
        'relative flex-1 border rounded-lg p-2 grid grid-cols-3 grid-rows-3 items-center justify-items-center aspect-square',
        die?.locked && 'bg-gray-400',
      )}
      {...rest}
    >
      <Dot value={value} visibleFor={[2, 3, 4, 5, 6]} />
      <Dot />
      <Dot value={value} visibleFor={[4, 5, 6]} />
      <Dot value={value} visibleFor={[6]} />
      <Dot value={value} visibleFor={[1, 3, 5]} />
      <Dot value={value} visibleFor={[6]} />
      <Dot value={value} visibleFor={[4, 5, 6]} />
      <Dot />
      <Dot value={value} visibleFor={[2, 3, 4, 5, 6]} />
      {die?.locked && (
        <svg
          className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 max-w-[25%] max-h-[25%]"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M18 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-10 0v-4c0-2.206 1.794-4 4-4s4 1.794 4 4v4h-8z" />
        </svg>
      )}
    </button>
  );
}
