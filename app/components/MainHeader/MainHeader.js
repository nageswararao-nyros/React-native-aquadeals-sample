import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Text, Image, View, TextInput, Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_SIZE = 40;

const MainHeader = ({onPress}) => {
	return(
		<View style={{flexDirection: 'row', backgroundColor: "#FFFFFF", paddingVertical: 10 , paddingHorizontal: 5}}>
			<TouchableOpacity onPress={onPress} style={{justifyContent: 'flex-start'}}>
				<Image source={{uri:'http://10.90.90.102/sample-reactNative/images/menu.png' }} style={{marginTop:10, width: 25, height: 25, marginRight: 15}} />
			</TouchableOpacity>
			<View style={{backgroundColor: "#f1f1f2", width: 190, marginTop:7, height:30, borderRadius: 5, flexDirection: 'row', marginRight: 20}}>
				<TextInput style={{fontSize: 10, paddingHorizontal: 10, color: "#686868"}} placeholder={ "Search for brands and Products"} />
	      <Image source={{uri:'http://10.90.90.102/sample-reactNative/images/search.png' }} style={{justifyContent: 'flex-end',height:15, left: 10, width:15, marginTop: 7}} />
      </View>
      <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
	      <Image source={{uri:'http://10.90.90.102/sample-reactNative/images/home_notification_hdr.png' }} style={{marginTop:10, width: 25, height: 25, marginRight: 15}} />
	      <Image source={{uri:'http://10.90.90.102/sample-reactNative/images/cart_icon.png' }} style={{marginTop:10, width: 25, height: 25 }} />
      </View>
		</View>
	)
}
MainHeader.propTypes = {
	onPress: PropTypes.func
}

export default MainHeader;