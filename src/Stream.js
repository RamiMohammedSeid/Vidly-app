import * as React from "react";
import {View,WebView,Text,ImageBackground, TouchableOpacity, ActivityIndicator, Dimensions} from "react-native"
import LinearGradient from "react-native-linear-gradient"
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import Orientation from 'react-native-orientation';


import VideoPlayer from "react-native-video-controls"
export default  class Stream  extends React.Component{
    constructor(props){
    super(props)
    var orient = (Orientation.getInitialOrientation()=="LANDSCAPE")
    this.state = {loaded:false,height:"100%",width:"100%"}
    console.log("Location set to :"+this.state.location)
    this.loadepisodelink(props.route.params)
      Orientation.addOrientationListener((orientation)=>{
      console.log(orientation)
     if(orientation === 'LANDSCAPE'){
     this.setState({width:"100%",height:"100%"})
     
     }else{
       this.setState({width:"100%",height:"100%"})
     
     }
         })
    }
   componentDidMount(){
  
   }
    loadepisodelink(props){
    fetch(`https://api.pcloud.com/getvideolinks?fileid=${ props.episode_link.split("@")[0] }&contenttype=video/mp4&resolution=100/100`, {
            headers: {
              "Authorization": 'Bearer '+props.episode_link.split("@")[1]            },
     }).then(val=>val.json()).then(val=>{
      var js = val.variants[0];

      this.setState({loaded:true,location:"http://"+js.hosts[0]+js.path},()=>{
    
      });
 } )
    }    
    render(){
        return (
            <View style={{width:this.state.width,height:this.state.height}}>
        {this.state.loaded
        
        ?      
<VideoPlayer
        style={{width: this.state.width, height: this.state.height}}
     
    resizeMode={'cover'}
        source={{uri:this.state.location}}
     navigator={this.props.navigation}
      />
      
       
    
        
        
       

        :
       
        
        
        
        <View style={{width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}}> 
        <ActivityIndicator color={"#000"} size={"large"}></ActivityIndicator>
        </View>}
        {
            

        }
            </View>
          )
    }
    
    }







