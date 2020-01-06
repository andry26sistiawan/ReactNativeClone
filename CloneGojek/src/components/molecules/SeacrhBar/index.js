import React from 'react';
import {View, Image, Text, TextInput  } from 'react-native';

const SeacrhBar=()=>{
    return(
        <View style={{marginTopHorizontal:16, flexDirection:'row',paddingTop:15, borderBottomWidth:1, borderColor:'#EFEFEF' }}>
              <View style={{position:'relative',flex:2, backgroundColor:'white',marginBottom:7, marginLeft:16}}>
                <TextInput placeholder="apa yang pengen lo makan haxx?" style={{borderWidth:1, borderColor:'#EBEBEB', borderRadius: 25, height: 41, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor:'white', marginRight:18}} ></TextInput>
                <Image source={require('../../../assets/icon/search.png')} style={{position:'absolute', top: 6, left: 12,}}></Image>
              </View>
              <View style={{position:'relative',width : 90,height:41, borderColor:'#EBEBEB', justifyContent:'center',marginRight:16, backgroundColor:'white', borderRadius: 25, borderWidth:1}}>
                <Image source={require('../../../assets/icon/promo.png')} style={{position:'absolute', top: 6, left: 12,  }}></Image>
                <Text style={{position:'absolute', top: 10, left: 40,}}>Promo</Text>
              </View>
        </View>
    )
}

export default SeacrhBar;