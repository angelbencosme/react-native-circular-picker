/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {PureComponent} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CircularPicker from '../CircularPickerNativeView';

export default class App extends PureComponent{
  state = {
    value: 0,
    color: '#D83055'
  };

  onValueChange = ({nativeEvent}) => {
    this.setState({value: nativeEvent.value});
  }

  onColorChange = ({nativeEvent}) => {
    this.setState({color: nativeEvent.value});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: this.state.color, margin: 50, fontSize: 64}}>
          {this.state.value}
        </Text>
        <CircularPicker style={{height: 350, width: "100%"}}
                        onValueChange={this.onValueChange}
                        onColorChange={this.onColorChange}
                        max={100}
                        text="Volume"
                        colors={['#D83055', '#2E9067', '#996699']}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
