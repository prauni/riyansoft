import React, { useState } from 'react';
import { Text, View, Button, TextInput } from "react-native";


export default function Headernav({ navigation }) {
  return (
    <Button
        title="Open Drawer"
        onPress={() => {
          navigation.openDrawer();
        }}
      />
  );
}