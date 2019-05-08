import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Tooltip } from 'react-native-elements';
import { TrendStores } from '../TrendStores';
import * as AdsBackgroundData from './backgroundData.json';

const Ads = ({AdsData, onPress}) => {
	return(
		<View>
		  <View style={{backgroundColor: "#FFFFFF", marginTop: 5, paddingTop: 5}}>
			  <Text style={{ paddingBottom: 2, color:'#000000', fontSize: 10, paddingLeft:10}}>AD STORES</Text>
				  <ScrollView
					  horizontal
					  showsHorizontalScrollIndicator={false}
					>
					{
						AdsData && AdsData.length > 0 ?
						AdsData.map((data, index) => {
							return(
							<View style={{alignItems: 'center'}}>
								<TouchableOpacity onPress={onPress(data)}>
							    <Image resizeMode="contain"  source={{uri:"https://aqua.deals/admin/assets/images/"+data.img}} style={{width:85, height:85, marginLeft: 20}} />
								</TouchableOpacity>
								<Text style={{marginLeft: 15, fontSize: 10, paddingTop: 5, color: "#686868"}}>{data.type}</Text>
								<Image resizeMode="contain"  source={{uri:"https://aqua.deals/admin/assets/images/"+data.arrow_img}} style={{width:28, height:28, marginLeft: 20}} />
							</View>
							)
						}) : null
					}
				  </ScrollView>
			  </View>
		  <View style={{height: 200, color: "#E8E8E8"}}>
			  <TrendStores/>
		  </View>
		</View>
	)
}
export default Ads;