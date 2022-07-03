import classNames from 'classnames';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  secondary?: boolean;
}

export default function Button({
  className,
  type = 'button',
  disabled,
  secondary,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={classNames(
        className,
        'rounded px-4 py-2 font-bold',
        disabled && 'opacity-30',
        secondary
          ? 'border-gray-700 border-2 text-gray-700'
          : 'bg-gray-700 text-white',
      )}
      type={type}
      disabled={disabled}
      {...rest}
    />
  );
}
