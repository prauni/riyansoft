import React from "react";
import { View, Text, StyleSheet, ScrollView,ImageBackground, Image } from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";

export default function Sidebar(props){
    return(
    <ScrollView>
        <ImageBackground
            source={require("../assets/bgimg.jpg")}
            style={{width:undefined, padding:16, paddingTop:40}}
        >
            <Image source={require("../assets/img.jpg")} style={styles.profile} />
            <Text style={styles.pname}>Scanner</Text>
        </ImageBackground>
        <View style={{ flexDirection:"row"}}>
            <DrawerNavigatorItems {...props} />
        </View>
    </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    profile:{
        width:80,
        height:80,
        borderRadius:20,
        borderColor:"#FFF"
    },
    pname:{
        color:"#FFF"
    }
})