import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, Button, TextInput, StyleSheet, ScrollView,  TouchableOpacity } from "react-native";


function Statistic({ navigation }) {
  const [fname,setFName] = useState('First Name..');
  const [lname,setLName] = useState('Last Name..');
	const [token,setToken] = useState(false); 
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [failMsg,setFailmsg] = useState('');

	function chgName(val){
	  setFName(val);
	}

	function chgLName(val){
	  setLName(val);
	}

  const dologin = (x) => {
    
    let method = 1;
    
    
    if(method){
      console.log('--Here-- POST METHOD --- ');
      setToken(' POST Method : '+x);

      let url = 'https://readerschool.org/v1/documents/login.php';

      fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: 'yourValue',
          pwd: 'yourOtherValue'
        })
      })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => setFailmsg(error))
      .finally(() => console.log(true));;



      fetch(url, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: fname,
            pwd: lname
          })
        })
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => setFailmsg(error))
        .finally(() => setLoading(false));;
    }


    if(!method){
      console.log('--Here-- GET METHOD --- ');
      setToken(' GET Method : '+x);

      let url = 'https://readerschool.org/v1/documents/login.php?username='+fname+'&pwd='+lname;
      fetch(url)
        .then((response) => response.json())
        .then((json) => setData(json))      
        .catch((error) => setFailmsg(error))
        .finally(() => setLoading(false));
    }
  }

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>---: Quick Contact Form :---</Text>      
      <Text>First Name :- </Text>
      <TextInput placeholder="First Name" name="fname" onChangeText={(val)=>chgName(val)}  /> 
      <Text>Last Name :- </Text>
      <TextInput placeholder="Last Name" onChangeText={(val)=>chgLName(val)}  />
      <TouchableOpacity onPress={dologin} >
          <Text>-: Login Btn :::-</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dologin(98)} >
          <Text style={styles.heading}>-: New Login Btn :::-</Text>
      </TouchableOpacity>
      <View style={{ marginTop: 20 }}>
        <Text> --: User Details :-</Text>
        <Text> -: {fname} {lname} {token} :-</Text>
        {token == true ? <Text> -: {fname} {lname} :-</Text> :null}
      </View>
      <Text>{failMsg}</Text>
      {
        isLoading 
          ? <Text>Loading...</Text> 
          : <View style={{ marginTop: 20 }}>
              <Text style={styles.heading}>-: Response Received :-</Text>
              <Text>Time Stamp : {data.datetime}</Text>
              <Text>Username : {data.userdetails.username}</Text>
              <Text>Designation : {data.userdetails.designation}</Text>
              <Text>Username : {data.userdetails.username}</Text>
              <Text>Password : {data.userdetails.pwd}</Text>

              <Text>Coins : </Text>
              <FlatList
                data={data.coin}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                  <Text style={{fontSize:16}}>{item.id}. {item.name} : {item.price_usd}</Text>
                )}
              />              
            </View>
      }

    </View>
  );
}

export default Statistic;

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