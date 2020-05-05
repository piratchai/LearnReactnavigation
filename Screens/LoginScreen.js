import React, { Component } from 'react';
//import { View, Text, Button } from 'react-native';
import { View, StyleSheet, Alert, Image } from 'react-native';
import { Text, Button, Input } from 'galio-framework';
import UserService from '../Services/User.Service';
import Spinner from 'react-native-loading-spinner-overlay';

const userService = new UserService;
export default class LoginScreen extends Component {
  users = [];

  state= {
    username: '',
    password: '',
    spinner: false,
  }


  async componentDidMount(){
    console.disableYellowBox = true;
    this.setState({spinner: true})
    await this.getUser();
    this.setState({spinner: false})
  }

  async getUser(){
    await userService.getUser().then(value => this.users = value);
  }

  async login(){
    this.setState({spinner: true})
    await userService.getUser().then(value => this.users = value);


    var result = 'username : ' + this.state.username + ', password : ' + this.state.passwrod
    
    if(this.state.username == '' || this.state.passwrod == ''){
      this.setState({spinner: false})
      Alert.alert('แจ้งเตือน', "โปรดระบุให้ครบ");
      return;
    }

    if(this.checkPassLogin()){
      this.setState({spinner: false})
      this.props.navigation.navigate('Welcome');
    }else{
      this.setState({spinner: false})
      Alert.alert('แจ้งเตือน', "Username and password incorrect.");
      return;
    }

  }

  checkPassLogin(){
    var result = false;
    var username = this.state.username;
    var password = this.state.password;

    var found = this.users.find(element => {
      return element.username.toUpperCase() == username.toUpperCase() && element.password == password;
    })

    if(found != undefined){
      result = true;
    }

    return result;
  }

    render(){
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2C3E50' }}>
            <Spinner
              visible={this.state.spinner}
              textContent={'Loading...'}
              textStyle={{fontSize: 20}}
            />
            <Image 
              source={require('../assets/abiword-icon.png')}
              style={{marginBottom: 20}}
            />
            <Input 
              style={styleApp.textInputApp} 
              placeholder="ชื่อผู้ใช้" 
              onChangeText={(text)=>{
                this.setState({
                  username: text
                })
              }}
            />
            <Input 
              style={styleApp.textInputApp} 
              placeholder="รหัสผ่าน"
              onChangeText={(text)=>{
                this.setState({
                  password: text
                })
              }}
            />
            <Button 
              color="info"
              round 
              onPress={() => {
                this.login();
              }}
              style={{width: 120}}
            >เข้าสู่ระบบ</Button>
          </View>
        );
    }
}

const styleApp = StyleSheet.create({
  textInputApp: {
    width: 250,
    marginBottom: 20
  }
});