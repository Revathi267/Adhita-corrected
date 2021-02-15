import React, {Component} from 'react'
import {View, Text, TextInput, TouchableOpacity,StyleSheet} from 'react-native'
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';

export default class CustomSideBarMenu extends Component{
    render() {
        return(
            <View style = {{flex: 1,}}>
                <View style = {styles.drawerItemsContainer}>
                    <DrawerItems {...this.props} />
                </View>
                <View style = {styles.logoutcontainer}>
                    <TouchableOpacity style = {styles.logoutButton}
                        onPress =  {()=>{
                            firebase.auth().signOut()
                            this.props.navigation.navigate('WelcomeScreen')
                        }}>
                        <Text style = {styles.logoutText}>Log out</Text> 
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    drawerItemsContainer: {
        flex:0.8,
    },
    logoutcontainer: {
        flex: 0.2,
        justifyContent: 'flex-end',
        paddingBottom: 30
    },
    logoutButton:{
        height: 30,
        width: '60%',
        justifyContent: 'center',
        padding: 10,
    },
    logoutText :{
        fontSize: 25,
        fontWeight: 'bold',
    }
})
