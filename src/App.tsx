import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { BackHandler } from 'react-native';
import AppContainer from './routes';
import { PersistGate } from 'redux-persist/lib/integration/react';

const { store, persistor } = configureStore({} as any);

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    return true;
  };

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}