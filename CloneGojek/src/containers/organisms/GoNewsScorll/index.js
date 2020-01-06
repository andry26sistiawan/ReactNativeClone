import React,{Component} from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import GoNewsScrollContent from '../../../components/molecules/GoNewsScrollContent';

class GoNewsScroll extends Component{
    render(){
        return(
            <ScrollView horizontal={true} style={{flexDirection:'row', flex:1}}>
                <GoNewsScrollContent img={require('../../../assets/Dummy/news1.png')} sumber='Kumparan' content='Adik Ipar Ibra Azhari, Medina Zein, Positif Konsumsi Narkoba.' />
                <GoNewsScrollContent img={require('../../../assets/Dummy/news2.png')} sumber='Detik.com' content='Hujan Deras di Alun-alun Cianjur'/>
                <GoNewsScrollContent img={require('../../../assets/Dummy/news3.png')} sumber='News.com' content='20 Ribu Kembang Api Meriahkan Perayaan Tahun Baru di GWK Bali.'/>
            </ScrollView>

        )
    }
}

export default GoNewsScroll;