// Basic Forms
// http://localhost:3000/isolated/exercise/07.tsx

import * as React from 'react';

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
  const handleSubmit = (e: React.FormEvent<UsernameFormElement>) => {
    e.preventDefault();
    onSubmitUsername(e.currentTarget.elements.usernameInput.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" />
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
