import * as React from 'react';
import {View, Text, StyleSheet, Button, Switch} from 'react-native';
import SegmentedControl from '@react-native-community/segmented-control';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();
export default class WelcomeViewA extends React.PureComponent {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  render() {
      return (
              <View style={styles.container}>
              <Text style={styles.header}>Welkom bij What the Mask!</Text>
              <Button
          onPress={() => this.navigation.navigate('Location')}
          title="Next"
              />
              </View>
      );
  }
}

const styles = StyleSheet.create({
  text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
  },
  container: {
    flex: 1,
  },
  item: {
    marginHorizontal: 20,
  },
  'item:last-child': {
    backgroundColor: '#444',
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 15,
    marginHorizontal: 22,
    marginBottom:15,
  },
  title: {
    fontSize: 24,
    marginHorizontal: 2,
  },
  text: {
    marginTop: 5,
    marginBottom: 7,
    marginHorizontal: 22,
    color: 'grey',
  },
  box: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderTopWidth: 0.5,
  },
  emptyBox: {
    borderColor: '#ccc',
    borderTopWidth: 0.5,
  },
  boxText: {
    paddingVertical: 13,
  },
  boxTextLight: {
    paddingVertical: 13,
    color: 'grey',
  },
  boxTextClickable: {
    paddingVertical: 13,
    color: 'rgb(48,127,250)',
  },
  boxToggle: {
    marginVertical: 6,
  },
});
