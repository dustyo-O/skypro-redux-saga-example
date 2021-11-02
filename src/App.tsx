import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { LobbyPage } from './pages/LobbyPage/LobbyPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { selectPage } from './store/selectors';
import { store } from './store/store';

function App() {
  const Router = () => {
    const page = useSelector(selectPage);

    let content = null;

    switch(page) {
      case 'login':
        content = <LoginPage/>;
        break;
      case 'lobby':
        content = <LobbyPage/>;
    }

    return content;
  }

  return (
    <Provider store={store}>
      <div className="App">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
