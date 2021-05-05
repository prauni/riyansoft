import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button  } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';




const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <View>
        <Text>HELLLO222</Text>

    
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Welcome' }}
              />
              <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
          </NavigationContainer>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Prasenjit's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is profile</Text>;
};

export default MyStack;