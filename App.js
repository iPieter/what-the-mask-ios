import * as React from 'react';
import {View, Text, StyleSheet, Button, LogoTitle} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MapView from 'react-native-maps';
import HomeView from './src/components/HomeView';
import SettingsView from './src/components/SettingsView';
import LegalNoticeView from './src/components/LegalNoticeView';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeView}
            options={({navigation, route}) => ({
              headerRight: () => (
                <Button
                  onPress={() => navigation.navigate('Settings')}
                  title="Instellingen"
                />
              ),
            })}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsView}
            options={{title: 'Instellingen'}}
          />
          <Stack.Screen
            name="LegalNotice"
            component={LegalNoticeView}
            options={{title: 'Juridische kennisgeving'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
