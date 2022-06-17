/**
 * UI/UX E-learning App mobile created By MOULOUD EL ARRAM at Big4Com
 * https://github.com/mouloudelarram/E-learning-platform-by-react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import Navigation from './lib/navigation';

const App = () => {
  return (
    <Navigation/>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColors: '#F9FBFC',
  }
});

export default App;