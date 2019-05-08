import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { View, Text, Image, ScrollView } from 'react-native';
import * as TrendsData from './trendsData.json';

const Trends = ({TrendsData}) => (
	<View style={{flex: 1, flexDirection: 'row', backgroundColor: "#FFFFFF", marginTop: 10, paddingVertical: 15,paddingLeft: 10, alignItems: 'center'}}>
	 {
	 	TrendsData && TrendsData.length>0 ? 
	 	TrendsData.map((data, index) =>{
	 		return(
		 		data.dtypes.map((innerData, item)=>{
		 			return(
		 			  <View style={{alignItems: 'center'}}>
						  <Image resizeMode="contain"  source={{uri:"https://www.aquadeals.in/admin/assets//icons/"+innerData.icon}} style={{width:35, height:40, paddingLeft: 20}} />
						  <Text style={{ flex:1, flexDirection:'row', paddingTop: 5, fontSize: 10, color: "#686868", marginRight: 10, paddingLeft: 20}}>{innerData.type}</Text>
					  </View>
		 			)
		 		})
	 		)
	 	}) : null
	 }
	</View>
)
export default Trends;