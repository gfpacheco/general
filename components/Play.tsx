import classNames from 'classnames';

export interface PlayProps extends React.ComponentPropsWithoutRef<'button'> {
  label: string;
  score: number;
  selected?: boolean;
  static?: boolean;
}

export default function Play({
  className,
  label,
  score,
  selected,
  disabled,
  ...rest
}: PlayProps) {
  return (
    <button
      type="button"
      className={classNames(
        className,
        'px-4 py-1 border rounded flex text-left',
        selected && 'bg-blue-200',
        disabled && 'bg-gray-200',
      )}
      disabled={disabled}
      {...rest}
    >
      <div className="flex-1">{label}</div>
      <div className="font-bold">{score}</div>
    </button>
  );
}
