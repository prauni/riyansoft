import React, { useState } from 'react';
import { Text, View, Button, TextInput, SafeAreaView, ScrollView, TouchableOpacity, Touchable } from "react-native";
import {FontAwesome5} from "@expo/vector-icons";


export default function Home({ navigation }) {
  return (
    <View style={{ margin: 60 }}>
      <SafeAreaView>
        <TouchableOpacity
            style={{alignItems:"flex-end", margin:16}}
            onPress={() => {
              navigation.openDrawer();
            }}
        >
          <FontAwesome5 name="bars" size="16" color="#161924"></FontAwesome5>
        </TouchableOpacity>
      </SafeAreaView>
      <Button
        title="Open Drawer"
        
      />
      <Button
        title="Go to Second Item"
        onPress={() => {
          navigation.navigate("SecondItem");
        }}
      />


      <Text style={{ fontSize: 24 }}>Main Layout...</Text>
    </View>
  );
}