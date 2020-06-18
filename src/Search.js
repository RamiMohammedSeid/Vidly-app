import React, {Component} from "react"
import {View,FlatList,Keyboard} from "react-native"
import { Container, Content,Item,Input, Button, Text } from 'native-base';
import CustomComponent from "./CustomComponent"
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import MovieTile from "./MovieTile"
import { ScrollView } from "react-native-gesture-handler";
export default class Search extends Component {
    constructor(props){
        super(props)
       this.state={isLoading:false,first:true} 
    }
    load_data(){
      this.setState({isLoading:true,first:false} )
      fetch("http://vidly-server.cleverapps.io/search?q="+this.search_box).then(json=>{return json.json()}).then(value=>{
      this.setState({data:value,isLoading:false,loaded:true})
      })
    }
    render(){

     return (
       
      <Container style={{ width:"100%",height:"100%", alignItems: 'center', justifyContent: 'center' }}>
       <ScrollView style={{height:"100%"}}>
          <Content style={{marginTop:20}} >
         <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
 <Item style={{width:"60%"}} regular>
            <Input onChangeText={(search_query)=>{this.search_box = search_query}}  placeholder='Search query' />
          </Item>
          <Button onPress={()=>{Keyboard.dismiss();this.load_data()}} style={{width:"30%",marginLeft:10}}><Text>Search</Text></Button>
        
         </View>
       <CustomComponent nodata={false} first_text={"Please search using the search box"} first={this.state.first} style={{flexDirection:"column",width:"100%",height:"70%"}}>
             {
this.state.isLoading?                 <View style={{marginTop:20,flexWrap:"wrap",flexDirection:"row",width:"100%",height:"100%"}} 

>
<ShimmerPlaceHolder style={{margin:9}} width={130} height={180} autoRun={true} visible={false}>
  <View style={{width:"100%",height:100,backgroundColor:"#000"}}></View>

</ShimmerPlaceHolder>
<ShimmerPlaceHolder style={{margin:9}}  width={130} height={180} autoRun={true} visible={false}>
  <View style={{width:"100%",height:100,backgroundColor:"#000"}}></View>

</ShimmerPlaceHolder>
<ShimmerPlaceHolder style={{margin:9}}  width={130} height={180} autoRun={true} visible={false}>
  <View style={{width:"100%",height:100,backgroundColor:"#000"}}></View>

</ShimmerPlaceHolder>
<ShimmerPlaceHolder style={{margin:9}}  width={130} height={180} autoRun={true} visible={false}>
  <View style={{width:"100%",height:100,backgroundColor:"#000"}}></View>

</ShimmerPlaceHolder>

</View> 
:               this.state.loaded &&                  <View style={{marginTop:20,flexWrap:"wrap",flexDirection:"row",width:"100%",height:"100%"}} 

>
  {
    this.state.data.map((val)=>
      <MovieTile data={val} onClick={()=>{
   
        this.props.navigation.navigate("MoviePage",{data:val})

      }}></MovieTile>
    )
  }
</View>

             }    

        </CustomComponent>
        </Content>
       </ScrollView>
      
     
      </Container>
    );  
    } 
  }
