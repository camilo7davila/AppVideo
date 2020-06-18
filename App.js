/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import Loading from './src/sections/components/loading'

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import AppLayout from './src/app'

class App extends Component {
  state = {
    // suggestionList: [],
    // categoryList: [],
  }

  render() {
    return (
      <>
        <Provider
          store={store}
        >
          <PersistGate
            loading={<Loading />}
            persistor={persistor}
          >
            <AppLayout />
          </PersistGate>
        </Provider>
      </>
    );
  };
}

export default App;
