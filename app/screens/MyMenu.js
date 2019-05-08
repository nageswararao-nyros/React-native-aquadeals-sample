import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {OffCanvasReveal} from 'react-native-off-canvas-menu';
import { Brands } from '../components/Brands';

class MyMenu extends Component {
	constructor(props){
		super(props)
		this.state = {
		  menuOpen: false
		}
	}

	handleMenu() {
	  const {menuOpen} = this.state
	  this.setState({
	    menuOpen: !menuOpen
	  })
  }

  render(){
  	return(
  		<View style={{flex: 1, flexDirection: 'column', width: 180}}>
	      <OffCanvasReveal
      active={this.props.isOpen}
      onMenuPress={this.props.closePageMenu}
      menuTextStyles={{
        color: '#FFFFFF', backgroundColor: 'transparent'
      }}
      handleBackPress={true}
      menuItems={[
        {
        title: 'Search Vegan',
        icon: <Icon
          name="search"
          size={35}
          color={'#FFFFFF'} />,
        },
      ]} />
      </View>
  	)
  }
}

export default MyMenu;