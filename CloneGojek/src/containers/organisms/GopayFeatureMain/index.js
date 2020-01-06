import React,{ Component } from "react";
import {View, Text, Image} from 'react-native';
import GopayFeature from '../../../components/molecules/GopayFeature';


class GopayFeatureMain extends Component{
    render(){
        return(
            <View style={{marginHorizontal:16,paddingTop:24,}}>
              <View style={{flexDirection:'row', backgroundColor:'#214B93',paddingHorizontal: 10, justifyContent:'space-between',alignItems:'center',height: 34, borderTopLeftRadius:10, borderTopRightRadius: 10}}>
                <Image source={require('../../../assets/icon/gopaynew.png')} style={{ }}></Image>
                <Text style={{ color:'white',}}>Rp. 50.220</Text>
              </View>
              <View style={{height:75 ,flexDirection:'row', backgroundColor:'#295DB3', justifyContent:'space-between',borderBottomLeftRadius:10, borderBottomRightRadius:10}}>
                <GopayFeature title='Pay' img={require('../../../assets/icon/pay.png')} active/>
                <GopayFeature title='Near By' img={require('../../../assets/icon/nearby.png')} />
                <GopayFeature title='Top Up' img={require('../../../assets/icon/topup.png')} />
                <GopayFeature title='More' img={require('../../../assets/icon/more.png')} />
              </View>
            </View>

        )
    }
}

export default GopayFeatureMain;