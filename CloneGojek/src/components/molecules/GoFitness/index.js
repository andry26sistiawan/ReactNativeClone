import React from 'react';
import {View, Image, Text} from 'react-native';

const GoFitness=() =>{
    return(
        <View style={{marginHorizontal:33,marginVertical:16, flex:1,borderWidth:1, borderRadius:20, borderColor:'#EEEEEE', }}>
            <View style={{}}>
              <View>
                <Image source={require('../../../assets/Dummy/gofitness.png')} style={{ width:'100%', height: 190, borderTopRightRadius:20, borderTopLeftRadius:20}}></Image>
              {/*  <Image source={require('./Logo/GoBoxLogo.png')} style={{height:15, width: 55, position:'absolute', top:13, left: 19}}></Image> */}
              </View>
              <View style={{marginHorizontal:16, marginTop:12, }}>
                <View><Text style={{fontSize:16, color:'#1E1F1F',fontWeight:'bold',marginBottom:8}}>GoFitness: Yoga or Boxing?</Text></View>
                <View><Text style={{fontSize:14, color:'#1C1D1D',marginBottom: 49}}>Book with GoFitness, enjoy any classes at 160+ studios!</Text></View>
              </View>
            </View>
          </View>
    )
}

export default GoFitness;