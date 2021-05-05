import React, { useState } from 'react';
import { Text, View, SectionList, Button, Image, ScrollView, TextInput,  StyleSheet,  Alert, Modal, Pressable } from "react-native";
import Mymodal from './mymodal';

import ImageGallery from 'react-image-gallery';

const dtd = '03/05/2021';
const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];



export default function Gallery({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{backgroundColor:'#c3e6ff'}}>
        <Text>{dtd}</Text>
        <Image source={require("../../assets/profile.png")} style={styles.img} />
        <Image source={require("../../assets/taj.jpg")} style={styles.img} />
        <Mymodal modalImgSrc='https://www.mango.org/wp-content/uploads/2020/04/Nutritional_HP_1280x720.png' />

        {images.map((d,index) => (
            <View key={index}>

              <Image key={index+'thumb'} source={{uri:d.original}} style={styles.img} />
              <Text key={d.original}>URL {d.original}</Text>
              <Mymodal modalImgSrc={d.original} />
            </View>
        ))}

        

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
})