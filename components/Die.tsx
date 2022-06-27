import classNames from 'classnames';

import { Die as DieType } from '../hooks/useGameState';

export interface DieProps extends React.ComponentPropsWithoutRef<'button'> {
  die?: DieType;
}

export default function Die({ className, die, ...rest }: DieProps) {
  return (
    <button
      className={classNames(
        className,
        'relative flex-1 border rounded-lg flex items-center justify-center text-4xl aspect-square',
        die?.locked && 'bg-gray-400',
      )}
      {...rest}
    >
      {die?.value}
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
