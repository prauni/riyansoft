import React, { useState } from 'react';
import { Text, View, Button, TextInput } from "react-native";


export default function Profile({ navigation }) {
  return (
    <View style={{ margin: 60 }}>
      <Text style={{ fontSize: 24 }}>This is First Item screen...kkk..</Text>
      <Button
        title="Open Drawer"
        onPress={() => {
          navigation.openDrawer();
        }}
      />
      <Button
        title="Go to Second Item"
        onPress={() => {
          navigation.navigate("SecondItem");
        }}
      />
    </View>
  );
}