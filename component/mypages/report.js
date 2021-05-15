import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Text, StyleSheet, FlatList, TextInput   } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample() {
	const [image, setImage] = useState(null);
	const [uploadBtn, setUploadBtn] = useState(null);
	const [data, setData] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [fname,setFName] = useState('First Name..');
	const [lname,setLName] = useState('Last Name..');

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    alert('image selected ')
    if (!result.cancelled) {
      setImage(result.uri);
	    setUploadBtn(true);
    }
  }
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 45,
      backgroundColor: '#F5FCFF',
    },
    header: {
      fontSize: 25,
      textAlign: 'center',
      margin: 10,
      fontWeight: 'bold'
    },
    inputContainer: {
      paddingTop: 15
    },
    textInput: {
      borderColor: '#CCCCCC',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      height: 50,
      fontSize: 25,
      paddingLeft: 20,
      paddingRight: 20
    },
    mainContainer:{
      marginTop: 5, backgroundColor:'#F56', padding:10, width:'95%'
    },
    heading: {
      textAlign:"center", marginBottom:10, marginTop:10, fontSize:20
    }
  });