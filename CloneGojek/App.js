
import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import GopayFeature from './src/components/molecules/GopayFeature/';
import MainFeature from './src/components/molecules/MainFeature';
import TopPickFeature from './src/components/molecules/TopPickFeature';
import GoFoodBenner from './src/components/molecules/GoFoodBenner';
import GoboxBenner from './src/components/molecules/GoBoxBenner';
import GoGiveBenner from './src/components/molecules/GoGiveBenner';
import GoPayBenner from './src/components/molecules/GoPayBenner'
import GoFitness from './src/components/molecules/GoFitness';
import GoNewsScroll from './src/containers/organisms/GoNewsScorll';
import GopayListScroll from './src/containers/organisms/GopayListScroll';
import NavBarIcon from './src/components/molecules/NavBarIcon';
import NavBar from './src/containers/organisms/NavBar';
import TopPick from './src/containers/organisms/TopPick';
import SeacrhBar from './src/components/molecules/SeacrhBar';
import GopayFeatureMain from './src/containers/organisms/GopayFeatureMain';
import MainMenu from './src/containers/organisms/MainMenu';

// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';



class Home extends Component {
  render() {
    return (
     
      <View style={{flex:1}}>
        
        <ScrollView style={{backgroundColor:'white', flex:1,}}>
          
          <SeacrhBar/>
          <GopayFeatureMain/>
          <MainMenu/>
          <TopPick/>
          <GoFoodBenner/>
          <GoPayBenner/>
          <GoboxBenner/>
          <GoGiveBenner/>
          <GoFitness/>
          <GoNewsScroll/>
          <GopayListScroll />
          
        </ScrollView>
        <NavBar/>
      </View>
      
    );
  } 
}

// const MainNavigator = createStackNavigator({
//   Home: {
//     screen: Home},
 
// });
// const App = createAppContainer(MainNavigator);

export default Home;





