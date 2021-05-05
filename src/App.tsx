import React from 'react';
import Counter from './Counter';

interface AppProps {
  message?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
  <div>
    <Counter />
  </div>
  )
};

App.defaultProps = {
  message: 'Hello, defauleProps!',
};

export default App;
