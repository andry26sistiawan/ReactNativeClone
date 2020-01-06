import React from 'react';
import {View, Image,} from 'react-native';


const GoPayBenner=()=>{
    return(
        <View style={{marginVertical:16, marginHorizontal:33, paddingBottom:16, flex:1 }}>
            <View style={{position:'relative'}}>
              <View>
                <Image source={require('../../../assets/Dummy/gopaybenner1.png')} style={{ width:'100%', height: 170,borderRadius:7 }}></Image>
              </View>
            </View>
        </View>

    )
}

export default GoPayBenner;