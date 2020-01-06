import React from 'react';
import {View, Image, Text  } from 'react-native';


const NavBarIcon=(props)=>{
    return(
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                <Image style={{height:26, width:26}} source={props.icon}/>
                <Text style={{fontSize:12, color: props.active ?'#32AF59':'#545454', paddingTop:5}}>{props.title}</Text>
        </View>
    )
}

export default NavBarIcon;