import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button  } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './component/pages/home';
import Aboutus from './component/pages/aboutus';
import Contactus from './component/pages/contactus';
import Gallery from './component/pages/gallery';
//import NavMenu from './component/pages/NavMenu';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen name="HomePage"   component={Home} />
                <Stack.Screen name="Aboutus"    component={Aboutus} />
                <Stack.Screen name="Gallery"    component={Gallery} />
                <Stack.Screen name="Contactus"  component={Contactus} />
                <Stack.Screen name="Profile"    component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Button title="Home" onPress={() => navigation.navigate('HomePage')} />
            <Button title="About" onPress={() => navigation.navigate('Aboutus')} />
            <Button title="Gallery" onPress={() => navigation.navigate('Gallery')} />
            <Button title="Contact Us" onPress={() => navigation.navigate('Contactus')} />
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

export default App;