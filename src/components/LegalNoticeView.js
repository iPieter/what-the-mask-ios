import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {update_location} from '../redux/locationActions';

const MainApp = () => {
  const location = useSelector((state) => state.location);
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button
        title="update"
        onPress={() => dispatch(update_location({latitude: 1, longitude: 1}))}
      />
      <Text>{location.longitude}</Text>
    </View>
  );
};

export default class LegalNoticeView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {
      selectedIndex: 0,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Juridische kennisgeving</Text>
        <Text style={styles.text}>
          - GDPR data processing - opt out - contact info - MIT/apache packages
        </Text>
        <MainApp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
    marginHorizontal: 2,
  },
  text: {
    marginBottom: 7,
    marginHorizontal: 22,
    color: 'grey',
  },
  box: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 13,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderTopWidth: 0.5,
  },
  emptyBox: {
    borderColor: 'grey',
    borderTopWidth: 0.5,
  },
});
