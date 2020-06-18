import * as React from "react";
import {View,Text,ImageBackground, TouchableOpacity} from "react-native"
import LinearGradient from "react-native-linear-gradient"
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'



export default  class MovieCarousel  extends React.Component{
    constructor(props){
    super(props)
    this.state = {loaded:false}
    }
    componentWillMount(){
        this.loadimage(this.props);
    
    }
    loadimage(props){
    fetch('https://api.pcloud.com/getfilelink?path='+"/"+props.data.series_image, {
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
            
        <ShimmerPlaceHolder style={{margin:9}}  width={350} height={250}  autoRun={true} visible={this.state.loaded}>
            
<TouchableOpacity onPress={()=>{
              this.props.data.comming_soon ? null: this.props.onClick()

}}>
   <ImageBackground  defaultSource={require("../assets/download.png")} source={{uri:this.state.location}} style={{
  backgroundColor:'floralwhite',
  borderRadius: 20,
  minHeight: 250,
  padding: 0,
  flexDirection:"row",
  display:"flex",
  overflow:"hidden",
  alignItems:"flex-end",
  marginLeft: 25,
  marginRight: 25, }}>
    {
            this.props.data.comming_soon ?  <Text style={{alignSelf:'flex-start',padding:4,fontSize:11,backgroundColor:"orange",borderRadius:9,color:"#fff",margin:9}}>Comming soon</Text>
: null
          }
<LinearGradient colors={["#00000000","#000"]} style={{marginLeft: this.props.data.comming_soon ?-100:0,alignSelf:"flex-end",flexDirection:"column",justifyContent:"flex-end", width:"100%",height:100}}>

  <Text style={{fontSize: 16,color:"#fff",marginTop:19,marginLeft:19}}>{this.props.data.series_name}</Text>
  <Text style={{fontSize: 13,color:"#fff",maxWidth:"90%",marginBottom:19,marginLeft:19}}>{this.props.data.series_descrition.slice(0,70)}...</Text>
</LinearGradient>

</ImageBackground> 
</TouchableOpacity>


          </ShimmerPlaceHolder>
          )
    }
    
    }







