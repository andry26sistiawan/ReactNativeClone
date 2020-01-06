import React  from 'react';
import {View, Text,} from 'react-native';

const TopPickFeature=(props)=>{

    return(
        <View style={{backgroundColor:props.active ? '#00AA13':'#FFFFFF', borderColor:props.active ? '':'#BBBBBB', borderWidth:props.active ? 0 : 1,  width:undefined, hight:38, marginRight:9, borderRadius:36, alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:16,color: props.active ? 'white':'#BBBBBB', paddingHorizontal:16 }}>{props.name}</Text>
        </View>
    )
    
}


export default TopPickFeature;