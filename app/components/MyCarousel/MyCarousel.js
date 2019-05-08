import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Platform, StatusBar, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Slideshow from 'react-native-slideshow';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_SIZE = 40;
export default class MyCarousel extends Component {

  constructor(props) {

    super(props);

    this.state = {
      position: 1,
      interval: null,
      dataSource: [
      {url: 'https://www.aquadeals.in/admin/assets//images/ad_imgs/ad_imgs_web/20190329170309473175.png'},
      {url: 'https://www.aquadeals.in/admin/assets//images/ad_imgs/ad_imgs_web/20190329164455192399.png'},
      {url: 'https://www.aquadeals.in/admin/assets//images/ad_imgs/ad_imgs_web/20190329170824917607.png'},
      {url: 'https://www.aquadeals.in/admin/assets//images/ad_imgs/ad_imgs_web/20190329172038793714.png'}
      ],
    };

  }
  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 5000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  // handleLeft() {
  //   if(this.state.position == 0){
  //     this.setState()
  //   }
  // }

  render() {

    return (

      <View style={styles.MainContainer}>
        <Slideshow
          autoplay={true}
          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={position => this.setState({ position })}
          arrowLeft={<Ionicons name={`${ICON_PREFIX}-arrow-dropleft-circle`} size={ICON_SIZE} style={{color:"#FFFFFF"}}  />}
          arrowRight={<Ionicons name={`${ICON_PREFIX}-arrow-dropright-circle`} size={ICON_SIZE} style={{color:"#FFFFFF"}} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    marginHorizontal: 5,
    alignItems: 'center',
    marginTop: 2,
    backgroundColor: '#FFF8E1'

  }

});