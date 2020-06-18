import React, {Component} from "react"

import {View,Text,TouchableOpacity,AsyncStorage,ActivityIndicator} from "react-native"

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Search from "./src/Search"
import HomeComponent from "./src/HomeComponent.js"

const Tab = createMaterialBottomTabNavigator( );

export default class Home extends Component {
    constructor(props){
        super(props)
      this.state = {loading:true}
    }
     MyTheme = {
    colors: {
        primary: 'rgb(200, 45, 85)',
      },
    };
    componentDidMount(){
      console.disableYellowBox = true;
     

    }
    render(){

     return (
    
         <Tab.Navigator >
           <Tab.Screen
             name="Home"
           
             options={{
               tabBarLabel: 'Home',
               tabBarIcon: ({ color }) => (
                 <FontAwesome style={{marginBottom:9}} name="home" color={color} size={20} />
               ),
             }}>
               {props => <HomeComponent   navigation={this.props.navigation} />}

             </Tab.Screen>
           <Tab.Screen
             name="Search"
         
             options={{
               tabBarLabel: 'Search',
               tabBarIcon: ({ color }) => (
                 <FontAwesome style={{marginBottom:9}} name="search" color={color} size={20} />
               ),
             }}>
             {props => <Search  navigation={this.props.navigation} />}

             </Tab.Screen>
          
         </Tab.Navigator>

    );  
    } 
  }
