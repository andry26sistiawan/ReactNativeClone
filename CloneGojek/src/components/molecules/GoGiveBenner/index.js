import React from 'react';
import {View, Text, Image} from 'react-native';

const GoGiveBenner=()=>{
    return(
        <View style={{marginHorizontal:33,marginVertical:16, flex:1,borderWidth:1, borderRadius:20, borderColor:'#EEEEEE', }}>
            <View style={{}}>
              <View>
                <Image source={require('../../../assets/Dummy/gogivebenner.png')} style={{ width:'100%', height: 190, borderTopRightRadius:20, borderTopLeftRadius:20}}></Image>
              {/*  <Image source={require('./Logo/GoBoxLogo.png')} style={{height:15, width: 55, position:'absolute', top:13, left: 19}}></Image> */}
              </View>
              <View style={{marginHorizontal:16, marginTop:12, }}>
                <View><Text style={{fontSize:16, color:'#1E1F1F',fontWeight:'bold',marginBottom:8}}>GOGive: New Year is coming, let's donate~</Text></View>
                <View><Text style={{fontSize:14, color:'#1C1D1D',marginBottom: 49}}>There is no such thing as being late for sharing kindness with others! Come on, let's start it today</Text></View>
              </View>
            </View>
        </View>
    )
}
export default GoGiveBenner;