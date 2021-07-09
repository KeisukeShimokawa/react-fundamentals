// Basic Forms
// http://localhost:3000/isolated/exercise/07.tsx

import * as React from 'react';
import {getRandomUsername} from '../utils';

interface FormElements extends HTMLFormControlsCollection {
  usernameInput: HTMLInputElement;
}

interface UsernameFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

function UsernameForm({
  onSubmitUsername,
}: {
  onSubmitUsername: (username: string) => void;
}) {
  const [username, setUsername] = React.useState('');

  const handleSubmit = (e: React.FormEvent<UsernameFormElement>) => {
    e.preventDefault();
    onSubmitUsername(e.currentTarget.elements.usernameInput.value);
  };

  function handleUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.currentTarget.value);
  }

  function handleRandomClick() {
    setUsername(getRandomUsername());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button type="button" onClick={handleRandomClick}>
          Random
        </button>
      </div>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  const onSubmitUsername = (username: string) =>
    alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export {App};
