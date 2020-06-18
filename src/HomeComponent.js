import React, {Component} from "react"
import {View,Text,ScrollView, ImageBackground} from "react-native"
import Carousel from 'react-native-snap-carousel';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import {Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient"
import MovieCarousel from "./MovieCarousel";
import MovieTile from "./MovieTile";
export default class HomeComponent extends Component {
    constructor(props){
        super(props)
this.state = {loaded:false}
fetch("http://vidly-server.cleverapps.io/series").then(json=>json.json()).then(value=>{

  this.setState({data:value,isLoading:false,loaded:true})
  })
  this. screenWidth = Math.round(Dimensions.get('window').width); 
    }
 
        
    
    render(){

     return (
       <ScrollView style={{ width:"100%",height:"100%"}}>

         <View style={{ width:"100%",height:"100%", alignItems: 'center', justifyContent: 'center' }}>
        {
this.state.loaded?    <View style={{ width:"100%",height:"100%",flexDirection:"column", alignItems: 'center'}}>
<Carousel
                  layout="default"
                  ref={ref => this.carousel = ref}
                  data={this.state.data}
                  containerCustomStyle={{marginTop:20,width:"100%"}}
                  sliderWidth={900}
                  
                  itemWidth={350}
                  renderItem={({item})=><MovieCarousel data={item} onClick={()=>{

                    this.props.navigation.navigate("MoviePage",{data:item})
                   }} ></MovieCarousel>}

                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
<View style={{flexWrap:"wrap",padding:2,marginTop:20,flexDirection:"row",width:"100%",flex:1}} 

>
  {
    this.state.data.map((val)=>
      <MovieTile data={val} onClick={()=>{
        console.log("sd")
this.props.navigation.navigate("MoviePage",{data:val})
      }}></MovieTile>
    )
  }
</View>
</View>:<View style={{marginTop:20,flexWrap:"wrap",flexDirection:"row",width:"100%",height:"100%"}} 

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
        }
      </View>  
       </ScrollView>
    
    );  
    } 
  }

 