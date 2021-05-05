import React, { useState } from 'react';
import { Text, View, SectionList, Button, ImageBackground, Image, ScrollView, TextInput,  StyleSheet,  Alert, Modal, Pressable } from "react-native";
import plant1 from '../../assets/plant1.png';



export default function Mymodal(props) {
  

  const [modalVisible, setModalVisible] = useState(false);
  const [modalImgSrc, setImgSrc] = useState('https://picsum.photos/id/1015/1000/600/');
  console.log('------------');
  console.log({props});

  return (
    <View style={{backgroundColor:'#c3e6ff'}}>
        <Pressable onPress={() => setModalVisible(true)} style={[styles.button, styles.buttonOpen]} >
            <Text>-Open Modal-</Text>
        </Pressable>

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
                <Text>--- {props.rand}---</Text>
                <Text> === {props.modalImgSrc} ===</Text>
                <View style={{width:250,     justifyContent: "center", alignItems: "center",}}>
                    <ImageBackground source={plant1} style={{width:30, height:30}} />
                    <ImageBackground source={{uri:props.modalImgSrc}} style={{width:200, height:200}} />
                </View>
              </Pressable>
            </View>
          </View>
        </Modal>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  img:{
    width:120,
    height:120,
    borderRadius:20,
    borderColor:"#FFF",
    margin:5
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
 
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 12,
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
    backgroundColor: "#2196F9",
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
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#ffc615",
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


  
})