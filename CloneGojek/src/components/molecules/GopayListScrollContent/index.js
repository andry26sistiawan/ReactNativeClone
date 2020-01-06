import React from 'react';
import {View, Image, Text} from 'react-native';

const GopayListScrollContent=(props)=>{
    return(
            <View style={{ borderRadius:7, borderWidth: 1, borderColor:'#E5E5E5',borderRadius:7, marginRight:17}}>
                <View style={{  backgroundColor:'', borderRadius:7, borderRadius:7,marginBottom:13}} >
                  <View style={{borderTopRightRadius:7, borderTopLeftRadius:7,flex:1,}}>
                    <Image source={props.img} style={{height:150, width:150,borderTopLeftRadius:7, borderTopLeftRadius:7, flex:1}}></Image>
                  </View>
                </View>
                  <Text style={{marginLeft:13, marginBottom:10,  fontSize:15, fontWeight:'bold', color:'#1C1D1D'}}>{props.title}</Text>
            </View>
    )
}

export default GopayListScrollContent;