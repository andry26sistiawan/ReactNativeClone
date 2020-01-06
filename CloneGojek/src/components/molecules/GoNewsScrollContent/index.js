import React from'react';
import {View, Text, Image} from 'react-native';

const GoNewsScrollContent=(props)=>{
    return(
        <View style={{marginHorizontal:33, paddingVertical:18, width:337}}>
              <View>
                <View>
                  <Image source={require('../../../assets/Logo/gonews.png')} style={{width:79, height: 24, marginBottom:20}}></Image>
                  <Text style={{fontSize:18, color:'#1E1F1F',fontWeight:'bold',marginBottom:8}}>GoNews</Text>
                  <Text style={{fontSize:16, color:'#343535',marginBottom:18}}>Get the latest updates daily!</Text>
                </View>
              </View>      
              <View style={{flex:1, borderRadius:20,borderWidth:1, borderColor:'#EEEEEE',}}>
                <View>
                  <Image source={props.img} style={{ width:'100%', height: 190, borderTopLeftRadius:20, borderTopRightRadius:20}}></Image>
                </View>
                <View style={{marginHorizontal:16, marginTop:12, }}>
                  <View><Text style={{fontSize:18, color:'#1E1F1F',fontWeight:'bold',marginBottom:8}}>GoNews</Text></View>
                    <View><Text style={{fontSize:16, color:'#343535',marginBottom: 60}}>{props.content}</Text></View>
                  <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom: 18}}>
                    <View><Text style={{fontSize:16, color:'#1D1E1E', fontWeight:'bold'}}>{props.sumber}</Text></View>
                    <View><Image source={require('../../../assets/icon/jempol.png')} style={{width:25, height:21}}></Image></View>
                  </View>
                </View>
              </View>
        </View>
    )
}

export default GoNewsScrollContent;