import * as React from "react";
import {View,ActivityIndicator, Text} from "react-native";
export default class CustomComponent extends React.Component{
render(){
    return (
        <View style={{width:"100%",height:"100%",flexDirection:"column"

        ,alignItems:"center"}}>
{
    this.props.first?        
   
      <Text style={{marginTop:30}}>{this.props.first_text}</Text>    
        :
     
        <View style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}}>{this.props.children}</View>
    
         
}
      
        </View>

          )
}
}