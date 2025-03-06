# React Hooks Collection

A collection of custom, reusable React hooks that solve common problems in modern React applications.

## Available Hooks

- **useState**: A simple counter hook that demonstrates how to manage state in React.
- **useEffect**: A hook for fetching data from an API and handling loading and error states.

## Example Usage

### `useState` Example

```jsx
import useCounter from './hooks/useState';

const Counter = () => {
  const { count, increment, decrement } = useCounter(0);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};


