import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator} from "react-navigation-drawer";
import { Dimensions, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

import { ProfileScreen, MyScannerScreen, MessageScreen, ActivityScreen, ListScreen, ReportScreen, StatisticScreen, SignoutScreen, GalleryScreen, ContactusScreen} from "./screens";
import Sidebar from "./component/Sidebar";

const DrawerNavigator = createDrawerNavigator({
        ProfileScreen:{
            screen:ProfileScreen,
            navigationOptions:{
                title:"Profile",
                drawerIcon:({tintColor}) => <Feather name="user" size={16} color={tintColor} />
            }
        }, 
        ScannerScreen:{
            screen:MyScannerScreen,
            navigationOptions:{
                title:"MyScanner",
                drawerIcon:({tintColor}) => <Feather name="user" size={16} color={tintColor} />
            }
        },         
        SignoutScreen:{
            screen:SignoutScreen,
            navigationOptions:{
                title:"Logout",
                drawerIcon:({tintColor}) => <Feather name="log-out" size={16} color={tintColor} />
            }
        }
    },{
        contentComponent:props => <Sidebar {...props} />
    });
  
export default createAppContainer(DrawerNavigator);