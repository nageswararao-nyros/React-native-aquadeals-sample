import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { View, Text, Image, ScrollView, ImageBackground } from 'react-native';
import * as TrendsStoreData from './trendsStoreData.json';

class TrendStores extends Component{
	constructor(props){
		super(props);
		this.state = {
			data: TrendsStoreData,
		}
	}

	render(){
		const TrendsList = this.state.data ?  this.state.data.trendStores.map((data, index) =>{
			return(
				<View style={{alignItems: 'center', width: 115}}>
				  <View style={{alignItems: 'center', backgroundColor: "#FFFFFF", paddingVertical: 10 , paddingHorizontal: 10, borderRadius: 5}}>
						<Image resizeMode="contain"  source={{uri:"http://10.90.90.102/sample-reactNative/"+data.image}} style={{width:75, height:75, marginLeft: 7}} />
						<Text style={{paddingTop: 5, color: "#686868"}}>{data.title}</Text>
						<Text style={{paddingTop: 5, color: "#686868", fontSize: 10}}>{data.description}</Text>
						<Text style={{paddingTop: 5, color: "#686868", fontSize: 10}}>Price : {data.price}</Text>
					</View>
				</View>
			)
		})
		 : 'getting';
		return(
			<ImageBackground source={{uri:"http://10.90.90.102/sample-reactNative/images/Imported.png"}} style={{width: '100%', height: '100%'}}>
				<ScrollView 
					horizontal
					showsHorizontalScrollIndicator={false}
				>
				<View style={{flexDirection: 'row', marginTop: 15, paddingVertical: 15, marginLeft: 5, marginRight: 5, paddingLeft: 10, alignItems: 'center'}}>
					{TrendsList}
				</View>
				</ScrollView>
			</ImageBackground>
		)
  }
}
export default TrendStores;