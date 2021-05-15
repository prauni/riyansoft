import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample() {
	const [image, setImage] = useState(null);
	const [uploadBtn, setUploadBtn] = useState(null);
	const [data, setData] = useState([]);
	const [isLoading, setLoading] = useState(true);

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
    });

    if (!result.cancelled) {
      setImage(result.uri);
	  setUploadBtn(true);
    }
  };

  const uploadImage = async () => {

	let url = 'https://readerschool.org/v1/documents/login.php';
	fetch(url, {
		method: 'POST',
		headers: {
		  Accept: 'application/json',
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify({
		  username: 'fname',
		  pwd: 'lname'
		})
	  })
	  .then((response) => response.json())
	  .then((json) => setData(json))
	  .catch((error) => setFailmsg(error))
	  .finally(() => setLoading(false));;



  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
	  {!uploadBtn?'':<Button title="Upload" style={{color:"#F99"}} onPress={uploadImage} />}
	  <Text>Time Stamp : {data.datetime}</Text>
    </View>
  );
}