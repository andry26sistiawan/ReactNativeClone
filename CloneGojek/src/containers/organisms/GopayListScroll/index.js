import React,{Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import GopayListScrollContent from '../../../components/molecules/GopayListScrollContent';



class GopayListScroll extends Component{
    render(){
        return(
            <View>
            <View style={{}}>
              <Image source={require('../../../assets/Logo/gopay.png')} style={{marginLeft:8, marginBottom:15}}></Image>
            </View>
            <View style={{paddingLeft:18, marginBottom:20}}>
              <Text style={{fontSize:15, fontWeight:'bold'}}>Discount up to 50%</Text>
            </View>
            <ScrollView horizontal={true} flexDirection='row' style={{paddingLeft:18}}>
              <GopayListScrollContent title='Pocky' img={require('../../../assets/Dummy/gopay1.png')}/>
              <GopayListScrollContent title='Pocky Pocky' img={require('../../../assets/Dummy/gopay2.png')}/>
              <GopayListScrollContent title='Filma' img={require('../../../assets/Dummy/gopay3.png')}/>
            </ScrollView>
          </View>
        )
    }
}

export default GopayListScroll;