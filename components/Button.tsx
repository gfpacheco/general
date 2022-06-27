import classNames from 'classnames';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {}

export default function Button({
  className,
  type = 'button',
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={classNames(
        className,
        'rounded bg-gray-700 px-4 py-2 text-white font-bold',
        disabled && 'opacity-30',
      )}
      type={type}
      disabled={disabled}
      {...rest}
    />
  );
}
