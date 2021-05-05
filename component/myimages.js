import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, ImageBackground,StyleSheet, Text, View,  Alert, Modal, Pressable } from 'react-native';
import carImg from './../assets/car.jpg';
import zombie from './../assets/zombie.jpg';
import zombie1 from './../assets/zombie.png';
import plant from './../assets/plant.png';
import plant1 from './../assets/plant1.png';


export default function Myimages() {

  const image = { uri: "https://reactjs.org/logo-og.png" };
  const data  = [{"id":1,"title":"Ram"},{"id":2,"title":"Sam"},{"id":3,"title":"01-05-2021 06:57:17"}];
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <ImageBackground source={plant} style={{width:100, height:100, alignSelf: 'flex-end'}} />
            <ImageBackground source={zombie} style={{width:100, height:150, alignSelf: 'flex-end'}} />
            <ImageBackground source={zombie1} style={{width:100, height:150, alignSelf: 'flex-end'}} />
        </View>
        <View>
        <Text style={{backgroundColor: 'powderblue' }}>Hello, Zombie!</Text>
        </View>
    </View>
  );
}

const Cat = () => {
  return <Text>Hello, Zombie</Text>;
};

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
