import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
// import { makeServer } from './server/MyServerMirage';
import HomePage from './components/pages/ContainerPage';

// if (process.env.NODE_ENV === "development") {
//   makeServer({ environment: "development" })
// }

const App = () => {

  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
