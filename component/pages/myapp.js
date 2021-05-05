import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, ImageBackground,StyleSheet, Text, View,  Alert, Modal, Pressable } from 'react-native';
import Menu from './menu';
import Home from './home';
import Aboutus from './aboutus';
import Gallery from './gallery';
import Contactus from './contactus';


export default function Myapp() {

  const image = { uri: "https://reactjs.org/logo-og.png" };
  const data  = [{"id":1,"title":"Ram"},{"id":2,"title":"Sam"},{"id":3,"title":"01-05-2021 06:57:17"}];
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
        <Menu />
        <Text>HELLO</Text>
        <Home />
        <Aboutus />
        <Gallery />
        <Contactus />
    </View>
  );
}





const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    backgroundColor: 'pink',
    margin:0,
  },
});
