import React, { useState, useEffect } from 'react';
import { Text, View, Button, Image, TextInput, Pressable, StyleSheet } from "react-native";
import RandomImage from './randomImage';



const Contactus = ({ navigation }) => {
  const [cnt,setCnt] = useState(5);
  const [imgSrc,setImg] = useState('https://www.mango.org/wp-content/uploads/2020/04/Nutritional_HP_1280x720.png');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .catch((error) => console.error(error))
      .finally(() => setImg('https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1gtzhd.img'));
  }, []);

  function changeImage(params) {
    switch (params){
      case 1:
        setImg('https://live.staticflickr.com/8768/27831218023_a526e399e3_b.jpg');
        break;
      case 2:
        setImg('https://srilanka.travel//image/theme_picture_gallery/Deers%20at%20wasgamuwa%20National%20Park.jpg');
        break;
      case 3:
        setImg('https://www.srilanka.travel/images/theames-new/Wild.jpg');
        break;
      default:
        setImg('http://live.staticflickr.com/8878/28368903421_a04ecd9c37_b.jpg');
    }
  }
  function btnPress(props){
    let x = cnt + 3;
    setCnt(x);
    changeImage(x%4);
  }

  return (
    <View style={{ margin: 60 }}>
      <Text style={{ fontSize: 24 }}>Contactus Page...</Text>
      <Image source={{uri:imgSrc}} style={{width:200, height:200}}  />
	  <RandomImage />
      <Pressable  onPress={() => btnPress('Developer')}  >
        <Text style={styles.btn}>-- Press Btn -- {cnt} --</Text>
      </Pressable>
    </View>
  );
}

export default Contactus;

const styles = StyleSheet.create({
  btn:{
    fontSize: 16, 
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#ffc615",
    marginTop:20,
    marginBottom:20,
    
  }
})