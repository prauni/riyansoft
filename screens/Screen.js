import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Touchable } from 'react-native';
import {FontAwesome5} from "@expo/vector-icons";

import Profile from '../component/mypages/profile';
import Gallery from '../component/mypages/gallery';
import Message from '../component/mypages/message';
import Activity from '../component/mypages/activity';
import Listing from '../component/mypages/listing';
import Report from '../component/mypages/report';
import Statistic from '../component/mypages/statistic';
import Signout from '../component/mypages/signout';
import Contactus from '../component/mypages/contactus';
import MyScanner from '../component/mypages/myscanner';

export default class Screen extends React.Component{
    render(){
        console.disableYellowBox = true;
        //LogBox.ignoreAllLogs(value);
        console.log(this.props.name);

        const renderComponent = () => {

            if ( this.props.name == 'Profile') {
                return <Profile />;
            }
            else if ( this.props.name == 'Gallery') {
                return <Gallery />;
            }
            else if ( this.props.name == 'Message') {
                return <Message />;
            }
            else if ( this.props.name == 'Activity') {
                return <Activity />;
            }
            else if ( this.props.name == 'List') {
                return <Listing />;
            }
            else if ( this.props.name == 'Report') {
                return <Report />;
            }
            else if ( this.props.name == 'Statistic') {
                return <Statistic />;
            }
            else if ( this.props.name == 'Signout') {
                return <Signout />;
            }
            else if ( this.props.name == 'MyScanner') {
                return <MyScanner />;
            }
            else if ( this.props.name == 'Contactus') {
                return <Contactus />;
            }
            else {
                return <Contactus />;
            }
            //ProfileScreen, MessageScreen, ActivityScreen, ListScreen, ReportScreen, StatisticScreen, SignoutScreen
        }

        return (
            <View style={styles.container}>
                <SafeAreaView style={{flex:1}}>
                    <TouchableOpacity 
                        style={{alignItems:"flex-end", marginTop:16, marginBottom:6, marginRight:6}}
                        onPress={this.props.navigation.openDrawer}
                    >
                        <FontAwesome5 name="bars" size={32} color="#161924" style={{margin:8}}></FontAwesome5>
                    </TouchableOpacity>
                    <ScrollView>
                        <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                            {renderComponent()}
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#c3e6cb",
    },
    text:{
        color:"#161924",
        fontWeight:"500"
    }
})