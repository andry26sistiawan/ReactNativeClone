import React  from 'react';
import {View, Text, Image} from 'react-native';

const MainFeature=(props) =>{
    return(
        <View>
            <View style={{ height:58,width:58, justifyContent:'center', alignItems:'center',}} >
                <Image source={props.icon}></Image>
            </View>
            <Text style={{fontSize:11,color: '#363737', fontWeight:'bold',marginTop:5, textAlign:'center'}}>{props.title}</Text>
         </View>
    )
}

export default MainFeature;