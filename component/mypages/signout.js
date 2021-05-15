import React, { useState } from 'react';
import { Text, View, Button, TextInput } from "react-native";

const Profile = () => {
  return (<Text> -: Profile Page :- </Text>);
}

export default Profile;

/*
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Main from './screens/MainScreen';
import ImageBrowser from './screens/ImageBrowserScreen';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name='Main' component={Main}/>
        <Stack.Screen
          name='ImageBrowser'
          component={ImageBrowser}
          options={{
            title: 'Selected 0 files',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/