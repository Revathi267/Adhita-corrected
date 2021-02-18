import React, {Component} from 'react';
import {Text, View } from 'react-native';
import {Header} from 'react-native-elements'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const MyHeader = props=> {
    return(
        <SafeAreaProvider>
            <Header
                centerComponent = {{text:props.title, style: {color:'#90a5a9',fontSize: 20, fontWeight: 'bold'}}}
                backgroundColor = '#eaf8fe'
            />
        </SafeAreaProvider>
        
    )
}
export default MyHeader;
