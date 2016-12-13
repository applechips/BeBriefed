import React, { PropTypes } from 'react'
import {
	StyleSheet,
} from 'react-native'
import Tabs from 'react-native-tabs'

import TabBarItem from './TabBarItem'


const TabBarContainer = (props) => (
  <Tabs style={styles.tabContainer}>
    <TabBarItem name="web" label="Web Server" icon="server">Web</TabBarItem>
    <TabBarItem name="db" label="DB Server" icon="database">DB</TabBarItem>
    <TabBarItem name="mail" label="Mail Server" icon="envelope-o">Mail</TabBarItem>
  </Tabs>
)

const styles = StyleSheet.create({
	tabContainer: {
		backgroundColor: '#343434',
		borderTopWidth: 1,
		borderTopColor: '#262626',
		height: 96,
	},
})
export default TabBarContainer
