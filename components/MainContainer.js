import React, { Component, PropTypes } from 'react'
import {
	View,
  Text,
	StyleSheet,
} from 'react-native'

import StatusScreen from './StatusScreen'

class MainContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
          <StatusScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

export default MainContainer
