import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Tooltip } from 'react-native-elements';
import { TrendStores } from '../TrendStores';
// import * as BrandsData from './data.json';

const Brands = ({BrandsData}) =>(
	<View style={{backgroundColor: "#FFFFFF", height: 220, marginBottom: 15, marginTop: 15, paddingLeft: 5}}>
	<Text style={{ paddingTop: 5, color:'#000000', fontSize: 10, paddingLeft:5}}>BRAND STORES</Text>
	  <ScrollView
		  horizontal
		  showsHorizontalScrollIndicator={false}
		>
		{
		BrandsData && BrandsData.length > 0 ?
		BrandsData.map((data, index) => {
			return(
		    <Image resizeMode="contain"  source={{uri:"https://aqua.deals/admin/assets/images/"+data.img}} style={{width:250, height:180, marginLeft: 20}} />
			)
		}) : null
	  }
	  </ScrollView>
  </View>
)
export default Brands;