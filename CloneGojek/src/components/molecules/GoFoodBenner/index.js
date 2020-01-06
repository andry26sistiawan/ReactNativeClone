import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';


const GoFoodBenner=()=>{
    return(
        <View style={{marginVertical:16, marginHorizontal:33, paddingBottom:16, flex:1,}}>
            <View style={{position:'relative'}}>
            <View>
                <Image source={require('../../../assets/Dummy/gofood1.jpg')} style={{ width:'100%', height: 170,borderRadius:7 }}></Image>
                <Image source={require('../../../assets/Logo/white.png')} style={{height:15, width: 55, position:'absolute', top:13, left: 19}}></Image>
                <View style={{position:'absolute', bottom:0, left:0, width:'100%',flexDirection:'row', alignItems:'center', paddingHorizontal: 16, paddingBottom: 16}}>
                <View>
                    <Text style={{fontSize:12, fontWeight:'bold', color:'white',}}>Don't miss a meal</Text>
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

export default GoFoodBenner;