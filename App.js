import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Fontisto';
import IconTwo from 'react-native-vector-icons/Octicons';
import IconThree from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFour from 'react-native-vector-icons/AntDesign';
import DatePicker from 'react-native-date-picker';
import ImagePicker from 'react-native-image-crop-picker';
import LinearGradient from 'react-native-linear-gradient';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      date: new Date(),
      imageCrop: '',
      imageShow: ''
    }
    this.imagePicker = this.imagePicker.bind(this)
  }
  imagePicker(){
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
      this.setState({imageCrop: image.path});
      this.setState({imageShow: true});
    });
  }
  render(){ 
    return (
      <ScrollView>
        <View style={{margin:50}}>
            <View>
              <Text style={{color:'grey', fontSize:24, margin:5}}>Email</Text>
              <Input leftIcon={
                <Icon
                  name='email'
                  size={24}
                  color='grey'
                />
              } placeholder='Email'/>
            </View>
            <View>
              <Text style={{color:'grey', fontSize:24, margin:5}}>Password</Text>
              <Input leftIcon={
                <IconTwo
                  name='lock'
                  size={24}
                  color='grey'
                />
              } placeholder='Password'/>
            </View>
            <View>
              <Text style={{color:'grey', fontSize:24, margin:5}}>First Name</Text>
              <Input leftIcon={
                <IconThree
                  name='format-letter-case-upper'
                  size={24}
                  color='grey'
                />
              } placeholder='FirstName'/>
            </View>
            <View>
              <Text style={{color:'grey', fontSize:24, margin:5}}>Surname</Text>
              <Input leftIcon={
                <IconThree
                  name='format-letter-case-lower'
                  size={24}
                  color='grey'
                />
              } placeholder='Surname'/>
            </View>
            <View>
              <Text style={{color:'grey', fontSize:24, margin:5}}>Date</Text>
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name='date'
                  size={30}
                  color='grey'
                  style={{margin:10}}
                />
                <DatePicker
                  mode='date'
                  style={{backgroundColor:'rgba(128,128,128,0.2)', height:50, width:250}}
                  date={this.state.date}
                  onDateChange={date => this.setState({ date })}
                />
              </View>
            </View>
            <View>
              <View>
                {this.state.imageShow ? (
                  <Image
                  style={{width:250, height:250, margin:25}}
                  source={{uri:this.state.imageCrop}}
                />
                ) : null}
              </View>
              <Button
                title="Pick image..."
                type="outline"
                titleStyle={{color:'grey'}}
                containerStyle={{marginTop:15}}
                onPress={this.imagePicker}
              />
            </View>
            <View>
              <Button
                containerStyle={{backgroundColor: 'grey', marginTop:15}}
                titleStyle={{color:'white'}}
                type="outline"
                icon={<IconFour
                  name='adduser'
                  size={24}
                  color='white'
                  style={{marginRight:15}}
                />}
                title="Register"
              />
            </View>
        </View>
      </ScrollView>
     );
  }
}