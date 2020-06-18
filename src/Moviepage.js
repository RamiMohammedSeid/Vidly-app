import React, {Component} from "react"
import {View,Text,ImageBackground, Dimensions, ScrollView} from "react-native"
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import LinearGradient from "react-native-linear-gradient"
import Episode from "./Episode"

export default class Moviepage extends Component {
    constructor(props){
        super(props)
        this.state = {data:props.route.params.data,episodes_loading:true}  
//alert(JSON.stringify(this.state.data))
    this.loadimage(this.state)
    this.loadimage2(this.state)
this.load_episodes(this.state)
    }
    load_episodes(state){
     
      fetch("http://vidly-server.cleverapps.io/episodes?series_id="+state.data.series_id).then(json=>json.json()).then(value=>{
        this.setState({episodes_loading:false,episodes_data:value})
        })
    }
    loadimage(state){
      fetch('https://api.pcloud.com/getfilelink?path='+"/"+state.data.series_tile_image, {
              headers: {
                'Authorization': 'Bearer JYHF7Zl1uYf0p8mFSZfD3ia7ZydBK2Hf6cpLAy7uLjGp0pmrP9rCk',
              },
       }).then(val=>val.json()).then(val=>{
          const location = "http://"+val.hosts[0]+val.path; 
          this.setState({loaded:true,location:location},()=>{
      
       });
      
      
      })
      }  
      loadimage2(state){
        fetch('https://api.pcloud.com/getfilelink?path='+"/"+state.data.series_image, {
                headers: {
                  'Authorization': 'Bearer JYHF7Zl1uYf0p8mFSZfD3ia7ZydBK2Hf6cpLAy7uLjGp0pmrP9rCk',
                },
         }).then(val=>val.json()).then(val=>{
            const location = "http://"+val.hosts[0]+val.path; 
            this.setState({loaded2:true,location2:location},()=>{
        
         });
        
        
        })
        }  
      
    render(){

     return (<ScrollView style={{backgroundColor:"#fff",padding:0,width:"100%",height:"100%"}}>
<View style={{marginLeft:-5,marginTop:-5}}>
  <ShimmerPlaceHolder  width={Dimensions.get('window').width} height={240} autoRun={true} visible={this.state.loaded2}>
<ImageBackground loadingIndicatorSource={require("../assets/download.png")} style={{width:130,height:240,backgroundColor:"#0f0"}} source={{uri:this.state.location2,cache:"force-cache"}} style = {{height: 200,width:"100%", resizeMode : 'cover', margin: 5 }}>
        
        <LinearGradient colors={["#00000000","#000"]} style={{alignSelf:"flex-end",flexDirection:"column",justifyContent:"flex-end", width:"100%",height:"100%"}}>

</LinearGradient>
        </ImageBackground>  
 </ShimmerPlaceHolder>
</View>

<View style={{marginTop:-120,flexDirection:"row",alignItems:"flex-end"}}>
       <ShimmerPlaceHolder  width={130} height={180} autoRun={true} visible={this.state.loaded}>
      
        <ImageBackground loadingIndicatorSource={require("../assets/download.png")} style={{elevation:9,width:130,height:180,backgroundColor:"#0f0"}} source={{uri:this.state.location,cache:"force-cache"}} style = {{height: 200,width:130, resizeMode : 'cover', margin: 5 }}>
   
        </ImageBackground>

        
    </ShimmerPlaceHolder>
    <View style={{flexDirection:"column"}}>
    <Text style={{fontSize:30}} >{this.state.data.series_name}</Text>
    <Text style={{fontSize:12,maxWidth:"100%",marginLeft:5}} >{this.state.data.seasons_length}S</Text>
    <View style={{flexDirection:"row"}}>{this.state.data.series_tags.split(";").map((val)=>
    <Text style={{margin:5,padding:4,backgroundColor:"orange",color:"#fff",borderRadius:9}}>{val}</Text>)}</View>
    </View>

  

    </View>
    <Text style={{fontSize:16,maxWidth:"100%",margin:9}} >{this.state.data.series_descrition}</Text>
    <Text style={{fontSize:30,marginLeft:9}} >Episodes</Text>
    {
this.state.episodes_loading?<View style={{marginTop:9,width:"100%",flexGrow:0,display:"flex",flexDirection:"column"}}>
 <View style={{padding:9}}>
     <ShimmerPlaceHolder  width={Dimensions.get('window').width} height={100} autoRun={true} visible={!this.state.episodes_loading}>
</ShimmerPlaceHolder>
 </View>

 <View style={{padding:9}}>
     <ShimmerPlaceHolder  width={Dimensions.get('window').width} height={100} autoRun={true} visible={!this.state.episodes_loading}>
</ShimmerPlaceHolder>
 </View>

 <View style={{padding:9}}>
     <ShimmerPlaceHolder  width={Dimensions.get('window').width} height={100} autoRun={true} visible={!this.state.episodes_loading}>
</ShimmerPlaceHolder>
 </View>


</View>:<View style={{width:"100%",flexGrow:0,display:"flex",flexDirection:"column"}}>
{
  this.state.episodes_data.map((val)=><Episode data={val} onClick={()=>{
    this.props.navigation.navigate("Stream",val);
  }}></Episode>)
}
</View>
    }

     </ScrollView>
      
    );  
    } 
  }
