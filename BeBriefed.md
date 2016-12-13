make new folder called "component"
make new file in the component folder called "MainContainer.js"
```js
import React, { Component, PropTypes } from 'react'
import {
	View,
  Text,
	StyleSheet,
} from 'react-native'

class MainContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>BeBriefed App</Text>
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

```

rewrite the index.ios.js and index.android.js
```js
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import MainContainer from './components/MainContainer'

class BeBriefed extends Component {
  render() {
    return (
      <MainContainer />
    );
  }
}

AppRegistry.registerComponent('BeBriefed', () => BeBriefed);
```


make new file in component caleld "StatusScreen.js"
```js
import React, { Component, PropTypes } from 'react'
import {
	View,
  Text,
	StyleSheet,
} from 'react-native'

class StatusScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.statusText}>Service Up</Text>
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
  statusText: {
    fontSize: 30,
  }
})

export default StatusScreen
```

now we need to import the new component by adding a line in MainContainer.js
```js
import React, { Component, PropTypes } from 'react'
import {
	View,
	StyleSheet,
} from 'react-native'

import StatusScreen from './StatusScreen'			<-------------------

class StatusScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusScreen />			<-------------------
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
  statusText: {
    fontSize: 30,
  }
})

export default StatusScreen
```
we want to add an image to show the status indicator, to do so we will make a new component called StatusIndicator.js

```js
import React, { Component, PropTypes } from 'react'
import {
	View,
  Text,
	StyleSheet,
} from 'react-native'

// THIS IS CALLED A STATELESS COMPONENT, no lifecycle methods, no interal state, all data must be passed through props
const StatusIndicator = (props) => (
      <View style={styles.border}>
        <Text style={styles.character}>X</Text>
      </View>
  );


const styles = StyleSheet.create({

})

export default StatusIndicator

```

add this into StatusScreen.js
```
import StatusIndicator from './StatusIndicator'
```
and this in the class under <view>
```
<StatusIndicator />
```

install react native package:
npm i --save react-native-vector-icons
react-native link

in StatusIndicator.js
```
import Icon from 'react-native-vector-icons/FontAwesome'
```
now stop and restart the server

modify the const & styles
```
import React, { Component, PropTypes } from 'react'
import {
	View,
  Text,
	StyleSheet,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

const StatusIndicator = (props) => (
	<View style={[styles.border, props.isUp && styles.isUpBorderColor]}>
		<Text style={[styles.character, props.isUp && styles.isUpCharacterColor]}>
			<Icon name={props.isUp ? 'check' : 'times'} size={180} />
		</Text>
	</View>
)


const styles = StyleSheet.create({
	border: {
		borderWidth: 20,
		borderColor: '#F21D44',
		borderRadius: 200,
		width: 240,
		height: 240,
		justifyContent: 'center',
	},
	character: {
		fontSize: 160,
		textAlign: 'center',
		backgroundColor: 'rgba(0,0,0,0)',
		color: '#BF1534',
	},
	isUpBorderColor: {
		borderColor: '#3BD99F',
	},
	isUpCharacterColor: {
		color: '#2a8c5e',
	},
})


export default StatusIndicator
```


in StatusScreen.js
add PropTypes in the import section
```
import React, { Component, PropTypes } from 'react'
```
and this:
```js
StatusScreen.propTypes = {
	isUp: PropTypes.bool.isRequired,
	lastUpTime: PropTypes.instanceOf(Date),
}
```

in MainContainer.js
```
import React, { Component, PropTypes } from 'react'
```


in index.ios.js
```
const isUp = true

class BeBriefed extends Component {
  render() {
    return (
      <MainContainer isUp={isUp}/>
    );
  }
}
```

in StatusScreen.js
```
  <StatusIndicator isUp={this.props.isUp}/>
	<Text style={styles.statusText}>Service {this.props.isUp ? 'Up' : 'Down!'}</Text>
```


to add timestamp
add constructor
initialize state
make new lastUpTime. equal to the date few minutes to the time
in index.ios.js
```
constructor(props) {
	super(props)

	this.state = {
		isUp: true,
		lastUpTime: new Date((new Date()).getTime() - 5 * 60 * 1000),
	}
}
```
we want to put this lastUpTime in the StatusScreen so we add a prop for that.


```
StatusScreen.propTypes = {
	isUp: PropTypes.bool.isRequired,
	lastUpTime: PropTypes.instanceOf(Date),			<---------------------
}
```

also in the MainContainer
```

MainContainer.propTypes = {
	isUp: PropTypes.bool.isRequired,
	lastUpTime: PropTypes.instanceOf(Date),
}
```
we can now passing this all the way down in our index
```js
render() {
	return (
		<MainContainer isUp={this.state.isUp} lastUpTime={this.state.lastUpTime}/>
	);
}
```

delete
const isUp = false


refresh server

in MainContainer.js, pass down the prop
```
class MainContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
          <StatusScreen isUp={this.props.isUp} lastUpTime={this.props.lastUpTime}/>		<----------
      </View>
    )
  }
}

```

in StatusScreen.js

i give up on these notes








---------

Moment.js
npm i --save moment

in StatusScreen
```
import moment from 'moment'
```

debug
cmd+d - remote debugging

sources > debuggerWorker.js



			const relativeTime = moment().to(this.props.lastUpTime)

			TO not FROM

			
