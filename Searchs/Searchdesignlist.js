import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Dimensions } from 'react-native'
import SearchDesign from "./SearchDesign"
var {width}=Dimensions.get('window');
const Searchdesignlist=(props)=>{
const {item}=props;
    return (
       
            <View style={{width:width/1.2}}>
            <SearchDesign {...item}/>
        </View>
    
    )
} 

const styles = StyleSheet.create({


})
export default Searchdesignlist;