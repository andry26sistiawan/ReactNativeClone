import React, { Component } from "react";
import {View, Text, ScrollView} from 'react-native';
import TopPickFeature from '../../../components/molecules/TopPickFeature'


class TopPick extends Component{
    render(){
        return(
            <View style={{backgroundColor:'#white', height:70,marginTop:17, marginHorizontal:16,marginBottom:25}}>
                <View>
                <Text style={{fontSize:17, fontWeight:'bold', marginBottom:14}}>Top picks for you</Text>
                </View>
                <ScrollView horizontal={true} style={{flexDirection:'row', width:'100%', flex:1}}>
                <TopPickFeature name='All' active/>
                <TopPickFeature name='Food' />
                <TopPickFeature name='Lifestyle'/>
                <TopPickFeature name='Payments' />
                <TopPickFeature name='Promos' />
                <TopPickFeature name='Transport' />
                <TopPickFeature name='Updates' />
                </ScrollView>
          </View>
        )
    }
}

export default TopPick;