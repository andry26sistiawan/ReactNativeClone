import React,{Component} from 'react';
import {View, } from 'react-native';

import MainFeature from '../../../components/molecules/MainFeature';


class MainMenu extends Component{
    render(){
        return(
            <View style ={{flexDirection:'row', flexWrap:'wrap' ,marginHorizontal:16,marginTop:18,}}>
            <View style={{justifyContent:'space-between', flexDirection:'row', width:'100%',marginBottom:18}}>
               <MainFeature title='GoRide' icon={require('../../../assets/icon/go-ride-new.png')}/>
               <MainFeature title='Gocar' icon={require('../../../assets/icon/go-car-new.png')}/>
               <MainFeature title='GoFood' icon={require('../../../assets/icon/go-food-new.png')}/>
               <MainFeature title='GoBlueBird' icon={require('../../../assets/icon/go-blue-bird-new.png')}/>
            </View>
            <View style={{justifyContent:'space-between', flexDirection:'row',width:'100%'}}>
               <MainFeature title='GoSend' icon={require('../../../assets/icon/go-send-new.png')}/>
               <MainFeature title='GoPulsa' icon={require('../../../assets/icon/go-pulsa-new.png')}/>
               <MainFeature title='GoPoint' icon={require('../../../assets/icon/go-point.png')}/>
               <MainFeature title='More' icon={require('../../../assets/icon/go-more.png')}/> 
            </View> 
        </View>
        )
    }
}

export default MainMenu;