import classNames from 'classnames';

export interface SumProps extends React.ComponentPropsWithoutRef<'div'> {
  label: string;
  score: number;
}

export default function Sum({ className, label, score, ...rest }: SumProps) {
  return (
    <div
      className={classNames(className, 'px-4 py-1 flex text-left')}
      {...rest}
    >
      <div className="flex-1">{label}</div>
      <div className="font-bold">{score}</div>
    </div>
  );
}
