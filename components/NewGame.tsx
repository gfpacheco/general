import classNames from 'classnames';
import { useState } from 'react';

import Button from './Button';
import Input from './Input';

export interface NewGameProps extends React.ComponentPropsWithoutRef<'div'> {
  onStartGame: (names: string[]) => void;
  onStartScoreMode: (names: string[]) => void;
}

export default function NewGame({
  className,
  onStartGame,
  onStartScoreMode,
  ...rest
}: NewGameProps) {
  const [name, setName] = useState('');
  const [names, setNames] = useState<string[]>([]);

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleAddPlayer(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name) {
      return;
    }

    setNames([...names, name]);
    setName('');
  }

  function onRemovePlayer(index: number) {
    setNames(names.filter((_, i) => i !== index));
  }

  function handleStartGame() {
    onStartGame(names);
  }

  function handleStartScoreMode() {
    onStartScoreMode(names);
  }

  return (
    <div
      className={classNames(className, 'min-h-0 grid grid-flow-row gap-4')}
      {...rest}
    >
      <h1 className="text-lg text-center font-bold">General</h1>
      <div className="flex-1">
        {names.map((name, index) => (
          <p key={index} className="px-4 py-2 flex">
            <span className="flex-1">{name}</span>
            <button
              className="text-red-500"
              type="button"
              onClick={() => onRemovePlayer(index)}
            >
              Remover
            </button>
          </p>
        ))}
      </div>
      <hr />
      <form className="grid gap-2" onSubmit={handleAddPlayer}>
        <Input
          placeholder="Digite o nome do jogador"
          value={name}
          onChange={handleNameChange}
          autoFocus
        />
        <Button type="submit" disabled={!name}>
          Adicionar jogador
        </Button>
      </form>
      <hr />
      <Button disabled={names.length === 0} onClick={handleStartGame}>
        Jogar
      </Button>
      <Button
        disabled={names.length === 0}
        onClick={handleStartScoreMode}
        secondary
      >
        Marcar
      </Button>
    </div>
  );
}
