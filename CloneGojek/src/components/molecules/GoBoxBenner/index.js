import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const GoboxBenner=() =>{
    return(
        <View style={{marginVertical:16, marginHorizontal:33, flex:1, }}>
            <View style={{position:'relative'}}>
              <View>
                <Image source={require('../../../assets/Dummy/goboxbenner.png')} style={{ width:'100%', height: 170,borderRadius:7 }}></Image>
                <Image source={require('../../../assets/Logo/GoBoxLogo.png')} style={{height:15, width: 55, position:'absolute', top:13, left: 19}}></Image>
                <View style={{position:'absolute', bottom:0, left:0, width:'100%',flexDirection:'row', alignItems:'center', paddingHorizontal: 16, paddingBottom: 16}}>
                  <View>
                    <Text style={{fontSize:12, fontWeight:'bold', color:'white',}}>Got loads to send?</Text>
                  </View>
                  <View style={{flex:1,}}>
                    <TouchableOpacity style={{backgroundColor:'#29A34E',borderRadius:4, paddingHorizontal: 10, paddingVertical:12, alignSelf:'flex-end'}}>
                    <Text style={{fontSize:12, fontWeight:'bold', color:'white', textAlign:'center'}}>Order</Text>  
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
    )
}

export default GoboxBenner;