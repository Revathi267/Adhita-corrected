import React from 'react'
import {Image, View} from 'react-native'

export default class SantaAnimation extends React.Component{
    render() {
        return(
            <View>
                <Image
                    source = {require ("../assets/santa.png")} 
                    style = {{width: 150, height: 150}}
                />
            </View>
        )
    }
}