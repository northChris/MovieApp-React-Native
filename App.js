import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CurrentList from './src/components/CurrentList';
import Title from './src/components/Title';
import { StackNavigator } from 'react-navigation';
import Button from './src/components/Button';
import FAB from './src/components/Fab';

class ownedScreen extends React.Component{
  static navigationOptions = {
    title: 'Owned Movies',
    headerLeft: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.pageStyles}>
        <View style={styles.buttonStyles}>
          <Button onPress={()=> navigate('wanted')}>
            Wanted Movies
          </Button>
          <Button onPress={()=> navigate('seen')}>
            Seen Movies
          </Button>
        </View>
          <View>
            <CurrentList />
          </View>
      </View>
    )
  }
}

class wantedScreen extends React.Component{
  static navigationOptions = {
    title: 'Wanted Movies',
    headerLeft: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.pageStyles}>
        <View style={styles.buttonStyles}>
          <Button onPress={()=> navigate('owned')}>
            Owned Movies
          </Button>
          <Button onPress={()=> navigate('seen')}>
            Seen Movies
          </Button>
        </View>
          <View>
            <CurrentList />
          </View>
      </View>
    )
  }
}

class seenScreen extends React.Component{
  static navigationOptions = {
    title: 'Seen Movies',
    headerLeft: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.pageStyles}>
        <View style={styles.buttonStyles}>
          <Button onPress={()=> navigate('wanted')}>
            Wanted Movies
          </Button>
          <Button onPress={()=> navigate('owned')}>
            Owned Movies
          </Button>
        </View>
          <View>
            <CurrentList />
          </View>
      </View>
    )
  }
}

export const NavigationApp = StackNavigator({
  owned: { screen: ownedScreen },
  wanted: { screen: wantedScreen },
  seen: {screen: seenScreen }

});

export default class App extends Component<Props> {
  state = { currentListState: 'whom', titleText: 'Movies' }
  render() {
    return (
      <View style={styles.container}>
      <Title titleText={this.state.titleText}/>
        <NavigationApp />
        <FAB />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 15,
    backgroundColor: '#F8F8F8',
  },
  buttonStyles: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  pageStyles: {
    flexDirection: 'column',
  }
});
