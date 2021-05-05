import React, { useState } from 'react';
import { Text, View, Button, TextInput, Pressable, StyleSheet } from "react-native";
import Mymodal from './mymodal';

class Activity extends React.Component{
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {counter:0, rand: 866 };    
    this.btnPress = this.btnPress.bind(this);
  }

  btnPress = (x,y) => {   
    console.log(x+','+y);
    console.log(this.state.rand);
    this.setState({rand: y });
    this.setState({counter: this.state.counter+1 })
    return <Text>Hello, I am your cat!</Text>;
  };
  
  render(props) {
    let num = Math.floor(Math.random() * 200);
    return (
      <View style={{ margin: 60 }}>
        <Text style={{ fontSize: 24 }}>Activity Page</Text>
        <Text style={{ fontSize: 24, marginTop:20 }}>-- {this.state.counter}---- {this.state.rand}-- {num} ==</Text>
        <Pressable  onPress={() => this.btnPress('Developer',num)}  >
          <Text style={styles.btn}>-- Press Btn --</Text>
        </Pressable>
        <Mymodal rand={num} modalImgSrc='https://www.mango.org/wp-content/uploads/2020/04/Nutritional_HP_1280x720.png' />
      </View>
    );
  }
}

export default Activity;

const styles = StyleSheet.create({
  btn:{
    fontSize: 16, 
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#ffc615",
    marginTop:20,
    marginBottom:20
  }
})