import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, ImageBackground,StyleSheet, Text, View,  Alert, Modal, Pressable, Button } from 'react-native';
//import NavMenu from './NavMenu'; 

export default function Home() {

  return (
        <View>
            <Text  style={{backgroundColor: 'yellow' }}>
                Home Page Of the Application Folder
            </Text>
            <Button
              title="Go to Prasenjit's profile"
              onPress={() =>
                navigation.navigate('Profile', { name: 'Jane' })
              }
            />
        </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#900',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    backgroundColor: 'pink',
    margin:0,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
