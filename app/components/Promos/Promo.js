import React, { Component } from 'react';
import {Image, ImageBackground, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Slideshow from 'react-native-slideshow';
import { ScrollView } from 'react-native';
// import * as PromosData from './promosData.json'

const { width } = Dimensions.get('window');

const Promos = ({PromosData}) => {
	return(
		<View style={{marginBottom: 30, height: 250, backgroundColor: "#FFFFFF",flex: 1, flexDirection: 'row'}}>
		    <View style={{flex: 1, flexDirection:'row', justifyContent: 'space-between', padding: 8}}>
					<Text>PROMOTIONS</Text>
					<Text style={{color:"#af6426"}}> VIEW ALL </Text>
				</View>

				<View  style={{flex: 1, flexDirection: 'row'}}>
					<Image source={{uri:"https://www.aquadeals.in/admin/assets//images/web_imgs/promotions_truck.png"}} style={{width: 170, height: 60, top: 100, marginLeft: 70}} />
				</View>

				<ScrollView horizontal showsHorizontalScrollIndicator={false}	>
				{
					PromosData && PromosData.length>0 ?
					PromosData.map((data, index)=>{
						return(
							<View style={{ justifyContent:'center', flex: 1,flexDirection: 'column'}}>
								<Image source={{uri: 'https://www.aquadeals.in/admin/assets//images/web_imgs/road_0.png'}} style={{width: width, height: 250}} />
								<Image source={{uri:  data.img }} style={{width: 50, height: 50,position:'relative',left:125,bottom:135}} />
							</View>
						)
					}) : null
				}
			  </ScrollView>
		</View>
	)
}
export default Promos;