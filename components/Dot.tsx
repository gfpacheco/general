import classNames from 'classnames';

export interface DotProps extends React.ComponentPropsWithoutRef<'div'> {
  visibleFor?: number[];
  value?: number;
}

export default function Dot({
  className,
  visibleFor,
  value,
  ...rest
}: DotProps) {
  return (
    <div
      className={classNames(
        className,
        'w-2/3 h-2/3 rounded-full',
        value && visibleFor?.includes(value) && 'bg-gray-700',
      )}
      {...rest}
    />
  );
}
