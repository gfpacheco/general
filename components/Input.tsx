import classNames from 'classnames';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {}

export default function Input({
  className,
  type = 'text',
  ...rest
}: InputProps) {
  return (
    <input
      className={classNames(className, 'border rounded px-4 py-2')}
      type={type}
      {...rest}
    />
  );
}
