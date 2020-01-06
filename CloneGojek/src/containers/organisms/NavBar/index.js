import React,{ Component } from "react";
import {View, } from 'react-native';
import NavBarIcon from '../../../components/molecules/NavBarIcon';


class NavBar extends Component{
    render()
    {
        return(
            <View style={{backgroundColor:'white', height:54, flexDirection:'row', borderTopWidth:1, borderColor:'#C6C6C6' }}>
              <NavBarIcon title='Home' icon={require('../../../assets/icon/home-active.png')} />
              <NavBarIcon title='Order' icon={require('../../../assets/icon/order.png')} />
              <NavBarIcon title='Help' icon={require('../../../assets/icon/help.png')} />
              <NavBarIcon title='Inbox' icon={require('../../../assets/icon/inbox.png')} />
              <NavBarIcon title='Account' icon={require('../../../assets/icon/account.png')} />
            </View>
        )
    }
}

export default NavBar;