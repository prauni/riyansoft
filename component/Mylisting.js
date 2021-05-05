import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, ImageBackground,StyleSheet, Text, View,  Alert, Modal, Pressable } from 'react-native';


export default function Mylisting() {

  const image = { uri: "https://reactjs.org/logo-og.png" };
  const data  = [{"id":1,"title":"Ram"},{"id":2,"title":"Sam"},{"id":3,"title":"01-05-2021 06:57:17"}];
  const [modalVisible, setModalVisible] = useState(false);

  return (
        <View>
            <Text  style={{backgroundColor: 'yellow' }}>
                {data.map((userData) => {console.log(userData.title);})}   
                <FlatList data={data} renderItem={({item}) => <Text key={item.id}>{item.title}</Text>}  />        
            </Text>
            <Text  style={{backgroundColor: 'green' }}>        
                {data.map((userData) => 
                    <Text key={userData.id}>-- {userData.title} -- </Text>
                )}
            </Text>
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
