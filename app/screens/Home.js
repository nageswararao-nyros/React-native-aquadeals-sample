import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, ScrollView, View, Text } from 'react-native';
import { Container } from '../components/Container';
import {MyCarousel} from '../components/MyCarousel';
import { Trends } from '../components/Trends';
import { Ads } from '../components/Ads';
import { Brands } from '../components/Brands';
import { Promos } from '../components/Promos';
import { MainHeader } from '../components/MainHeader';
import { MyMenu } from './MyMenu';
import { connect } from 'react-redux';
import { reqHomeData, reqHomeDealData, reqHomeBrandData, reqHomeDashboardData } from '../actions/HomeApi';


class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      homeOffers: '',
      homeBrands: '',
      homeTrends: '',
      homePromos: '',
      AdStoreId: ''
    }
  }

  componentDidMount(){
    this.props.dispatch(reqHomeData())
    this.props.dispatch(reqHomeDealData())
    this.props.dispatch(reqHomeBrandData())
    this.props.dispatch(reqHomeDashboardData())
  }

  componentWillReceiveProps(nextProps){
    console.log("Next Props", nextProps)
    // if(nextProps.Dealdata!==this.state.homeOffers ){
      this.setState({homeOffers: nextProps.Dealdata})
      this.setState({homeBrands: nextProps.BrandsData})
      this.setState({homeTrends: nextProps.DashBoardData})
      this.setState({homePromos: nextProps.PromosData})
      // console.log("DealData===================>>>>", this.state.homeOffers);
    // }
  }

  static propTypes = {
    navigation: PropTypes.object
  }


  handleMenuPress(e){
    this.props.navigation.navigate("Elements")
  }

  handleAdStorePress(e){
    console.log("Store DATA", e)
  }

	render(){
		return(
      <Container>
        <MainHeader onPress={(navigation) => this.handleMenuPress(navigation)} />
        <ScrollView>
          <StatusBar barStyle="light-content" />
    			<MyCarousel/>
          <Trends TrendsData={this.state.homeTrends.deal_types}/>
          <Ads  AdsData={this.state.homeOffers.deal_offers} onPress={(event)=>this.handleAdStorePress}/>
          <Brands BrandsData={this.state.homeBrands.deal_offers}/>
          <Promos PromosData={this.state.homePromos.offers}/>
        </ScrollView>
      </Container>
		)
	}
}
const mapStateToProps = (state) => {
  return{
    Dealdata: state.HomeApi.homeDealData,
    BrandsData: state.HomeApi.homeBrandData,
    DashBoardData: state.HomeApi.homeDashboardData,
    PromosData: state.HomeApi.data
  }
}
export default connect(mapStateToProps)(Home);