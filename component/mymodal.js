import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, ImageBackground,StyleSheet, Text, View,  Alert, Modal, Pressable } from 'react-native';
import Myimages from './myimages';
import Mylisting from './Mylisting';
import Pagecontent from './Pagecontent';
import plant1 from './../assets/plant1.png';


export default function Mymodal() {

  const image = { uri: "https://reactjs.org/logo-og.png" };
  const data  = [{"id":1,"title":"Ram"},{"id":2,"title":"Sam"},{"id":3,"title":"01-05-2021 06:57:17"}];
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
        <Myimages />
        
        <Mylisting />
        <Mylisting />
        <Mylisting />
        <Mylisting />
        <Mylisting />

        <Pagecontent />
      <StatusBar style="auto" />

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Open Modal</Text>
      </Pressable>

      <Cat />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
              <View style={{width:100}}>
            <ImageBackground source={plant1} style={{width:100, height:100}} />
       </View>
            </Pressable>
          </View>
        </View>
      </Modal>      
    </View>
  );
}

const Cat = () => {
  return <Text>Hello, Zombie</Text>;
};


const styles = StyleSheet.create({

  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 12,
  },

  container: {
    flex: 1,
    backgroundColor: '#900',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
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
