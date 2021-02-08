import React, {Component} from 'react'
import {View, Text, TextInput, TouchableOpacity, Alert, StyleSheet} from 'react-native'
import db from '../Config';
import firebase from 'firebase'
import SantaAnimation from '../components/SantaClaus';

export default class WelcomeScreen extends Component{
    constructor() {
        super();
        this.state = {
            emailId: '',
            password: ''
        }
    }
    userSignUp = (emailId, password) => {
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
        .then((response)=> {
            return Alert.alert("User added successfully")
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage  = error.message;
            return Alert.alert(errorMessage);
        })
    }
    userLogin = (emailId, password) =>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
        .then(()=>{
            return Alert.alert("Login Successful");
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage  = error.message;
            return Alert.alert(errorMessage);
        })
    }
    render() {
        return(
            <View style = {styles.container}>
                <View style = {styles.profileContainer}>
                    <SantaAnimation/>
                    <Text style = {styles.title}>Book Santa</Text>
                </View>
                <View style = {styles.buttonContainer}>
                    <TextInput
                        style = {styles.loginBox}
                        placeholder = "abc@example.com"
                        keyboardType = 'email-address'
                        onChangeText = {(text)=> {
                            this.setState({
                                emailId : text
                            })
                        }}
                    />
                    <TextInput
                        style = {styles.loginBox}
                        placeholder = "Enter your password"
                        secureTextEntry = {true}
                        onChangeText = {(text)=> {
                            this.setState({
                                password : text
                            })
                        }}
                    />
                    <TouchableOpacity
                        style = {styles.button}
                        onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}>
                        <Text style = {styles.buttonText}>Login</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {styles.button}
                        onPress = {()=>{this.userSignUp(this.state.emailId, this.state.password)}}>
                        <Text style = {styles.buttonText}>Sign Up</Text> 
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#f8be85'
    },
    profileContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 65,
        fontWeight: '300',
        color: '#ff3d00'
    },
    loginBox:{
        width:300,
        height:40,
        borderBottomWidth:1.5,
        borderColor: '#ff8a65',
        fontSize:20,
        margin:10,
        paddingLeft:10,
    },
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor: '#ff9800',
        shadowColor:'#000',
        shadowOffset: {
            width:0,
            height:8
        },
        shadowOpacity:0.30,
        shadowRadius:10,
        elevation:16
    },
    buttonText:{
        color:'#fff',
        fontWeight:'200',
        fontSize:20,
    },
    buttonContainer:{
        flex:1,
        alignItems:'center',
    }
})
