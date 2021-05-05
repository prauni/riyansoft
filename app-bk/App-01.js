import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, SafeAreaView, ScrollView, Text } from 'react-native';
import Mymodal from './component/mymodal';
import Myapp from './component/pages/myapp';

export default function App() {
  
  return (
<SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Welcome' }}
                  />
                  <Stack.Screen name="Profile" component={Profile} />
              </Stack.Navigator>
          </NavigationContainer>
        </ScrollView>
    </SafeAreaView>	 

    <View>
      <Text>HOME</Text>
    </View>
  );
}

const Stack = createStackNavigator({
  Home:{Screen:App},
  Profile:{Screen:Profile}
});

const Home = ({ navigation }) => {
  return <Text>This is PROFILE profile</Text>;
};
const Profile = ({ navigation, route }) => {
  return <Text>This is PROFILE profile</Text>;
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 220,
    backgroundColor: '#000',
  },
  
});
