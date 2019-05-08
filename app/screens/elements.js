import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { Button,Avatar,ThemeProvider,Tooltip, SearchBar, Badge, Text, Divider, Card, Icon, Header, Input,Rating, AirbnbRating } from 'react-native-elements';

class Elements extends Component{
	constructor (props) {
	  super(props)
	  this.state = {
	    selectedIndex: 2,
	    searchData: ""
	  }
	  this.updateIndex = this.updateIndex.bind(this)
	}

	handleHomePress(){
		this.props.navigation.navigate("Home")
	}

	updateIndex (selectedIndex) {
	  this.setState({selectedIndex})
	}
render(){
	const buttons = ['About', 'Education', 'Profile']
  const { selectedIndex } = this.state
	return(
		<View style={{flex:1, flexDirection: 'column'}}>
			<Header
			  leftComponent={{ icon: 'menu', color: '#fff' }}
			  centerComponent={{ text: 'Aqua User', style: { color: '#fff' } }}
			  rightComponent={{ icon: 'home', color: '#fff'}}
			/>
			 <SearchBar
        placeholder="Type Here..."
      />
			<ScrollView>
				<View style={{flex: 1, flexDirection: 'row'}}>
		      <Avatar
		      	rounded
		        size= "xlarge"
					  source={{
					    uri:
					      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
					  }}
					  showEditButton
					  containerStyle={{marginTop: 10, marginLeft: 20, marginRight: 20}}
					/>
					<View style={{alignItems: 'center', paddingHorizontal: 25, paddingVertical: 35}}>
						<Text h3> Lexy </Text>
						<Text h5> India </Text>
						<Button onPress={this.handleHomePress} status="error" title="Profile" containerStyle={{marginVertical: 10, width: 100}}/>
					</View>
				</View>
				<View style={{flexDirection: 'row', paddingHorizontal: 15}}>
					<Icon
					  reverse
					  name='logo-facebook'
					  type='ionicon'
					  color='#517fa4'
					  size= {25}
					  containerStyle={{flex: 2, marginLeft: 10}}
					/>
					<Icon
						reverse
					  name='logo-twitter'
					  type='ionicon'
					  color='#60e6fa'
					  size= {25}
					  containerStyle={{flex: 2, marginLeft: 10}}
					/>
					<Icon
						reverse
					  name='logo-whatsapp'
					  type='ionicon'
					  color='#259144'
					  size= {25}
					  containerStyle={{flex: 2, marginLeft: 10}}
					/>
					<Icon
						reverse
					  name='logo-instagram'
					  type='ionicon'
					  color='#872955'
					  size= {25}
					  containerStyle={{flex: 2, marginLeft: 10}}
					/>
				</View>
				<Card
				  title='HELLO WORLD'
				  image={{
				    uri:
				      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
				  }}>
				  <Text style={{marginBottom: 10}}>
				    The idea with React Native Elements is more about component structure than actual design.
				  </Text>
				  <Button
				    icon={<Icon name='code' color='#ffffff' />}
				    backgroundColor='#03A9F4'
				    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
				    title='VIEW NOW' />
				</Card>
				<View style={{marginVertical: 25}}>
					<Input
					  leftIcon={{ type: 'font-awesome', name: 'user' }}
				    placeholder="   Lexy"
					  errorStyle={{ color: 'red' }}
					  errorMessage= ''
					/>
					<Input
					  leftIcon={{ type: 'font-awesome', name: 'globe' }}
				    placeholder="   India"
					  errorStyle={{ color: 'red' }}
					  errorMessage= ''
					/>
					<Input
					  leftIcon={{ type: 'font-awesome', name: 'phone' }}
				    placeholder="   6677889955"
					  errorStyle={{ color: 'red' }}
					  errorMessage= ''
					/>
				</View>
				<Button
				  title="Update"
				  type="outline"
				  containerStyle={{flex: 2, marginHorizontal: 10, marginBottom: 10}}
				/>

				<Text h3> Rate Aqua Products </Text>

				<Rating
				  type='star'
				  ratingCount={5}
				  imageSize={60}
				  showRating
				  onFinishRating={this.ratingCompleted}
				/>

				<Tooltip popover={<Text>Info here</Text>}>
				  <Button title="Submit"  containerStyle={{flex: 2, marginVertical: 20, marginHorizontal: 15}}/>
				</Tooltip>
			</ScrollView>
		</View>
	)
 }
}
export default Elements;