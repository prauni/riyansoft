import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator} from "react-navigation-drawer";
import { Dimensions, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

import { ProfileScreen, MyScannerScreen, MessageScreen, ActivityScreen, ListScreen, ReportScreen, StatisticScreen, SignoutScreen, GalleryScreen, ContactusScreen} from "./screens";

import Sidebar from "./component/Sidebar";

const DrawerNavigator = createDrawerNavigator({
        TestiingScreen:{
            screen:MessageScreen,
            navigationOptions:{
                title:"Developing",
                drawerIcon:({tintColor}) => <Feather name="user" size={16} color={tintColor} />
            }
        }, 
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
        GalleryScreen:{
            screen:GalleryScreen,
            navigationOptions:{
                title:"Gallery",
                drawerIcon:({tintColor}) => <Feather name="list" size={16} color={tintColor} />
            }
        }, 
        MessageScreen:{
            screen:MessageScreen,
            navigationOptions:{
                title:"Message",
                drawerIcon:({tintColor}) => <Feather name="message-square" size={16} color={tintColor} />
            }
        }, 
        ActivityScreen:{
            screen:ActivityScreen,
            navigationOptions:{
                title:"Activities",
                drawerIcon:({tintColor}) => <Feather name="activity" size={16} color={tintColor} />
            }
        }, 
        ListScreen:{
            screen:ListScreen,
            navigationOptions:{
                title:"Listing",
                drawerIcon:({tintColor}) => <Feather name="list" size={16} color={tintColor} />
            }
        }, 
        ReportScreen:{
            screen:ReportScreen,
            navigationOptions:{
                title:"Report",
                drawerIcon:({tintColor}) => <Feather name="bar-chart" size={16} color={tintColor} />
            }
        }, 
        StatisticScreen:{
            screen:StatisticScreen,
            navigationOptions:{
                title:"Statistic",
                drawerIcon:({tintColor}) => <Feather name="trending-up" size={16} color={tintColor} />
            }
        }, 
        SignoutScreen:{
            screen:SignoutScreen,
            navigationOptions:{
                title:"Logout",
                drawerIcon:({tintColor}) => <Feather name="log-out" size={16} color={tintColor} />
            }
        }, 
        ContactusScreen:{
            screen:ContactusScreen,
            navigationOptions:{
                title:"Contactus",
                drawerIcon:({tintColor}) => <Feather name="list" size={16} color={tintColor} />
            }
        }
    },{
        contentComponent:props => <Sidebar {...props} />
    });
  
export default createAppContainer(DrawerNavigator);