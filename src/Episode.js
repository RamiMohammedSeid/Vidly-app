import * as React from "react"
import { View ,TouchableOpacity, Text} from "react-native"
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default Episode = (props) =><TouchableOpacity onPress={()=>{ props.data.comming_soon?null:props.onClick();}} style={{margin:9,width:"100%",flexDirection:"column"}}>
    <View style={{flexDirection:"row"}}>
<FontAwesome name="play" color="#fff" style={{margin:9,backgroundColor:"#000",width:40,height:40,textAlign:"center",textAlignVertical:"center"}} size={20}></FontAwesome>
 <View style={{flexDirection:"column",justifyContent:"center"}}>
<Text style={{fontSize:24}}>{props.data.episode_name}</Text>
<Text style={{fontSize:17}}>S{props.data.season_number}E{props.data.episode_number}</Text>
     </View>  
    </View>
    {
        props.data.comming_soon ? <Text style={{alignSelf:'flex-start',padding:4,fontSize:11,backgroundColor:"orange",borderRadius:9,color:"#fff",marginLeft:9,}}>Comming soon</Text>:null
    }
<Text style={{fontSize:16,maxWidth:"90%",margin:9,marginTop:0}} >{props.data.episode_descrition}</Text>

</TouchableOpacity>