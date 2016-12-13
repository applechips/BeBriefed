import React, {} from 'react'
import {
  Text,
  View,
	StyleSheet,
} from 'react-native'
import Tabs from 'react-native-tabs'

const TabBarContainer = (props) => (
  <Tabs>
    <Text>Web</Text>
    <Text>DB</Text>
    <Text>Mail</Text>
  </Tabs>
)

export default TabBarContainer
