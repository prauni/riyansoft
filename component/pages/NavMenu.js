
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button  } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './home';
import Aboutus from './aboutus';
import Contactus from './contactus';
import Gallery from './gallery';
import NavMenu from './NavMenu';

const Stack = createStackNavigator();

const NavMenu = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Welcome Nav' }}
            />
            <Stack.Screen name="HomePage"   component={Home} />
            <Stack.Screen name="Aboutus"    component={Aboutus} />
            <Stack.Screen name="Gallery"    component={Gallery} />
            <Stack.Screen name="Contactus"  component={Contactus} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Button title="Home" onPress={() => navigation.navigate('HomePage', { name: 'Jane' })} />
            <Button title="About" onPress={() => navigation.navigate('Aboutus', { name: 'Jane' })} />
            <Button title="Gallery" onPress={() => navigation.navigate('Gallery', { name: 'Jane' })} />
            <Button title="Contact Us" onPress={() => navigation.navigate('Contactus', { name: 'Jane' })} />

            <Button
                title="Profile"
                onPress={() =>
                    navigation.navigate('Profile', { name: 'Jane' })
                }
            /> 
        </View>
    );
};
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is profile</Text>;
};

export default NavMenu;