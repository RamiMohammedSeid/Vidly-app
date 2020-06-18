import * as React from "react";
import {TouchableOpacity,View,Image, TouchableWithoutFeedback, Linking, ImageBackground} from "react-native"
import { Text } from "native-base";
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

export default  class MovieTile  extends React.Component{
constructor(props){
super(props)
this.state = {loaded:false}
}
componentWillMount(){
    this.loadimage(this.props);

}
loadimage(props){
fetch('https://api.pcloud.com/getfilelink?path='+"/"+props.data.series_tile_image, {
        headers: {
          'Authorization': 'Bearer JYHF7Zl1uYf0p8mFSZfD3ia7ZydBK2Hf6cpLAy7uLjGp0pmrP9rCk',
        },
 }).then(val=>val.json()).then(val=>{
 
    const location = "http://"+val.hosts[0]+val.path; 
    this.setState({loaded:true,location:location},()=>{

 });


})
}    
render(){
    return (
        
    <ShimmerPlaceHolder style={{margin:9}}  width={130} height={180} autoRun={true} visible={this.state.loaded}>
        <TouchableOpacity onPress={()=>{
          this.props.data.comming_soon ? null: this.props.onClick()
        }}>
          <ImageBackground defaultSource ={require("../assets/download.png")} style={{elevation:9,width:130,height:180,backgroundColor:"#0f0"}} source={{uri:this.state.location}} style = {{height: 200,width:130, resizeMode : 'cover', margin: 5 }}>
          {
            this.props.data.comming_soon ?  <Text style={{padding:4,fontSize:11,backgroundColor:"orange",borderRadius:9,color:"#fff",margin:9}}>Comming soon</Text>
: null
          }
          </ImageBackground>

          </TouchableOpacity>
      </ShimmerPlaceHolder>
      )
}

}