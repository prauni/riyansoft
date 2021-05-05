import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, ImageBackground,StyleSheet, Text, View,  Alert, Modal, Pressable } from 'react-native';
import Unorderedlist from 'react-native-unordered-list';

export default function Menu() {

  return (
        <View  style={{paddingTop: 30 }}>
            <Text  style={{fontSize: 15 }}>
                Menu Of the Application
            </Text>
            <Unorderedlist>
                <Text style={{backgroundColor: 'yellow' }}>Home Page</Text>
            </Unorderedlist>
            <Unorderedlist>
                <Text style={{backgroundColor: 'yellow' }}>About Us</Text>
            </Unorderedlist>
            <Unorderedlist>
                <Text style={{backgroundColor: 'yellow' }}>Gallery</Text>
            </Unorderedlist>
            <Unorderedlist>
                <Text style={{backgroundColor: 'yellow' }}>Contact Us</Text>
            </Unorderedlist>
        </View>
  );
}
