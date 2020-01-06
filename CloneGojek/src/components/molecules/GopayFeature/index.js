import React from 'react'
import {View, Text, Image} from 'react-native'

const GopayFeature =(props) =>{
      return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#295DB3', borderBottomLeftRadius:10}} >
          <Image source={props.img} style={{paddingTop:11}}></Image>
          <Text style={{paddingBottom:4, paddingTop: 4, fontSize: 13, fontWeight:'bold', color:'white'}}>{props.title}</Text>
        </View>
      )
    }
export default GopayFeature; 
