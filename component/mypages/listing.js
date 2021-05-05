import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, Image, Button, TextInput, StyleSheet } from "react-native";

export default function Listing({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  const [isMyLoading, setMyLoading] = useState(true);
  const [mydata, setMyData] = useState([]);
  

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((json) => setMyData(json))
      .catch((error) => console.error(error))
      .finally(() => setMyLoading(false));
  }, []);

  let Image_Http_URL = { uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png'};

  return (
    <View style={{ margin: 5 }}>
      <Text>My List</Text>
      {isLoading ? <Text>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
          <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.title}</Text>
          <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Articles:</Text>
          <FlatList
            data={data.articles}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.id + '. ' + item.title}</Text>
            )}
          />
        </View>
      )}


      {isMyLoading ? <Text>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
          
          <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Post List:</Text>
          <FlatList
            data={mydata}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (             
              <View>
                <Text>{item.id + '. ' + item.title}</Text>

                <Text>{item.thumbnailUrl}</Text>

                <Image  source={{ uri: item.thumbnailUrl}} style={styles.thumb} />
              </View>
              
            )}
          />
        </View>
      )}


      
    </View>
  );
}

const styles = StyleSheet.create({
  thumb:{
      width:80,
      height:80,
      borderRadius:30,
      borderColor:"green"
  }
});